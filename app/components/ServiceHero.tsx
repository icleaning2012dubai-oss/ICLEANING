'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageProvider';

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative min-h-[550px] rounded-3xl overflow-hidden flex items-center shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 py-16">
              <div className="max-w-3xl">
                <div className="space-y-8">
                  {/* Breadcrumbs */}
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Link href="/" className="hover:text-white transition-colors">
                      {t('serviceHero.home')}
                    </Link>
                    <span>/</span>
                    <Link href="/#services" className="hover:text-white transition-colors">
                      {t('serviceHero.services')}
                    </Link>
                    <span>/</span>
                    <span className="text-white font-medium">{title}</span>
                  </div>

                  {/* Main Heading */}
                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                      {title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-2xl font-light">
                      {description}
                    </p>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="px-10 py-4 bg-blue-600 text-white rounded-full font-semibold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105"
                    >
                      {t('serviceHero.bookService')}
                    </button>
                    
                    <button 
                      onClick={scrollToPricing}
                      className="px-8 py-4 text-white border-2 border-white/50 rounded-full font-semibold text-base md:text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
                    >
                      {t('serviceHero.payNow')}
                    </button>
                  </div>

                  
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative bg-gradient-to-br from-white via-blue-50 to-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden animate-scaleIn">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 opacity-10"></div>
            
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:rotate-90"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative p-8 md:p-10">
              {/* Header with icon */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent mb-2">
                  {t('serviceHero.bookTitle')} {title}
                </h3>
                <p className="text-gray-600 text-sm">{t('serviceHero.bookSubtitle')}</p>
              </div>
              
              <form className="space-y-5">
                {/* Name field with icon */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t('serviceHero.yourName')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                {/* Phone field with icon */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {t('serviceHero.phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 shadow-sm"
                    placeholder="+971 50 864 8401"
                  />
                </div>
                
                {/* Email field with icon */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {t('serviceHero.emailOptional')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 shadow-sm"
                    placeholder="john@example.com"
                  />
                </div>
                
                {/* Message field with icon */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    {t('serviceHero.message')}
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-5 py-3.5 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 group-hover:border-gray-300 resize-none shadow-sm"
                    placeholder={t('serviceHero.messagePlaceholder')}
                  ></textarea>
                </div>
                
                {/* Submit button with gradient */}
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white rounded-xl font-bold text-base hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  {t('serviceHero.submitRequest')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
