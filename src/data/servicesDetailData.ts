// src/data/servicesDetailData.ts
// Configurazione centralizzata per le pagine dettaglio servizi

export interface ServiceDetailContent {
  id: string;
  slug: string;
  serviceNumber: string;
  
  hero: {
    title: {
      main: string;
      accent: string;
    };
    subtitle: string;
    image: string;
    backLink: string;
  };
  
  content: {
    introParagraph: string;
    bodyParagraph: string;
  };
  
  infoCard: {
    title: string;
    items: string[];
  };
  
  gallery: {
    title: string;
    images: Array<{
      src: string;
      alt: string;
      width?: number;
      height?: number;
      /**
       * Optional aspect hint for fixed-ratio tiles.
       * - landscape => 3/2
       * - portrait  => 2/3
       *
       * CMS-ready: this can map to a WP/ACF field in the future.
       */
      aspect?: "landscape" | "portrait";
    }>;
  };
  
  video?: {
    title: string;
    embedUrl?: string;
    mp4Url?: string;
    thumbnail?: string;
  };
  
  cta?: {
    text: string;
    link: string;
  };
}

export const servicesDetail: Record<string, ServiceDetailContent> = {
  "movimento-terra": {
    id: "movimento-terra",
    slug: "movimento-terra",
    serviceNumber: "01",
    
    hero: {
      title: {
        main: "MOVIMENTO TERRA",
        accent: "E SBANCAMENTI"
      },
      subtitle: "Servizio 01",
      image: "https://i.postimg.cc/Qt3nx6RN/servizi-Movimento-terra-e-sbancamenti-2.jpg",
      backLink: "/servizi"
    },
    
    content: {
      introParagraph: "La base di ogni costruzione solida è uno scavo eseguito a regola d'arte.",
      bodyParagraph: "Eseguiamo scavi a sezione obbligata per fondazioni, sbancamenti di massa per livellamento piazzali e scavi in trincea. La nostra esperienza ci permette di operare su terreni complessi, argillosi o rocciosi, tipici della Valdera, garantendo quote precise grazie alla tecnologia laser."
    },
    
    infoCard: {
      title: "Interventi Tipici",
      items: [
        "Scavi di fondazione a sezione obbligata",
        "Sbancamenti di massa",
        "Livellamento terreni agricoli e civili",
        "Scavi in trincea per sottoservizi"
      ]
    },
    
    gallery: {
      title: "Galleria Lavori",
      images: [
        {
          src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
          alt: "Scavo fondazione",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=1200",
          alt: "Sbancamento terreno",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=1200",
          alt: "Livellamento piazzale",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1590240362304-45e0322b7937?q=80&w=1200",
          alt: "Scavo in trincea",
          width: 1200,
          height: 800
        }
      ]
    },
    
    cta: {
      text: "RICHIEDI UN PREVENTIVO",
      link: "/contatti"
    }
  },
  
  "strade-piazzali": {
    id: "strade-piazzali",
    slug: "strade-piazzali",
    serviceNumber: "02",
    
    hero: {
      title: {
        main: "STRADE E",
        accent: "PIAZZALI"
      },
      subtitle: "Servizio 02",
      image: "https://i.postimg.cc/v8XSbth2/servizi-realizzazione-strade-e-piazzali.jpg",
      backLink: "/servizi"
    },
    
    content: {
      introParagraph: "Creiamo le connessioni che rendono un territorio vivibile e produttivo.",
      bodyParagraph: "Realizziamo infrastrutture viarie complete: dalla sagomatura del fondo alla stesura di stabilizzato e asfaltature. Siamo specializzati nel rifacimento di strade bianche poderali, garantendo il corretto deflusso delle acque meteoriche per una durata nel tempo."
    },
    
    infoCard: {
      title: "Interventi Tipici",
      items: [
        "Strade bianche e poderali",
        "Asfaltature e pavimentazioni",
        "Piazzali industriali e parcheggi",
        "Urbanizzazioni primarie"
      ]
    },
    
    gallery: {
      title: "Galleria Lavori",
      images: [
        {
          src: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=1200",
          alt: "Realizzazione strada poderale",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200",
          alt: "Asfaltatura piazzale",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1544642080-3889c45ef537?q=80&w=1200",
          alt: "Strada bianca completata",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200",
          alt: "Parcheggio industriale",
          width: 1200,
          height: 800
        }
      ]
    },
    
    cta: {
      text: "RICHIEDI UN PREVENTIVO",
      link: "/contatti"
    }
  },
  
  "demolizioni": {
    id: "demolizioni",
    slug: "demolizioni",
    serviceNumber: "03",
    
    hero: {
      title: {
        main: "DEMOLIZIONI",
        accent: "CONTROLLATE"
      },
      subtitle: "Servizio 03",
      image: "https://i.postimg.cc/9Q06vnjT/servizi-demolizioni-2.jpg",
      backLink: "/servizi"
    },
    
    content: {
      introParagraph: "Decostruire per ricostruire. Interveniamo su edifici civili e industriali con precisione chirurgica.",
      bodyParagraph: "Utilizziamo pinze idrauliche e frantumatori per minimizzare polveri e vibrazioni. Fondamentale è la gestione dei materiali di risulta: separiamo ferro, legno, plastica e inerti direttamente in cantiere per un corretto smaltimento e riciclo."
    },
    
    infoCard: {
      title: "Specifiche Tecniche",
      items: [
        "Demolizione meccanica edifici",
        "Strip-out (demolizione selettiva)",
        "Frantumazione e deferrizzazione",
        "Smaltimento materiali autorizzato"
      ]
    },
    
    gallery: {
      title: "Galleria Lavori",
      images: [
        {
          src: "https://images.unsplash.com/photo-1574360778004-945657805625?q=80&w=1200",
          alt: "Demolizione controllata edificio",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1590240362304-45e0322b7937?q=80&w=1200",
          alt: "Pinza idraulica in azione",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1200",
          alt: "Frantumazione materiali",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200",
          alt: "Cantiere demolizione",
          width: 1200,
          height: 800
        }
      ]
    },
    
    cta: {
      text: "RICHIEDI UN PREVENTIVO",
      link: "/contatti"
    }
  },
  
  "forestale": {
    id: "forestale",
    slug: "forestale",
    serviceNumber: "04",
    
    hero: {
      title: {
        main: "FORESTALE",
        accent: "E VERDE"
      },
      subtitle: "Servizio 04",
      image: "https://i.postimg.cc/CM49dghb/servizi-forestale-verde-abbattimenti.jpg",
      backLink: "/servizi"
    },
    
    content: {
      introParagraph: "Cura del patrimonio verde e manutenzione del territorio agricolo.",
      bodyParagraph: "Disponiamo di trinciatrici forestali pesanti per la pulizia di terreni incolti, rovi e sottobosco. Eseguiamo abbattimenti controllati di alberature pericolose e manutenzione ordinaria di aree verdi estese. Un servizio essenziale per la prevenzione incendi e la fruibilità dei fondi agricoli."
    },
    
    infoCard: {
      title: "Interventi Tipici",
      items: [
        "Pulizia boschi e terreni incolti",
        "Trinciatura argini e fossi",
        "Abbattimento alberi alto fusto",
        "Manutenzione verde agricolo"
      ]
    },
    
    gallery: {
      title: "Galleria Lavori",
      images: [
        {
          src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
          alt: "Pulizia bosco",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200",
          alt: "Trinciatura terreno",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200",
          alt: "Manutenzione verde",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200",
          alt: "Abbattimento controllato",
          width: 1200,
          height: 800
        }
      ]
    },
    
    cta: {
      text: "RICHIEDI UN PREVENTIVO",
      link: "/contatti"
    }
  },
  
  "idrogeologico": {
    id: "idrogeologico",
    slug: "idrogeologico",
    serviceNumber: "05",
    
    hero: {
      title: {
        main: "SISTEMAZIONI",
        accent: "IDROGEOLOGICHE"
      },
      subtitle: "Servizio 05",
      image: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=2700&auto=format&fit=crop",
      backLink: "/servizi"
    },
    
    content: {
      introParagraph: "Difendere la terra dall'acqua. Interventi essenziali per la sicurezza del territorio.",
      bodyParagraph: "Realizziamo scogliere in massi ciclopici per la difesa spondale e il contenimento di frane. Ci occupiamo della profilatura di fossi e canali di scolo per garantire il corretto deflusso delle acque, prevenendo allagamenti ed erosione."
    },
    
    infoCard: {
      title: "Interventi Tipici",
      items: [
        "Scogliere di contenimento",
        "Regimazione acque superficiali",
        "Pulizia fossi e canali",
        "Ingegneria naturalistica"
      ]
    },
    
    gallery: {
      title: "Galleria Lavori",
      images: [
        {
          src: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1200",
          alt: "Scogliera contenimento",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1574360778004-945657805625?q=80&w=1200",
          alt: "Regimazione acque",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200",
          alt: "Pulizia fosso",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1599940824399-b87987ced72a?q=80&w=1200",
          alt: "Opera idrogeologica",
          width: 1200,
          height: 800
        }
      ]
    },
    
    cta: {
      text: "RICHIEDI UN PREVENTIVO",
      link: "/contatti"
    }
  },
  
  "bacini": {
    id: "bacini",
    slug: "bacini",
    serviceNumber: "06",
    
    hero: {
      title: {
        main: "BACINI IDRICI",
        accent: "E CONSOLIDAMENTI"
      },
      subtitle: "Servizio 06",
      image: "https://i.postimg.cc/GmSCt1jN/servizi-bacini-idrici-e-consolidamenti.jpg",
      backLink: "/servizi"
    },
    
    content: {
      introParagraph: "Creazione di riserve idriche strategiche e messa in sicurezza dei versanti.",
      bodyParagraph: "Progettiamo e realizziamo laghi artificiali per irrigazione o scopo ornamentale, curando l'impermeabilizzazione e le opere di presa. Interveniamo su versanti instabili con opere di consolidamento come palificate in legno e terre armate, integrando le strutture nel paesaggio circostante."
    },
    
    infoCard: {
      title: "Specifiche Tecniche",
      items: [
        "Scavo e modellazione laghi",
        "Palificate in legno e pietrame",
        "Terre armate e rinverdimento",
        "Consolidamento versanti in frana"
      ]
    },
    
    gallery: {
      title: "Galleria Lavori",
      images: [
        {
          src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
          alt: "Lago artificiale completato",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200",
          alt: "Bacino idrico",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1497250681960-ef04efc2904c?q=80&w=1200",
          alt: "Consolidamento versante",
          width: 1200,
          height: 800
        },
        {
          src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200",
          alt: "Palificata in legno",
          width: 1200,
          height: 800
        }
      ]
    },
    
    cta: {
      text: "RICHIEDI UN PREVENTIVO",
      link: "/contatti"
    }
  }
};

