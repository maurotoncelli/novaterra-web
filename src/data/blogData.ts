// src/data/blogData.ts
// Configurazione centralizzata per Blog + Articoli

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO format: "2025-01-15"
  category: BlogCategory;
  thumbnail?: string;
  author?: string;
  readTime?: number; // minuti
}

export type BlogCategory = 
  | "incentivi"
  | "case-study"
  | "eventi"
  | "curiosita"
  | "tutti"; // Per filtro "tutti"

export const blogCategories: Record<BlogCategory, string> = {
  "tutti": "Tutti",
  "incentivi": "Incentivi",
  "case-study": "Case Study",
  "eventi": "Eventi",
  "curiosita": "Curiosità"
};

export const blogHero = {
  subtitle: "Aggiornamenti",
  title: {
    main: "NOTIZIE &",
    accent: "INSIGHT" // Corsivo
  },
  image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2700&auto=format&fit=crop"
};

// Mock articles (oggi statico, domani da WordPress)
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "ristrutturazioni-2025-detrazioni-movimento-terra",
    title: "Ristrutturazioni 2025: le detrazioni per il movimento terra.",
    excerpt: "Con le novità fiscali, molti clienti si chiedono se gli incentivi coprano anche scavi e sistemazioni. Ecco una panoramica delle agevolazioni applicabili.",
    date: "2025-01-15",
    category: "incentivi",
    thumbnail: "https://images.unsplash.com/photo-1590240362304-45e0322b7937?q=80&w=800&auto=format&fit=crop",
    readTime: 5
  },
  {
    id: "2",
    slug: "incentivi-imprese-2025-macchinari",
    title: "Incentivi Imprese 2025: macchinari e credito d'imposta.",
    excerpt: "Guida alle agevolazioni per l'acquisto di beni strumentali nel settore movimento terra. ZES, industria 4.0 e nuove opportunità.",
    date: "2025-02-10",
    category: "incentivi",
    thumbnail: "https://images.unsplash.com/photo-1574360778004-945657805625?q=80&w=800&auto=format&fit=crop",
    readTime: 6
  },
  {
    id: "3",
    slug: "sopralluogo-tecnico-investimento-migliore",
    title: "Sopralluogo Tecnico: perché è l'investimento migliore.",
    excerpt: "Evitare errori di quota e smottamenti inizia prima di accendere i motori. L'importanza dell'analisi preliminare e del computo.",
    date: "2025-03-05",
    category: "curiosita",
    thumbnail: "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?q=80&w=800&auto=format&fit=crop",
    readTime: 4
  },
  {
    id: "4",
    slug: "vigneti-collina-preparare-terreno-toscana",
    title: "Vigneti in Collina: preparare il terreno in Toscana.",
    excerpt: "Sbancamenti, terrazzamenti e drenaggi per impianti vitivinicoli di qualità. Come operiamo a Terricciola e in Valdera rispettando il paesaggio.",
    date: "2025-04-20",
    category: "case-study",
    thumbnail: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop",
    readTime: 7
  },
  {
    id: "5",
    slug: "sistemazioni-idrauliche-norme-post-alluvione",
    title: "Sistemazioni Idrauliche e Norme Post-Alluvione.",
    excerpt: "Consolidamento argini e pulizia corsi d'acqua sono diventati prioritari. Le best practice per la sicurezza idrogeologica del territorio.",
    date: "2025-05-12",
    category: "curiosita",
    thumbnail: "https://images.unsplash.com/photo-1461887036734-6c3e622b947b?q=80&w=800&auto=format&fit=crop",
    readTime: 5
  },
  {
    id: "6",
    slug: "edilizia-2025-impatto-bonus-cantieri",
    title: "Edilizia 2025: impatto dei bonus sui cantieri.",
    excerpt: "Come le modifiche al Superbonus e Sismabonus influenzano la fase di scavo e fondazione. Un punto di vista tecnico per imprese e privati.",
    date: "2025-06-08",
    category: "incentivi",
    thumbnail: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    readTime: 6
  }
];

// Funzioni helper
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", 
                "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];
  return `${mesi[date.getMonth()]} ${date.getFullYear()}`;
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function filterPostsByCategory(posts: BlogPost[], category: BlogCategory): BlogPost[] {
  if (category === "tutti") return posts;
  return posts.filter(post => post.category === category);
}

