import { mainServices } from '@/app/data/seoLandings/mainServices';

const WHATSAPP_PHONE = '971565055016';

type SupportedLanguage = 'ru' | 'en' | 'ar';

function normalizePath(pathname?: string) {
  if (!pathname) {
    return '/';
  }
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

// Human, localized service name for a landing slug (undefined for non-service pages).
function serviceName(slug: string, lang: SupportedLanguage): string | undefined {
  const svc = mainServices.find((m) => m.slug === slug);
  if (!svc) return undefined;
  return svc.name[lang] ?? svc.name.en ?? svc.name.ru;
}

// Localized, service-aware pre-filled WhatsApp message.
// Language follows the page (ru/en/ar); when the page is a service landing the
// message names that specific service, otherwise a general enquiry is used.
export function buildWhatsAppLink(language: string, pathname?: string) {
  const lang: SupportedLanguage = language === 'ar' || language === 'ru' ? language : 'en';
  const pagePath = normalizePath(pathname);

  // slug = first path segment after an optional /ru | /ar | /en prefix
  const slug = pagePath.replace(/^\/(ru|ar|en)(?=\/|$)/, '').split('/').filter(Boolean)[0] ?? '';
  const service = serviceName(slug, lang);

  const withService: Record<SupportedLanguage, (s: string) => string> = {
    en: (s) => `Hello! I would like a quote for ${s} in Dubai. (via icleaning.ae)`,
    ru: (s) => `Здравствуйте! Хочу узнать цену на «${s}» в Дубае. (с сайта icleaning.ae)`,
    ar: (s) => `مرحباً! أرغب في الحصول على عرض سعر لخدمة ${s} في دبي. (عبر موقع icleaning.ae)`,
  };
  const general: Record<SupportedLanguage, string> = {
    en: `Hello! I would like to ask about your cleaning services in Dubai. (via icleaning.ae)`,
    ru: `Здравствуйте! Хочу узнать о ваших услугах клининга в Дубае. (с сайта icleaning.ae)`,
    ar: `مرحباً! أود الاستفسار عن خدمات التنظيف لديكم في دبي. (عبر موقع icleaning.ae)`,
  };

  const message = service ? withService[lang](service) : general[lang];
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
