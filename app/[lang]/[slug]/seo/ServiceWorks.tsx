'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { getServiceGallery } from '@/app/data/seoLandings/serviceGallery';

type Lang = 'ru' | 'en' | 'ar';

// Landing slug → gallery service value (admin uses: carpet/sofa/curtains/ac/mattress).
const GALLERY_SERVICE: Record<string, string> = {
  'carpet-cleaning': 'carpet',
  'premium-rug-cleaning': 'carpet',
  'carpet-flooring-cleaning': 'carpet',
  'sofa-cleaning': 'sofa',
  'upholstery-cleaning': 'sofa',
  'curtain-cleaning': 'curtains',
  'mattress-cleaning': 'mattress',
  'central-ac-cleaning': 'ac',
};

// "Our works" strip — pulls real published photos from the portfolio gallery
// (/api/gallery by service), falling back to the static library if none.
export default function ServiceWorks({ slug }: { slug: string }) {
  const { language, getLocalizedPath } = useLanguage();
  const lang = language as Lang;
  const tr = (ru: string, en: string, ar?: string) => (lang === 'en' ? en : lang === 'ar' ? ar ?? ru : ru);

  const service = GALLERY_SERVICE[slug];
  const [remote, setRemote] = useState<string[] | null>(null);

  useEffect(() => {
    if (!service) return;
    let alive = true;
    fetch(`/api/gallery?published=true&service=${service}`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (!alive || !Array.isArray(data)) return;
        const imgs = data.map((d: { afterImage?: string }) => d.afterImage).filter(Boolean) as string[];
        if (imgs.length) setRemote(imgs.slice(0, 6));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [service]);

  const imgs = (remote && remote.length ? remote : getServiceGallery(slug)).slice(0, 6);
  if (!imgs.length) return null;

  return (
    <section data-reveal className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
            {tr('Портфолио', 'Portfolio', 'أعمالنا')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {tr('Наши работы', 'Our Works', 'أعمالنا')}
          </h2>
        </div>
        <Link
          href={getLocalizedPath('/portfolio')}
          className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg text-sm"
        >
          {tr('Смотреть портфолио', 'View Portfolio', 'عرض الأعمال')}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {imgs.map((src, i) => (
          <Link
            key={i}
            href={getLocalizedPath('/portfolio')}
            className={`relative rounded-2xl overflow-hidden shadow-lg group ${i === 0 ? 'col-span-2 md:col-span-1' : ''}`}
          >
            <div className="relative aspect-[4/3]">
              <img src={src} alt={`${tr('Работа', 'Work', 'عمل')} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
