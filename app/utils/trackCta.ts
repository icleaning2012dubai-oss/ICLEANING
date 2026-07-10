// Lightweight CTA conversion tracking for the SEO landing pages.
// Pushes a normalized event to the GTM dataLayer (GTM + GA4 are loaded in app/layout.tsx).

type TrackParams = {
  page_slug: string;
  service_entity: string;
  section_id: string;
  cta_text: string;
  language: string;
  source_page?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackCta(event: string, params: TrackParams): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params,
    source_page: params.source_page ?? (typeof location !== 'undefined' ? location.pathname : undefined),
  });
}
