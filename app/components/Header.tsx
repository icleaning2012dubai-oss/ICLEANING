'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, memo } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';

const Header = memo(function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [servicesCloseTimer, setServicesCloseTimer] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { totalItems, toggleCart } = useCart();

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
    { slug: 'carpet-cleaning', name: { ru: 'Чистка ковров', en: 'Carpet Cleaning', ar: 'تنظيف السجاد' } },
    { slug: 'sofa-mattresses', name: { ru: 'Диваны и матрасы', en: 'Sofa & Mattresses', ar: 'الأرائك والمراتب' } },
    { slug: 'curtains-blinds', name: { ru: 'Шторы и жалюзи', en: 'Curtains & Blinds', ar: 'الستائر والستائر' } },
    // { slug: 'regular-cleaning', name: { ru: 'Регулярная уборка', en: 'Regular Cleaning', ar: 'التنظيف المنتظم' } },
    { slug: 'air-conditioner', name: { ru: 'Кондиционеры', en: 'Air Conditioner', ar: 'مكيف الهواء' } },
  ];

  return (
    <header className="fixed top-1 left-0 right-0 z-150 px-2 sm:px-4 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-2xl border border-gray-200/50">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
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
                href="/" 
                className={`relative transition-all duration-300 font-medium group ${
                  pathname === '/' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.home')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
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
                    pathname.startsWith('/services') 
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
                    pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>

                {/* Services Dropdown Menu */}
                {isServicesMenuOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={`block px-4 py-3 transition-colors ${
                          pathname === `/services/${service.slug}`
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsServicesMenuOpen(false)}
                      >
                        <span className="font-medium">{service.name[language as keyof typeof service.name]}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                href="/about" 
                className={`relative transition-all duration-300 font-medium group ${
                  pathname === '/about' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.about')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
              
              <Link 
                href="/contact" 
                className={`relative transition-all duration-300 font-medium group ${
                  pathname === '/contact' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t('nav.contact')}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'
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
                href="/contact"
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
                href="/" 
                className={`transition-colors font-medium ${
                  pathname === '/' 
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
                    pathname.startsWith('/services') 
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
                  <div className="mt-2 ml-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className={`block py-2 text-sm ${
                          pathname === `/services/${service.slug}`
                            ? 'text-blue-600 font-medium'
                            : 'text-gray-600 hover:text-gray-900'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.name[language as keyof typeof service.name]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                href="/about" 
                className={`transition-colors font-medium ${
                  pathname === '/about' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              
              <Link 
                href="/contact" 
                className={`transition-colors font-medium ${
                  pathname === '/contact' 
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
                href="/contact"
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
