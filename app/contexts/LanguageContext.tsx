'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ru' | 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ru');
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load saved language from localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['ru', 'en', 'ar'].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    // Load translations for current language
    import(`@/app/locales/${language}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => setTranslations({}));

    // Update document direction and lang attribute
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
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
