// src/lib/servicesRepository.ts
// Repository layer per gestire i servizi (data-driven, futuro CMS)

import { servicesDetail, type ServiceDetailContent } from '../data/servicesDetailData';

/**
 * Ottiene tutti i servizi disponibili
 */
export function getAllServices(): ServiceDetailContent[] {
  return Object.values(servicesDetail);
}

/**
 * Ottiene un servizio specifico per slug
 */
export function getServiceBySlug(slug: string): ServiceDetailContent | undefined {
  return servicesDetail[slug];
}

/**
 * Ottiene tutti gli slug dei servizi (per getStaticPaths)
 */
export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesDetail);
}

/**
 * Verifica se un servizio esiste
 */
export function serviceExists(slug: string): boolean {
  return slug in servicesDetail;
}

// Futuro: qui aggiungeremo fetch WordPress REST API
// export async function getServiceFromCMS(slug: string) { ... }



