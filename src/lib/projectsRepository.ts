import {
  filterProjectsByCategory,
  projects as fallbackProjects,
  sortProjectsByPublishedAt,
  sortProjectsByYear,
  type Project,
  type ProjectCategory,
  type ServiceSlug,
} from "../data/projectsData";
import { loadProjectsFromCms, loadRealizzazioniHero, type PageHero } from "./cms";

function withCardCover(project: Project): Project {
  return { ...project, thumbnail: project.hero.image };
}

async function readProjects(): Promise<Project[]> {
  const fromCms = await loadProjectsFromCms();
  return fromCms.length ? fromCms : fallbackProjects;
}

export async function getAllProjects(): Promise<Project[]> {
  return sortProjectsByYear(await readProjects()).map(withCardCover);
}

export async function getLatestProject(): Promise<Project | undefined> {
  const latest = sortProjectsByPublishedAt(await readProjects())[0];
  return latest ? withCardCover(latest) : undefined;
}

export async function getProjectsByCategory(category: ProjectCategory): Promise<Project[]> {
  const filtered = filterProjectsByCategory(await readProjects(), category);
  return sortProjectsByYear(filtered).map(withCardCover);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const project = (await readProjects()).find((item) => item.slug === slug);
  return project ? withCardCover(project) : undefined;
}

export async function getProjectsByServices(services: ServiceSlug[], limit = 3): Promise<Project[]> {
  if (!services.length) return [];
  const ordered = sortProjectsByPublishedAt(await readProjects());
  const filtered = ordered.filter((project) =>
    project.services?.some((service) => services.includes(service))
  );
  return filtered.slice(0, Math.max(0, limit)).map(withCardCover);
}

export async function getAllProjectSlugs(): Promise<string[]> {
  return (await readProjects()).map((project) => project.slug);
}

export async function projectExists(slug: string): Promise<boolean> {
  return (await readProjects()).some((project) => project.slug === slug);
}

export async function getProjectsHero(): Promise<PageHero> {
  return loadRealizzazioniHero();
}
