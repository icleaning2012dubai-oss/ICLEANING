'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Header() {
  const [cartCount, setCartCount] = useState(3);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];

  return (
    <header className="fixed top-1 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 shadow-2xl border border-gray-200/50">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900 tracking-wide uppercase">
                HOMYCLEAN
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`transition-colors font-medium ${
                  pathname === '/' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {t('nav.home')}
              </Link>
              <Link 
                href="/about" 
                className={`transition-colors font-medium ${
                  pathname === '/about' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {t('nav.about')}
              </Link>
              <Link 
                href="/#services" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                {t('nav.services')}
              </Link>
              <Link 
                href="/contact" 
                className={`transition-colors font-medium ${
                  pathname === '/contact' 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {t('nav.contact')}
              </Link>
            </nav>

            {/* Contact Button & Cart & Language Switcher */}
            <div className="flex items-center space-x-4">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <span className="text-xl">{languages.find(l => l.code === language)?.flag}</span>
                  <span className="text-sm font-medium text-gray-700 hidden lg:inline">
                    {languages.find(l => l.code === language)?.name}
                  </span>
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Language Dropdown */}
                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code as any);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-blue-50 transition-colors ${
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
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="relative p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.4)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-110 group"
                aria-label="Cart"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                
                {/* Animated Count Badge */}
                {cartCount > 0 && (
                  <div className="absolute -top-2 -right-2 min-w-[22px] h-[22px] bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg animate-bounce">
                    <span className="text-white text-xs font-bold">{cartCount}</span>
                  </div>
                )}
                
                {/* Pulse Effect */}
                {cartCount > 0 && (
                  <span className="absolute inset-0 rounded-full bg-blue-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping"></span>
                )}
              </button>

              {/* Mobile menu button */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Меню"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                href="/#services" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
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

      {/* Cart Sidebar - Slide from Right */}
      <>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsCartOpen(false)}
        />
        
        {/* Cart Panel */}
        <div className={`fixed top-4 right-0 bottom-4 w-full sm:w-[420px] bg-white/95 backdrop-blur-xl z-50 shadow-2xl rounded-tl-3xl rounded-bl-3xl border border-gray-200/50 overflow-hidden transition-transform duration-500 ease-out ${
          isCartOpen ? 'translate-x-0' : 'translate-x-[calc(100%+1rem)]'
        }`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  {t('cart.title')}
                </h2>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Cart Items - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 space-y-3">
                {/* Item 1 */}
                <div className="group bg-blue-50 rounded-2xl p-4 hover:shadow-md transition-all duration-300 border border-blue-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">Deep Cleaning</h3>
                      <p className="text-xs text-gray-500">1x Service</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">$99</p>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="group bg-purple-50 rounded-2xl p-4 hover:shadow-md transition-all duration-300 border border-purple-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">Carpet Cleaning</h3>
                      <p className="text-xs text-gray-500">2x Service</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-purple-600">$150</p>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="group bg-pink-50 rounded-2xl p-4 hover:shadow-md transition-all duration-300 border border-pink-100">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">Sofa Cleaning</h3>
                      <p className="text-xs text-gray-500">1x Service</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-pink-600">$75</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - Total & Checkout */}
              <div className="border-t border-gray-200 p-6 bg-gray-50/50">
                <div className="space-y-2 mb-5">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{t('cart.subtotal')}</span>
                    <span className="font-semibold text-gray-900">$324</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-900">{t('cart.total')}</span>
                    <span className="text-2xl font-bold text-blue-600">
                      $324
                    </span>
                  </div>
                </div>

                <button className="w-full px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-base transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105">
                  {t('cart.checkout')}
                </button>
              </div>
            </div>
          </div>
      </>
    </header>
  );
}
