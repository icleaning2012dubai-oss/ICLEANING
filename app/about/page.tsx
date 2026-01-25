'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { Metadata } from 'next';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Добавить metadata для страницы "О нас"
// ВАЖНО: Эта страница использует 'use client', поэтому metadata нужно вынести
// в отдельный серверный компонент или добавить через layout
// Временное решение: добавить в layout.tsx как default для /about
// Рекомендуемые значения:
// title: 'О нашей компании - Icleaning'
// description: 'О нашей компании - Icleaning. Мы верим, что качественная чистка мебели, кондиционеров, ковров и не только — это уважение к пространству'
// ===== КОНЕЦ SEO METADATA =====

export default function AboutPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/images/buble.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '100%',
        }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-8">
                  <a href="/" className="hover:text-blue-600 transition-colors">{t('breadcrumb.home')}</a>
                  <span>/</span>
                  <span className="text-gray-900 font-semibold">{t('breadcrumb.about')}</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
                  {t('aboutPage.title')}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-5">
                  <Image
                    src="/images/decorative2.webp"
                    alt="Decorative"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative z-10 space-y-12">
                  {/* Introduction */}
                  <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                      {t('aboutPage.intro')}
                    </p>
                  </div>

                  {/* Mission */}
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-10 overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t('aboutPage.missionTitle')}
                      </h2>
                      <p className="text-lg md:text-xl text-blue-50 leading-relaxed">
                        {t('aboutPage.missionText')}
                      </p>
                    </div>
                  </div>

                  {/* Approach */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-400 hover:bg-white/30">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {t('aboutPage.approachTitle1')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('aboutPage.approachText1')}
                      </p>
                    </div>

                    <div className="group bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-green-400 hover:bg-white/30">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {t('aboutPage.approachTitle2')}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('aboutPage.approachText2')}
                      </p>
                    </div>
                  </div>

                  {/* Values Section */}
                  <div>
                    <div className="text-center mb-8">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {t('aboutPage.valuesTitle')}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {[
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                          title: t('aboutPage.value1Title'),
                          description: t('aboutPage.value1Text')
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: t('aboutPage.value2Title'),
                          description: t('aboutPage.value2Text')
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: t('aboutPage.value3Title'),
                          description: t('aboutPage.value3Text')
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          ),
                          title: t('aboutPage.value4Title'),
                          description: t('aboutPage.value4Text')
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          ),
                          title: t('aboutPage.value5Title'),
                          description: t('aboutPage.value5Text')
                        },
                        {
                          icon: (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          ),
                          title: t('aboutPage.value6Title'),
                          description: t('aboutPage.value6Text')
                        }
                      ].map((item, index) => (
                        <div key={index} className="group bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-3xl p-6 hover:bg-white/30 hover:shadow-xl transition-all duration-300 hover:border-blue-400">
                          <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Closing Statement */}
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-10 text-white text-center shadow-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-5">
                      {t('aboutPage.closingTitle')}
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
                      {t('aboutPage.closingText')}
                    </p>
                  </div>

                  {/* Stats Section */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {[
                      { number: t('aboutPage.stat1Number'), label: t('aboutPage.stat1Label') },
                      { number: t('aboutPage.stat2Number'), label: t('aboutPage.stat2Label') },
                      { number: t('aboutPage.stat3Number'), label: t('aboutPage.stat3Label') },
                      { number: t('aboutPage.stat4Number'), label: t('aboutPage.stat4Label') }
                    ].map((stat, index) => (
                      <div key={index} className="text-center bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-3xl p-5 shadow-lg hover:bg-white/15 transition-all duration-300">
                        <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-gray-700 text-sm font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
