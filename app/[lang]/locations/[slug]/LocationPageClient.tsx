'use client';

import { notFound, usePathname } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import BookingModal from '@/app/components/BookingModal';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { locationsData } from '@/app/data/locationsData';
import { useState } from 'react';
import Link from 'next/link';
import { buildWhatsAppLink } from '@/app/utils/whatsapp';

const locationColors: Record<string, string> = {
  'dubai-marina': 'from-blue-600 to-cyan-500',
  'jlt': 'from-violet-600 to-purple-500',
  'palm-jumeirah': 'from-amber-500 to-orange-500',
  'downtown-dubai': 'from-slate-700 to-slate-500',
  'al-barsha': 'from-emerald-600 to-green-500',
  'deira': 'from-rose-600 to-pink-500',
  'bur-dubai': 'from-indigo-600 to-blue-500',
  'international-city': 'from-teal-600 to-cyan-500',
  'jumeirah': 'from-sky-600 to-blue-400',
  'abu-dhabi': 'from-amber-600 to-yellow-500',
  'sharjah': 'from-fuchsia-600 to-pink-500',
};

const locationIcons: Record<string, React.ReactNode> = {
  'dubai-marina': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
  'jlt': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"/></svg>,
  'palm-jumeirah': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/></svg>,
  'downtown-dubai': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
};

export default function LocationPageClient({ slug }: { slug: string }) {
  const pathname = usePathname();
  const { language, t, getLocalizedPath } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const page = locationsData[slug];

  if (!page) {
    notFound();
  }

  const h1 = page.h1[language] || page.h1.ru;
  const content = page.content[language] || page.content.ru;
  const paragraphs = content.split('\n\n').filter(p => p.trim());
  const gradient = locationColors[slug] || 'from-blue-600 to-blue-500';

  const otherLocations = Object.values(locationsData).filter(l => l.slug !== slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-blue-100">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/images/buble.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '100%',
        }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative pt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className={`relative min-h-[320px] sm:min-h-[380px] rounded-3xl overflow-hidden flex items-center shadow-2xl bg-gradient-to-r ${gradient}`}>
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'url(/images/buble.webp)',
                    backgroundRepeat: 'repeat',
                    backgroundSize: '50%',
                  }}></div>
                </div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
                <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full" />

                <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
                  <div className="max-w-3xl">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-6">
                      <Link href={getLocalizedPath('/')} className="hover:text-white transition-colors">
                        {t('serviceHero.home')}
                      </Link>
                      <span className="text-white/40">/</span>
                      <span className="text-white/90 font-medium">{h1}</span>
                    </div>

                    {/* Location pin badge */}
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
                      {h1}
                    </h1>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="px-10 py-4 bg-white text-gray-900 rounded-full font-semibold text-base md:text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      {t('serviceHero.bookService')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content + Sidebar */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main content */}
              <div className="lg:col-span-2 space-y-6">
                {paragraphs.map((paragraph, i) => {
                  const lines = paragraph.split('\n');
                  const isListBlock = lines.length > 2 && lines.slice(1).every(l => l.match(/^[А-Яа-яA-Za-z\u0600-\u06FF]/) && l.includes(' – '));

                  if (isListBlock) {
                    return (
                      <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50">
                        <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                          <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {lines[0]}
                        </h3>
                        <div className="space-y-3">
                          {lines.slice(1).map((line, j) => {
                            const [service, desc] = line.split(' – ');
                            return (
                              <div key={j} className="flex gap-3 items-start group">
                                <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${gradient} flex-shrink-0`} />
                                <p className="text-gray-700 leading-relaxed">
                                  <span className="font-semibold text-gray-900">{service}</span>
                                  {desc && <span className="text-gray-600"> – {desc}</span>}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  const isPriceBlock = paragraph.match(/цен|price|أسعار/i) && paragraph.includes(' – ') && paragraph.includes('AED');
                  if (isPriceBlock) {
                    return (
                      <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50">
                        <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                          <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          {lines[0]}
                        </h3>
                        <div className="bg-gray-50/80 rounded-xl divide-y divide-gray-100">
                          {lines.slice(1).filter(l => l.trim()).map((line, j) => {
                            const dashIdx = line.lastIndexOf(' – ');
                            const name = dashIdx > -1 ? line.slice(0, dashIdx) : line;
                            const price = dashIdx > -1 ? line.slice(dashIdx + 3) : '';
                            return (
                              <div key={j} className="flex justify-between items-center px-4 py-3">
                                <span className="text-gray-700">{name}</span>
                                {price && <span className="font-bold text-gray-900 whitespace-nowrap ml-4">{price}</span>}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50">
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {paragraph}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                  {/* Quick actions card */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {language === 'ru' ? 'Быстрая заявка' : language === 'ar' ? 'طلب سريع' : 'Quick Booking'}
                    </h3>
                    <p className="text-gray-500 text-sm mb-5">
                      {language === 'ru'
                        ? 'Оставьте заявку — мы перезвоним за 5 минут'
                        : language === 'ar'
                          ? 'اترك طلبًا — سنتصل خلال 5 دقائق'
                          : 'Leave a request — we\'ll call back in 5 minutes'}
                    </p>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className={`w-full py-3.5 bg-gradient-to-r ${gradient} text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-md mb-3`}
                    >
                      {t('serviceHero.bookService')}
                    </button>
                    <a
                      href={buildWhatsAppLink(language, pathname)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.325 0-4.491-.753-6.243-2.033l-.436-.326-2.645.887.887-2.645-.326-.436A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                      WhatsApp
                    </a>
                  </div>

                  {/* Trust indicators */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                    <div className="space-y-4">
                      {[
                        { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                          text: language === 'ru' ? 'Приедем за 1 час' : language === 'ar' ? 'نصل خلال ساعة' : 'Arrive in 1 hour' },
                        { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
                          text: language === 'ru' ? 'Гарантия на работу' : language === 'ar' ? 'ضمان على العمل' : 'Work guarantee' },
                        { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                          text: language === 'ru' ? 'Цены без наценок' : language === 'ar' ? 'أسعار بدون زيادات' : 'No surcharges' },
                        { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
                          text: language === 'ru' ? 'Знаем ваш район' : language === 'ar' ? 'نعرف منطقتك' : 'We know your area' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className={`w-9 h-9 rounded-lg bg-gradient-to-br ${gradient} bg-opacity-10 flex items-center justify-center text-white flex-shrink-0`}>
                            {item.icon}
                          </span>
                          <span className="text-sm font-medium text-gray-700">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Locations */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'ru' ? 'Другие районы' : language === 'ar' ? 'مناطق أخرى' : 'Other Areas'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {otherLocations.map((loc) => {
                const locGradient = locationColors[loc.slug] || 'from-blue-600 to-blue-500';
                const locIcon = locationIcons[loc.slug];
                const displayName = loc.h1[language]?.replace(/Клининг в |Cleaning in |تنظيف في /g, '').split(' –')[0] || loc.slug;
                return (
                  <Link
                    key={loc.slug}
                    href={getLocalizedPath(`/locations/${loc.slug}`)}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${locGradient} flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform`}>
                      {locIcon || (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {displayName}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </section>

          <ContactSection />
        </main>
        <Footer />
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
