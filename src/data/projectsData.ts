// src/data/projectsData.ts
// Configurazione centralizzata per Progetti/Realizzazioni

export type ProjectCategory = 
  | "movimento-terra"
  | "strade-piazzali"
  | "demolizioni"
  | "forestale"
  | "idrogeologico"
  | "bacini"
  | "altro"
  | "tutti"; // Per filtro "tutti"

// Slug servizi (per relazione Realizzazioni ↔ Servizi)
export type ServiceSlug = Exclude<ProjectCategory, "altro" | "tutti">;

export const projectCategories: Record<ProjectCategory, string> = {
  "tutti": "Tutti i Progetti",
  "movimento-terra": "Movimento Terra e Sbancamenti",
  "strade-piazzali": "Strade e Piazzali",
  "demolizioni": "Demolizioni",
  "forestale": "Sistemazioni Forestali",
  "idrogeologico": "Consolidamenti Idrogeologici",
  "bacini": "Bacini e Laghi Artificiali",
  "altro": "Altri Progetti"
};

// Hero per pagina lista Realizzazioni (oggi statico, domani da WordPress)
export const projectsHero = {
  subtitle: "Case Studies",
  title: {
    main: "REALIZZAZIONI",
    accent: "PROGETTI"
  },
  image: "/images/realizzazioni/santo-pietro-vigna/copertina.jpg"
};

export interface Project {
  id: string;
  slug: string;
  
  // Preview (usato nella lista)
  title: string;
  excerpt: string;
  thumbnail: string; // Immagine per card lista
  /** Anno di realizzazione (quando il lavoro è stato eseguito) */
  year: string;
  /** Data di pubblicazione sul sito (ISO: YYYY-MM-DD) */
  publishedAt: string;
  /** Bozza: resta nel CMS ma non compare sul sito */
  draft?: boolean;
  category: ProjectCategory;
  /** Uno o più servizi collegati (per anteprime nelle pagine servizio) */
  services: ServiceSlug[];
  
  // Hero (usato nella pagina singola)
  hero: {
    title: {
      main: string;
      accent: string;
    };
    subtitle: string; // Es. "Case Study"
    image: string; // Immagine hero fullscreen
  };
  
  // Specifiche Progetto (box laterale)
  specs: {
    client: string;
    location: string;
    year: string;
    service: string;
  };
  
  // La Sfida (problema da risolvere)
  challenge: {
    title: string; // Es. "La Sfida"
    description: string;
  };
  
  // La Soluzione (come l'avete risolto)
  solution: {
    description: string;
  };
  
  // Rilievo Topografico (opzionale)
  topographic?: {
    title: string; // Es. "Rilievo Topografico"
    image: string; // Placeholder per ora (futuro: canvas)
    dataReadout?: string; // Es. "ELEV: 145m // SLOPE: 30% // SOIL: CLAY"
  };
  
  // Galleria Immagini
  gallery: Array<{
    src: string;
    alt: string;
    /**
     * Optional aspect hint for fixed-ratio tiles.
     * - landscape => 3/2
     * - portrait  => 2/3
     *
     * CMS-ready: this can map to a WP/ACF field in the future.
     */
    aspect?: "landscape" | "portrait";
  }>;
  
  // Video Cantiere (SEMPRE presente secondo utente)
  video: {
    type: "youtube" | "vimeo" | "mp4";
    url: string;
    thumbnail?: string;
    title?: string; // Es. "Video Cantiere"
  };
}

// Mock projects (oggi statico, domani da WordPress)
export const projects: Project[] = [
  {
    id: "14",
    slug: "pulizia-oliveta-santo-pietro",

    title: "Pulizia Oliveta a Santo Pietro",
    excerpt:
      "Pulizia di un oliveto a Santo Pietro: trinciatura di rovi ed erba alta tra i filari, con minipala cingolata Eurocomach 20TL e trattore con trinciatrice. Il materiale resta in campo e l’oliveta torna percorribile.",
    thumbnail: "/images/realizzazioni/pulizia-oliveta/copertina.jpg",
    year: "2025",
    publishedAt: "2025-07-14",
    category: "forestale",
    services: ["forestale"],

    hero: {
      title: { main: "PULIZIA", accent: "OLIVETA" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/pulizia-oliveta/copertina.jpg"
    },

    specs: {
      client: "Privato",
      location: "Santo Pietro (PI)",
      year: "2025",
      service: "Sistemazioni forestali"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Un oliveto con erba alta, rovi e ricacci tra i filari. I passaggi sono stretti, le chiome basse e il fondo irregolare: bisogna riaprire il sottofila senza scorticare i tronchi e senza aprire piste nel terreno."
    },

    solution: {
      description:
        "Siamo entrati con una minipala cingolata Eurocomach 20TL e trincia forestale, per triturare la vegetazione anche dove un trattore non gira. Nei filari più aperti ha lavorato il trattore Goldoni con trinciatrice, lasciando il trinciato a terra come pacciamatura. A fine intervento l’oliveta è di nuovo percorribile, senza asportare il materiale."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/pulizia-oliveta/trinciatura.jpg",
      dataReadout: "LOC: SANTO PIETRO (PI) // YEAR: 2025 // TYPE: FORESTALE"
    },

    gallery: [
      { src: "/images/realizzazioni/pulizia-oliveta/copertina.jpg", alt: "Trinciatura del sottofila tra gli olivi a Santo Pietro", aspect: "landscape" },
      { src: "/images/realizzazioni/pulizia-oliveta/trinciatura.jpg", alt: "Eurocomach 20TL con trincia forestale sulla vegetazione", aspect: "landscape" },
      { src: "/images/realizzazioni/pulizia-oliveta/eurocomach.jpg", alt: "Minipala cingolata Eurocomach tra le chiome degli olivi", aspect: "landscape" },
      { src: "/images/realizzazioni/pulizia-oliveta/trattore.jpg", alt: "Accesso al fondo lungo il viale di cipressi", aspect: "landscape" },
      { src: "/images/realizzazioni/pulizia-oliveta/oliveta.jpg", alt: "Rotore della trincia forestale sul trinciato", aspect: "landscape" },
      { src: "/images/realizzazioni/pulizia-oliveta/ferri-fronte.jpg", alt: "Trattore in ingresso nel filare da ripulire", aspect: "landscape" },
      { src: "/images/realizzazioni/pulizia-oliveta/cabina.jpg", alt: "Cabina protetta da griglia durante la trinciatura", aspect: "landscape" },
      { src: "/images/realizzazioni/pulizia-oliveta/innesti.jpg", alt: "Innesti idraulici della trinciatrice", aspect: "landscape" }
    ],

    video: {
      type: "mp4",
      url: "/videos/realizzazioni/pulizia-oliveta/cantiere.mp4",
      thumbnail: "/videos/realizzazioni/pulizia-oliveta/poster.jpg",
      title: "Video cantiere — Pulizia oliveta a Santo Pietro"
    }
  },

  {
    id: "15",
    slug: "demolizione-soianella",
    title: "Aperture nei tini a Soianella",
    excerpt:
      "Aperture in tini di cemento armato in una cantina a Soianella, Terricciola. Taglio con disco e martello, armatura sezionata sul perimetro, varchi netti senza compromettere volta e tini confinanti.",
    thumbnail: "/images/realizzazioni/demolizione-soianella/copertina.jpg",
    year: "2026",
    publishedAt: "2026-10-22",
    category: "demolizioni",
    services: ["demolizioni"],
    hero: {
      title: { main: "SOIANELLA", accent: "APERTURE" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/demolizione-soianella/copertina.jpg"
    },
    specs: {
      client: "Privato",
      location: "Soianella, Terricciola (PI)",
      year: "2026",
      service: "Demolizioni"
    },
    challenge: {
      title: "La Sfida",
      description:
        "Aprire varchi regolari in pareti di cemento armato, dentro una cantina a volta. Spazi stretti, polvere, armatura da sezionare e tini confinanti da non lesionare."
    },
    solution: {
      description:
        "Abbiamo tracciato il vano sulla parete del tino, tagliato il perimetro con la troncatrice a disco e demolito il cuore con il martello. L'armatura si sega sul bordo dell'apertura. Si lavora in quota, su ponteggio, con protezione dalle polveri. A fine intervento i varchi sono netti e il corridoio tra i tini resta agibile."
    },
    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/demolizione-soianella/cantina.jpg",
      dataReadout: "LOC: SOIANELLA, TERRICCIOLA (PI) // YEAR: 2026 // TYPE: DEMOLIZIONE"
    },
    gallery: [
      { src: "/images/realizzazioni/demolizione-soianella/copertina.jpg", alt: "Aperture finite nei tini di cemento armato", aspect: "landscape" },
      { src: "/images/realizzazioni/demolizione-soianella/cantina.jpg", alt: "Cantina a volta con i tini e il materiale di demolizione", aspect: "landscape" },
      { src: "/images/realizzazioni/demolizione-soianella/tracciatura.jpg", alt: "Tracciatura del vano sulla parete del tino", aspect: "landscape" },
      { src: "/images/realizzazioni/demolizione-soianella/sagoma.jpg", alt: "Sagoma dell'apertura segnata sul cemento", aspect: "landscape" },
      { src: "/images/realizzazioni/demolizione-soianella/disco.jpg", alt: "Taglio del cemento armato con troncatrice a disco", aspect: "landscape" },
      { src: "/images/realizzazioni/demolizione-soianella/martello.jpg", alt: "Demolizione controllata con martello", aspect: "landscape" },
      { src: "/images/realizzazioni/demolizione-soianella/ferro.jpg", alt: "Armatura a vista sul bordo dell'apertura", aspect: "landscape" },
      { src: "/images/realizzazioni/demolizione-soianella/apertura.jpg", alt: "Apertura in corso, con il ferro ancora da sezionare", aspect: "landscape" }
    ],
    video: {
      type: "mp4",
      url: "/videos/realizzazioni/demolizione-soianella/cantiere.mp4",
      thumbnail: "/videos/realizzazioni/demolizione-soianella/poster.jpg",
      title: "Video cantiere — Aperture nei tini a Soianella"
    }
  },

  {
    id: "16",
    slug: "palizzata-peccioli",
    title: "Palizzata a Peccioli",
    excerpt:
      "Scheda in preparazione. Palizzata a Peccioli: foto e video del cantiere verranno caricati a breve.",
    thumbnail: "/images/realizzazioni/in-preparazione.jpg",
    year: "2025",
    publishedAt: "2025-06-05",
    draft: true,
    category: "idrogeologico",
    services: ["idrogeologico"],
    hero: {
      title: { main: "PALIZZATA", accent: "PECCIOLI" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/in-preparazione.jpg"
    },
    specs: {
      client: "Da definire",
      location: "Peccioli (PI)",
      year: "2025",
      service: "Consolidamenti idrogeologici"
    },
    challenge: {
      title: "La Sfida",
      description:
        "Testo in attesa dei dettagli del lavoro. Foto e video della palizzata a Peccioli arriveranno su questa scheda."
    },
    solution: { description: "Testo in attesa dei dettagli del lavoro." },
    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/in-preparazione.jpg",
      dataReadout: "LOC: PECCIOLI (PI) // YEAR: 2025 // TYPE: PALIZZATA // STATUS: IN PREPARAZIONE"
    },
    gallery: [],
    video: { type: "mp4", url: "", title: "Video cantiere — Palizzata a Peccioli" }
  },

  {
    id: "17",
    slug: "riempimento-legoli",
    title: "Riempimento a Legoli",
    excerpt:
      "Scheda in preparazione. Riempimento a Legoli: foto e video del cantiere verranno caricati a breve.",
    thumbnail: "/images/realizzazioni/in-preparazione.jpg",
    year: "2025",
    publishedAt: "2025-12-02",
    draft: true,
    category: "movimento-terra",
    services: ["movimento-terra"],
    hero: {
      title: { main: "RIEMPIMENTO", accent: "LEGOLI" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/in-preparazione.jpg"
    },
    specs: {
      client: "Da definire",
      location: "Legoli (PI)",
      year: "2025",
      service: "Movimento terra"
    },
    challenge: {
      title: "La Sfida",
      description:
        "Testo in attesa dei dettagli del lavoro. Foto e video del riempimento a Legoli arriveranno su questa scheda."
    },
    solution: { description: "Testo in attesa dei dettagli del lavoro." },
    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/in-preparazione.jpg",
      dataReadout: "LOC: LEGOLI (PI) // YEAR: 2025 // TYPE: RIEMPIMENTO // STATUS: IN PREPARAZIONE"
    },
    gallery: [],
    video: { type: "mp4", url: "", title: "Video cantiere — Riempimento a Legoli" }
  },

  {
    id: "13",
    slug: "bacino-idrico-ghizzano",

    title: "Bacino Idrico a Ghizzano",
    excerpt:
      "Scavo e modellazione di un invaso collinare a Ghizzano, con movimento terra e posa delle reti. CASE CX210E per lo scavo del bacino, Yanmar per la finitura delle sponde, tubazioni e cisterne a servizio della proprietà.",
    thumbnail: "/images/realizzazioni/ghizzano-bacino/copertina.jpg",
    year: "2024",
    publishedAt: "2024-02-02",
    category: "bacini",
    services: ["bacini", "movimento-terra"],

    hero: {
      title: { main: "BACINO", accent: "GHIZZANO" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/ghizzano-bacino/copertina.jpg"
    },

    specs: {
      client: "Privato",
      location: "Ghizzano (PI)",
      year: "2024",
      service: "Bacini idrici e scavi"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Realizzare un bacino idrico in collina insieme agli scavi di servizio — tubazioni, cisterne, movimento terre — in un contesto agricolo e residenziale, senza compromettere accessi e fabbricati e con controllo di pendenze e acque."
    },

    solution: {
      description:
        "Abbiamo scavato l’invaso a pianta circolare con un CASE CX210E, poi modellato e rifinito le sponde con un Yanmar. In parallelo: scavi per la rete in PVC e posa delle cisterne interrate. Le terre di risulta sono state gestite in sito per piste e rimodellamento."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/ghizzano-bacino/bacino-circolare.jpg",
      dataReadout: "LOC: GHIZZANO (PI) // YEAR: 2024 // TYPE: BACINO IDRICO"
    },

    gallery: [
      { src: "/images/realizzazioni/ghizzano-bacino/copertina.jpg", alt: "Cantiere a Ghizzano: casa, scavi e cisterne interrate", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/proprieta-zenitale.jpg", alt: "Vista zenitale della proprietà con scavi e cisterne", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/bacini-finiti.jpg", alt: "Vista aerea dei bacini idrici ultimati a servizio della proprietà", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/paesaggio.jpg", alt: "Bacino collinare nel paesaggio di Ghizzano", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/bacino-allagato.jpg", alt: "Invaso allagato visto dall’alto", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/bacino-circolare.jpg", alt: "Scavo dell’invaso circolare con escavatore CASE", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/bacino-casa.jpg", alt: "Modellazione del bacino con la proprietà sullo sfondo", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/rilievo-sponda.jpg", alt: "Rilievo in sponda durante lo scavo del bacino", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/cisterne-aeree.jpg", alt: "Posa delle cisterne nella trincea, vista aerea", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/cisterne-scavo.jpg", alt: "Escavatore CASE in posa delle cisterne", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/cisterne-zenitale.jpg", alt: "Cisterne in linea viste dallo zenit", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/cisterne-trincea.jpg", alt: "Cisterne interrate nella trincea di posa", aspect: "portrait" },
      { src: "/images/realizzazioni/ghizzano-bacino/tubazioni.jpg", alt: "Rete in PVC e pozzetto di ispezione", aspect: "portrait" },
      { src: "/images/realizzazioni/ghizzano-bacino/drenaggio-yanmar.jpg", alt: "Posa tubo drenante con miniescavatore Yanmar", aspect: "portrait" },
      { src: "/images/realizzazioni/ghizzano-bacino/case-scavo.jpg", alt: "CASE CX130D in scavo sul fronte del bacino", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/sponda.jpg", alt: "Profilo della sponda durante la modellazione", aspect: "landscape" },
      { src: "/images/realizzazioni/ghizzano-bacino/piazzale.jpg", alt: "Sistemazione del piazzale a servizio della proprietà", aspect: "landscape" }
    ],

    video: {
      type: "mp4",
      url: "/videos/realizzazioni/ghizzano-bacino/cantiere.mp4",
      thumbnail: "/videos/realizzazioni/ghizzano-bacino/poster.jpg",
      title: "Video cantiere — Bacino idrico Ghizzano"
    }
  },

  {
    id: "12",
    slug: "bonifica-vigna-santo-pietro",

    title: "Bonifica Vigna a Santo Pietro",
    excerpt:
      "Disfacimento di un vigneto in collina: estirpo dei filari, rimozione pali e vegetazione, carico e sgombero del materiale. Escavatore Yanmar con pinza NPK, trattore con rimorchio per il trasporto.",
    thumbnail: "/images/realizzazioni/santo-pietro-vigna/copertina.jpg",
    year: "2026",
    publishedAt: "2026-06-09",
    category: "movimento-terra",
    services: ["movimento-terra"],

    hero: {
      title: { main: "BONIFICA", accent: "VIGNA" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/santo-pietro-vigna/copertina.jpg"
    },

    specs: {
      client: "Privato",
      location: "Santo Pietro (PI)",
      year: "2026",
      service: "Bonifica vigneto"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Rimuovere un vigneto in disuso in un contesto di filari ancora in produzione, su terreno collinare con erba alta e accessi stretti, senza danneggiare i vigneti confinanti e senza aprire piste invasive."
    },

    solution: {
      description:
        "Abbiamo lavorato fila per fila con un escavatore cingolato Yanmar equipaggiato di pinza idraulica NPK: viti e pali vengono afferrati, sradicati e caricati sul rimorchio agricolo. Restando nei tracciati del vigneto, il mezzo riduce il calpestio e lascia il campo sgombro per la nuova destinazione del suolo."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/santo-pietro-vigna/zenitale-filari.jpg",
      dataReadout: "LOC: SANTO PIETRO (PI) // YEAR: 2026 // TYPE: BONIFICA VIGNETO"
    },

    gallery: [
      { src: "/images/realizzazioni/santo-pietro-vigna/copertina.jpg", alt: "Vista zenitale della bonifica vigna a Santo Pietro", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/collina.jpg", alt: "Cantiere di disfacimento nel paesaggio collinare", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/collina-ampia.jpg", alt: "Filare in rimozione tra i vigneti confinanti", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/zenitale-filari.jpg", alt: "Yanmar tra i filari, inquadratura zenitale", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/pinza-frontale.jpg", alt: "Pinza idraulica NPK in avvicinamento ai pali", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/yanmar-campo.jpg", alt: "Escavatore Yanmar con pinza NPK in campo", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/estirpo-palo.jpg", alt: "Estirpo di un palo in cemento con la pinza", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/pinza-vite.jpg", alt: "Dettaglio della pinza NPK sull’impianto", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/carico-aereo.jpg", alt: "Carico del materiale vegetale sul rimorchio agricolo", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/trattore-rimorchio.jpg", alt: "Trattore e rimorchio a fianco dell’escavatore", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro-vigna/zenitale-carico.jpg", alt: "Yanmar e trattore in carico, vista zenitale", aspect: "landscape" }
    ],

    video: {
      type: "mp4",
      url: "/videos/realizzazioni/santo-pietro-vigna/cantiere.mp4",
      thumbnail: "/videos/realizzazioni/santo-pietro-vigna/poster.jpg",
      title: "Video cantiere — Bonifica vigna Santo Pietro"
    }
  },

  {
    id: "11",
    slug: "marti",

    title: "Marti",
    excerpt:
      "Scheda in preparazione: video cantiere già disponibile. Testi, cliente e dettagli dell’intervento verranno aggiornati.",
    thumbnail: "/images/realizzazioni/marti/copertina.jpg",
    year: "2025",
    publishedAt: "2025-08-19",
    category: "movimento-terra",
    services: ["movimento-terra"],

    hero: {
      title: { main: "MARTI", accent: "CANTIERE" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/marti/copertina.jpg"
    },

    specs: {
      client: "Da definire",
      location: "Marti (PI)",
      year: "2025",
      service: "Da definire"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Testo in attesa dei dettagli del lavoro. Il video del cantiere è già online."
    },

    solution: {
      description:
        "Testo in attesa dei dettagli del lavoro. Nel video si vedono gli escavatori al lavoro su terreno collinare."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/marti/collina.jpg",
      dataReadout: "LOC: MARTI (PI) // YEAR: 2025 // STATUS: IN PREPARAZIONE"
    },

    gallery: [
      { src: "/images/realizzazioni/marti/copertina.jpg", alt: "Vista aerea del cantiere a Marti", aspect: "landscape" },
      { src: "/images/realizzazioni/marti/collina.jpg", alt: "Vista aerea del cantiere a Marti", aspect: "landscape" },
      { src: "/images/realizzazioni/marti/escavatori.jpg", alt: "Escavatori al lavoro nello scavo", aspect: "landscape" },
      { src: "/images/realizzazioni/marti/pista.jpg", alt: "Escavatore sulla pista di cantiere", aspect: "landscape" }
    ],

    video: {
      type: "mp4",
      url: "/videos/realizzazioni/marti/cantiere.mp4",
      thumbnail: "/videos/realizzazioni/marti/poster.jpg",
      title: "Video cantiere — Marti"
    }
  },

  {
    id: "10",
    slug: "santo-pietro",

    title: "Santo Pietro",
    excerpt:
      "Scheda in preparazione: video cantiere già disponibile. Testi, cliente e dettagli dell’intervento verranno aggiornati.",
    thumbnail: "/images/realizzazioni/santo-pietro/escavatore-case.jpg",
    year: "2025",
    publishedAt: "2025-04-18",
    category: "forestale",
    services: ["forestale", "movimento-terra"],

    hero: {
      title: { main: "SANTO", accent: "PIETRO" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/santo-pietro/escavatore-case.jpg"
    },

    specs: {
      client: "Da definire",
      location: "Santo Pietro (PI)",
      year: "2025",
      service: "Da definire"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Testo in attesa dei dettagli del lavoro. Il video del cantiere è già online."
    },

    solution: {
      description:
        "Testo in attesa dei dettagli del lavoro. Nel video si vede il nuovo escavatore CASE in operazione."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/santo-pietro/escavatore-case.jpg",
      dataReadout: "LOC: SANTO PIETRO // YEAR: 2025 // STATUS: IN PREPARAZIONE"
    },

    gallery: [
      { src: "/images/realizzazioni/santo-pietro/escavatore-case.jpg", alt: "Escavatore CASE in cantiere a Santo Pietro", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro/cabina.jpg", alt: "Operatore in cabina", aspect: "landscape" },
      { src: "/images/realizzazioni/santo-pietro/cantiere.jpg", alt: "Vista cantiere Santo Pietro", aspect: "landscape" }
    ],

    video: {
      type: "mp4",
      url: "/videos/realizzazioni/santo-pietro/cantiere.mp4",
      thumbnail: "/videos/realizzazioni/santo-pietro/poster.jpg",
      title: "Video cantiere — Santo Pietro"
    }
  },

  {
    id: "9",
    slug: "sistemazione-forestale-san-vincenzo",

    title: "Sistemazione Forestale a San Vincenzo",
    excerpt:
      "Intervento forestale con forwarder: esbosco, accatastamento e pulizia del sottobosco in area mediterranea. Mezzi specializzati, lavoro in pendenza e gestione del materiale legnoso in sito.",
    thumbnail: "/images/realizzazioni/san-vincenzo/copertina.jpg",
    year: "2024",
    publishedAt: "2024-05-09",
    category: "forestale",
    services: ["forestale"],

    hero: {
      title: { main: "SAN", accent: "VINCENZO" },
      subtitle: "Case Study",
      image: "/images/realizzazioni/san-vincenzo/copertina.jpg"
    },

    specs: {
      client: "Privato",
      location: "San Vincenzo (LI)",
      year: "2024",
      service: "Sistemazioni forestali"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Operare in un bosco mediterraneo con pendenze, accessi stretti e vegetazione densa, esboscando e accatastando il materiale senza danneggiare il soprassuolo residuo e senza aprire piste invasive."
    },

    solution: {
      description:
        "Abbiamo lavorato con un forwarder forestale John Deere: gru e pinza per il carico, accatastamento ordinato in sito e avanzamento su terreno accidentato. Il mezzo consente di muovere volumi importanti di legna restando nei tracciati, riducendo il calpestio e lasciando il cantiere pulito."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "/images/realizzazioni/san-vincenzo/forwarder-carico.jpg",
      dataReadout: "LOC: SAN VINCENZO (LI) // YEAR: 2024 // TYPE: FORESTALE"
    },

    gallery: [
      { src: "/images/realizzazioni/san-vincenzo/copertina.jpg", alt: "Forwarder John Deere in accatastamento a San Vincenzo", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/forwarder-carico.jpg", alt: "Forwarder carico di ramaglia in avanzamento nel bosco", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/esbosco.jpg", alt: "Esbosco in pendenza con il forwarder forestale", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/forwarder-salita.jpg", alt: "Mezzo in salita sul tracciato di esbosco", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/forwarder-pendio.jpg", alt: "Forwarder in pendio tra la macchia mediterranea", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/accatastamento.jpg", alt: "Accatastamento del materiale legnoso con la gru", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/gru-catasta.jpg", alt: "Pinza idraulica in carico sulla catasta", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/catene-bosco.jpg", alt: "Dettaglio delle catene forestali sul terreno", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/catene.jpg", alt: "Catene forestali sui pneumatici del forwarder", aspect: "landscape" },
      { src: "/images/realizzazioni/san-vincenzo/in-cabina.jpg", alt: "Riccardo Toncelli in cabina del forwarder", aspect: "portrait" },
      { src: "/images/realizzazioni/san-vincenzo/cabina-profilo.jpg", alt: "Operatore in cabina durante il lavoro", aspect: "portrait" },
      { src: "/images/realizzazioni/san-vincenzo/manutenzione.jpg", alt: "Manutenzione della pinza forestale in sito", aspect: "portrait" },
      { src: "/images/realizzazioni/san-vincenzo/pulizia-stanga.jpg", alt: "Pulizia delle stanghe del carico", aspect: "portrait" },
      { src: "/images/realizzazioni/san-vincenzo/salita.jpg", alt: "Accesso in cabina del forwarder", aspect: "portrait" },
      { src: "/images/realizzazioni/san-vincenzo/pausa-cofano.jpg", alt: "Pausa sul mezzo John Deere in cantiere", aspect: "portrait" },
      { src: "/images/realizzazioni/san-vincenzo/cabina-bn.jpg", alt: "Riccardo Toncelli in cabina, ritratto in bianco e nero", aspect: "landscape" }
    ],

    video: {
      type: "mp4",
      url: "/videos/realizzazioni/san-vincenzo/cantiere.mp4",
      thumbnail: "/videos/realizzazioni/san-vincenzo/poster.jpg",
      title: "Video cantiere — San Vincenzo"
    }
  },

];

// Helper functions
export function sortProjectsByYear(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => 
    parseInt(b.year) - parseInt(a.year)
  );
}

export function sortProjectsByPublishedAt(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    const aTime = Date.parse(a.publishedAt);
    const bTime = Date.parse(b.publishedAt);
    // Fallback deterministic order if dates are invalid/equal
    if (!Number.isFinite(aTime) || !Number.isFinite(bTime) || aTime === bTime) {
      return Number.parseInt(b.id) - Number.parseInt(a.id);
    }
    return bTime - aTime;
  });
}

export function filterProjectsByCategory(projects: Project[], category: ProjectCategory): Project[] {
  if (category === "tutti") return projects;
  return projects.filter((project) => {
    if (project.category === category) return true;
    if (category === "altro") return false;
    return project.services?.includes(category) ?? false;
  });
}

