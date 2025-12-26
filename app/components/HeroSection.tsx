'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <section className="relative pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative min-h-[500px] sm:min-h-[550px] md:min-h-[650px] rounded-2xl sm:rounded-3xl overflow-hidden flex items-center shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/hero.webp"
                alt="Professional Cleaning Service"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="100vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
              {/* Dark Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
          <div className="max-w-3xl">
            <div className="space-y-5 sm:space-y-6 md:space-y-8">
              {/* Main Heading */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
                  {t('hero.title1')}
                  <br />
                  <span className="inline-block mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                    {t('hero.title2')}
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed max-w-2xl font-light">
                  {t('hero.subtitle')}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 sm:px-10 py-3.5 sm:py-4 bg-blue-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105 text-center"
                >
                  {t('hero.getQuote')}
                </button>
                
                <a 
                  href="/#services"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 text-white border-2 border-white/50 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm text-center"
                >
                  {t('hero.watchVideo')}
                </a>
              </div>

              {/* Years Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">8+</span>
                <span className="text-xs sm:text-sm text-white/90 font-medium uppercase tracking-wide">Years in UAE</span>
              </div>

              {/* Reviews Section - Mobile/Tablet */}
              <div className="lg:hidden flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-white/20">
                <div className="flex -space-x-3">
                  <Image
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Customer"
                    width={44}
                    height={44}
                    className="rounded-full border-3 border-white shadow-md"
                  />
                  <Image
                    src="https://i.pravatar.cc/150?img=5"
                    alt="Customer"
                    width={44}
                    height={44}
                    className="rounded-full border-3 border-white shadow-md"
                  />
                  <Image
                    src="https://i.pravatar.cc/150?img=9"
                    alt="Customer"
                    width={44}
                    height={44}
                    className="rounded-full border-3 border-white shadow-md"
                  />
                  <Image
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Customer"
                    width={44}
                    height={44}
                    className="rounded-full border-3 border-white shadow-md"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-base">★</span>
                    ))}
                    <span className="font-bold text-gray-900 ml-1">5.0</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">
                    <span className="font-bold text-gray-900">4,234+</span> Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Badge - Desktop (Top Right) */}
          <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl px-6 py-5 shadow-2xl hidden lg:block max-w-sm">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <Image
                  src="https://i.pravatar.cc/150?img=1"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full border-3 border-white shadow-lg"
                />
                <Image
                  src="https://i.pravatar.cc/150?img=5"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full border-3 border-white shadow-lg"
                />
                <Image
                  src="https://i.pravatar.cc/150?img=9"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full border-3 border-white shadow-lg"
                />
                <Image
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full border-3 border-white shadow-lg"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                  <span className="font-bold text-gray-900 text-lg ml-1">5.0</span>
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  <span className="font-bold text-gray-900">4,234+</span> reviews
                </p>
                <p className="text-xs text-gray-500 leading-tight mt-1">
                  Trusted by customers<br />across UAE
                </p>
              </div>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-90 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('form.title')}</h2>
            <p className="text-gray-600 mb-6">{t('form.subtitle')}</p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">{t('form.name')}</label>
                <input
                  type="text"
                  placeholder={t('form.namePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">{t('form.phone')}</label>
                <input
                  type="tel"
                  placeholder={t('form.phonePlaceholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">{t('form.serviceType')}</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white">
                  <option value="" className="text-gray-400">{t('form.selectService')}</option>
                  <option value="carpet-cleaning">{t('form.carpetCleaning')}</option>
                  <option value="sofa-mattresses">{t('form.sofaMattresses')}</option>
                  <option value="curtains-blinds">{t('form.curtainsBlinds')}</option>
                  <option value="regular-cleaning">{t('form.regularCleaning')}</option>
                  <option value="deep-cleaning">{t('form.deepCleaning')}</option>
                  <option value="air-conditioner">{t('form.airConditioner')}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">{t('form.clientType')}</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white">
                  <option value="" className="text-gray-400">{t('form.selectClient')}</option>
                  <option value="individual">{t('form.individual')}</option>
                  <option value="business">{t('form.business')}</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                {t('form.submit')}
              </button>

              <p className="text-xs text-gray-500 text-center">
                {t('form.privacy')}
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
