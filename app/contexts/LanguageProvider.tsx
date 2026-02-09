'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import ruTranslations from '@/app/locales/ru.json';
import enTranslations from '@/app/locales/en.json';
import arTranslations from '@/app/locales/ar.json';

type Language = 'ru' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Pre-loaded translations
const allTranslations: Record<Language, Record<string, string>> = {
  ru: ruTranslations as Record<string, string>,
  en: enTranslations as Record<string, string>,
  ar: arTranslations as Record<string, string>,
};

const validLanguages: Language[] = ['ru', 'en', 'ar'];

export function LanguageProvider({ 
  children, 
  initialLanguage 
}: { 
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  // Get language from URL param (preferred) or initialLanguage prop
  const urlLang = params?.lang as Language | undefined;
  const currentLang = urlLang && validLanguages.includes(urlLang) ? urlLang : (initialLanguage || 'ru');

  const [language, setLanguageState] = useState<Language>(currentLang);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Sync language state with URL param
  useEffect(() => {
    if (urlLang && validLanguages.includes(urlLang) && urlLang !== language) {
      setLanguageState(urlLang);
    }
  }, [urlLang, language]);

  useEffect(() => {
    if (!isClient) return;
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language, isClient]);

  // Language switch navigates to the new URL
  // Russian (default) has no prefix; en/ar get prefixed
  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }

    // Replace language segment in current URL
    if (pathname) {
      const pathWithoutLang = pathname.replace(/^\/(en|ru|ar)/, '') || '/';
      // Default locale (ru) lives at root — no prefix
      const newPath = lang === 'ru' ? pathWithoutLang : `/${lang}${pathWithoutLang}`;
      router.push(newPath);
    }
  }, [pathname, router]);

  const t = useCallback((key: string): string => {
    const translations = allTranslations[language];
    return translations[key] || key;
  }, [language]);

  // Helper to construct localized paths
  // Russian (default) has no prefix; en/ar get /{lang} prefix
  const getLocalizedPath = useCallback((path: string): string => {
    // Strip any existing locale prefix first
    const cleanPath = path.replace(/^\/(en|ru|ar)/, '') || '/';
    // Default locale (ru) lives at root — no prefix
    if (language === 'ru') {
      return cleanPath;
    }
    if (cleanPath.startsWith('/')) {
      return `/${language}${cleanPath}`;
    }
    return `/${language}/${cleanPath}`;
  }, [language]);

  const dir: 'ltr' | 'rtl' = language === 'ar' ? 'rtl' : 'ltr';

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    dir,
    getLocalizedPath,
  }), [language, setLanguage, t, dir, getLocalizedPath]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
