export const projectsPageEn = {
  meta: {
    title: "Projects | Novaterra — Earthworks in Tuscany",
    description:
      "Our earthworks, grading, farm roads and hydrogeological projects. Case studies of work carried out in Tuscany.",
  },
  hero: {
    subtitle: "Case studies",
    title: { main: "PROJECTS", accent: "IN THE FIELD" },
  },
  categories: {
    tutti: "All projects",
    "movimento-terra": "Earthworks and grading",
    "strade-piazzali": "Roads and yards",
    demolizioni: "Demolition",
    forestale: "Forestry",
    idrogeologico: "Hydrogeological works",
    bacini: "Reservoirs and lakes",
    altro: "Other projects",
  },
};

export type ProjectCopy = {
  title: string;
  excerpt: string;
  hero: { main: string; accent: string };
  service: string;
  challengeTitle: string;
  challenge: string;
  solution: string;
  topoTitle: string;
  videoTitle: string;
  galleryAlts?: string[];
  client?: string;
};

export const projectsEn: Record<string, ProjectCopy> = {
  "pulizia-oliveta-santo-pietro": {
    title: "Olive grove clearance at Santo Pietro",
    excerpt:
      "Clearing an olive grove at Santo Pietro: mulching bramble and tall grass between the rows, with a Eurocomach 20TL compact track loader and a tractor with flail. The material stays in the field and the grove is walkable again.",
    hero: { main: "OLIVE GROVE", accent: "CLEARANCE" },
    client: "Podere Tegolaia farm",
    service: "Forestry",
    challengeTitle: "The challenge",
    challenge:
      "An olive grove with tall grass, bramble and suckers between the rows. The passages are narrow, the canopies low and the ground uneven: the under-row has to be opened without scarring the trunks or cutting tracks into the soil.",
    solution:
      "We went in with a Eurocomach 20TL compact track loader and a forestry mulcher, to shred the vegetation where a tractor cannot turn. In the more open rows a Goldoni tractor with flail did the work. At the end the grove is walkable again, and the material was left in place.",
    topoTitle: "Site survey",
    videoTitle: "Site video — Olive grove clearance at Santo Pietro",
    galleryAlts: [
      "Mulching the under-row between the olives at Santo Pietro",
      "Eurocomach 20TL with forestry mulcher on the vegetation",
      "Compact track loader between the olive canopies",
      "Access to the field along the cypress avenue",
      "Forestry mulcher rotor on the shredded material",
      "Tractor entering the row to be cleared",
      "Cab protected by a grille during mulching",
      "Hydraulic couplings of the flail",
    ],
  },
  "demolizione-soianella": {
    title: "Openings in the vats at Soianella",
    excerpt:
      "Openings in reinforced-concrete vats in a cellar at Soianella, Terricciola. Cut with a disc and breaker, reinforcement severed on the perimeter, clean openings without compromising the vault or the neighbouring vats.",
    hero: { main: "SOIANELLA", accent: "OPENINGS" },
    client: "Podere Tegolaia farm",
    service: "Demolition",
    challengeTitle: "The challenge",
    challenge:
      "Cut regular openings in reinforced-concrete walls, inside a vaulted cellar. Tight space, dust, reinforcement to sever, and neighbouring vats that must not be cracked.",
    solution:
      "We marked the opening on the vat wall, cut the perimeter with a disc saw and broke out the core with a hammer. The reinforcement is cut on the edge of the opening. The work is done at height, from scaffolding, with dust protection. At the end the openings are clean and the corridor between the vats stays usable.",
    topoTitle: "Site survey",
    videoTitle: "Site video — Openings in the vats at Soianella",
    galleryAlts: [
      "Finished openings in the reinforced-concrete vats",
      "Vaulted cellar with the vats and demolition material",
      "Marking the opening on the vat wall",
      "Opening outline marked on the concrete",
      "Cutting the reinforced concrete with a disc saw",
      "Controlled demolition with a breaker",
      "Exposed reinforcement on the edge of the opening",
      "Opening in progress, reinforcement still to cut",
    ],
  },
  "palizzata-peccioli": {
    title: "Timber crib wall at Peccioli",
    excerpt: "Page in preparation. A timber crib wall at Peccioli: site photos and video will be added shortly.",
    hero: { main: "CRIB WALL", accent: "PECCIOLI" },
    client: "To be confirmed",
    service: "Hydrogeological works",
    challengeTitle: "The challenge",
    challenge: "Copy waiting for the details of the job. Photos and video of the crib wall at Peccioli will be added to this page.",
    solution: "Copy waiting for the details of the job.",
    topoTitle: "Site survey",
    videoTitle: "Site video — Timber crib wall at Peccioli",
  },
  "riempimento-legoli": {
    title: "Fill at Legoli",
    excerpt: "Page in preparation. A fill at Legoli: site photos and video will be added shortly.",
    hero: { main: "FILL", accent: "LEGOLI" },
    client: "To be confirmed",
    service: "Earthworks",
    challengeTitle: "The challenge",
    challenge: "Copy waiting for the details of the job. Photos and video of the fill at Legoli will be added to this page.",
    solution: "Copy waiting for the details of the job.",
    topoTitle: "Site survey",
    videoTitle: "Site video — Fill at Legoli",
  },
  "bacino-idrico-ghizzano": {
    title: "Reservoir at Ghizzano",
    excerpt:
      "Excavation and shaping of a hillside basin at Ghizzano, with earthworks and the networks. A CASE CX210E for the basin, a Yanmar to finish the banks, pipes and tanks serving the property.",
    hero: { main: "RESERVOIR", accent: "GHIZZANO" },
    client: "Private client",
    service: "Reservoirs and excavation",
    challengeTitle: "The challenge",
    challenge:
      "Build a hillside reservoir together with the service digs — pipes, tanks, earthmoving — on a farm and residential site, without compromising access and buildings, and with slopes and water under control.",
    solution:
      "We dug the circular basin with a CASE CX210E, then shaped and finished the banks with a Yanmar. In parallel: trenches for the PVC network and placement of the buried tanks. Spoil was kept on site for tracks and regrading.",
    topoTitle: "Site survey",
    videoTitle: "Site video — Reservoir at Ghizzano",
    galleryAlts: [
      "Site at Ghizzano: house, digs and buried tanks",
      "Overhead view of the property with digs and tanks",
      "Aerial view of the finished reservoirs serving the property",
      "Hillside reservoir in the Ghizzano landscape",
      "Flooded basin seen from above",
      "Excavation of the circular basin with a CASE excavator",
      "Shaping the basin with the property in the background",
      "Survey on the bank during excavation",
      "Placing the tanks in the trench, aerial view",
      "CASE excavator placing the tanks",
      "Tanks in a line, seen from above",
      "Buried tanks in the laying trench",
      "PVC network and inspection chamber",
      "CASE CX130D digging on the basin face",
      "Bank profile during shaping",
    ],
  },
  "bonifica-vigna-santo-pietro": {
    title: "Vineyard clearance at Santo Pietro",
    excerpt:
      "Taking out a hillside vineyard: pulling the rows, removing posts and vegetation, loading and clearing the material. A Yanmar excavator with an NPK grab, and a tractor with trailer for haulage.",
    hero: { main: "VINEYARD", accent: "CLEARANCE" },
    client: "Podere Tegolaia farm",
    service: "Vineyard clearance",
    challengeTitle: "The challenge",
    challenge:
      "Remove a disused vineyard beside rows still in production, on sloping ground with tall grass and tight access, without damaging the neighbouring vineyards and without cutting invasive tracks.",
    solution:
      "We worked row by row with a tracked Yanmar excavator fitted with an NPK hydraulic grab: vines and posts are gripped, pulled and loaded onto the farm trailer. Staying on the vineyard tracks, the machine limits compaction and leaves the field clear for the next use of the soil.",
    topoTitle: "Site survey",
    videoTitle: "Site video — Vineyard clearance at Santo Pietro",
    galleryAlts: [
      "Overhead view of the vineyard clearance at Santo Pietro",
      "Clearance site in the hillside landscape",
      "A row being removed between neighbouring vineyards",
      "Yanmar between the rows, overhead framing",
      "NPK hydraulic grab approaching the posts",
      "Yanmar excavator with NPK grab in the field",
      "Pulling a concrete post with the grab",
      "Detail of the NPK grab on the planting",
      "Loading plant material onto the farm trailer",
      "Tractor and trailer beside the excavator",
      "Yanmar and tractor loading, overhead view",
    ],
  },
  marti: {
    title: "Marti",
    excerpt:
      "At Marti, for Nicolas: two landslides put back, banks rebuilt, and the stepped road tilted inward, with grilles that take the water downhill in a pipe.",
    hero: { main: "MARTI", accent: "BANKS" },
    service: "Hydrogeological works",
    challengeTitle: "The challenge",
    challenge:
      "Two slips in the banks, and water coming off the slope that made them slip again. The stepped roads were already there: the fall had to be corrected and the water collected.",
    solution:
      "We rebuilt and shaped the slipped banks. Each bank head, which works as a road, was tilted inward. Along the route we set grilles that collect the water, pipe it, and take it downhill instead of letting it run on the slope.",
    topoTitle: "Site survey",
    videoTitle: "Site video — Marti",
    galleryAlts: [
      "Aerial view of the site at Marti",
      "Aerial view of the site at Marti",
      "Excavators at work in the dig",
      "Excavator on the site track",
    ],
  },
  "santo-pietro": {
    title: "Santo Pietro",
    excerpt:
      "Forestry clearance at Santo Pietro for Podere Tegolaia farm: land and banks cleared with a CASE excavator and a forestry mulcher.",
    hero: { main: "SANTO", accent: "PIETRO" },
    client: "Podere Tegolaia farm",
    service: "Forestry",
    challengeTitle: "The challenge",
    challenge:
      "A stretch of land and the banks to clear, with dense vegetation to take down. It is forestry recovery, not a bulk excavation: the work stays in the green and on the banks.",
    solution:
      "We cleared the land and the banks with a CASE excavator and a machine fitted with a forestry mulcher, leaving the area walkable again.",
    topoTitle: "Site survey",
    videoTitle: "Site video — Santo Pietro",
    galleryAlts: [
      "CASE excavator on site at Santo Pietro",
      "Operator in the cab",
      "View of the Santo Pietro site",
    ],
  },
  "sistemazione-forestale-san-vincenzo": {
    title: "Forestry work at San Vincenzo",
    excerpt:
      "Hired labour in an oak coppice at San Vincenzo: extraction and stacking with a forwarder, on a slope and without opening new tracks.",
    hero: { main: "SAN", accent: "VINCENZO" },
    client: "Farm",
    service: "Forestry",
    challengeTitle: "The challenge",
    challenge:
      "Work in an oak coppice, with slopes and tight access, extracting and stacking the material without damaging the trees to be kept and without opening invasive tracks.",
    solution:
      "We worked with a John Deere forestry forwarder: crane and grab for loading, orderly stacking on site, and travel over rough ground. The machine moves serious volumes of timber while staying on the tracks, limiting compaction and leaving the site clean.",
    topoTitle: "Site survey",
    videoTitle: "Site video — San Vincenzo",
    galleryAlts: [
      "John Deere forwarder stacking at San Vincenzo",
      "Forwarder loaded with brush, moving through the wood",
      "Extraction on a slope with the forestry forwarder",
      "Machine climbing the extraction track",
      "Forwarder on a slope in Mediterranean scrub",
      "Stacking timber with the crane",
      "Hydraulic grab loading the stack",
      "Forestry chains on the ground",
      "Forestry chains on the forwarder tyres",
      "Riccardo Toncelli in the forwarder cab",
      "Operator in the cab during the work",
      "Maintenance of the forestry grab on site",
      "Cleaning the load bunks",
      "Climbing into the forwarder cab",
      "A pause on the John Deere on site",
      "Riccardo Toncelli in the cab, black and white portrait",
    ],
  },
};
