// src/data/aboutData.ts
// Configurazione centralizzata per la pagina Chi Siamo

export const aboutHero = {
  subtitle: "La Nostra Storia",
  title: {
    main: "RADICI PROFONDE.",
    accent: "VISIONE MODERNA", // Corsivo/peso leggero
  },
  image: "https://i.postimg.cc/W3Vdm2yC/chisiamo_radici_profonde_2.jpg",
  parallaxSpeed: 0.5,
  description:
    "Dal 1993 a oggi: esperienza vera, metodo operativo e rispetto del paesaggio toscano."
};

export const founderBio = {
  name: "Riccardo Toncelli",
  role: "Direttore Tecnico",
  image: {
    src: "https://i.postimg.cc/W3mt4FLd/ritratto-riccardo-toncelli-2-3-centrato.jpg",
    alt: "Direttore di Cantiere Novaterra"
  },
  bio: [
    "Sono nato nel 1993 a Terricciola, nel cuore della Valdera. Da bambino ero già sui mezzi di famiglia: lì ho imparato a rispettare la terra e a “sentire” il lavoro prima ancora di chiamarlo professione.",
    "Negli anni ho lavorato in realtà strutturate del movimento terra e in cantieri industriali complessi (tra cui Deferco). È lì che ho capito che la differenza non la fa solo la potenza delle macchine, ma il metodo: sicurezza, organizzazione, pulizia e rispetto di tempi e costi.",
    "Nel 2023 nasce Novaterra: un’impresa giovane, con radici solide nel territorio. Oggi seguo personalmente ogni progetto, dal sopralluogo alla consegna, per dare ai privati e ai tecnici uno standard operativo affidabile — su scavi, sbancamenti, strade, argini, demolizioni e cura del verde."
  ]
};

export const videoSection = {
  subtitle: "Vision",
  title: "Terra, mezzi e territorio: così operiamo.",
  placeholder: "https://i.postimg.cc/7ZcsZRRD/Placeholder_brand_id.jpg",
  video: {
    src: "https://videos.pexels.com/video-files/2882566/2882566-uhd_2560_1440_24fps.mp4",
    type: "video/mp4"
  }
};

export const timeline = {
  subtitle: "Le Tappe",
  title: "EVOLUZIONE TEMPORALE.",
  steps: [
    {
      year: "1993",
      title: "Le Origini",
      description: "Nasco a Terricciola, nel cuore della Valdera. La mia infanzia è passata tra i campi, i trattori e i mezzi agricoli di famiglia. Qui nasce la passione per i motori, per la terra e per il lavoro all'aria aperta."
    },
    {
      year: "2010",
      title: "Gli anni di cantiere",
      description: "Entro nel mondo del lavoro come operatore di mezzi da movimento terra. Negli anni collaboro con diverse realtà del settore, tra cui Deferco, lavorando su cantieri industriali, agricoli e forestali: sbancamenti, strade poderali, taglio boschi, piazzali, bacini idrici, bonifiche. Imparo sul campo l'importanza di sicurezza, organizzazione e lavoro di squadra."
    },
    {
      year: "2023",
      title: "Nasce Novaterra",
      description: "Apro la mia partita IVA e nasce Novaterra a Terricciola. L'idea è semplice e ambiziosa: portare lo standard dei grandi cantieri e delle aziende strutturate dentro i lavori privati, agricoli e residenziali della Toscana, con un'attenzione maniacale per metodo, pulizia e rispetto del paesaggio."
    },
    {
      year: "2026",
      title: "Oggi",
      description: "Novaterra cresce: il parco mezzi si amplia con un nuovo camion 4 assi e macchine sempre più moderne; collaboro con una rete di professionisti e artigiani di fiducia. Lavoriamo in Valdera e provincia di Pisa su scavi, laghi, argini, strade, demolizioni e cura del verde. L'obiettivo dei prossimi anni è trasformare l'attività in una società strutturata, capace di diventare azienda leader in Toscana."
    }
  ]
};

export const ctaSection = {
  text: "RICHIEDI UN PREVENTIVO",
  href: "/contatti"
};



