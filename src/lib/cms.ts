import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import type { ArticleContent } from "../data/articlesData";
import type { BlogCategory, BlogPost } from "../data/blogData";
import { blogHero } from "../data/blogData";
import {
  projectsHero,
  type Project,
  type ProjectCategory,
  type ServiceSlug,
} from "../data/projectsData";

const reader = createReader(process.cwd(), keystaticConfig);

const SERVICE_SLUGS = new Set<ServiceSlug>([
  "movimento-terra",
  "strade-piazzali",
  "demolizioni",
  "forestale",
  "idrogeologico",
  "bacini",
]);

const PROJECT_CATEGORIES = new Set<ProjectCategory>([
  "movimento-terra",
  "strade-piazzali",
  "demolizioni",
  "forestale",
  "idrogeologico",
  "bacini",
  "altro",
]);

const BLOG_CATEGORIES = new Set<BlogCategory>([
  "incentivi",
  "case-study",
  "eventi",
  "curiosita",
]);

export type PageHero = {
  subtitle: string;
  title: { main: string; accent: string };
  image: string;
};

export type CmsArticle = {
  post: BlogPost;
  article: ArticleContent;
};

function asString(value: unknown, fallback = ""): string {
  if (typeof value === "string") return value;
  if (typeof value === "number" && Number.isFinite(value)) return String(value);
  if (value && typeof value === "object" && "name" in value) {
    const name = (value as { name?: unknown }).name;
    if (typeof name === "string") return name;
  }
  return fallback;
}

function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((item) => asString(item)).filter(Boolean);
}

function resolveMedia(upload: unknown, path?: string | null): string {
  if (typeof upload === "string" && upload.trim()) {
    return upload.startsWith("http") || upload.startsWith("/")
      ? upload
      : `/${upload.replace(/^\/+/, "")}`;
  }
  return (path ?? "").trim();
}

function asProjectCategory(value: unknown): ProjectCategory {
  const category = asString(value);
  return PROJECT_CATEGORIES.has(category as ProjectCategory)
    ? (category as ProjectCategory)
    : "movimento-terra";
}

function asServiceSlugs(value: unknown): ServiceSlug[] {
  const list = asStringList(value).filter((item): item is ServiceSlug =>
    SERVICE_SLUGS.has(item as ServiceSlug)
  );
  return list.length ? list : ["movimento-terra"];
}

function asVideoType(value: unknown): Project["video"]["type"] {
  const type = asString(value);
  if (type === "youtube" || type === "vimeo" || type === "mp4") return type;
  return "mp4";
}

function asBlogCategory(value: unknown): BlogCategory {
  const category = asString(value);
  return BLOG_CATEGORIES.has(category as BlogCategory)
    ? (category as BlogCategory)
    : "curiosita";
}

function mapProject(slug: string, entry: Record<string, unknown>): Project {
  const cover = resolveMedia(entry.coverUpload, asString(entry.cover));
  const topoImage = resolveMedia(entry.topoImageUpload, asString(entry.topoImage)) || cover;
  const year = asString(entry.year);
  const location = asString(entry.location);
  const serviceLabel = asString(entry.serviceLabel);
  const gallery = Array.isArray(entry.gallery)
    ? entry.gallery
        .map((item) => {
          if (!item || typeof item !== "object") return null;
          const photo = item as Record<string, unknown>;
          const src = resolveMedia(photo.upload, asString(photo.src));
          if (!src) return null;
          return {
            src,
            alt: asString(photo.alt),
            aspect: asString(photo.aspect) === "portrait" ? ("portrait" as const) : ("landscape" as const),
          };
        })
        .filter((item): item is NonNullable<typeof item> => Boolean(item))
    : [];

  return {
    id: asString(entry.id) || slug,
    slug,
    title: asString(entry.title),
    excerpt: asString(entry.excerpt),
    thumbnail: cover,
    year,
    publishedAt: asString(entry.publishedAt),
    category: asProjectCategory(entry.category),
    services: asServiceSlugs(entry.services),
    hero: {
      title: {
        main: asString(entry.heroMain),
        accent: asString(entry.heroAccent),
      },
      subtitle: asString(entry.heroSubtitle) || "Case Study",
      image: cover,
    },
    specs: {
      client: asString(entry.client),
      location,
      year,
      service: serviceLabel,
    },
    challenge: {
      title: asString(entry.challengeTitle) || "La Sfida",
      description: asString(entry.challenge),
    },
    solution: {
      description: asString(entry.solution),
    },
    topographic: {
      title: asString(entry.topoTitle) || "Rilievo Topografico",
      image: topoImage,
      dataReadout:
        asString(entry.topoReadout) ||
        `LOC: ${location.toUpperCase()} // YEAR: ${year} // SERVICE: ${serviceLabel.toUpperCase()}`,
    },
    gallery,
    video: {
      type: asVideoType(entry.videoType),
      url: asString(entry.videoUrl),
      thumbnail: asString(entry.videoPoster) || undefined,
      title: asString(entry.videoTitle) || undefined,
    },
  };
}

function mapArticle(slug: string, entry: Record<string, unknown>): CmsArticle {
  const title = asString(entry.title);
  const excerpt = asString(entry.excerpt);
  const date = asString(entry.date);
  const category = asBlogCategory(entry.category);
  const cover = resolveMedia(entry.coverUpload, asString(entry.cover));
  const readTime =
    typeof entry.readTime === "number" && Number.isFinite(entry.readTime)
      ? entry.readTime
      : 5;
  const intro = asStringList(entry.intro);
  const sections = Array.isArray(entry.sections)
    ? entry.sections
        .map((item) => {
          if (!item || typeof item !== "object") return null;
          const section = item as Record<string, unknown>;
          const titleText = asString(section.title);
          if (!titleText) return null;
          const body = asStringList(section.body);
          const imageSrc = asString(section.imageSrc);
          return {
            title: titleText,
            content: body.length === 1 ? body[0] : body,
            image: imageSrc
              ? { src: imageSrc, alt: asString(section.imageAlt) }
              : undefined,
          };
        })
        .filter((item): item is NonNullable<typeof item> => Boolean(item))
    : [];

  return {
    post: {
      id: slug,
      slug,
      title,
      excerpt,
      date,
      category,
      thumbnail: cover,
      readTime,
    },
    article: {
      slug,
      hero: {
        title: {
          main: asString(entry.heroMain),
          accent: asString(entry.heroAccent),
        },
        subtitle: asString(entry.heroSubtitle) || "Insight",
        image: cover,
        backLink: "/blog",
      },
      meta: { date, category, readTime },
      content: {
        paragraphs: intro,
        sections,
      },
    },
  };
}

export async function loadProjectsFromCms(): Promise<Project[]> {
  try {
    const entries = await reader.collections.realizzazioni.all();
    return entries
      .map((item) => mapProject(item.slug, item.entry as Record<string, unknown>))
      .filter((project) => project.slug && project.title);
  } catch (error) {
    console.warn("[cms] impossibile leggere le realizzazioni da Keystatic:", error);
    return [];
  }
}

export async function loadArticlesFromCms(): Promise<CmsArticle[]> {
  try {
    const entries = await reader.collections.articoli.all();
    return entries
      .map((item) => mapArticle(item.slug, item.entry as Record<string, unknown>))
      .filter((item) => item.post.slug && item.post.title);
  } catch (error) {
    console.warn("[cms] impossibile leggere gli articoli da Keystatic:", error);
    return [];
  }
}

export async function loadRealizzazioniHero(): Promise<PageHero> {
  try {
    const entry = await reader.singletons.realizzazioniHero.read();
    if (!entry) return projectsHero;
    const data = entry as Record<string, unknown>;
    const image = resolveMedia(data.imageUpload, asString(data.image));
    return {
      subtitle: asString(data.subtitle) || projectsHero.subtitle,
      title: {
        main: asString(data.titleMain) || projectsHero.title.main,
        accent: asString(data.titleAccent) || projectsHero.title.accent,
      },
      image: image || projectsHero.image,
    };
  } catch {
    return projectsHero;
  }
}

export async function loadBlogHero(): Promise<PageHero> {
  try {
    const entry = await reader.singletons.blogHero.read();
    if (!entry) return blogHero;
    const data = entry as Record<string, unknown>;
    const image = resolveMedia(data.imageUpload, asString(data.image));
    return {
      subtitle: asString(data.subtitle) || blogHero.subtitle,
      title: {
        main: asString(data.titleMain) || blogHero.title.main,
        accent: asString(data.titleAccent) || blogHero.title.accent,
      },
      image: image || blogHero.image,
    };
  } catch {
    return blogHero;
  }
}
