// Single "lead_form_success" event per service page for GTM/GA4.
//
// Both the top (hero) and bottom (contact) forms on a service page count as ONE
// conversion: the first successful submit fires the event, the second is
// suppressed. The guard is keyed to the current pathname, so navigating to
// another service page (SPA) resets it and a new conversion can be fired.
//
// GTM listens for `lead_form_success` (Custom Event) and maps it to the GA4
// `generate_lead` Key Event — that mapping lives in GTM, not here.

let firedPath: string | null = null;

export function fireLeadFormSuccess(formPosition: 'top' | 'bottom'): void {
  if (typeof window === 'undefined') return;

  const path = window.location.pathname;
  if (firedPath === path) return; // already counted this service page
  firedPath = path;

  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: 'lead_form_success',
    form_name: 'service_quote_form',
    form_position: formPosition,
    page_path: path,
    page_location: window.location.href,
  });
}
