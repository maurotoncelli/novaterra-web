// src/data/servicesData.ts
// Configurazione centralizzata per la pagina Servizi

export const servicesHero = {
  subtitle: "Panoramica",
  title: {
    main: "SOLUZIONI",
    accent: "COMPLETE"
  },
  image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2800&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "strade-piazzali",
    symbol: "☰",
    title: "Realizzazione strade e piazzali",
    slug: "/servizi/strade-piazzali",
    image: "https://images.unsplash.com/photo-1623018035782-b5e1f19d7ab4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "demolizioni",
    symbol: "✕",
    title: "Demolizioni",
    slug: "/servizi/demolizioni",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "forestale",
    symbol: "↟",
    title: "Forestale / Verde / Abbattimenti",
    slug: "/servizi/forestale",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "idrogeologico",
    symbol: "≈",
    title: "Sistemazioni Idrogeologiche",
    slug: "/servizi/idrogeologico",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bacini",
    symbol: "◉",
    title: "Bacini idrici + Consolidamenti",
    slug: "/servizi/bacini",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=1200&auto=format&fit=crop"
  }
];

