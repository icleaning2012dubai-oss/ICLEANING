'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, memo } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

// All service landings are top-level now (no category grouping) — flat menu.
const stroke = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
const menuServices: {
  slug: string;
  name: { ru: string; en: string; ar: string };
  desc: { ru: string; en: string; ar: string };
  icon: React.ReactNode;
}[] = [
  {
    slug: 'carpet-cleaning',
    name: { ru: 'Чистка ковров', en: 'Carpet cleaning', ar: 'تنظيف السجاد' },
    desc: { ru: 'Стандартные машинные ковры', en: 'Only machine-made carpets', ar: 'السجاد الآلي' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><rect x="3" y="6" width="18" height="12" rx="1" /><path d="M3 10h18M3 14h18M3 18v2M21 18v2" /></svg>,
  },
  {
    slug: 'premium-rug-cleaning',
    name: { ru: 'Чистка элитных ковров', en: 'Premium rug cleaning', ar: 'تنظيف السجاد الفاخر' },
    desc: { ru: 'Шёлк, шерсть, персидские, handmade', en: 'Silk, wool, Persian, handmade', ar: 'حرير، صوف، فارسي' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><path d="M6 3h12l3 5-9 12L3 8z" /><path d="M3 8h18M9 3L6.5 8 12 20M15 3l2.5 5L12 20" /></svg>,
  },
  {
    slug: 'carpet-flooring-cleaning',
    name: { ru: 'Чистка ковролина', en: 'Carpet flooring cleaning', ar: 'تنظيف الموكيت' },
    desc: { ru: 'Ковровое покрытие на месте', en: 'Wall-to-wall carpet, on-site', ar: 'الموكيت في الموقع' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>,
  },
  {
    slug: 'sofa-cleaning',
    name: { ru: 'Химчистка диванов', en: 'Sofa cleaning', ar: 'تنظيف الأرائك' },
    desc: { ru: 'Диваны и кресла, ткань и кожа', en: 'All upholstered furniture', ar: 'الأرائك القماشية والجلدية' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><path d="M5 11V8a2 2 0 012-2h10a2 2 0 012 2v3M3 12a2 2 0 012-2 2 2 0 012 2v4h10v-4a2 2 0 012-2 2 2 0 012 2v6M4 18v2M20 18v2" /></svg>,
  },
  {
    slug: 'upholstery-cleaning',
    name: { ru: 'Чистка мягкой мебели', en: 'Chairs & upholstery', ar: 'تنظيف المفروشات' },
    desc: { ru: 'Стулья, кресла, изголовья', en: 'Chairs and armchairs', ar: 'الكراسي والمقاعد' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><path d="M7 11V7a2 2 0 012-2h6a2 2 0 012 2v4M5 11a1.5 1.5 0 013 0v4h8v-4a1.5 1.5 0 013 0v3H5zM7 18v2M17 18v2" /></svg>,
  },
  {
    slug: 'mattress-cleaning',
    name: { ru: 'Чистка матрасов', en: 'Mattress cleaning', ar: 'تنظيف المراتب' },
    desc: { ru: 'Матрасы всех размеров на дому', en: 'Single, queen, king, baby', ar: 'مراتب بكل الأحجام' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><rect x="3" y="8" width="18" height="9" rx="2.5" /><path d="M6 8v9M10 8v9M14 8v9M18 8v9M3 17v2M21 17v2" /></svg>,
  },
  {
    slug: 'curtain-cleaning',
    name: { ru: 'Чистка штор и жалюзи', en: 'Curtain cleaning', ar: 'تنظيف الستائر' },
    desc: { ru: 'Снятие, чистка и навеска', en: 'Take down, clean, rehang', ar: 'الإزالة والتنظيف والتعليق' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><path d="M3 4h18M5 4v16c1.5-1 3-1 4.5 0V4M14.5 4v16c1.5-1 3-1 4.5 0V4" /></svg>,
  },
  {
    slug: 'window-cleaning',
    name: { ru: 'Мойка окон', en: 'Windows cleaning', ar: 'تنظيف النوافذ' },
    desc: { ru: 'Внутренняя мойка окон', en: 'Villa window & glass cleaning', ar: 'تنظيف النوافذ الداخلية' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M12 3v18M4 12h16" /></svg>,
  },
  {
    slug: 'central-ac-cleaning',
    name: { ru: 'Чистка кондиционеров', en: 'AC cleaning', ar: 'تنظيف التكييف' },
    desc: { ru: 'Центральные и канальные системы', en: 'AC units and split systems', ar: 'الأنظمة المركزية والمجاري' },
    icon: <svg viewBox="0 0 24 24" {...stroke}><rect x="3" y="5" width="18" height="8" rx="2" /><path d="M6 9h9M6 17c1-1 1-2 0-3M10 18c1-1 1-2 0-3M14 17c1-1 1-2 0-3" /></svg>,
  },
];

// Brand-coloured icon tiles, grouped by service family (carpets / furniture / curtains / AC).
const menuTile = (i: number): string =>
  i < 3
    ? 'bg-amber-50 text-amber-600'
    : i < 6
      ? 'bg-violet-50 text-violet-600'
      : i < 8
        ? 'bg-pink-50 text-pink-600'
        : 'bg-sky-50 text-sky-600';

const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [servicesCloseTimer, setServicesCloseTimer] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { language, setLanguage, t, getLocalizedPath } = useLanguage();
  const { totalItems, toggleCart } = useCart();

  // Remove lang prefix from pathname for active state comparison
  const pathWithoutLang = pathname.replace(/^\/(en|ru|ar)/, '') || '/';

  // Lock background scroll while the mobile menu is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const handleServicesMouseEnter = () => {
    if (servicesCloseTimer) {
      clearTimeout(servicesCloseTimer);
      setServicesCloseTimer(null);
    }
    setIsServicesMenuOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timer = setTimeout(() => {
      setIsServicesMenuOpen(false);
    }, 300);
    setServicesCloseTimer(timer);
  };

  const languages = [
    { code: 'ru', name: 'Русский', flag: 'RU' },
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'ar', name: 'العربية', flag: 'AR' }
  ];


  return (
    <header className="fixed top-1 left-0 right-0 z-30 px-2 sm:px-4 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-2xl border border-gray-200/50">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href={getLocalizedPath('/')} className="flex items-center">
              <div className="relative w-32 h-10 sm:w-40 sm:h-12">
                <Image
                  src="/images/logo.svg"
                  alt="iCleaning Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href={getLocalizedPath('/')} 
                className={`relative transition-all duration-300 font-medium group ${
                  pathWithoutLang === '/' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.home')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathWithoutLang === '/' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button 
                  className={`relative transition-all duration-300 font-medium group flex items-center gap-1 ${
                    pathWithoutLang.startsWith('/services') 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {t('nav.services')}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesMenuOpen ? 'rotate-180' : ''
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                    pathWithoutLang.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>

                {/* Services Mega Menu */}
                {isServicesMenuOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[820px] max-w-[92vw] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 z-50 p-5"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <div className="grid grid-cols-3 gap-x-5 gap-y-1">
                      {menuServices.map((s, i) => {
                        const active = pathWithoutLang === `/${s.slug}`;
                        return (
                          <Link
                            key={s.slug}
                            href={getLocalizedPath(`/${s.slug}`)}
                            onClick={() => setIsServicesMenuOpen(false)}
                            className={`flex items-start gap-3 p-3 rounded-2xl transition-colors ${active ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                          >
                            <span className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${menuTile(i)}`}>
                              <span className="block w-6 h-6">{s.icon}</span>
                            </span>
                            <span className="min-w-0 pt-0.5">
                              <span className={`block font-semibold text-sm leading-snug ${active ? 'text-blue-600' : 'text-gray-900'}`}>
                                {s.name[language as keyof typeof s.name]}
                              </span>
                              <span className="block text-xs text-gray-400 leading-snug mt-0.5">
                                {s.desc[language as keyof typeof s.desc]}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              <Link 
                href={getLocalizedPath('/prices')} 
                className={`relative transition-all duration-300 font-medium group ${
                  pathWithoutLang === '/prices' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {language === 'ru' ? 'Цены' : language === 'ar' ? 'الأسعار' : 'Prices'}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathWithoutLang === '/prices' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              <Link 
                href={getLocalizedPath('/blog')} 
                className={`relative transition-all duration-300 font-medium group ${
                  pathWithoutLang.startsWith('/blog') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.blog')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathWithoutLang.startsWith('/blog') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              <Link 
                href={getLocalizedPath('/portfolio')} 
                className={`relative transition-all duration-300 font-medium group ${
                  pathWithoutLang === '/portfolio' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.portfolio')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathWithoutLang === '/portfolio' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              <Link 
                href={getLocalizedPath('/reviews')} 
                className={`relative transition-all duration-300 font-medium group ${
                  pathWithoutLang === '/reviews' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {language === 'ru' ? 'Отзывы' : language === 'ar' ? 'المراجعات' : 'Reviews'}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathWithoutLang === '/reviews' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              <Link 
                href={getLocalizedPath('/contact')} 
                className={`relative transition-all duration-300 font-medium group ${
                  pathWithoutLang === '/contact' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.contact')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathWithoutLang === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>

              <Link 
                href={getLocalizedPath('/about')} 
                className={`relative transition-all duration-300 font-medium group ${
                  pathWithoutLang === '/about' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.about')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathWithoutLang === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            </nav>

            {/* Contact Button & Cart & Language Switcher */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 shadow-sm"
                >
                  <span className="text-xs font-bold text-gray-700">{languages.find(l => l.code === language)?.flag}</span>
                  <span className="text-sm font-medium text-gray-700 hidden sm:inline">
                    {languages.find(l => l.code === language)?.name}
                  </span>
                  <svg className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isLangMenuOpen ? 'rotate-180' : ''
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Language Dropdown */}
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                          language === lang.code 
                            ? 'bg-blue-50 text-blue-600' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-xs font-bold w-5 text-center">{lang.flag}</span>
                        <span className="font-medium">{lang.name}</span>
                        {language === lang.code && (
                          <svg className="w-5 h-5 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href={getLocalizedPath('/contact')}
                className="hidden md:block px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105"
              >
                {t('nav.contactUs')}
              </Link>

              {/* Cart Button */}
              <button
                onClick={toggleCart}
                className="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Shopping Cart"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center text-[10px] sm:text-xs">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Меню"
              >
                {isMenuOpen ? (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-gray-200/50 max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain">
            <nav className="flex flex-col space-y-4">
              <Link 
                href={getLocalizedPath('/')} 
                className={`transition-colors font-medium ${
                  pathWithoutLang === '/' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                  className={`w-full flex items-center justify-between transition-colors font-medium ${
                    pathWithoutLang.startsWith('/services') 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {t('nav.services')}
                  <svg className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesMenuOpen ? 'rotate-180' : ''
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Services Menu */}
                {isServicesMenuOpen && (
                  <div className="mt-3 ml-1 flex flex-col gap-0.5">
                    {menuServices.map((s, i) => {
                      const active = pathWithoutLang === `/${s.slug}`;
                      return (
                        <Link
                          key={s.slug}
                          href={getLocalizedPath(`/${s.slug}`)}
                          onClick={() => setIsMenuOpen(false)}
                          className={`flex items-start gap-3 py-2 px-2 -mx-2 rounded-xl ${active ? 'bg-blue-50' : ''}`}
                        >
                          <span className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${menuTile(i)}`}>
                            <span className="block w-5 h-5">{s.icon}</span>
                          </span>
                          <span className="min-w-0 pt-0.5">
                            <span className={`block text-sm font-semibold leading-snug ${active ? 'text-blue-600' : 'text-gray-900'}`}>
                              {s.name[language as keyof typeof s.name]}
                            </span>
                            <span className="block text-xs text-gray-400 leading-snug">{s.desc[language as keyof typeof s.desc]}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
              
              <Link 
                href={getLocalizedPath('/prices')} 
                className={`transition-colors font-medium ${
                  pathWithoutLang === '/prices' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'ru' ? 'Цены' : language === 'ar' ? 'الأسعار' : 'Prices'}
              </Link>
              
              <Link 
                href={getLocalizedPath('/blog')} 
                className={`transition-colors font-medium ${
                  pathWithoutLang.startsWith('/blog') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.blog')}
              </Link>
              
              <Link 
                href={getLocalizedPath('/portfolio')} 
                className={`transition-colors font-medium ${
                  pathWithoutLang === '/portfolio' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.portfolio')}
              </Link>

              <Link 
                href={getLocalizedPath('/reviews')} 
                className={`transition-colors font-medium ${
                  pathWithoutLang === '/reviews' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'ru' ? 'Отзывы' : language === 'ar' ? 'المراجعات' : 'Reviews'}
              </Link>

              <Link 
                href={getLocalizedPath('/contact')} 
                className={`transition-colors font-medium ${
                  pathWithoutLang === '/contact' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>

              <Link 
                href={getLocalizedPath('/about')} 
                className={`transition-colors font-medium ${
                  pathWithoutLang === '/about' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              
              {/* Mobile Language Switcher */}
              <div className="border-t border-gray-200 pt-4 space-y-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as any);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors ${
                      language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-xs font-bold w-5 text-center">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                    {language === lang.code && (
                      <svg className="w-5 h-5 ml-auto text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>

              <Link 
                href={getLocalizedPath('/contact')}
                className="w-full block text-center px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contactUs')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

export default Header;
