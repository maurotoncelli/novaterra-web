// src/lib/projectsRepository.ts
// Repository layer per gestire progetti (futuro WordPress)

import { projects, sortProjectsByYear, filterProjectsByCategory, type Project, type ProjectCategory } from '../data/projectsData';

/**
 * Ottiene tutti i progetti ordinati per anno (più recenti prima)
 */
export function getAllProjects(): Project[] {
  return sortProjectsByYear(projects);
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



