// src/data/articlesData.ts
// Contenuti completi articoli blog (WordPress-ready)

import type { BlogCategory } from './blogData';

export interface ArticleContent {
  slug: string;
  
  hero: {
    title: {
      main: string;
      accent: string;
    };
    subtitle: string;
    image: string;
    backLink: string;
  };
  
  meta: {
    date: string;
    category: BlogCategory;
    author?: string;
    readTime?: number;
  };
  
  content: {
    paragraphs: string[];
    sections?: Array<{
      title: string;
      content: string | string[];
      image?: {
        src: string;
        alt: string;
      };
    }>;
  };
}

// NOTE:
// Keep the dataset "single source of truth" for the featured image.
// We store it in `hero.image` and then derive any in-article section image src from it.
// This avoids duplicated URLs and keeps the data CMS-ready (one canonical image field).
const rawArticles: Record<string, ArticleContent> = {
  "ristrutturazioni-2025-detrazioni-movimento-terra": {
    slug: "ristrutturazioni-2025-detrazioni-movimento-terra",
    
    hero: {
      title: {
        main: "RISTRUTTURAZIONI",
        accent: "2025"
      },
      subtitle: "Normative",
      image: "https://i.postimg.cc/ZK3Xg8S7/notizie-insight-detrazioni-movimento-terra-copia.jpg",
      backLink: "/blog"
    },
    
    meta: {
      date: "2025-01-15",
      category: "incentivi",
      readTime: 5
    },
    
    content: {
      paragraphs: [
        "Con le recenti modifiche alla legge di bilancio, il panorama delle detrazioni fiscali per l'edilizia ha subito importanti variazioni. Per chi si appresta a iniziare lavori di scavo, sistemazione esterna o movimento terra propedeutici a una ristrutturazione, è fondamentale capire cosa è ancora detraibile."
      ],
      sections: [
        {
          title: "Detrazioni Edilizie e Bonus Casa",
          content: "Il classico bonus ristrutturazioni al 50% è stato confermato, ma con massimali rivisti. Questo bonus copre spesso anche le opere di 'sistemazione a verde' e le opere accessorie se inserite in un titolo abilitativo (CILA/SCIA) più ampio. Gli scavi per le fondazioni di un ampliamento o il rifacimento di fognature e sottoservizi rientrano pienamente in queste casistiche."
        },
        {
          title: "Sismabonus e Consolidamenti",
          content: [
            "Se il movimento terra riguarda il miglioramento sismico (es. consolidamento di versanti franosi a ridosso dell'abitazione, micropali, scogliere), le aliquote possono essere più vantaggiose. Novaterra collabora con ingegneri strutturisti per fornire tutta la documentazione necessaria a certificare l'intervento.",
            "In conclusione, pur essendosi ridotte le aliquote 'shock' del 110%, lo spazio per recuperare parte dell'investimento sui lavori di terra esiste ed è concreto, a patto di muoversi con progetti chiari e fatture tracciabili."
          ],
          image: {
            src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
            alt: "Cantiere ristrutturazione"
          }
        }
      ]
    }
  },
  
  "incentivi-imprese-2025-macchinari": {
    slug: "incentivi-imprese-2025-macchinari",
    
    hero: {
      title: {
        main: "INCENTIVI",
        accent: "IMPRESE 2025"
      },
      subtitle: "Business",
      image: "https://i.postimg.cc/m2MKqYsd/notizie-insight-credito-imposta-macchinari.jpg",
      backLink: "/blog"
    },
    
    meta: {
      date: "2025-02-10",
      category: "incentivi",
      readTime: 6
    },
    
    content: {
      paragraphs: [
        "Il settore del movimento terra richiede investimenti costanti in tecnologia e macchinari. Per il 2025, il piano Transizione 5.0 e i residui di Industria 4.0 offrono ancora spunti interessanti per chi vuole rinnovare il parco mezzi."
      ],
      sections: [
        {
          title: "Credito d'Imposta Beni Strumentali",
          content: [
            "Per escavatori, pale e macchine operatrici dotate di sistemi di interconnessione (GPS, telemetria, controllo remoto), è possibile accedere a crediti d'imposta che riducono significativamente il costo d'acquisto. Novaterra ha investito in una flotta interconnessa proprio sfruttando queste leve, garantendo al cliente finale maggiore precisione e velocità.",
            "Attenzione anche ai bandi regionali e alle agevolazioni per le ZES (Zone Economiche Speciali) se applicabili, che possono cumulare benefici per le micro e piccole imprese del settore edile e agricolo."
          ],
          image: {
            src: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=1200",
            alt: "Macchinario moderno"
          }
        }
      ]
    }
  },
  
  "sopralluogo-tecnico-investimento-migliore": {
    slug: "sopralluogo-tecnico-investimento-migliore",
    
    hero: {
      title: {
        main: "SOPRALLUOGO",
        accent: "TECNICO"
      },
      subtitle: "Metodo",
      image: "https://i.postimg.cc/wTJnPXpn/notizie-insight-sopralluogo-tecnico.jpg",
      backLink: "/blog"
    },
    
    meta: {
      date: "2025-03-05",
      category: "curiosita",
      readTime: 4
    },
    
    content: {
      paragraphs: [
        "Spesso si tende a chiedere 'quanto costa uno scavo al metro cubo?' senza aver visto il cantiere. Questo è l'errore numero uno. Il sopralluogo tecnico non è una formalità, è la base operativa di Novaterra."
      ],
      sections: [
        {
          title: "Cosa analizziamo",
          content: [
            "<strong>Accessibilità:</strong> Ci passa un 4 assi o serve un mezzo piccolo?",
            "<strong>Geologia superficiale:</strong> È terra vegetale, argilla compatta o roccia?",
            "<strong>Quote e Pendenze:</strong> Usiamo livelli laser fin dal primo incontro per capire i volumi reali di sterro e riporto.",
            "Un sopralluogo accurato permette di fornire un preventivo 'a corpo' bloccato, evitando le spiacevoli sorprese degli extra a fine lavori. È una garanzia per il cliente e per noi."
          ],
          image: {
            src: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1200",
            alt: "Tecnico in cantiere"
          }
        }
      ]
    }
  },
  
  "vigneti-collina-preparare-terreno-toscana": {
    slug: "vigneti-collina-preparare-terreno-toscana",
    
    hero: {
      title: {
        main: "VIGNETI IN",
        accent: "COLLINA"
      },
      subtitle: "Agricoltura",
      image: "https://i.postimg.cc/vH9Cjrs2/notizie-insight-preparare-terreno-vigna-copia.jpg",
      backLink: "/blog"
    },
    
    meta: {
      date: "2025-04-20",
      category: "case-study",
      readTime: 7
    },
    
    content: {
      paragraphs: [
        "La Valdera e le colline di Pisa sono terra di vino. Preparare un terreno per un nuovo impianto vitivinicolo richiede una sensibilità particolare, diversa dallo scavo edile."
      ],
      sections: [
        {
          title: "Scasso e Drenaggio",
          content: [
            "Lo scasso profondo (fino a 80-100cm) serve a rompere la suola di lavorazione e arieggiare il terreno. Ma ancora più importante è la regimazione delle acque: creare pendenze e fosse di guardia che impediscano all'acqua di lavare via il terreno fertile durante i temporali, proteggendo le barbatelle.",
            "Novaterra opera con rispetto del paesaggio, realizzando terrazzamenti che si integrano con la morfologia della collina, pronti per ospitare vigneti di eccellenza."
          ],
          image: {
            src: "https://images.unsplash.com/photo-1595245862276-249cb7372994?q=80&w=1200",
            alt: "Vigneto toscano"
          }
        }
      ]
    }
  },
  
  "sistemazioni-idrauliche-norme-post-alluvione": {
    slug: "sistemazioni-idrauliche-norme-post-alluvione",
    
    hero: {
      title: {
        main: "NORME",
        accent: "IDRAULICHE"
      },
      subtitle: "Sicurezza",
      image: "https://i.postimg.cc/pX837fH4/notizie-insight-sistemazioni-idrauliche-post-alluvione.jpg",
      backLink: "/blog"
    },
    
    meta: {
      date: "2025-05-12",
      category: "curiosita",
      readTime: 5
    },
    
    content: {
      paragraphs: [
        "Gli eventi climatici estremi ci impongono una nuova attenzione verso fossi, canali e argini. La manutenzione non è più opzionale, è un obbligo di legge e morale."
      ],
      sections: [
        {
          title: "Interventi Prioritari",
          content: [
            "La pulizia dell'alveo da vegetazione infestante e la riprofilatura delle sponde sono i primi passi. Dove l'erosione è avanzata, interveniamo con scogliere in massi ciclopici o gabbionate, tecniche che stabilizzano la sponda permettendo comunque il drenaggio.",
            "Lavoriamo spesso con consorzi di bonifica e privati confinanti con corsi d'acqua, garantendo interventi rapidi e conformi alle normative ambientali vigenti."
          ],
          image: {
            src: "https://images.unsplash.com/photo-1584972687312-6eb343997cc0?q=80&w=1200",
            alt: "Argine fiume"
          }
        }
      ]
    }
  },
  
  "edilizia-2025-impatto-bonus-cantieri": {
    slug: "edilizia-2025-impatto-bonus-cantieri",
    
    hero: {
      title: {
        main: "EDILIZIA",
        accent: "E SCAVI"
      },
      subtitle: "Mercato",
      image: "https://i.postimg.cc/SN8H56ht/notizie-insight-impatto-bonus-cantieri.jpg",
      backLink: "/blog"
    },
    
    meta: {
      date: "2025-06-08",
      category: "incentivi",
      readTime: 6
    },
    
    content: {
      paragraphs: [
        "Il 2025 segna un ritorno alla normalità dopo l'euforia del Superbonus. Questo significa cantieri più selezionati, clienti più attenti al budget e una richiesta maggiore di qualità."
      ],
      sections: [
        {
          title: "Impatto sul Movimento Terra",
          content: [
            "Meno cappotti termici frettolosi, più ristrutturazioni strutturali e nuove costruzioni mirate (demolizione e ricostruzione). In questo scenario, lo scavo e la fondazione tornano centrali. Un errore in questa fase costa caro.",
            "Novaterra si posiziona come partner tecnico per le imprese edili che cercano subappaltatori affidabili per la gestione della 'parte sporca' del cantiere, garantendo pulizia e precisione millimetrica."
          ],
          image: {
            src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
            alt: "Cantiere edile"
          }
        }
      ]
    }
  }
};

function deriveSectionImagesFromHero(
  input: Record<string, ArticleContent>
): Record<string, ArticleContent> {
  const out: Record<string, ArticleContent> = {};

  for (const [key, article] of Object.entries(input)) {
    const heroSrc = article.hero.image;
    const sections = article.content.sections?.map((section) => {
      if (!section.image) return section;
      return {
        ...section,
        image: {
          ...section.image,
          src: heroSrc,
        },
      };
    });

    out[key] = {
      ...article,
      content: {
        ...article.content,
        sections,
      },
    };
  }

  return out;
}

export const articles: Record<string, ArticleContent> =
  deriveSectionImagesFromHero(rawArticles);
