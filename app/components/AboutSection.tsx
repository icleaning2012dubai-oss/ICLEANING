'use client';

import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="py-16 sm:py-20 md:py-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Text left with white background */}
          <div className="relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-2xl overflow-hidden">
            {/* Decorative image element */}
            <div className="absolute top-0 right-0 w-full h-full">
              <Image
                src="/images/decorative.webp"
                alt="Decorative"
                fill
                className="object-cover opacity-40"
                loading="lazy"
                quality={75}
              />
            </div>
            
            <div className="relative z-10 space-y-5 sm:space-y-6 md:space-y-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold text-blue-700">{t('about.badge')}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] text-gray-900 tracking-tight">
                {t('about.title')}
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm sm:text-[15px] md:text-base">
                {t('about.description')}
              </p>

              {/* Features with checkmarks */}
              <div className="space-y-3 sm:space-y-4 pt-2">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-[15px]">{t('about.feature1')}</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-[15px]">{t('about.feature2')}</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-[15px]">{t('about.feature3')}</span>
                </div>
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium text-sm sm:text-[15px]">{t('about.feature4')}</span>
                </div>
              </div>

              {/* Button */}
              <button className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105 text-sm sm:text-[15px]">
                {t('about.learnMore')}
              </button>
            </div>
          </div>

          {/* Image right - same height as left block */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop"
              alt="Professional Cleaning Service"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 700px"
              loading="lazy"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
