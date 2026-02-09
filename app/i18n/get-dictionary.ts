import type { Locale } from './config';

const dictionaries = {
  en: () => import('@/app/locales/en.json').then((m) => m.default),
  ru: () => import('@/app/locales/ru.json').then((m) => m.default),
  ar: () => import('@/app/locales/ar.json').then((m) => m.default),
};

export const getDictionary = async (locale: Locale): Promise<Record<string, string>> => {
  return dictionaries[locale]();
};
