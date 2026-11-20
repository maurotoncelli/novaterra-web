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
  image: "https://i.postimg.cc/8zGKFx6C/parcomezzi-tutti.jpg",
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
    "Dal miniescavatore da 8 quintali all'escavatore da 350 quintali.",
    "Dalla minipala alla pala gommata.",
    "Dal camion 2 assi con gru alle attrezzature speciali.",
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
    id: "escavatori",
    icon: "⟁",
    title: "Escavatori",
    spec: "10 q.li – 25 t",
    image: "/images/parco-mezzi/escavatori.jpg",
    uses: [
      "Dal miniescavatore agli scavi di massa",
      "Fondazioni, trincee e sbancamenti",
      "Argini, fossi e bacini",
      "Demolizioni controllate"
    ]
  },
  {
    id: "pale-gommate",
    icon: "◪",
    title: "Pale Gommate",
    spec: "Articolate",
    image: "/images/parco-mezzi/pale-gommate.jpg",
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
    spec: "Eurocomach 20TL",
    image: "/images/parco-mezzi/minipale.jpg",
    uses: [
      "Accessi stretti e sottochioma",
      "Forestale leggero",
      "Pulizia piazzali",
      "Livellamenti di fino"
    ]
  },
  {
    id: "trasportatori",
    icon: "▭",
    title: "Trasportatori Polivalenti",
    spec: "Merlo Cingo",
    image: "/images/parco-mezzi/trasportatori.jpg",
    uses: [
      "Trasporto in spazi stretti",
      "Cantieri con poca portata del suolo",
      "Movimentazione di inerti",
      "Accessi dove un camion non entra"
    ]
  },
  {
    id: "dumper",
    icon: "▣",
    title: "Dumper Cingolati",
    spec: "Yanmar",
    image: "/images/parco-mezzi/dumper.jpg",
    uses: [
      "Sgombero del materiale di scavo",
      "Terreni cedevoli e in pendenza",
      "Cantieri senza strada di cantiere",
      "Navetta tra scavo e deposito"
    ]
  },
  {
    id: "telescopici",
    icon: "↗",
    title: "Telescopici",
    spec: "Merlo",
    image: "/images/parco-mezzi/telescopici.jpg",
    uses: [
      "Sollevamento e posa materiali",
      "Carico in quota",
      "Cantieri edili e agricoli",
      "Movimentazione di pallet e attrezzature"
    ]
  },
  {
    id: "betoniera",
    icon: "◌",
    title: "Betoniera Autocaricante",
    spec: "Merlo",
    image: "/images/parco-mezzi/betoniera.jpg",
    uses: [
      "Calcestruzzo prodotto in cantiere",
      "Getti dove la betoniera stradale non arriva",
      "Piccole fondazioni e cordoli",
      "Dosaggio e carico autonomi"
    ]
  },
  {
    id: "rulli",
    icon: "◎",
    title: "Rulli Tandem",
    spec: "Ammann",
    image: "https://i.postimg.cc/fbrfvPJ9/parcomezzi-rulli-compattatori.jpg",
    uses: [
      "Compattazione sottofondi",
      "Strade bianche e asfalto",
      "Piazzali",
      "Finiture di precisione"
    ]
  },
  {
    id: "compattatori",
    icon: "◉",
    title: "Compattatori di Terra",
    spec: "Ammann",
    image: "/images/parco-mezzi/compattatori.jpg",
    uses: [
      "Rilevati e sottofondi",
      "Riempimenti di trincee",
      "Piazzali in terra",
      "Compattazione su terreni coesivi"
    ]
  },
  {
    id: "piastre",
    icon: "▦",
    title: "Piastre Vibranti",
    spec: "Ammann",
    image: "/images/parco-mezzi/piastre.jpg",
    uses: [
      "Finitura di sottofondi",
      "Riempimenti in spazi stretti",
      "Marciapiedi e bordi",
      "Compattazione dove il rullo non entra"
    ]
  },
  {
    id: "generatori",
    icon: "⚡",
    title: "Gruppi Elettrogeni",
    spec: "Pramac, fino a 36 kW",
    image: "/images/parco-mezzi/generatori.jpg",
    uses: [
      "Energia in cantiere isolato",
      "Utensili e pompe",
      "Illuminazione",
      "Alimentazione delle attrezzature"
    ]
  },
  {
    id: "camion",
    icon: "❐",
    title: "Camion 2 Assi con Gru",
    spec: "Motrice / Gru",
    image: "https://i.postimg.cc/mk6wMV6g/parcomezzi-camion3-4-assi.jpg",
    uses: [
      "Carico e scarico autonomo",
      "Trasporto materiali e attrezzature",
      "Sollevamento in cantiere",
      "Accesso a strade e cantieri stretti"
    ]
  },
  {
    id: "attrezzature",
    icon: "⚙",
    title: "Attrezzature Tecniche",
    spec: "Pinze, martelli, benne",
    image: "https://i.postimg.cc/0jHfmZHk/parcomezzi-attrezzature-tecniche-copia.jpg",
    uses: [
      "Martelli idraulici",
      "Benne inclinabili e grigliate",
      "Pinze da demolizione",
      "Livelli laser"
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

