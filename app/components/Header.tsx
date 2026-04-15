'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, memo } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';
import { getSubServicesForParent, type SubServicePage } from '@/app/data/subServicesData';

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
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  const services = [
    { slug: 'carpet-cleaning-dubai', name: { ru: 'Чистка ковров', en: 'Carpet Cleaning', ar: 'تنظيف السجاد' }, color: 'bg-amber-50 text-amber-600',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5}/><path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeWidth={1.5}/></svg> },
    { slug: 'sofa-cleaning-dubai', name: { ru: 'Диваны и матрасы', en: 'Sofa & Mattresses', ar: 'الأرائك والمراتب' }, color: 'bg-violet-50 text-violet-600',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 18V12a2 2 0 012-2h12a2 2 0 012 2v6" strokeWidth={1.5} strokeLinecap="round"/><path d="M2 18h20M6 10V7a2 2 0 012-2h8a2 2 0 012 2v3" strokeWidth={1.5} strokeLinecap="round"/></svg> },
    { slug: 'curtains-cleaning-dubai', name: { ru: 'Шторы и жалюзи', en: 'Curtains & Blinds', ar: 'الستائر' }, color: 'bg-pink-50 text-pink-600',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 3h16M4 3v14c0 0 4-3 8 0s8 0 8 0V3" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/><path d="M4 21h16" strokeWidth={1.5} strokeLinecap="round"/></svg> },
    { slug: 'deep-cleaning-dubai', name: { ru: 'Генеральная уборка', en: 'Deep Cleaning', ar: 'التنظيف العميق' }, color: 'bg-emerald-50 text-emerald-600',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" strokeWidth={1.5} strokeLinejoin="round"/></svg> },
    { slug: 'ac-cleaning-dubai', name: { ru: 'Кондиционеры', en: 'Air Conditioner', ar: 'المكيفات' }, color: 'bg-sky-50 text-sky-600',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" strokeWidth={1.5} strokeLinecap="round"/></svg> },
    { slug: 'regular-cleaning-dubai', name: { ru: 'Регулярная уборка', en: 'Regular Cleaning', ar: 'التنظيف المنتظم' }, color: 'bg-blue-50 text-blue-600',
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg> },
  ];

  const subServiceShortName = (sub: SubServicePage): string => {
    const names: Record<string, { ru: string; en: string; ar: string }> = {
      'leather-sofa-cleaning': { ru: 'Кожаный диван', en: 'Leather Sofa', ar: 'أريكة جلدية' },
      'fabric-sofa-cleaning': { ru: 'Тканевый диван', en: 'Fabric Sofa', ar: 'أريكة قماشية' },
      'mattress-cleaning': { ru: 'Матрас', en: 'Mattress', ar: 'مرتبة' },
      'orthopedic-mattress-cleaning': { ru: 'Ортопед. матрас', en: 'Ortho Mattress', ar: 'مرتبة طبية' },
      'wool-carpet-cleaning': { ru: 'Шерстяной ковёр', en: 'Wool Carpet', ar: 'سجاد صوفي' },
      'silk-carpet-cleaning': { ru: 'Шёлковый ковёр', en: 'Silk Carpet', ar: 'سجاد حريري' },
      'persian-rug-cleaning': { ru: 'Персидский ковёр', en: 'Persian Rug', ar: 'سجاد فارسي' },
      'handmade-rug-cleaning': { ru: 'Ручной работы', en: 'Handmade Rug', ar: 'سجاد يدوي' },
      'curtain-cleaning': { ru: 'Стирка штор', en: 'Curtain Wash', ar: 'غسيل ستائر' },
      'blind-cleaning': { ru: 'Жалюзи', en: 'Blinds', ar: 'ستائر معدنية' },
      'vertical-blinds-cleaning': { ru: 'Вертикальные', en: 'Vertical Blinds', ar: 'عمودية' },
      'horizontal-blinds-cleaning': { ru: 'Горизонтальные', en: 'Horizontal', ar: 'أفقية' },
      'roller-blind-cleaning': { ru: 'Рулонные', en: 'Roller Blinds', ar: 'رول' },
      'deep-cleaning': { ru: 'Глубокая чистка', en: 'Deep Clean', ar: 'تنظيف عميق' },
      'post-construction-cleaning': { ru: 'После ремонта', en: 'Post-Reno', ar: 'بعد التجديد' },
      'villa-cleaning': { ru: 'Вилла', en: 'Villa', ar: 'فيلا' },
      'office-cleaning': { ru: 'Офис', en: 'Office', ar: 'مكتب' },
      'window-cleaning': { ru: 'Окна', en: 'Windows', ar: 'نوافذ' },
      'disinfection-services': { ru: 'Дезинфекция', en: 'Disinfection', ar: 'تعقيم' },
    };
    const n = names[sub.slug];
    if (n) return n[language as 'ru' | 'en' | 'ar'] || n.ru;
    return sub.h1[language as 'ru' | 'en' | 'ar'] || sub.h1.ru;
  };

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
                    className="absolute top-full -left-8 mt-3 w-[560px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100 z-50 p-5"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {services.map((service) => {
                        const subs = getSubServicesForParent(service.slug);
                        return (
                          <div key={service.slug} className="group/card">
                            <Link
                              href={getLocalizedPath(`/services/${service.slug}`)}
                              className={`flex items-center gap-3 p-2 -m-2 rounded-xl transition-colors ${
                                pathWithoutLang === `/services/${service.slug}`
                                  ? 'bg-blue-50'
                                  : 'hover:bg-gray-50'
                              }`}
                              onClick={() => setIsServicesMenuOpen(false)}
                            >
                              <span className={`flex items-center justify-center w-9 h-9 rounded-lg ${service.color} flex-shrink-0`}>
                                {service.icon}
                              </span>
                              <span className={`font-semibold text-sm ${
                                pathWithoutLang === `/services/${service.slug}` ? 'text-blue-600' : 'text-gray-900'
                              }`}>
                                {service.name[language as keyof typeof service.name]}
                              </span>
                            </Link>
                            {subs.length > 0 && (
                              <div className="mt-1.5 ml-12 flex flex-wrap gap-x-1 gap-y-0.5">
                                {subs.map((sub, i) => (
                                  <span key={sub.slug} className="inline-flex items-center">
                                    <Link
                                      href={getLocalizedPath(`/${sub.slug}`)}
                                      className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
                                      onClick={() => setIsServicesMenuOpen(false)}
                                    >
                                      {subServiceShortName(sub)}
                                    </Link>
                                    {i < subs.length - 1 && <span className="text-gray-300 mx-1">&middot;</span>}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
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
            </nav>

            {/* Contact Button & Cart & Language Switcher */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all duration-200 shadow-sm"
                >
                  <span className="text-xl">{languages.find(l => l.code === language)?.flag}</span>
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
                        <span className="text-xl">{lang.flag}</span>
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
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-gray-200/50">
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
                  <div className="mt-3 ml-1 space-y-3">
                    {services.map((service) => {
                      const subs = getSubServicesForParent(service.slug);
                      return (
                        <div key={service.slug}>
                          <Link
                            href={getLocalizedPath(`/services/${service.slug}`)}
                            className={`flex items-center gap-3 py-1 ${
                              pathWithoutLang === `/services/${service.slug}`
                                ? 'text-blue-600'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className={`flex items-center justify-center w-7 h-7 rounded-md ${service.color} flex-shrink-0`}>
                              {service.icon}
                            </span>
                            <span className="text-sm font-semibold">{service.name[language as keyof typeof service.name]}</span>
                          </Link>
                          {subs.length > 0 && (
                            <div className="ml-10 mt-1 flex flex-wrap gap-x-1 gap-y-0.5">
                              {subs.map((sub, i) => (
                                <span key={sub.slug} className="inline-flex items-center">
                                  <Link
                                    href={getLocalizedPath(`/${sub.slug}`)}
                                    className="text-xs text-gray-400 hover:text-blue-600"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {subServiceShortName(sub)}
                                  </Link>
                                  {i < subs.length - 1 && <span className="text-gray-300 mx-0.5">&middot;</span>}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
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
                    <span className="text-xl">{lang.flag}</span>
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
