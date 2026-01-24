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
  image: "https://i.postimg.cc/X7Dkq2Tk/realizzazioni_Copertina_realizzazioni.jpg"
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
    id: "1",
    slug: "nuova-residenza-il-poggio",
    
    title: 'Nuova Residenza "Il Poggio"',
    excerpt: "Scavo di fondazione complesso su terreno in forte pendenza (30%). Realizzazione di palificata di contenimento e viabilità di cantiere.",
    thumbnail: "https://i.postimg.cc/KY1V4kqR/realizzazioni_Nuovaresidenzailpoggio_copertina.jpg",
    year: "2024",
    publishedAt: "2024-11-06",
    category: "movimento-terra",
    services: ["movimento-terra"],
    
    hero: {
      title: {
        main: "IL POGGIO",
        accent: "RESIDENZA"
      },
      subtitle: "Case Study",
      image: "https://i.postimg.cc/KY1V4kqR/realizzazioni_Nuovaresidenzailpoggio_copertina.jpg"
    },
    
    specs: {
      client: "Privato",
      location: "Terricciola (PI)",
      year: "2024",
      service: "Scavi e Sbancamenti"
    },
    
    challenge: {
      title: "La Sfida",
      description: "Realizzare uno scavo di fondazione su un pendio argilloso con pendenza del 30%, garantendo la stabilità del fronte di scavo e la sicurezza degli operatori."
    },
    
    solution: {
      description: "Abbiamo operato realizzando dapprima una pista di accesso temporanea stabilizzata per i mezzi pesanti. Successivamente, lo scavo è stato eseguito 'a gradoni' per evitare smottamenti, con l'ausilio di un escavatore 140q dotato di braccio triplice articolazione. La terra di risulta è stata reimpiegata parzialmente per il modellamento del giardino a valle."
    },
    
    topographic: {
      title: "Rilievo Topografico",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
      dataReadout: "ELEV: 145m // SLOPE: 30% // SOIL: CLAY"
    },
    
    gallery: [
      {
        src: "https://i.postimg.cc/251J3bc6/realizzazioni_Nuovaresidenzailpoggio_2.jpg",
        alt: "Dettaglio scavo fondazione in pendenza"
      },
      {
        src: "https://i.postimg.cc/jjD9Cwg2/realizzazioni_Nuovaresidenzailpoggio_3.jpg",
        alt: "Escavatore su terreno argilloso"
      },
      {
        src: "https://i.postimg.cc/MGn4XMPG/realizzazioni_Nuovaresidenzailpoggio_4.jpg",
        alt: "Mezzi pesanti al lavoro"
      },
      {
        src: "https://i.postimg.cc/43YMn7Lx/realizzazioni_Nuovaresidenzailpoggio_5.jpg",
        alt: "Completamento opere di contenimento"
      }
    ],
    
    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder", // Placeholder per ora
      thumbnail: "https://i.postimg.cc/KY1V4kqR/realizzazioni_Nuovaresidenzailpoggio_copertina.jpg",
      title: "Video Cantiere"
    }
  },
  
  {
    id: "2",
    slug: "infrastruttura-vitivinicola-valdera",
    
    title: "Infrastruttura Vitivinicola",
    excerpt: "Rifacimento di 2km di strada poderale per accesso mezzi pesanti. Stesura stabilizzato, rullatura e creazione canaline di scolo acque.",
    thumbnail: "https://i.postimg.cc/HnMdMv6b/realizzazioni_infrastrutturavitivinicola_4.jpg",
    year: "2023",
    publishedAt: "2024-03-22",
    category: "strade-piazzali",
    services: ["strade-piazzali"],
    
    hero: {
      title: {
        main: "TENUTA",
        accent: "VITIVINICOLA"
      },
      subtitle: "Case Study",
      image: "https://i.postimg.cc/HnMdMv6b/realizzazioni_infrastrutturavitivinicola_4.jpg"
    },
    
    specs: {
      client: "Azienda Agricola",
      location: "Valdera (PI)",
      year: "2023",
      service: "Strade Agricole"
    },
    
    challenge: {
      title: "La Sfida",
      description: "Rendere accessibile un vigneto storico a mezzi di raccolta automatizzati, rifacendo 2km di viabilità sterrata compromessa."
    },
    
    solution: {
      description: "L'intervento ha previsto la scarifica del fondo esistente, la risagomatura della pendenza 'a schiena d'asino' per il deflusso acque e la stesura di 20cm di stabilizzato calcareo, compattato con rullo vibrante da 120q."
    },
    
    topographic: {
      title: "Rilievo Topografico",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
      dataReadout: "LEN: 2.1km // WIDTH: 4.5m // DRAINAGE: ACTIVE"
    },
    
    gallery: [
      {
        src: "https://i.postimg.cc/VvtmtZKn/realizzazioni_infrastrutturavitivinicola_1.jpg",
        alt: "Vigneto collinare con filari"
      },
      {
        src: "https://i.postimg.cc/QC7h7Yf5/realizzazioni_infrastrutturavitivinicola_2.jpg",
        alt: "Strada poderale tra i vigneti"
      },
      {
        src: "https://i.postimg.cc/brnpnVmn/realizzazioni_infrastrutturavitivinicola_3.jpg",
        alt: "Compattazione stabilizzato con rullo"
      },
      {
        src: "https://i.postimg.cc/HnMdMv6b/realizzazioni_infrastrutturavitivinicola_4.jpg",
        alt: "Risultato finale viabilità agricola"
      },
      {
        src: "https://i.postimg.cc/gcLY1rmt/realizzazioni_infrastrutturavitivinicola_5.jpg",
        alt: "Vista completa infrastruttura vitivinicola"
      }
    ],
    
    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://i.postimg.cc/HnMdMv6b/realizzazioni_infrastrutturavitivinicola_4.jpg",
      title: "Video Cantiere"
    }
  },
  
  {
    id: "3",
    slug: "urbanizzazione-area-industriale",
    
    title: "Urbanizzazione Area Industriale",
    excerpt: "Sbancamento area 5000mq. Posa dorsali fognarie profonde 3m e preparazione massicciata per asfaltatura piazzale logistico.",
    thumbnail: "https://i.postimg.cc/0QdCN9sR/realizzazioni_areaindustriale1.jpg",
    year: "2024",
    publishedAt: "2025-01-15",
    category: "movimento-terra",
    services: ["movimento-terra"],
    
    hero: {
      title: {
        main: "AREA",
        accent: "INDUSTRIALE"
      },
      subtitle: "Case Study",
      image: "https://i.postimg.cc/0QdCN9sR/realizzazioni_areaindustriale1.jpg"
    },
    
    specs: {
      client: "Comune",
      location: "Pontedera (PI)",
      year: "2024",
      service: "Urbanizzazioni"
    },
    
    challenge: {
      title: "La Sfida",
      description: "Sbancamento e preparazione di un'area industriale di 5000mq con posa di reti sotterranee complesse e coordinamento con altri subappaltatori."
    },
    
    solution: {
      description: "Pianificazione dettagliata delle fasi di scavo e posa. Sbancamento eseguito con escavatore 240q e pale gommate 180q per il carico terra. Scavo dorsali fognarie con laser guide per garantire pendenze millimetriche. Preparazione massicciata finale con stesura misto granulare 30cm."
    },
    
    topographic: {
      title: "Rilievo Topografico",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
      dataReadout: "AREA: 5000m² // DEPTH: 3m // VOL: 15000m³"
    },
    
    gallery: [
      {
        src: "https://i.postimg.cc/0QdCN9sR/realizzazioni_areaindustriale1.jpg",
        alt: "Sbancamento area industriale 5000mq"
      },
      {
        src: "https://i.postimg.cc/ydXTN7Hq/realizzazioni_areaindustriale2.jpg",
        alt: "Scavo dorsali fognarie profonde"
      },
      {
        src: "https://i.postimg.cc/xCyPd9SW/realizzazioni_areaindustriale3.jpg",
        alt: "Posa sottoservizi e tubazioni"
      },
      {
        src: "https://i.postimg.cc/zBSkfq1s/realizzazioni_areaindustriale4.jpg",
        alt: "Compattazione massicciata finale"
      },
      {
        src: "https://i.postimg.cc/d1m90JYK/realizzazioni_areaindustriale5.jpg",
        alt: "Vista completa area industriale"
      }
    ],
    
    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://i.postimg.cc/0QdCN9sR/realizzazioni_areaindustriale1.jpg",
      title: "Video Cantiere"
    }
  },

  {
    id: "4",
    slug: "demolizione-cascinale-ricostruzione",

    title: "Demolizione Cascinale e Ripristino Area",
    excerpt:
      "Demolizione controllata di un annesso rurale, selezione materiali e ripristino quote per nuova platea. Intervento rapido, pulito e tracciabile.",
    thumbnail:
      "https://i.postimg.cc/WbJPYy6Z/realizzazioni_demolizione_cascinale_1.jpg",
    year: "2025",
    publishedAt: "2025-10-03",
    category: "demolizioni",
    services: ["demolizioni", "movimento-terra"],

    hero: {
      title: { main: "DEMOLIZIONE", accent: "CASCINALE" },
      subtitle: "Case Study",
      image:
        "https://i.postimg.cc/WbJPYy6Z/realizzazioni_demolizione_cascinale_1.jpg"
    },

    specs: {
      client: "Privato",
      location: "Ponsacco (PI)",
      year: "2025",
      service: "Demolizioni controllate"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Rimuovere un fabbricato in muratura in prossimità di altre strutture, limitando vibrazioni e polveri, garantendo sicurezza e separazione dei materiali."
    },

    solution: {
      description:
        "Abbiamo impostato una demolizione meccanica a fasi con pinza idraulica, bagnatura mirata per contenere le polveri e selezione in sito dei materiali. Gli inerti sono stati frantumati e reimpiegati come sottofondo, riducendo trasporti e tempi."
    },

    gallery: [
      { src: "https://i.postimg.cc/WbJPYy6Z/realizzazioni_demolizione_cascinale_1.jpg", alt: "Cantiere demolizione controllata" },
      { src: "https://i.postimg.cc/qMCdDFXn/realizzazioni_demolizione_cascinale_2.jpg", alt: "Demolizione meccanica con pinza" },
      { src: "https://i.postimg.cc/sDZRHL9v/realizzazioni_demolizione_cascinale_3.jpg", alt: "Separazione materiali e area pulita" },
      { src: "https://i.postimg.cc/QxWrYzkx/realizzazioni_demolizione_cascinale_4.jpg", alt: "Ripristino quote e preparazione sottofondo" },
      { src: "https://i.postimg.cc/pLbMwBqJ/realizzazioni_demolizione_cascinale_5.jpg", alt: "Vista finale demolizione cascinale" }
    ],

    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://i.postimg.cc/WbJPYy6Z/realizzazioni_demolizione_cascinale_1.jpg",
      title: "Video Cantiere"
    }
  },

  {
    id: "5",
    slug: "pulizia-argini-trinciatura-fossi",

    title: "Pulizia Argini e Trinciatura Fossi",
    excerpt:
      "Manutenzione di argini e scoline: trinciatura, rimozione rovi e ripristino accessi poderali. Intervento preventivo per ridurre rischio incendi e ristagni.",
    thumbnail:
      "https://i.postimg.cc/gjHt1vJZ/realizzazioni_argini_e_fossi_1.jpg",
    year: "2025",
    publishedAt: "2025-08-18",
    category: "forestale",
    services: ["forestale", "idrogeologico"],

    hero: {
      title: { main: "PULIZIA", accent: "ARGINI" },
      subtitle: "Case Study",
      image:
        "https://i.postimg.cc/gjHt1vJZ/realizzazioni_argini_e_fossi_1.jpg"
    },

    specs: {
      client: "Azienda Agricola",
      location: "Casciana Terme (PI)",
      year: "2025",
      service: "Sistemazioni forestali e verde"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Ripristinare la sezione idraulica di fossi e argini invasi da vegetazione, senza compromettere le sponde e garantendo l’accessibilità ai mezzi agricoli."
    },

    solution: {
      description:
        "Abbiamo operato con trinciatrice forestale e pulizia selettiva delle sponde, mantenendo pendenze regolari. Dove necessario, abbiamo ricalibrato piccoli tratti e realizzato punti di accesso stabilizzati per la manutenzione futura."
    },

    gallery: [
      { src: "https://i.postimg.cc/gjHt1vJZ/realizzazioni_argini_e_fossi_1.jpg", alt: "Trinciatura vegetazione lungo fossi" },
      { src: "https://i.postimg.cc/T1JNBrwJ/realizzazioni_argini_e_fossi_2.jpg", alt: "Pulizia argini e sottobosco" },
      { src: "https://i.postimg.cc/C5sr9j18/realizzazioni_argini_e_fossi_3.jpg", alt: "Ripristino accessi poderali" },
      { src: "https://i.postimg.cc/cCBkPQHR/realizzazioni_argini_e_fossi_4.jpg", alt: "Risultato finale: argine pulito e scolina libera" },
      { src: "https://i.postimg.cc/L53QGzX7/realizzazioni_argini_e_fossi_5.jpg", alt: "Vista completa pulizia argini" }
    ],

    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://i.postimg.cc/gjHt1vJZ/realizzazioni_argini_e_fossi_1.jpg",
      title: "Video Cantiere"
    }
  },

  {
    id: "6",
    slug: "difesa-spondale-scogliera-massi",

    title: "Difesa Spondale con Scogliera in Massi",
    excerpt:
      "Consolidamento sponda e regimazione acque: posa massi ciclopici e riprofilatura alveo per proteggere campi e accessi dopo erosione.",
    thumbnail:
      "https://i.postimg.cc/yN61GP8y/realizzazioni_difesa_spondale_1.jpg",
    year: "2025",
    publishedAt: "2025-06-05",
    category: "idrogeologico",
    services: ["idrogeologico", "movimento-terra"],

    hero: {
      title: { main: "DIFESA", accent: "SPONDALE" },
      subtitle: "Case Study",
      image:
        "https://i.postimg.cc/yN61GP8y/realizzazioni_difesa_spondale_1.jpg"
    },

    specs: {
      client: "Consorzio",
      location: "Pontedera (PI)",
      year: "2025",
      service: "Sistemazioni idrogeologiche"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Mettere in sicurezza una sponda in erosione con accesso ridotto e tempi stretti, garantendo stabilità nel tempo e minimo impatto sul deflusso."
    },

    solution: {
      description:
        "Abbiamo preparato il piano di posa con scavo e geotessile, quindi posizionato massi ciclopici con escavatore e pinza, creando un profilo di sponda regolare. Completamento con regimazione delle acque e rinverdimento delle aree di raccordo."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
      dataReadout: "BANK: 48m // MASSI: 62t // FLOW: CONTROLLED"
    },

    gallery: [
      { src: "https://i.postimg.cc/yN61GP8y/realizzazioni_difesa_spondale_1.jpg", alt: "Posa massi ciclopici per scogliera" },
      { src: "https://i.postimg.cc/R0CSYRZc/realizzazioni_difesa_spondale_2.jpg", alt: "Scavo e preparazione piano di posa" },
      { src: "https://i.postimg.cc/hG4DYrtb/realizzazioni_difesa_spondale_3.jpg", alt: "Riprofilatura alveo e sponda" }
    ],

    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://i.postimg.cc/yN61GP8y/realizzazioni_difesa_spondale_1.jpg",
      title: "Video Cantiere"
    }
  },

  {
    id: "7",
    slug: "realizzazione-bacino-irriguo-collina",

    title: "Realizzazione Bacino Irriguo Collinare",
    excerpt:
      "Scavo e modellazione bacino per irrigazione, gestione terre e sistemazione accessi. Progetto pensato per durare e integrarsi nel paesaggio.",
    thumbnail:
      "https://i.postimg.cc/hjgjKBs3/realizzazioni_bacinoirriguocollinare_1.jpg",
    year: "2024",
    publishedAt: "2025-03-12",
    category: "bacini",
    services: ["bacini", "movimento-terra", "idrogeologico"],

    hero: {
      title: { main: "BACINO", accent: "IRRIGUO" },
      subtitle: "Case Study",
      image:
        "https://i.postimg.cc/hjgjKBs3/realizzazioni_bacinoirriguocollinare_1.jpg"
    },

    specs: {
      client: "Azienda Agricola",
      location: "Terricciola (PI)",
      year: "2024",
      service: "Bacini idrici e consolidamenti"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Realizzare un invaso collinare ottimizzando volumi di scavo e pendenze, garantendo accessibilità mezzi e controllo delle acque meteoriche."
    },

    solution: {
      description:
        "Scavo in fasi con modellazione delle sponde e creazione di aree di manovra. Le terre idonee sono state reimpiegate per rimodellare i margini e creare una pista di servizio; regimazione acque con canalette e scarichi controllati."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
      dataReadout: "VOL: 8200m³ // SLOPE: 18% // STORAGE: ACTIVE"
    },

    gallery: [
      { src: "https://i.postimg.cc/hjgjKBs3/realizzazioni_bacinoirriguocollinare_1.jpg", alt: "Bacino irriguo collinare - vista 1" },
      { src: "https://i.postimg.cc/FRmRh4pG/realizzazioni_bacinoirriguocollinare_2.jpg", alt: "Bacino irriguo collinare - vista 2" },
      { src: "https://i.postimg.cc/Pxhxdjy3/realizzazioni_bacinoirriguocollinare_3.jpg", alt: "Bacino irriguo collinare - vista 3" },
      { src: "https://i.postimg.cc/NMYMQcDz/realizzazioni_bacinoirriguocollinare_4.jpg", alt: "Bacino irriguo collinare - vista 4" },
      { src: "https://i.postimg.cc/B6s6J0pk/realizzazioni_bacinoirriguocollinare_5.jpg", alt: "Bacino irriguo collinare - vista 5" }
    ],

    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://i.postimg.cc/hjgjKBs3/realizzazioni_bacinoirriguocollinare_1.jpg",
      title: "Video Cantiere"
    }
  },

  {
    id: "8",
    slug: "rifacimento-strada-bianca-drenaggi",

    title: "Rifacimento Strada Bianca con Drenaggi",
    excerpt:
      "Risanamento strada poderale con scarifica, stesura stabilizzato e drenaggi laterali. Intervento mirato per aumentare portanza e durata nel tempo.",
    thumbnail:
      "https://i.postimg.cc/50wsFw87/realizzazioni_rifacimento_Stradabianca_1.jpg",
    year: "2025",
    publishedAt: "2025-11-12",
    category: "strade-piazzali",
    services: ["strade-piazzali", "idrogeologico"],

    hero: {
      title: { main: "STRADA", accent: "PODERALE" },
      subtitle: "Case Study",
      image:
        "https://i.postimg.cc/50wsFw87/realizzazioni_rifacimento_Stradabianca_1.jpg"
    },

    specs: {
      client: "Azienda Agricola",
      location: "Peccioli (PI)",
      year: "2025",
      service: "Strade e piazzali"
    },

    challenge: {
      title: "La Sfida",
      description:
        "Ripristinare la viabilità su fondo argilloso soggetto a ristagni, assicurando deflusso acque e portanza per mezzi pesanti durante la stagione di lavoro."
    },

    solution: {
      description:
        "Scarifica del fondo, riprofilatura a schiena d’asino e stesura di misto granulare calibrato. Abbiamo inserito drenaggi laterali e attraversamenti nei punti critici per eliminare ristagni e prolungare la vita della strada."
    },

    topographic: {
      title: "Rilievo Topografico",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop",
      dataReadout: "LEN: 1.6km // WIDTH: 4.0m // DRAIN: NEW"
    },

    gallery: [
      { src: "https://i.postimg.cc/50wsFw87/realizzazioni_rifacimento_Stradabianca_1.jpg", alt: "Fondo strada in ripristino" },
      { src: "https://i.postimg.cc/0QpVJp7V/realizzazioni_rifacimento_Stradabianca_2.jpg", alt: "Stesura stabilizzato e rullatura" },
      { src: "https://i.postimg.cc/9MGLqGyJ/realizzazioni_rifacimento_Stradabianca_3.jpg", alt: "Drenaggi laterali e canalette" },
      { src: "https://i.postimg.cc/HJ20v923/realizzazioni-rifacimento-Stradabianca-4.jpg", alt: "Risultato finale strada bianca" },
      { src: "https://i.postimg.cc/bDwx7SCx/realizzazioni-rifacimento-Stradabianca-5.jpg", alt: "Vista panoramica strada completata" },
      { src: "https://i.postimg.cc/hztLkQyb/realizzazioni-rifacimento-Stradabianca-6.jpg", alt: "Dettaglio rifacimento strada bianca" }
    ],

    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://i.postimg.cc/50wsFw87/realizzazioni_rifacimento_Stradabianca_1.jpg",
      title: "Video Cantiere"
    }
  }
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
  return projects.filter(project => project.category === category);
}

