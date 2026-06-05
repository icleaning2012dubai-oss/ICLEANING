'use client';

import { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageProvider';

const WORKS = [
  { src: '/images/carpet_cleaning.webp',   label: { ru: 'Чистка ковров',      en: 'Carpet Cleaning',    ar: 'تنظيف السجاد'   } },
  { src: '/images/sofa_cleaning.webp',     label: { ru: 'Диваны и матрасы',   en: 'Sofa & Mattresses',  ar: 'الأرائك والمراتب'} },
  { src: '/images/curtain_cleaning.webp',  label: { ru: 'Шторы и жалюзи',     en: 'Curtains & Blinds',  ar: 'الستائر والمظلات'} },
  { src: '/images/ac_cleaning.webp',       label: { ru: 'Кондиционеры',       en: 'AC Cleaning',        ar: 'تنظيف المكيفات'  } },
  { src: '/images/room_cleaning.webp',     label: { ru: 'Глубокая уборка',    en: 'Deep Cleaning',      ar: 'التنظيف العميق'  } },
  { src: '/images/carpet/wool.webp',       label: { ru: 'Шерстяные ковры',    en: 'Wool Carpets',       ar: 'السجاد الصوفي'   } },
  { src: '/images/sofa/leather-sofa.webp', label: { ru: 'Кожаные диваны',     en: 'Leather Sofas',      ar: 'الأرائك الجلدية' } },
  { src: '/images/curtains/classic.webp',  label: { ru: 'Классические шторы', en: 'Classic Curtains',   ar: 'الستائر الكلاسيكية'} },
];

const OurWorksSection = memo(function OurWorksSection() {
  const { language, getLocalizedPath } = useLanguage();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % WORKS.length), 4000);
    return () => clearInterval(id);
  }, []);

  const lang = language as 'ru' | 'en' | 'ar';
  const heading  = lang === 'ru' ? 'Наши работы'         : lang === 'ar' ? 'أعمالنا'            : 'Our Works';
  const cta      = lang === 'ru' ? 'Смотреть портфолио'  : lang === 'ar' ? 'عرض الأعمال'        : 'View Portfolio';

  // Show 1 on mobile, 2 on sm, 3 on lg
  const getVisible = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640)  return 2;
    return 1;
  };

  const [visible, setVisible] = useState(3);
  useEffect(() => {
    const update = () => setVisible(getVisible());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const total = WORKS.length;
  const maxIdx = total - visible;

  const prev = () => setIdx(i => Math.max(0, i - 1));
  const next = () => setIdx(i => Math.min(maxIdx, i + 1));

  const offset = -(idx * (100 / visible));

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">

        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {heading}
          </h2>
          <Link
            href={getLocalizedPath('/portfolio')}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            {cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
            style={{ transform: `translateX(calc(${offset}% - ${idx * (visible > 1 ? 16 : 0)}px))` }}
          >
            {WORKS.map((w, i) => (
              <Link
                key={i}
                href={getLocalizedPath('/portfolio')}
                className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg group"
                style={{ width: `calc(${100 / visible}% - ${visible > 1 ? '1rem' : '0px'})` }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={w.src}
                    alt={w.label.en}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white font-semibold text-base sm:text-lg drop-shadow-lg">
                    {w.label[lang] || w.label.en}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Arrows */}
          {idx > 0 && (
            <button type="button" aria-label="Previous" onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg text-gray-700 hover:text-blue-600 flex items-center justify-center transition-all z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          {idx < maxIdx && (
            <button type="button" aria-label="Next" onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 shadow-lg text-gray-700 hover:text-blue-600 flex items-center justify-center transition-all z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} type="button" aria-label={`Slide ${i + 1}`} onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="text-center mt-6 sm:hidden">
          <Link
            href={getLocalizedPath('/portfolio')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
          >
            {cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
});

export default OurWorksSection;
