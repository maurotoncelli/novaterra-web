export const blogPageEn = {
  meta: {
    title: "News & Insight | Novaterra — Earthworks in Tuscany",
    description:
      "Updates, technical notes and news from earthworks. Incentives, case studies and field notes.",
  },
  hero: {
    subtitle: "Updates",
    title: { main: "NEWS &", accent: "INSIGHT" },
  },
  categories: {
    tutti: "All",
    incentivi: "Incentives",
    "case-study": "Case study",
    eventi: "Events",
    curiosita: "Field notes",
  },
  readSuffix: "min",
};

export type ArticleCopy = {
  title: string;
  excerpt: string;
  hero: { main: string; accent: string; subtitle: string };
  paragraphs: string[];
  sections: { title: string; content: string | string[]; alt?: string }[];
};

export const articlesEn: Record<string, ArticleCopy> = {
  "ristrutturazioni-2025-detrazioni-movimento-terra": {
    title: "Renovations 2025: tax relief for earthworks.",
    excerpt:
      "With the latest tax changes, many clients ask whether incentives still cover excavation and external works. Here is what still applies.",
    hero: { main: "RENOVATIONS", accent: "2025", subtitle: "Rules" },
    paragraphs: [
      "Recent changes to the budget law have shifted building tax relief. If you are about to start excavation, external works or earthworks ahead of a renovation, it matters to know what is still deductible.",
    ],
    sections: [
      {
        title: "Building relief and the home bonus",
        content:
          "The classic 50% renovation bonus has been confirmed, with revised ceilings. It often also covers landscaping and ancillary works when they sit inside a wider permit (CILA/SCIA). Excavation for an extension’s foundations, or the renewal of drains and utilities, falls squarely in that case.",
      },
      {
        title: "Sismabonus and structural work",
        content: [
          "If the earthworks are part of seismic improvement — for example stabilising a slipping slope next to the house, micropiles, rock armour — the rates can be more favourable. Novaterra works with structural engineers to supply the documents that certify the intervention.",
          "The shock rates of the 110% scheme have gone, but there is still a real way to recover part of the investment in earthworks, provided the project is clear and the invoices are traceable.",
        ],
        alt: "Renovation site",
      },
    ],
  },
  "incentivi-imprese-2025-macchinari": {
    title: "Business incentives 2025: machines and tax credit.",
    excerpt:
      "A guide to support for buying capital equipment in earthworks. Special economic zones, Industry 4.0 and what is still open.",
    hero: { main: "INCENTIVES", accent: "BUSINESS 2025", subtitle: "Business" },
    paragraphs: [
      "Earthworks asks for constant investment in technology and machines. For 2025, the Transition 5.0 plan and what remains of Industry 4.0 still offer useful levers for anyone renewing a fleet.",
    ],
    sections: [
      {
        title: "Tax credit on capital goods",
        content: [
          "Excavators, loaders and operating machines fitted with connected systems (GPS, telemetry, remote control) can still access tax credits that cut the purchase cost. Novaterra invested in a connected fleet using those levers, so the client gets more precision and speed.",
          "Watch regional calls and the incentives for Special Economic Zones where they apply: they can stack benefits for micro and small firms in construction and agriculture.",
        ],
        alt: "Modern machine",
      },
    ],
  },
  "sopralluogo-tecnico-investimento-migliore": {
    title: "The technical visit: the best investment you can make.",
    excerpt:
      "Avoiding wrong levels and slips starts before the engines are on. Why the first survey and the bill of quantities matter.",
    hero: { main: "TECHNICAL", accent: "VISIT", subtitle: "Method" },
    paragraphs: [
      "People often ask “what does a cubic metre of excavation cost?” without anyone having seen the site. That is the first mistake. The technical visit is not a formality. It is Novaterra’s operating base.",
    ],
    sections: [
      {
        title: "What we read",
        content: [
          "<strong>Access:</strong> will a large truck fit, or do we need a small machine?",
          "<strong>Surface geology:</strong> topsoil, stiff clay, or rock?",
          "<strong>Levels and falls:</strong> we use laser levels from the first meeting, so the real cut and fill volumes are known.",
          "A careful visit lets us give a locked lump-sum price, and avoids the unpleasant extras at the end. It protects the client and it protects us.",
        ],
        alt: "Technician on site",
      },
    ],
  },
  "vigneti-collina-preparare-terreno-toscana": {
    title: "Hillside vineyards: preparing the ground in Tuscany.",
    excerpt:
      "Grading, terraces and drainage for quality vineyards. How we work in Terricciola and the Valdera while respecting the landscape.",
    hero: { main: "HILLSIDE", accent: "VINEYARDS", subtitle: "Agriculture" },
    paragraphs: [
      "The Valdera and the hills around Pisa are wine country. Preparing ground for a new vineyard asks for a different sensitivity from a building dig.",
    ],
    sections: [
      {
        title: "Deep cultivation and drainage",
        content: [
          "Deep cultivation (down to 80–100 cm) breaks the plough pan and lets air into the soil. Even more important is the water: falls and interceptor ditches so a storm does not wash the fertile soil away, and the young vines are protected.",
          "Novaterra works with respect for the landscape, building terraces that follow the hill and are ready for a serious vineyard.",
        ],
        alt: "Tuscan vineyard",
      },
    ],
  },
  "sistemazioni-idrauliche-norme-post-alluvione": {
    title: "Hydraulic works and the rules after the floods.",
    excerpt:
      "Strengthening banks and clearing watercourses has become a priority. Sound practice for the hydrogeological safety of the territory.",
    hero: { main: "HYDRAULIC", accent: "RULES", subtitle: "Safety" },
    paragraphs: [
      "Extreme weather asks for a new attention to ditches, channels and banks. Maintenance is no longer optional. It is a legal and a practical duty.",
    ],
    sections: [
      {
        title: "What comes first",
        content: [
          "Clearing the channel of invasive vegetation and reshaping the banks are the first steps. Where erosion has gone further, we use cyclopean rock armour or gabions: techniques that stabilise the bank and still let it drain.",
          "We often work with land-reclamation consortia and with private owners beside a watercourse, with fast interventions that follow the environmental rules in force.",
        ],
        alt: "River bank",
      },
    ],
  },
  "edilizia-2025-impatto-bonus-cantieri": {
    title: "Construction 2025: how the bonuses changed the sites.",
    excerpt:
      "How changes to Superbonus and Sismabonus affect excavation and foundations. A technical view for contractors and private clients.",
    hero: { main: "BUILDING", accent: "AND DIGS", subtitle: "Market" },
    paragraphs: [
      "2025 is a return to normal after the Superbonus rush. That means fewer, more selected sites, clients watching the budget, and a higher demand for quality.",
    ],
    sections: [
      {
        title: "What it means for earthworks",
        content: [
          "Fewer rushed thermal coats, more structural renovation and targeted new build (demolish and rebuild). In that picture, excavation and foundations are central again. A mistake at this stage is expensive.",
          "Novaterra works as a technical partner for building firms that need a reliable subcontractor for the “dirty” part of the site, with cleanliness and millimetre precision.",
        ],
        alt: "Building site",
      },
    ],
  },
};
