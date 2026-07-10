// "Our works" photo strips per landing — real photos from the project library
// (/public/images/{carpet,curtains,sofa,ac,cleaning}). Swap for client photos later.

export const serviceGallery: Record<string, string[]> = {
  'carpet-cleaning': [
    '/images/carpet/rugs.webp',
    '/images/carpet/polyester.webp',
    '/images/carpet/cotton.webp',
    '/images/carpet/wool.webp',
    '/images/carpet/len.webp',
    '/images/carpet/pure-wool.webp',
  ],
  'premium-rug-cleaning': [
    '/images/carpet/silk.webp',
    '/images/carpet/handmade.webp',
    '/images/carpet/wool.webp',
    '/images/carpet/pure-wool.webp',
    '/images/carpet/rugs.webp',
  ],
  'carpet-flooring-cleaning': [
    '/images/service/kovrolin.webp',
    '/images/service/kovrolin2.webp',
    '/images/service/kovrolin3.webp',
  ],
  'sofa-cleaning': [
    '/images/sofa/standart-sofa.webp',
    '/images/sofa/leather-sofa.webp',
    '/images/sofa/chear.webp',
    '/images/sofa_cleaning.webp',
  ],
  'upholstery-cleaning': [
    '/images/sofa/chear.webp',
    '/images/sofa/standart-sofa.webp',
    '/images/sofa/leather-sofa.webp',
    '/images/sofa_cleaning.webp',
  ],
  'curtain-cleaning': [
    '/images/curtains/classic.webp',
    '/images/curtains/rymskiy.webp',
    '/images/curtains/rulon.webp',
    '/images/curtains/plastik.webp',
    '/images/curtains/derevo.webp',
    '/images/curtains/texstil.webp',
  ],
  'mattress-cleaning': [
    '/images/service/matras-hero.webp',
    '/images/service/matras2.webp',
    '/images/service/matras3.webp',
  ],
  'central-ac-cleaning': [
    '/images/ac/standart.webp',
    '/images/ac/gluboka.webp',
    '/images/ac/promyshlena.webp',
    '/images/service/konder.webp',
  ],
  // Only okna.webp is a real window photo in the library — the rest were floors/surfaces.
  // Waiting on client window-work photos (add here like kovrolin/matras).
  'window-cleaning': [
    '/images/cleaning/okna.webp',
  ],
};

export function getServiceGallery(slug: string): string[] {
  return serviceGallery[slug] ?? [];
}
