// src/lib/blogRepository.ts
// Repository layer per gestire articoli blog (futuro WordPress)

import { blogPosts, sortPostsByDate, filterPostsByCategory, type BlogPost, type BlogCategory } from '../data/blogData';

/**
 * Ottiene tutti gli articoli ordinati per data (più recenti prima)
 */
export function getAllPosts(): BlogPost[] {
  return sortPostsByDate(blogPosts);
}

/**
 * Ottiene articoli filtrati per categoria
 */
export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  const filtered = filterPostsByCategory(blogPosts, category);
  return sortPostsByDate(filtered);
}

/**
 * Ottiene un articolo per slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Ottiene tutti gli slug (per getStaticPaths)
 */
export function getAllPostSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

/**
 * Verifica se un post esiste
 */
export function postExists(slug: string): boolean {
  return blogPosts.some(post => post.slug === slug);
}

// Futuro: WordPress integration
// export async function getPostsFromWordPress() {
//   const res = await fetch('https://tuosito.com/wp-json/wp/v2/posts?_embed');
//   return res.json();
// }

