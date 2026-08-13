import type { LocationPage } from './locations/types';
import { batch1 } from './locations/batch1';
import { batch2 } from './locations/batch2';
import { batch3 } from './locations/batch3';
import { batch4 } from './locations/batch4';
import { batch5 } from './locations/batch5';
import { batch6 } from './locations/batch6';

export type { LocationPage };

// Area / location pages (noindex — navigation & coverage, not indexed).
// Areas mirror the company's real demand map; content covers ONLY the 9
// specialty services (no general/deep/villa/home cleaning).
export const locationsData: Record<string, LocationPage> = {
  ...batch1,
  ...batch2,
  ...batch3,
  ...batch4,
  ...batch5,
  ...batch6,
};

export function getAllLocationSlugs(): string[] {
  return Object.keys(locationsData);
}
