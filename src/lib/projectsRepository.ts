// src/lib/projectsRepository.ts
// Repository layer per gestire progetti (futuro WordPress)

import { projects, sortProjectsByPublishedAt, sortProjectsByYear, filterProjectsByCategory, type Project, type ProjectCategory, type ServiceSlug } from '../data/projectsData';

/**
 * Ottiene tutti i progetti ordinati per anno (più recenti prima)
 */
export function getAllProjects(): Project[] {
  return sortProjectsByYear(projects);
}

/**
 * Ottiene l'ultimo progetto pubblicato (ordinato per publishedAt)
 */
export function getLatestProject(): Project | undefined {
  return sortProjectsByPublishedAt(projects)[0];
}

/**
 * Ottiene progetti filtrati per categoria
 */
export function getProjectsByCategory(category: ProjectCategory): Project[] {
  const filtered = filterProjectsByCategory(projects, category);
  return sortProjectsByYear(filtered);
}

/**
 * Ottiene un progetto per slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

/**
 * Ottiene le ultime realizzazioni collegate a uno o più servizi (match OR)
 * Ordinamento: publishedAt desc (più recente prima)
 */
export function getProjectsByServices(services: ServiceSlug[], limit = 3): Project[] {
  if (!services.length) return [];
  const ordered = sortProjectsByPublishedAt(projects);
  const filtered = ordered.filter((p) => p.services?.some((s) => services.includes(s)));
  return filtered.slice(0, Math.max(0, limit));
}

/**
 * Ottiene tutti gli slug (per getStaticPaths)
 */
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

/**
 * Verifica se un progetto esiste
 */
export function projectExists(slug: string): boolean {
  return projects.some(project => project.slug === slug);
}

// Futuro: WordPress integration
// export async function getProjectsFromWordPress() {
//   const res = await fetch('https://tuosito.com/wp-json/wp/v2/projects?_embed');
//   return res.json();
// }



