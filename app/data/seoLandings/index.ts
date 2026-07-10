import type { SeoLanding } from './types';
import { carpetCleaning } from './carpet-cleaning';
import { premiumRugCleaning } from './premium-rug-cleaning';
import { carpetFlooringCleaning } from './carpet-flooring-cleaning';
import { sofaCleaning } from './sofa-cleaning';
import { upholsteryCleaning } from './upholstery-cleaning';
import { curtainCleaning } from './curtain-cleaning';
import { mattressCleaning } from './mattress-cleaning';
import { centralAcCleaning } from './central-ac-cleaning';
import { windowCleaning } from './window-cleaning';

// Registry of the 9 approved SEO landing pages from the handoff.
const all: SeoLanding[] = [
  carpetCleaning,
  premiumRugCleaning,
  carpetFlooringCleaning,
  sofaCleaning,
  upholsteryCleaning,
  curtainCleaning,
  mattressCleaning,
  centralAcCleaning,
  windowCleaning,
];

export const seoLandings: Record<string, SeoLanding> = Object.fromEntries(
  all.map((p) => [p.slug, p])
);

export function getSeoLanding(slug: string): SeoLanding | undefined {
  return seoLandings[slug];
}

export function isSeoLanding(slug: string): boolean {
  return slug in seoLandings;
}

export function getAllSeoLandingSlugs(): string[] {
  return Object.keys(seoLandings);
}

export type { SeoLanding } from './types';
