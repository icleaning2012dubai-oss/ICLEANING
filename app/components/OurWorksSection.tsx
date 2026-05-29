'use client';

import { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageProvider';

const WORKS = [
  { src: '/images/carpet/wool.webp', alt: 'Wool Carpet Cleaning' },
  { src: '/images/sofa/leather-sofa.webp', alt: 'Leather Sofa Cleaning' },
  { src: '/images/curtains/classic.webp', alt: 'Classic Curtain Cleaning' },
  { src: '/images/ac/gluboka.webp', alt: 'Deep AC Cleaning' },
  { src: '/images/carpet/handmade.webp', alt: 'Handmade Carpet' },
  { src: '/images/sofa/standart-sofa.webp', alt: 'Standard Sofa Cleaning' },
  { src: '/images/curtains/rulon.webp', alt: 'Roller Blinds' },
  { src: '/images/ac/standart.webp', alt: 'Standard AC Service' },
];

const VISIBLE = 3; // desktop visible slides

const OurWorksSection = memo(function OurWorksSection() {
  const { language, getLocalizedPath } = useLanguage();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % WORKS.length), 4500);
    return () => clearInterval(id);
  }, []);

  const heading = language === 'ru' ? 'Наши работы' : language === 'ar' ? 'أعمالنا' : 'Our Works';
  const cta = language === 'ru' ? 'Смотреть все работы' : language === 'ar' ? 'عرض جميع الأعمال' : 'View all works';

  // build doubled array for seamless wrap
  const items = [...WORKS, ...WORKS];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            {heading}
          </h2>
          <Link
            href={getLocalizedPath('/portfolio')}
            className="hidden sm:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            {cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(calc(-${idx} * (100% / ${VISIBLE} + 0px)))` }}
          >
            {items.map((w, i) => (
              <Link
                key={i}
                href={getLocalizedPath('/portfolio')}
                className="relative flex-shrink-0 w-[80%] sm:w-[48%] lg:w-[32%] aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={w.src}
                  alt={w.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 48vw, 32vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-semibold drop-shadow-lg">
                  {w.alt}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {WORKS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>

        <div className="text-center mt-6 sm:hidden">
          <Link
            href={getLocalizedPath('/portfolio')}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            {cta}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
});

export default OurWorksSection;
