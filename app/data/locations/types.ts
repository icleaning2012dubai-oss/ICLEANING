// Shared type for area/location pages. Content covers ONLY the 9 specialty
// services (no general/deep/villa/apartment cleaning). Pages are noindex.
export interface LocationPage {
  slug: string;
  h1: { ru: string; en: string; ar: string };
  title: { ru: string; en: string; ar: string };
  description: { ru: string; en: string; ar: string };
  content: { ru: string; en: string; ar: string };
}
