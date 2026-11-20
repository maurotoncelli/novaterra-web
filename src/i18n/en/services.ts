import type { ServiceId } from "../config";

export type ServiceCopy = {
  hero: { main: string; accent: string; subtitle: string };
  intro: string;
  body: string;
  infoTitle: string;
  items: string[];
  galleryTitle: string;
  galleryAlts: string[];
  cta: string;
};

export const serviceListEn: { id: ServiceId; title: string }[] = [
  { id: "movimento-terra", title: "Earthworks / bulk excavation" },
  { id: "strade-piazzali", title: "Roads and yards" },
  { id: "demolizioni", title: "Demolition" },
  { id: "forestale", title: "Forestry / land / felling" },
  { id: "idrogeologico", title: "Hydrogeological works" },
  { id: "bacini", title: "Reservoirs" },
];

export const servicesPageEn = {
  meta: {
    title: "Services | Novaterra — Earthworks in Tuscany",
    description:
      "Novaterra’s services: earthworks, bulk excavation, roads, demolition, forestry and hydrogeological works in Tuscany.",
  },
  hero: {
    subtitle: "Overview",
    title: { main: "COMPLETE", accent: "SOLUTIONS" },
  },
  intro: { subtitle: "What we do", title: "Landscape engineering" },
};

export const serviceCopyEn: Record<ServiceId, ServiceCopy> = {
  "movimento-terra": {
    hero: { main: "EARTHWORKS", accent: "AND GRADING", subtitle: "Service 01" },
    intro: "Every solid building starts with an excavation done properly.",
    body: "We dig restricted-section trenches for foundations, bulk excavation to level yards, and service trenches. We work on the complex clay and rock typical of the Valdera, and we hold levels with laser equipment.",
    infoTitle: "Typical work",
    items: [
      "Restricted-section foundation digs",
      "Bulk excavation",
      "Levelling of farmland and building plots",
      "Trenches for utilities",
    ],
    galleryTitle: "Work gallery",
    galleryAlts: ["Foundation excavation", "Bulk excavation", "Yard levelling", "Service trench"],
    cta: "REQUEST A QUOTE",
  },
  "strade-piazzali": {
    hero: { main: "ROADS AND", accent: "YARDS", subtitle: "Service 02" },
    intro: "We build the connections that make a territory usable and productive.",
    body: "Full road construction: shaping the formation, laying aggregate, and asphalt. We specialise in rebuilding white farm roads, with the drainage that lets them last.",
    infoTitle: "Typical work",
    items: ["White roads and farm tracks", "Asphalt and paving", "Industrial yards and car parks", "Primary utilities"],
    galleryTitle: "Work gallery",
    galleryAlts: ["Farm road under construction", "Yard asphalt", "Finished white road", "Industrial car park"],
    cta: "REQUEST A QUOTE",
  },
  demolizioni: {
    hero: { main: "CONTROLLED", accent: "DEMOLITION", subtitle: "Service 03" },
    intro: "Take down in order to build again. Civil and industrial buildings, with surgical precision.",
    body: "The tool follows the site: selector grab, breaker, bucket or crusher, to keep dust and vibration down. What comes out of the building is sorted on site — steel, timber, plastic and inert material — so disposal and recycling stay correct.",
    infoTitle: "Technical scope",
    items: [
      "Mechanical demolition of buildings",
      "Strip-out (selective demolition)",
      "Crushing and steel separation",
      "Authorised disposal of materials",
    ],
    galleryTitle: "Work gallery",
    galleryAlts: ["Controlled demolition of a building", "Hydraulic grab at work", "Crushing material", "Demolition site"],
    cta: "REQUEST A QUOTE",
  },
  forestale: {
    hero: { main: "FORESTRY", accent: "AND LAND", subtitle: "Service 04" },
    intro: "Care of woodland and maintenance of agricultural land.",
    body: "Heavy forestry mulchers clear abandoned land, bramble and undergrowth. We carry out controlled felling of dangerous trees and routine care of large green areas. Essential work for fire prevention and for making farmland usable again.",
    infoTitle: "Typical work",
    items: [
      "Cutting woodland and abandoned land",
      "Mulching banks and ditches",
      "Felling tall trees",
      "Agricultural land care",
    ],
    galleryTitle: "Work gallery",
    galleryAlts: ["Woodland clearance", "Mulching the ground", "Land maintenance", "Controlled felling"],
    cta: "REQUEST A QUOTE",
  },
  idrogeologico: {
    hero: { main: "HYDROGEOLOGICAL", accent: "WORKS", subtitle: "Service 05" },
    intro: "Defending land from water. Work that keeps the territory safe.",
    body: "We build rock armour for bank protection and landslide containment. We reshape ditches and drainage channels so water can leave, and flooding and erosion are held back. Timber crib walls are part of the same work.",
    infoTitle: "Typical work",
    items: [
      "Retaining rock armour",
      "Surface-water control",
      "Clearing ditches and channels",
      "Timber crib walls",
      "Soil-bioengineering",
    ],
    galleryTitle: "Work gallery",
    galleryAlts: ["Retaining rock armour", "Water control", "Ditch clearance", "Hydrogeological work"],
    cta: "REQUEST A QUOTE",
  },
  bacini: {
    hero: { main: "RESERVOIRS", accent: "AND LAKES", subtitle: "Service 06" },
    intro: "Strategic water reserves, shaped into the land.",
    body: "We design and build artificial lakes for irrigation or as landscape water. Excavation, lining when the soil will not hold water, and intake works. Lining is what separates a reservoir from a simple earthworks job.",
    infoTitle: "Technical scope",
    items: ["Excavation and shaping of lakes", "Lining of the basin", "Intake works", "Tanks and supply networks"],
    galleryTitle: "Work gallery",
    galleryAlts: ["Finished artificial lake", "Reservoir", "Shaped slope", "Timber structure"],
    cta: "REQUEST A QUOTE",
  },
};
