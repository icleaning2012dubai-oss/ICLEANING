'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageProvider';

interface GalleryItem {
  _id: string;
  title: { ru: string; en: string; ar: string };
  description: { ru: string; en: string; ar: string };
  beforeImage: string;
  afterImage: string;
  service: string;
  tags: string[];
  published: boolean;
  order: number;
}

const SERVICE_FILTERS = [
  { key: '',         label: { ru: 'Все',          en: 'All',      ar: 'الكل'     } },
  { key: 'carpet',   label: { ru: 'Ковры',        en: 'Carpets',  ar: 'السجاد'   } },
  { key: 'sofa',     label: { ru: 'Диваны',       en: 'Sofas',    ar: 'الأرائك'  } },
  { key: 'curtains', label: { ru: 'Шторы',        en: 'Curtains', ar: 'الستائر'  } },
  { key: 'ac',       label: { ru: 'Кондиционеры', en: 'AC',       ar: 'المكيفات' } },
  { key: 'stains',   label: { ru: 'Пятна',        en: 'Stains',   ar: 'البقع'    } },
];

function ShareLinkButton({ path, labels }: { path: string; labels: { copy: string; copied: string } }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        const url = (typeof window !== 'undefined' ? window.location.origin : 'https://icleaning.ae') + path;
        try { await navigator.clipboard.writeText(url); } catch { /* ignore */ }
        setDone(true);
        setTimeout(() => setDone(false), 1800);
      }}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5" /></svg>
      {done ? labels.copied : labels.copy}
    </button>
  );
}

function BeforeAfterSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => { if (isDragging) handleMove(e.clientX); };
    const onTouchMove = (e: TouchEvent) => { if (isDragging) handleMove(e.touches[0].clientX); };
    const onEnd = () => setIsDragging(false);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      <Image src={after} alt={`After: ${alt}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <Image
          src={before} alt={`Before: ${alt}`} fill className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ minWidth: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
        />
      </div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10" style={{ left: `${position}%`, transform: 'translateX(-50%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4M16 15l-4 4-4-4" />
          </svg>
        </div>
      </div>
      <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 text-white text-xs rounded-full font-medium z-20">До / Before</div>
      <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white text-xs rounded-full font-medium z-20">После / After</div>
    </div>
  );
}

// Grid of all published before/after examples, with filters and per-item share links.
export default function BeforeAfterGrid() {
  const { language, getLocalizedPath } = useLanguage();
  const lang = language as 'ru' | 'en' | 'ar';
  const tr = (ru: string, en: string, ar: string) => (lang === 'en' ? en : lang === 'ar' ? ar : ru);

  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    const url = activeFilter
      ? `/api/gallery?published=true&service=${activeFilter}`
      : '/api/gallery?published=true';
    setLoading(true);
    fetch(url)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => { setItems(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [activeFilter]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {SERVICE_FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === f.key
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
            }`}
          >
            {f.label[lang]}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
              <div className="aspect-[4/3] bg-gray-200" />
              <div className="p-5 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-2/3" />
                <div className="h-3 bg-gray-200 rounded w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">{tr('Примеров пока нет', 'No examples yet', 'لا توجد أمثلة بعد')}</h2>
          <p className="text-gray-500">{tr('Скоро добавим новые работы «до и после».', 'New before & after work coming soon.', 'سنضيف أعمالاً جديدة قريبًا.')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item._id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <BeforeAfterSlider
                before={item.beforeImage}
                after={item.afterImage}
                alt={item.title[lang] || item.title.en}
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title[lang] || item.title.en}</h3>
                {(item.description[lang] || item.description.en) && (
                  <p className="text-gray-600 text-sm">{item.description[lang] || item.description.en}</p>
                )}
                <div className="mt-3 flex items-center gap-4 border-t border-gray-100 pt-3">
                  <a
                    href={getLocalizedPath(`/portfolio/${item._id}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    {tr('Открыть', 'Open', 'فتح')}
                  </a>
                  <ShareLinkButton
                    path={getLocalizedPath(`/portfolio/${item._id}`)}
                    labels={{ copy: tr('Копировать ссылку', 'Copy link', 'نسخ الرابط'), copied: tr('Скопировано!', 'Copied!', 'تم النسخ!') }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
