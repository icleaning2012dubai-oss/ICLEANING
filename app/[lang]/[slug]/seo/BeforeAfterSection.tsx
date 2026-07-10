'use client';

import { useEffect, useRef, useState } from 'react';

type Lang = 'ru' | 'en' | 'ar';
type GalleryItem = {
  _id?: string;
  title?: { ru?: string; en?: string; ar?: string };
  beforeImage: string;
  afterImage: string;
  service: string;
};

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

export default function BeforeAfterSection({ slug, lang }: { slug: string; lang: Lang }) {
  const service = GALLERY_SERVICE[slug];
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);

  const tr = (ru: string, en: string, ar?: string) => (lang === 'en' ? en : lang === 'ar' ? ar ?? ru : ru);

  useEffect(() => {
    if (!service) return;
    let alive = true;
    fetch(`/api/gallery?published=true&service=${service}`)
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => {
        if (!alive || !Array.isArray(data)) return;
        setItems(data.filter((d: GalleryItem) => d && d.beforeImage && d.afterImage).slice(0, 6));
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [service]);

  if (!service || items.length === 0) return null;
  const item = items[active];

  return (
    <section className="py-4 mb-12 sm:mb-16">
      <div className="text-center mb-8 sm:mb-10">
        <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
          {tr('Результат', 'Results', 'النتيجة')}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          {tr('До и после', 'Before & After', 'قبل وبعد')}
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <Slider before={item.beforeImage} after={item.afterImage} pos={pos} setPos={setPos} tr={tr} />
        {items.length > 1 && (
          <div className="flex justify-center gap-2.5 mt-5">
            {items.map((it, i) => (
              <button
                key={it._id ?? i}
                aria-label={`${i + 1}`}
                onClick={() => {
                  setActive(i);
                  setPos(50);
                }}
                className={`relative w-16 h-12 rounded-xl overflow-hidden border-2 transition-all ${i === active ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={it.afterImage} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Slider({
  before,
  after,
  pos,
  setPos,
  tr,
}: {
  before: string;
  after: string;
  pos: number;
  setPos: (n: number) => void;
  tr: (ru: string, en: string, ar?: string) => string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
    >
      <img src={after} alt="after" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <img
        src={before}
        alt="before"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />
      {/* labels */}
      <span className="absolute top-4 left-4 bg-black/55 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
        {tr('До', 'Before', 'قبل')}
      </span>
      <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
        {tr('После', 'After', 'بعد')}
      </span>
      {/* divider + handle */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.4)]" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-blue-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </div>
      </div>
    </div>
  );
}
