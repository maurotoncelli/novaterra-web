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
  image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2800&auto=format&fit=crop"
};

export interface Project {
  id: string;
  slug: string;
  
  // Preview (usato nella lista)
  title: string;
  excerpt: string;
  thumbnail: string; // Immagine per card lista
  year: string;
  category: ProjectCategory;
  
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
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2700&auto=format&fit=crop",
    year: "2024",
    category: "movimento-terra",
    
    hero: {
      title: {
        main: "IL POGGIO",
        accent: "RESIDENZA"
      },
      subtitle: "Case Study",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2700&auto=format&fit=crop"
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
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
        alt: "Dettaglio scavo fondazione in pendenza"
      },
      {
        src: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=1200",
        alt: "Escavatore su terreno argilloso"
      },
      {
        src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200",
        alt: "Mezzi pesanti al lavoro"
      },
      {
        src: "https://images.unsplash.com/photo-1622322062590-e5191f8c6b85?q=80&w=1200",
        alt: "Completamento opere di contenimento"
      }
    ],
    
    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder", // Placeholder per ora
      thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
      title: "Video Cantiere"
    }
  },
  
  {
    id: "2",
    slug: "infrastruttura-vitivinicola-valdera",
    
    title: "Infrastruttura Vitivinicola",
    excerpt: "Rifacimento di 2km di strada poderale per accesso mezzi pesanti. Stesura stabilizzato, rullatura e creazione canaline di scolo acque.",
    thumbnail: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2700&auto=format&fit=crop",
    year: "2023",
    category: "strade-piazzali",
    
    hero: {
      title: {
        main: "TENUTA",
        accent: "VITIVINICOLA"
      },
      subtitle: "Case Study",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2700&auto=format&fit=crop"
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
        src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1200",
        alt: "Vigneto collinare con filari"
      },
      {
        src: "https://images.unsplash.com/photo-1595245862276-249cb7372994?q=80&w=1200",
        alt: "Strada poderale tra i vigneti"
      },
      {
        src: "https://images.unsplash.com/photo-1622322062590-e5191f8c6b85?q=80&w=1200",
        alt: "Compattazione stabilizzato con rullo"
      },
      {
        src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200",
        alt: "Risultato finale viabilità agricola"
      }
    ],
    
    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200",
      title: "Video Cantiere"
    }
  },
  
  {
    id: "3",
    slug: "urbanizzazione-area-industriale",
    
    title: "Urbanizzazione Area Industriale",
    excerpt: "Sbancamento area 5000mq. Posa dorsali fognarie profonde 3m e preparazione massicciata per asfaltatura piazzale logistico.",
    thumbnail: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2700&auto=format&fit=crop",
    year: "2024",
    category: "movimento-terra",
    
    hero: {
      title: {
        main: "AREA",
        accent: "INDUSTRIALE"
      },
      subtitle: "Case Study",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2700&auto=format&fit=crop"
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
        src: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200",
        alt: "Sbancamento area industriale 5000mq"
      },
      {
        src: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=1200",
        alt: "Scavo dorsali fognarie profonde"
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
        alt: "Posa sottoservizi e tubazioni"
      },
      {
        src: "https://images.unsplash.com/photo-1622322062590-e5191f8c6b85?q=80&w=1200",
        alt: "Compattazione massicciata finale"
      }
    ],
    
    video: {
      type: "mp4",
      url: "https://player.vimeo.com/video/placeholder",
      thumbnail: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=1200",
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

export function filterProjectsByCategory(projects: Project[], category: ProjectCategory): Project[] {
  if (category === "tutti") return projects;
  return projects.filter(project => project.category === category);
}

