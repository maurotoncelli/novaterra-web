// Adding a language: append it to `locales`, then fill every `Record<Locale, …>`
// (paths here, dictionaries in src/i18n). TypeScript fails the build until that
// language has its own paths and copy. Italian URLs stay unprefixed.

export const SITE_URL = "https://novaterra.work";

export const defaultLocale = "it" as const;
export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];

export const serviceIds = [
  "movimento-terra",
  "strade-piazzali",
  "demolizioni",
  "forestale",
  "idrogeologico",
  "bacini",
] as const;
export type ServiceId = (typeof serviceIds)[number];

export const serviceSlug: Record<ServiceId, Record<Locale, string>> = {
  "movimento-terra": { it: "movimento-terra", en: "earthworks" },
  "strade-piazzali": { it: "strade-piazzali", en: "roads-and-yards" },
  demolizioni: { it: "demolizioni", en: "demolition" },
  forestale: { it: "forestale", en: "forestry" },
  idrogeologico: { it: "idrogeologico", en: "hydrogeological" },
  bacini: { it: "bacini", en: "reservoirs" },
};

export type PageId =
  | "home"
  | "about"
  | "services"
  | "fleet"
  | "projects"
  | "news"
  | "contact"
  | "privacy";

export const pages: Record<PageId, Record<Locale, string>> = {
  home: { it: "/", en: "/en" },
  about: { it: "/chi-siamo", en: "/en/about" },
  services: { it: "/servizi", en: "/en/services" },
  fleet: { it: "/parco-mezzi", en: "/en/fleet" },
  projects: { it: "/realizzazioni", en: "/en/projects" },
  news: { it: "/blog", en: "/en/news" },
  contact: { it: "/contatti", en: "/en/contact" },
  privacy: { it: "/privacy-policy", en: "/en/privacy" },
};

const staticRest: Record<Locale, Record<string, PageId>> = {
  it: {
    "chi-siamo": "about",
    servizi: "services",
    "parco-mezzi": "fleet",
    realizzazioni: "projects",
    blog: "news",
    contatti: "contact",
    "privacy-policy": "privacy",
  },
  en: {
    about: "about",
    services: "services",
    fleet: "fleet",
    projects: "projects",
    news: "news",
    contact: "contact",
    privacy: "privacy",
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocale(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  if (first && isLocale(first) && first !== defaultLocale) return first;
  return defaultLocale;
}

export function pathFor(page: PageId, locale: Locale): string {
  return pages[page][locale];
}

export function servicePath(id: ServiceId, locale: Locale): string {
  const slug = serviceSlug[id][locale];
  return locale === defaultLocale ? `/servizi/${slug}` : `/${locale}/services/${slug}`;
}

export function serviceIdFromPublicSlug(slug: string, locale: Locale): ServiceId | undefined {
  return serviceIds.find((id) => serviceSlug[id][locale] === slug);
}

export function projectPath(slug: string, locale: Locale): string {
  return locale === defaultLocale ? `/realizzazioni/${slug}` : `/${locale}/projects/${slug}`;
}

export function articlePath(slug: string, locale: Locale): string {
  return locale === defaultLocale ? `/blog/${slug}` : `/${locale}/news/${slug}`;
}

export function entrySlug(pathname: string): string | undefined {
  const locale = getLocale(pathname);
  const parts = pathname.split("/").filter(Boolean);
  if (locale !== defaultLocale) parts.shift();
  return parts[1];
}

export function currentServiceId(pathname: string): ServiceId | undefined {
  const slug = entrySlug(pathname);
  if (!slug) return undefined;
  return serviceIdFromPublicSlug(slug, getLocale(pathname));
}

export function absoluteUrl(path: string): string {
  const normalized = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
  return new URL(normalized || "/", SITE_URL).href;
}

function restOf(pathname: string, locale: Locale): string[] {
  const parts = pathname.split("/").filter(Boolean);
  if (locale !== defaultLocale && parts[0] === locale) parts.shift();
  return parts;
}

export function translatePath(pathname: string, target: Locale): string {
  const source = getLocale(pathname);
  const rest = restOf(pathname, source);
  const [head, second] = rest;

  if (!head) return pathFor("home", target);

  if (!second && staticRest[source][head]) return pathFor(staticRest[source][head], target);

  if (second && (head === "servizi" || head === "services")) {
    const id = serviceIdFromPublicSlug(second, source);
    return id ? servicePath(id, target) : pathFor("services", target);
  }
  if (second && (head === "realizzazioni" || head === "projects")) return projectPath(second, target);
  if (second && (head === "blog" || head === "news")) return articlePath(second, target);

  return pathFor("home", target);
}

export function switchHref(url: URL, target: Locale): string {
  const path = translatePath(url.pathname, target);
  return url.search ? `${path}${url.search}` : path;
}

export type ResolvedRoute =
  | { kind: "home" }
  | { kind: "about" }
  | { kind: "services" }
  | { kind: "service"; id: ServiceId }
  | { kind: "fleet" }
  | { kind: "projects" }
  | { kind: "project"; slug: string }
  | { kind: "news" }
  | { kind: "article"; slug: string }
  | { kind: "contact" }
  | { kind: "privacy" };

export function resolveLocalePath(locale: Locale, slug: string | undefined): ResolvedRoute | undefined {
  if (locale === defaultLocale) return undefined;
  const rest = slug ? slug.split("/").filter(Boolean) : [];
  const [head, second, extra] = rest;
  if (extra) return undefined;
  if (!head) return { kind: "home" };

  const page = staticRest[locale][head];
  if (!second && page) return { kind: page };

  if (second && head === "services") {
    const id = serviceIdFromPublicSlug(second, locale);
    return id ? { kind: "service", id } : undefined;
  }
  if (second && head === "projects") return { kind: "project", slug: second };
  if (second && head === "news") return { kind: "article", slug: second };
  return undefined;
}
