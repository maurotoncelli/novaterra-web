export const fleetEn = {
  meta: {
    title: "Fleet | Novaterra — Earthworks in Tuscany",
    description:
      "Excavators, wheeled loaders, a 2-axle truck with crane and attachments for every site. Our earthworks fleet.",
  },
  hero: {
    subtitle: "The fleet",
    title: { main: "THE RIGHT MACHINE", accent: "FOR EVERY GROUND" },
    description:
      "Novaterra works with a complete fleet, versatile and available. From compact excavators in tight spaces to heavy machines for bulk excavation and hydrogeological work: we choose each machine for the project, the ground and the technical need.",
  },
  access: {
    title: "Full access. No limit.",
    leftText:
      "Through a structured network of trusted suppliers and technical partners, Novaterra can put any earthworks machine on site, at any time of year. Complex digs, deep excavation, demolition, hydraulic and forestry work, with fast mobilisation and controlled cost.",
    rightText: [
      "From an 800 kg mini excavator to a 35-tonne excavator.",
      "From the compact track loader to the wheeled loader.",
      "From the 2-axle truck with crane to specialist attachments.",
      "",
      "<span style='color:var(--nova-accent)'>Whatever the job needs, when it needs it.</span>",
    ],
  },
  intro: {
    subtitle: "Categories",
    title: "The machines we use",
    description: "The main categories, with examples of how we use them.",
  },
  categories: {
    escavatori: {
      title: "Excavators",
      spec: "1 t – 25 t",
      uses: ["From mini excavators to bulk digs", "Foundations, trenches and grading", "Banks, ditches and reservoirs", "Controlled demolition"],
    },
    "pale-gommate": {
      title: "Wheeled loaders",
      spec: "Articulated",
      uses: ["Moving large volumes", "Yard handling", "Loading excavated material", "Road works"],
    },
    minipale: {
      title: "Compact track loaders",
      spec: "Eurocomach 20TL",
      uses: ["Tight access and under the canopy", "Light forestry", "Yard clearance", "Fine grading"],
    },
    trasportatori: {
      title: "Multi-purpose carriers",
      spec: "Merlo Cingo",
      uses: ["Haulage in tight spaces", "Sites with poor ground bearing", "Moving aggregates", "Access a truck cannot take"],
    },
    dumper: {
      title: "Tracked dumpers",
      spec: "Yanmar",
      uses: ["Clearing excavated material", "Soft and sloping ground", "Sites without a haul road", "Shuttle between dig and stockpile"],
    },
    telescopici: {
      title: "Telehandlers",
      spec: "Merlo",
      uses: ["Lifting and placing materials", "Loading at height", "Building and farm sites", "Pallets and attachments"],
    },
    betoniera: {
      title: "Self-loading mixer",
      spec: "Merlo",
      uses: ["Concrete made on site", "Pours a road mixer cannot reach", "Small foundations and kerbs", "Independent batching and loading"],
    },
    rulli: {
      title: "Tandem rollers",
      spec: "Ammann",
      uses: ["Compacting formations", "White roads and asphalt", "Yards", "Precision finishing"],
    },
    compattatori: {
      title: "Soil compactors",
      spec: "Ammann",
      uses: ["Embankments and formations", "Trench backfill", "Earth yards", "Compaction on cohesive soils"],
    },
    piastre: {
      title: "Vibrating plates",
      spec: "Ammann",
      uses: ["Finishing formations", "Backfill in tight spaces", "Paths and edges", "Compaction where a roller cannot go"],
    },
    generatori: {
      title: "Generators",
      spec: "Pramac, up to 36 kW",
      uses: ["Power on an isolated site", "Tools and pumps", "Lighting", "Running the attachments"],
    },
    camion: {
      title: "2-axle truck with crane",
      spec: "Rigid / crane",
      uses: ["Independent loading and unloading", "Hauling materials and plant", "Lifting on site", "Narrow roads and tight sites"],
    },
    attrezzature: {
      title: "Technical attachments",
      spec: "Grabs, breakers, buckets",
      uses: ["Hydraulic breakers", "Tilting and screening buckets", "Demolition grabs", "Laser levels"],
    },
  } as Record<string, { title: string; spec: string; uses: string[] }>,
  method: {
    title: "We do not choose a machine.<br>We choose a solution.",
    paragraphs: [
      "Every ground is different. Every project needs its own mix of power, precision, weight, size and output.",
      "So we read access, slopes, the nature of the soil, dig depth and the volumes to move. Only then do we choose the machines.",
      "<span style='color:var(--nova-accent); font-weight:700;'>That is how complex work becomes simple, safe and efficient.</span>",
    ],
  },
  cta: {
    title: "Talk to us: we will recommend the right machines for the job.",
    buttonText: "REQUEST A SITE VISIT",
    buttonLink: "/en/contact",
  },
};
