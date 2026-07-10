// Per-block photos for SEO landing content sections.
// Central place to swap images — when the client sends real per-service photos,
// edit only this file (keyed by page slug → section id).
// Sections without an entry fall back to a topical gradient icon in the template.

export const sectionImages: Record<string, Record<string, string>> = {
  'carpet-cleaning': {
    'carpet-at-home': '/images/carpet/cotton.webp',
    'carpet-materials-methods': '/images/carpet/polyester.webp',
    'professional-carpet-cleaning': '/images/carpet/rugs.webp',
  },
  'premium-rug-cleaning': {
    'persian-handmade-rug-cleaning': '/images/carpet/handmade.webp',
    'wool-silk-viscose-rug-cleaning': '/images/carpet/wool.webp',
    'premium-rug-process': '/images/carpet/pure-wool.webp',
    'premium-rug-company': '/images/carpet/rugs.webp',
  },
  'carpet-flooring-cleaning': {
    'carpet-flooring-materials-methods': '/images/service/kovrolin2.webp',
    'carpet-flooring-scope': '/images/service/kovrolin3.webp',
  },
  'sofa-cleaning': {
    'leather-sofa-cleaning': '/images/sofa/leather-sofa.webp',
    'sofa-materials-methods': '/images/sofa/standart-sofa.webp',
  },
  'upholstery-cleaning': {
    'upholstery-materials-methods': '/images/sofa/chear.webp',
    'professional-upholstery-cleaning': '/images/sofa/standart-sofa.webp',
  },
  'curtain-cleaning': {
    'curtain-at-home': '/images/curtains/chistka-na-meste.webp',
    'curtain-materials-methods': '/images/curtains/texstil.webp',
    'curtain-blinds-factory-steaming': '/images/curtains/machina-chistka.webp',
  },
  'mattress-cleaning': {
    'mattress-materials-methods': '/images/service/matras2.webp',
    'professional-mattress-cleaning': '/images/service/matras3.webp',
  },
  'central-ac-cleaning': {
    'commercial-central-ac-cleaning': '/images/ac/promyshlena.webp',
    'professional-central-ac-cleaning': '/images/ac/gluboka.webp',
    'central-ac-scope': '/images/ac/standart.webp',
  },
  'window-cleaning': {
    'window-at-home': '/images/cleaning/legka.webp',
    'window-materials-methods': '/images/cleaning/poverhna.webp',
    'professional-window-cleaning': '/images/cleaning/okna.webp',
  },
};

export function getSectionImage(slug: string, sectionId: string): string | undefined {
  return sectionImages[slug]?.[sectionId];
}
