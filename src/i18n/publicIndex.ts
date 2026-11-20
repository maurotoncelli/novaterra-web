import { contactInfo } from "../data/contactData";
import { getAllPosts } from "../lib/blogRepository";
import { getAllProjects } from "../lib/projectsRepository";
import { getServiceBySlug } from "../lib/servicesRepository";
import {
  type Locale,
  type PageId,
  absoluteUrl,
  articlePath,
  defaultLocale,
  locales,
  pages,
  projectPath,
  serviceIds,
  servicePath,
} from "./config";
import {
  aboutContent,
  blogIndex,
  chrome,
  contactContent,
  fleetContent,
  homeContent,
  localizePost,
  localizeProject,
  localizeService,
  privacyContent,
  projectsIndex,
  servicesIndex,
} from "./content";

export type IndexGroup = "pages" | "services" | "projects" | "news";

export type IndexEntry = {
  group: IndexGroup;
  paths: Record<Locale, string>;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

const pageIds: PageId[] = [
  "home",
  "about",
  "services",
  "fleet",
  "projects",
  "news",
  "contact",
  "privacy",
];

function pageCopy(id: PageId, locale: Locale): { title: string; description: string } {
  switch (id) {
    case "home":
      return homeContent(locale).meta;
    case "about":
      return aboutContent(locale).meta;
    case "services":
      return servicesIndex(locale).meta;
    case "fleet":
      return fleetContent(locale).meta;
    case "projects":
      return projectsIndex(locale).meta;
    case "news":
      return blogIndex(locale).meta;
    case "contact":
      return contactContent(locale).meta;
    case "privacy":
      return privacyContent(locale).meta;
  }
}

function line(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function copyFor(title: string, description: string) {
  return { title: line(title), description: line(description) };
}

export async function publicIndex(): Promise<IndexEntry[]> {
  const entries: IndexEntry[] = pageIds.map((id) => {
    const title = {} as Record<Locale, string>;
    const description = {} as Record<Locale, string>;
    for (const locale of locales) {
      const copy = pageCopy(id, locale);
      title[locale] = line(copy.title);
      description[locale] = line(copy.description);
    }
    return { group: "pages", paths: pages[id], title, description };
  });

  for (const id of serviceIds) {
    const source = getServiceBySlug(id);
    if (!source) continue;
    const title = {} as Record<Locale, string>;
    const description = {} as Record<Locale, string>;
    const paths = {} as Record<Locale, string>;
    for (const locale of locales) {
      const service = localizeService(source, locale);
      const listed = servicesIndex(locale).list.find((item) => item.id === id);
      paths[locale] = servicePath(id, locale);
      const copy = copyFor(
        listed?.title ?? `${service.hero.title.main} ${service.hero.title.accent}`,
        `${service.content.introParagraph} ${service.content.bodyParagraph}`,
      );
      title[locale] = copy.title;
      description[locale] = copy.description;
    }
    entries.push({ group: "services", paths, title, description });
  }

  for (const project of await getAllProjects()) {
    const title = {} as Record<Locale, string>;
    const description = {} as Record<Locale, string>;
    const paths = {} as Record<Locale, string>;
    for (const locale of locales) {
      const localized = localizeProject(project, locale);
      paths[locale] = projectPath(project.slug, locale);
      title[locale] = line(localized.title);
      description[locale] = line(localized.excerpt);
    }
    entries.push({ group: "projects", paths, title, description });
  }

  for (const post of await getAllPosts()) {
    const title = {} as Record<Locale, string>;
    const description = {} as Record<Locale, string>;
    const paths = {} as Record<Locale, string>;
    for (const locale of locales) {
      const localized = localizePost(post, locale);
      paths[locale] = articlePath(post.slug, locale);
      title[locale] = line(localized.title);
      description[locale] = line(localized.excerpt);
    }
    entries.push({ group: "news", paths, title, description });
  }

  return entries;
}

function xmlEscape(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function renderSitemap(): Promise<string> {
  const entries = await publicIndex();
  const urls = entries.flatMap((entry) =>
    locales.map((locale) => {
      const loc = absoluteUrl(entry.paths[locale]);
      const alternates = [
        ...locales.map(
          (code) =>
            `    <xhtml:link rel="alternate" hreflang="${code}" href="${xmlEscape(absoluteUrl(entry.paths[code]))}"/>`,
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${xmlEscape(absoluteUrl(entry.paths[defaultLocale]))}"/>`,
      ];
      return `  <url>\n    <loc>${xmlEscape(loc)}</loc>\n${alternates.join("\n")}\n  </url>`;
    }),
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
}

const groupLabel: Record<IndexGroup, "indexPages" | "indexServices" | "indexProjects" | "indexNews"> = {
  pages: "indexPages",
  services: "indexServices",
  projects: "indexProjects",
  news: "indexNews",
};

export async function renderLlmsTxt(): Promise<string> {
  const entries = await publicIndex();
  const company = contactInfo.company;
  const blocks = locales.map((locale) => {
    const ui = chrome(locale);
    const sections = (["pages", "services", "projects", "news"] as const).map((group) => {
      const items = entries
        .filter((entry) => entry.group === group)
        .map((entry) => `- [${entry.title[locale]}](${absoluteUrl(entry.paths[locale])}): ${entry.description[locale]}`);
      return `### ${ui[groupLabel[group]]}\n\n${items.join("\n")}`;
    });
    const heading = locale === defaultLocale ? "Italiano" : "English";
    return `## ${heading}\n\n${ui.indexNote}\n\n${sections.join("\n\n")}`;
  });

  return `# Novaterra

> ${line(homeContent(defaultLocale).meta.description)}

> ${line(homeContent("en").meta.description)}

${company.name} ${company.owner}
${contactInfo.address.street}, ${contactInfo.address.city}
${chrome(defaultLocale).vatLabel} ${company.vat} · REA ${company.rea}
${contactInfo.phone.display}
${contactInfo.email.display}

${line(chrome(defaultLocale).territoryDesc)}

${line(chrome("en").territoryDesc)}

${blocks.join("\n\n")}
`;
}
