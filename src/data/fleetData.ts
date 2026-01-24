// src/data/fleetData.ts
// Configurazione centralizzata per Parco Mezzi

export interface FleetCategory {
  id: string;
  icon: string; // Emoji o icona geometric
  title: string;
  spec: string; // Es. "1 – 8 Tonnellate" o "Articolate"
  image: string; // Immagine (quadrata) per card
  uses: string[]; // Lista utilizzi
}

export const fleetHero = {
  image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2800&auto=format&fit=crop",
  subtitle: "La Flotta",
  title: {
    main: "IL MEZZO GIUSTO",
    accent: "PER OGNI TERRENO"
  },
  description: "Novaterra lavora con un parco mezzi completo, versatile e sempre disponibile. Dagli escavatori compatti per lavorare in spazi stretti, alle macchine pesanti per grandi sbancamenti e opere idrogeologiche: scegliamo ogni mezzo in base al progetto, al terreno e alle esigenze tecniche del cliente."
};

export const fleetAccess = {
  title: "Accesso totale. Nessun limite.",
  leftText: "Grazie a una rete strutturata di fornitori e partner tecnici di fiducia, Novaterra può disporre rapidamente di qualsiasi mezzo di movimento terra, in qualsiasi periodo dell'anno. Questo significa possibilità di affrontare scavi complessi, sbancamenti profondi, demolizioni, opere idrauliche e forestali con tempi rapidi di mobilitazione e costi ottimizzati.",
  rightText: [
    "Dal miniescavatore da 15 quintali all'escavatore da 350 quintali.",
    "Dal bobcat alla pala gommata.",
    "Dal camion 4 assi ai mezzi speciali forestali.",
    "",
    "<span style='color:var(--nova-accent)'>Tutto ciò che serve, quando serve.</span>"
  ]
};

export const fleetIntro = {
  subtitle: "Categorie",
  title: "Le macchine che utilizziamo",
  description: "Una panoramica delle principali categorie, con esempi di utilizzo."
};

export const fleetCategories: FleetCategory[] = [
  {
    id: "escavatori-compatti",
    icon: "⟁",
    title: "Escavatori Compatti",
    spec: "1 – 8 Tonnellate",
    image: "https://i.postimg.cc/KjsNLQsc/parcomezzi-escavatoricompatti-2.jpg",
    uses: [
      "Cantieri con accessi stretti",
      "Scavi per fondazioni leggere",
      "Urbanizzazioni e posa tubature",
      "Lavori in spazi residenziali"
    ]
  },
  {
    id: "escavatori-grandi",
    icon: "◼",
    title: "Escavatori Medi e Grandi",
    spec: "12 – 35 Tonnellate",
    image: "https://i.postimg.cc/ZnDc3jDK/parcomezzi-escavatori-mediegrandi.jpg",
    uses: [
      "Sbancamenti e scavi profondi",
      "Modellazioni di terreno",
      "Argini, fossi, bacini idrici",
      "Demolizioni controllate"
    ]
  },
  {
    id: "pale-gommate",
    icon: "◪",
    title: "Pale Gommate",
    spec: "Articolate",
    image: "https://i.postimg.cc/vTSz9XSB/parcomezzi-pale-gommate.jpg",
    uses: [
      "Movimento grandi volumi",
      "Gestione piazzali",
      "Carico materiali di scavo",
      "Lavori stradali"
    ]
  },
  {
    id: "minipale",
    icon: "◈",
    title: "Minipale Cingolate",
    spec: "Skid Steer",
    image: "https://i.postimg.cc/BbwgDNwb/parcomezzi-minipale-cingolate.jpg",
    uses: [
      "Manutenzione strade bianche",
      "Forestale leggero",
      "Pulizia piccoli piazzali",
      "Livellamenti di fino"
    ]
  },
  {
    id: "camion",
    icon: "❐",
    title: "Camion 3 e 4 Assi",
    spec: "Logistica",
    image: "https://i.postimg.cc/mk6wMV6g/parcomezzi-camion3-4-assi.jpg",
    uses: [
      "Trasporto materiali",
      "Gestione terre e rocce da scavo",
      "Rifornimento cantieri",
      "Movimentazione inerti"
    ]
  },
  {
    id: "mezzi-forestali",
    icon: "↟",
    title: "Mezzi Forestali",
    spec: "Speciali",
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1200&auto=format&fit=crop",
    uses: [
      "Abbattimenti controllati",
      "Pulizia boschi e trinciature",
      "Lavori in forte pendenza",
      "Manutenzione verde su larga scala"
    ]
  },
  {
    id: "attrezzature",
    icon: "⚙",
    title: "Attrezzature Tecniche",
    spec: "Attachments",
    image: "https://i.postimg.cc/0jHfmZHk/parcomezzi-attrezzature-tecniche-copia.jpg",
    uses: [
      "Martelli idraulici",
      "Benne inclinabili e grigliate",
      "Pinze da demolizione",
      "Trivelle e Trenchers"
    ]
  },
  {
    id: "rulli",
    icon: "◎",
    title: "Rulli Compattatori",
    spec: "Vibranti",
    image: "https://images.unsplash.com/photo-1564182842519-8a3b2af3e228?q=80&w=1200&auto=format&fit=crop",
    uses: [
      "Compattazione sottofondi",
      "Strade bianche e asfalto",
      "Piazzali industriali",
      "Finiture di precisione"
    ]
  }
];

export const fleetMethod = {
  title: "Non scegliamo una macchina.<br>Scegliamo una soluzione.",
  paragraphs: [
    "Ogni terreno è diverso. Ogni progetto richiede un mix specifico di potenza, precisione, peso, ingombro e resa operativa.",
    "Per questo analizziamo accessi, pendenze, natura del terreno, profondità dello scavo e volumi da movimentare. E solo dopo scegliamo i mezzi ideali.",
    "<span style='color:var(--nova-accent); font-weight:700;'>È così che lavori complessi diventano semplici, sicuri ed efficienti.</span>"
  ]
};

export const fleetCTA = {
  title: "Parla con noi: ti consigliamo i mezzi giusti per il tuo lavoro.",
  buttonText: "RICHIEDI SOPRALLUOGO",
  buttonLink: "/contatti"
};

