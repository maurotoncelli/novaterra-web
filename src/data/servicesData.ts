// src/data/servicesData.ts
// Configurazione centralizzata per la pagina Servizi

export const servicesHero = {
  subtitle: "Panoramica",
  title: {
    main: "SOLUZIONI",
    accent: "COMPLETE"
  },
  image: "/images/servizi/forestale.jpg",
  parallaxSpeed: 0.5
};

export const servicesIntro = {
  subtitle: "Cosa Facciamo",
  title: "Ingegneria del Paesaggio"
};

// ========================================
// WORDPRESS INTEGRATION NOTES
// ========================================
// Questo array può essere popolato dinamicamente da WordPress.
// Ogni servizio può essere un Custom Post Type "servizi" con ACF fields:
// - title (text)
// - symbol (text) - es. "▧", "☰", "✕"
// - image (image URL)
// - slug (text) - generato automaticamente da WordPress
// La numerazione (01, 02, 03...) viene generata AUTOMATICAMENTE in base all'ordine.
// Per aggiungere/rimuovere servizi: basta modificare questo array (o WordPress ACF).

export interface Service {
  id: string;
  symbol: string;
  title: string;
  slug: string;
  image: string;
  // Note: 'number' NON è più nel data - viene generato dinamicamente
}

export const servicesList: Service[] = [
  {
    id: "movimento-terra",
    symbol: "▧",
    title: "Movimento terra / Sbancamenti",
    slug: "/servizi/movimento-terra",
    image: "/images/servizi/movimento-terra.jpg"
  },
  {
    id: "strade-piazzali",
    symbol: "☰",
    title: "Realizzazione strade e piazzali",
    slug: "/servizi/strade-piazzali",
    image: "/images/servizi/strade-piazzali.jpg"
  },
  {
    id: "demolizioni",
    symbol: "✕",
    title: "Demolizioni",
    slug: "/servizi/demolizioni",
    image: "/images/servizi/demolizioni.jpg"
  },
  {
    id: "forestale",
    symbol: "↟",
    title: "Forestale / Verde / Abbattimenti",
    slug: "/servizi/forestale",
    image: "/images/servizi/forestale.jpg"
  },
  {
    id: "idrogeologico",
    symbol: "≈",
    title: "Sistemazioni Idrogeologiche",
    slug: "/servizi/idrogeologico",
    image: "/images/servizi/idrogeologico.jpg"
  },
  {
    id: "bacini",
    symbol: "◉",
    title: "Bacini idrici + Consolidamenti",
    slug: "/servizi/bacini",
    image: "/images/servizi/bacini.jpg"
  }
];

