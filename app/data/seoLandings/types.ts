// SEO landing data model - source of truth is the SEO handoff (SEO_ICleaning_EN/RU).
// Content is localized; `ru` and `en` are populated now, `ar` is optional (handoff to follow).

export type Locale = 'ru' | 'en' | 'ar';

/** Localized string. ru/en required in practice; ar optional until the AR handoff arrives. */
export type Loc = { ru: string; en: string; ar?: string };

/** Localized list of strings (paragraphs, bullets, mini-facts). */
export type LocList = { ru: string[]; en: string[]; ar?: string[] };

/**
 * Where a CTA points.
 * - 'whatsapp' → buildWhatsAppLink(language, path) (default)
 * - 'form'     → opens the hero lead form / booking modal
 * - '#anchor'  → scrolls to a section on the page
 */
export type CtaHref = 'whatsapp' | 'form' | `#${string}`;

export interface Cta {
  text: Loc;
  /** GA/dataLayer event name, taken verbatim from the handoff conversion tables. */
  event: string;
  href?: CtaHref; // default 'whatsapp'
}

export interface PriceCard {
  label: Loc;
  scope: Loc;
  /** Kept as a string so we can show "AED 99", "from AED 25 / m²", etc. */
  price: Loc;
  note?: Loc;
}

export interface SeoSection {
  /** Stable HTML id used as the anchor target (preserve exactly per handoff). */
  id: string;
  h2: Loc;
  /** Body paragraphs. */
  body: LocList;
  bullets?: LocList;
  cta?: Cta;
  /** Renders the price-cards block inside this section when true. */
  showPriceCards?: boolean;
}

export interface FaqItem {
  q: Loc;
  a: Loc;
}

export interface RelatedCard {
  title: Loc;
  /** Locale-agnostic slug, e.g. 'premium-rug-cleaning'. URL is localized at render time. */
  slug: string;
  text: Loc;
}

/** Optional decorative blocks reused from the existing site design (features / process). */
export interface FeatureBlock {
  iconKey: string;
  title: Loc;
  desc: Loc;
}
export interface ProcessStep {
  title: Loc;
  desc: Loc;
}

export interface SeoLanding {
  slug: string;
  canonicalId: string;
  /** Stable identifier passed to tracking as service_entity. */
  serviceEntity: string;
  /** Existing parent category slug for breadcrumbs/linking (optional). */
  parentService?: string;
  image: string;

  meta: {
    title: Loc;
    description: Loc;
  };

  hero: {
    h1: Loc;
    paragraph: Loc;
    miniFacts: Loc[];
    primaryCta: Cta;
    secondaryCta: Cta;
  };

  priceCards?: PriceCard[];
  sections: SeoSection[];
  faq: FaqItem[];
  related: RelatedCard[];

  /** Reused visual blocks (kept logically from the old template); optional per page. */
  features?: FeatureBlock[];
  process?: ProcessStep[];
}
