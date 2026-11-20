import {
  type Locale,
  type PageId,
  type ServiceId,
  articlePath,
  pathFor,
  servicePath,
} from "./config";
import { uiEn, uiIt } from "./en/ui";
import { homeEn } from "./en/home";
import { aboutEn } from "./en/about";
import { serviceCopyEn, serviceListEn, servicesPageEn, type ServiceCopy } from "./en/services";
import { fleetEn } from "./en/fleet";
import { projectsEn, projectsPageEn, type ProjectCopy } from "./en/projects";
import { articlesEn, blogPageEn, type ArticleCopy } from "./en/articles";
import { contactEn, privacyEn } from "./en/pages";

import {
  heroData,
  introData,
  targets,
  methodSteps,
  expectations,
  assets,
  homeServices,
  testimonials,
  homeEmotionalStrips,
} from "../data/homeContent";
import { aboutHero, founderBio, videoSection, timeline, ctaSection } from "../data/aboutData";
import { servicesHero, servicesIntro, servicesList, type Service } from "../data/servicesData";
import type { ServiceDetailContent } from "../data/servicesDetailData";
import {
  fleetHero,
  fleetAccess,
  fleetIntro,
  fleetCategories,
  fleetMethod,
  fleetCTA,
  type FleetCategory,
} from "../data/fleetData";
import { projectCategories, projectsHero, type Project, type ProjectCategory } from "../data/projectsData";
import { blogCategories, blogHero, type BlogCategory, type BlogPost } from "../data/blogData";
import type { ArticleContent } from "../data/articlesData";
import { contactHero, contactInfo, formConfig } from "../data/contactData";
import { privacyHero, privacyMeta, privacySections } from "../data/privacyData";

const uiByLocale: Record<Locale, typeof uiIt> = { it: uiIt, en: uiEn };

// `null` means “use the Italian source”. A new language must add its own entry
// or the project does not type-check.
const dictionaries = {
  home: { it: null, en: homeEn },
  about: { it: null, en: aboutEn },
  servicesPage: { it: null, en: servicesPageEn },
  serviceDetail: { it: null, en: serviceCopyEn },
  serviceTitles: {
    it: null,
    en: Object.fromEntries(serviceListEn.map((item) => [item.id, item.title])) as Record<string, string>,
  },
  fleet: { it: null, en: fleetEn },
  projectsPage: { it: null, en: projectsPageEn },
  projects: { it: null, en: projectsEn },
  blogPage: { it: null, en: blogPageEn },
  articles: { it: null, en: articlesEn },
  contact: { it: null, en: contactEn },
  privacy: { it: null, en: privacyEn },
} satisfies { [key: string]: Record<Locale, unknown> };

export function chrome(locale: Locale) {
  return uiByLocale[locale];
}

export function navItems(locale: Locale) {
  return chrome(locale).nav.map((item) => ({
    label: item.label,
    href: pathFor(item.page, locale),
  }));
}

const homeMetaIt = {
  title: "Novaterra | Earth Engineering",
  description: "Ingegneria del territorio e scavi in Toscana.",
};

export function homeContent(locale: Locale) {
  const translated = dictionaries.home[locale];
  if (translated) {
    return {
      meta: translated.meta,
      hero: { ...heroData, ...translated.hero },
      strips: {
        process: { ...homeEmotionalStrips.process, alt: translated.strips.process },
        standards: { ...homeEmotionalStrips.standards, alt: translated.strips.standards },
        landscapeEngineering: {
          ...homeEmotionalStrips.landscapeEngineering,
          alt: translated.strips.landscapeEngineering,
        },
      },
      intro: {
        shortIntro: translated.intro.shortIntro,
        founder: { ...introData.founder, ...translated.intro.founder },
      },
      servicesHeader: translated.servicesHeader,
      services: translated.services,
      targetsHeader: translated.targetsHeader,
      targets: translated.targets,
      methodHeader: translated.methodHeader,
      methodSteps: translated.methodSteps,
      expectationsHeader: translated.expectationsHeader,
      expectations: translated.expectations,
      assetsHeader: translated.assetsHeader,
      assets: translated.assets,
      testimonialsHeader: translated.testimonialsHeader,
      clientsHeader: translated.clientsHeader,
      testimonials: translated.testimonials,
    };
  }

  return {
    meta: homeMetaIt,
    hero: heroData,
    strips: homeEmotionalStrips,
    intro: introData,
    servicesHeader: { subtitle: "Cosa Facciamo", title: "Ingegneria del Paesaggio" },
    services: homeServices,
    targetsHeader: {
      subtitle: "Target",
      title: "Lavoriamo con chi progetta,<br>decide e vive i luoghi.",
      lead: "Novaterra è pensata per tecnici, privati ed enti pubblici che cercano un’impresa organizzata.",
    },
    targets,
    methodHeader: {
      subtitle: "Il Processo",
      title: "Un metodo chiaro,<br>per lavori che funzionano.",
      lead: "Novaterra è un’impresa moderna, organizzata e affidabile. Seguiamo ogni progetto con una procedura precisa e trasparente.",
    },
    methodSteps,
    expectationsHeader: { subtitle: "Standard Operativo", title: "Cosa aspettarti da noi." },
    expectations,
    assetsHeader: { subtitle: "Asset", title: "Le Fondamenta." },
    assets,
    testimonialsHeader: { subtitle: "Feedback", title: "Dicono di Noi." },
    clientsHeader: { subtitle: "Fiducia", title: "Clienti & Partner" },
    testimonials,
  };
}

export function aboutContent(locale: Locale) {
  const translated = dictionaries.about[locale];
  if (translated) {
    return {
      meta: translated.meta,
      hero: { ...aboutHero, ...translated.hero, title: translated.hero.title },
      bio: {
        ...founderBio,
        role: translated.bio.role,
        image: { ...founderBio.image, alt: translated.bio.alt },
        bio: translated.bio.paragraphs,
      },
      video: { ...videoSection, ...translated.video },
      timeline: { ...timeline, ...translated.timeline, steps: translated.timeline.steps },
      cta: translated.cta,
    };
  }
  return {
    meta: {
      title: "Chi Siamo | Novaterra - Movimento Terra in Toscana",
      description:
        "La storia di Riccardo Toncelli e Novaterra: movimento terra con radici profonde e visione moderna. Dal 1993 a oggi.",
    },
    hero: aboutHero,
    bio: founderBio,
    video: videoSection,
    timeline,
    cta: ctaSection,
  };
}

export function servicesIndex(locale: Locale) {
  const titles = dictionaries.serviceTitles[locale];
  const list: Service[] = servicesList.map((service) => ({
    ...service,
    title: titles?.[service.id] ?? service.title,
    slug: servicePath(service.id as ServiceId, locale),
  }));
  const translated = dictionaries.servicesPage[locale];

  if (translated) {
    return {
      meta: translated.meta,
      hero: { ...servicesHero, ...translated.hero, title: translated.hero.title },
      intro: translated.intro,
      list,
    };
  }

  return {
    meta: {
      title: "Servizi | Novaterra - Movimento Terra in Toscana",
      description:
        "Scopri i servizi di Novaterra: movimento terra, sbancamenti, strade, demolizioni, forestale e sistemazioni idrogeologiche in Toscana.",
    },
    hero: servicesHero,
    intro: servicesIntro,
    list,
  };
}

export function localizeService(service: ServiceDetailContent, locale: Locale): ServiceDetailContent {
  const table = dictionaries.serviceDetail[locale];
  const copy: ServiceCopy | undefined = table?.[service.id as ServiceId];
  if (!copy) return service;
  return {
    ...service,
    hero: {
      ...service.hero,
      title: { main: copy.hero.main, accent: copy.hero.accent },
      subtitle: copy.hero.subtitle,
      backLink: pathFor("services", locale),
    },
    content: { introParagraph: copy.intro, bodyParagraph: copy.body },
    infoCard: { title: copy.infoTitle, items: copy.items },
    gallery: {
      ...service.gallery,
      title: copy.galleryTitle,
      images: service.gallery.images.map((image, index) => ({
        ...image,
        alt: copy.galleryAlts[index] ?? image.alt,
      })),
    },
    cta: service.cta ? { text: copy.cta, link: pathFor("contact", locale) } : service.cta,
  };
}

export function fleetContent(locale: Locale) {
  const translated = dictionaries.fleet[locale];
  if (!translated) {
    return {
      meta: {
        title: "Parco Mezzi | Novaterra - Movimento Terra in Toscana",
        description:
          "Escavatori, pale gommate, camion 2 assi con gru e attrezzature per ogni tipo di cantiere. Il nostro parco mezzi per movimento terra.",
      },
      hero: fleetHero,
      access: fleetAccess,
      intro: fleetIntro,
      categories: fleetCategories,
      method: fleetMethod,
      cta: fleetCTA,
    };
  }

  const categories: FleetCategory[] = fleetCategories.map((category) => {
    const item = translated.categories[category.id];
    if (!item) return category;
    return { ...category, title: item.title, spec: item.spec, uses: item.uses };
  });

  return {
    meta: translated.meta,
    hero: { ...fleetHero, ...translated.hero, title: translated.hero.title },
    access: translated.access,
    intro: translated.intro,
    categories,
    method: translated.method,
    cta: translated.cta,
  };
}

export function projectsIndex(locale: Locale) {
  const translated = dictionaries.projectsPage[locale];
  if (translated) {
    return {
      meta: translated.meta,
      hero: { ...projectsHero, ...translated.hero, title: translated.hero.title },
      categories: translated.categories as Record<ProjectCategory, string>,
    };
  }
  return {
    meta: {
      title: "Realizzazioni | Novaterra - Movimento Terra in Toscana",
      description:
        "I nostri progetti di movimento terra, sbancamenti, strade agricole e opere idrogeologiche. Case study dei lavori realizzati in Toscana.",
    },
    hero: projectsHero,
    categories: projectCategories,
  };
}

export function localizeProject(project: Project, locale: Locale): Project {
  const table = dictionaries.projects[locale];
  const copy: ProjectCopy | undefined = table?.[project.slug];
  if (!copy) return project;
  return {
    ...project,
    title: copy.title,
    excerpt: copy.excerpt,
    hero: {
      ...project.hero,
      title: copy.hero,
      subtitle: chrome(locale).caseStudy,
    },
    specs: {
      ...project.specs,
      client: copy.client ?? project.specs.client,
      service: copy.service,
    },
    challenge: { title: copy.challengeTitle, description: copy.challenge },
    solution: { description: copy.solution },
    topographic: project.topographic
      ? { ...project.topographic, title: copy.topoTitle }
      : project.topographic,
    video: { ...project.video, title: copy.videoTitle },
    gallery: project.gallery.map((image, index) => ({
      ...image,
      alt: copy.galleryAlts?.[index] ?? image.alt,
    })),
  };
}

export function blogIndex(locale: Locale) {
  const translated = dictionaries.blogPage[locale];
  if (translated) {
    return {
      meta: translated.meta,
      hero: { ...blogHero, ...translated.hero, title: translated.hero.title },
      categories: translated.categories as Record<BlogCategory, string>,
    };
  }
  return {
    meta: {
      title: "Notizie & Insight | Novaterra - Movimento Terra in Toscana",
      description:
        "Aggiornamenti, guide tecniche e novità dal mondo del movimento terra. Incentivi, case study e curiosità dal settore.",
    },
    hero: blogHero,
    categories: blogCategories,
  };
}

const months: Record<Locale, string[]> = {
  it: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

export function formatLocalizedDate(isoDate: string, locale: Locale): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return `${months[locale][date.getMonth()]} ${date.getFullYear()}`;
}

export function localizePost(post: BlogPost, locale: Locale): BlogPost {
  const copy: ArticleCopy | undefined = dictionaries.articles[locale]?.[post.slug];
  if (!copy) return post;
  return { ...post, title: copy.title, excerpt: copy.excerpt };
}

export function localizeArticle(article: ArticleContent, locale: Locale): ArticleContent {
  const copy: ArticleCopy | undefined = dictionaries.articles[locale]?.[article.slug];
  if (!copy) return article;
  return {
    ...article,
    hero: {
      ...article.hero,
      title: { main: copy.hero.main, accent: copy.hero.accent },
      subtitle: copy.hero.subtitle,
      backLink: pathFor("news", locale),
    },
    content: {
      paragraphs: copy.paragraphs,
      sections: article.content.sections?.map((section, index) => {
        const translated = copy.sections[index];
        if (!translated) return section;
        return {
          ...section,
          title: translated.title,
          content: translated.content,
          image: section.image
            ? { ...section.image, alt: translated.alt ?? section.image.alt }
            : section.image,
        };
      }),
    },
  };
}

export function contactContent(locale: Locale) {
  const translated = dictionaries.contact[locale];
  if (translated) {
    return {
      meta: translated.meta,
      hero: { ...contactHero, ...translated.hero, title: translated.hero.title },
      info: { ...contactInfo, map: { ...contactInfo.map, title: translated.mapTitle } },
      page: translated,
      form: { fields: translated.fields, submitButton: { text: translated.submit } },
      returnTo: pathFor("contact", locale),
    };
  }
  return {
    meta: {
      title: "Contatti | Novaterra - Earth Engineering",
      description: "Contatta NOVATERRA per preventivi e consulenze. Riccardo Toncelli, movimento terra in Toscana.",
    },
    hero: contactHero,
    info: contactInfo,
    page: {
      infoKicker: "Informazioni",
      infoTitle: "Ci sentiamo. E poi si parte.",
      formKicker: "Richiesta",
      formTitle: "Raccontaci il progetto.",
      formLead: "Compila il modulo: ti rispondiamo rapidamente con una proposta chiara e operativa.",
    },
    form: formConfig,
    returnTo: pathFor("contact", locale),
  };
}

export function privacyContent(locale: Locale) {
  const translated = dictionaries.privacy[locale];
  if (translated) {
    return {
      meta: translated.meta,
      hero: { ...privacyHero, ...translated.hero, title: translated.hero.title },
      sections: translated.sections,
    };
  }
  return { meta: privacyMeta, hero: privacyHero, sections: privacySections };
}

export function articleHref(slug: string, locale: Locale): string {
  return articlePath(slug, locale);
}

export type { PageId };
