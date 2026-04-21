const WHATSAPP_PHONE = '971508648401';

type SupportedLanguage = 'ru' | 'en' | 'ar';

function normalizePath(pathname?: string) {
  if (!pathname) {
    return '/';
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

export function buildWhatsAppLink(language: string, pathname?: string) {
  const pagePath = normalizePath(pathname);
  const localizedMessage: Record<SupportedLanguage, string> = {
    ru: `Здравствуйте! Пишу с сайта iCleaning. Источник: сайт. Страница: ${pagePath}`,
    en: `Hello! I'm contacting you from the iCleaning website. Source: website. Page: ${pagePath}`,
    ar: `مرحبا! أتواصل معكم من موقع iCleaning. المصدر: الموقع. الصفحة: ${pagePath}`,
  };

  const selectedLanguage: SupportedLanguage = language === 'ar' || language === 'en' ? language : 'ru';
  const text = encodeURIComponent(localizedMessage[selectedLanguage]);

  return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
}
