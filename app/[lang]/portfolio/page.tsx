'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useLanguage } from '@/app/contexts/LanguageProvider';

// ── Types ──────────────────────────────────────────────────────────────────────
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

interface StaticPhoto {
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

// ── Static gallery photos ──────────────────────────────────────────────────────
const STATIC_PHOTOS: StaticPhoto[] = [
  { src: '/images/cleaning/general1.webp',          alt: 'General Cleaning',        category: 'cleaning', width: 1200, height: 800  },
  { src: '/images/cleaning/general2.webp',          alt: 'General Cleaning 2',      category: 'cleaning', width: 800,  height: 1066 },
  { src: '/images/cleaning/regular.webp',           alt: 'Regular Cleaning',        category: 'cleaning', width: 1200, height: 900  },
  { src: '/images/cleaning/tchatelna.webp',         alt: 'Detailed Cleaning',       category: 'cleaning', width: 800,  height: 1200 },
  { src: '/images/cleaning/vanna.webp',             alt: 'Bathroom Cleaning',       category: 'cleaning', width: 1200, height: 800  },
  { src: '/images/cleaning/pol.webp',               alt: 'Floor Cleaning',          category: 'cleaning', width: 900,  height: 1200 },
  { src: '/images/cleaning/okna.webp',              alt: 'Window Cleaning',         category: 'cleaning', width: 1200, height: 800  },
  { src: '/images/cleaning/poverhna.webp',          alt: 'Surface Cleaning',        category: 'cleaning', width: 800,  height: 600  },
  { src: '/images/cleaning/podmet.webp',            alt: 'Sweeping',                category: 'cleaning', width: 1200, height: 900  },
  { src: '/images/cleaning/legka.webp',             alt: 'Light Cleaning',          category: 'cleaning', width: 800,  height: 1100 },
  { src: '/images/decorative.webp',                 alt: 'Decorative Cleaning',     category: 'cleaning', width: 1200, height: 800  },
  { src: '/images/decorative2.webp',                alt: 'Decorative Cleaning 2',   category: 'cleaning', width: 900,  height: 1200 },
  { src: '/images/room_cleaning.webp',              alt: 'Room Cleaning',           category: 'cleaning', width: 1200, height: 800  },
  { src: '/images/carpet_cleaning.webp',            alt: 'Carpet Cleaning',         category: 'carpet',   width: 1200, height: 800  },
  { src: '/images/carpet/wool.webp',                alt: 'Wool Carpet',             category: 'carpet',   width: 1200, height: 900  },
  { src: '/images/carpet/silk.webp',                alt: 'Silk Carpet',             category: 'carpet',   width: 800,  height: 1100 },
  { src: '/images/carpet/rugs.webp',                alt: 'Rugs',                    category: 'carpet',   width: 1200, height: 800  },
  { src: '/images/carpet/handmade.webp',            alt: 'Handmade Carpet',         category: 'carpet',   width: 900,  height: 1200 },
  { src: '/images/carpet/pure-wool.webp',           alt: 'Pure Wool Carpet',        category: 'carpet',   width: 1200, height: 800  },
  { src: '/images/carpet/cotton.webp',              alt: 'Cotton Carpet',           category: 'carpet',   width: 1200, height: 900  },
  { src: '/images/sofa_cleaning.webp',              alt: 'Sofa Cleaning',           category: 'sofa',     width: 1200, height: 800  },
  { src: '/images/sofa/leather-sofa.webp',          alt: 'Leather Sofa',            category: 'sofa',     width: 1200, height: 900  },
  { src: '/images/sofa/standart-sofa.webp',         alt: 'Standard Sofa',           category: 'sofa',     width: 800,  height: 1066 },
  { src: '/images/sofa/chear.webp',                 alt: 'Chair Cleaning',          category: 'sofa',     width: 800,  height: 1200 },
  { src: '/images/curtains/curtains_cleaning.webp', alt: 'Curtains Cleaning',       category: 'curtains', width: 1200, height: 800  },
  { src: '/images/curtains/classic.webp',           alt: 'Classic Curtains',        category: 'curtains', width: 800,  height: 1200 },
  { src: '/images/curtains/comlex.webp',            alt: 'Complex Curtains',        category: 'curtains', width: 1100, height: 800  },
  { src: '/images/curtains/rulon.webp',             alt: 'Roller Blinds',           category: 'curtains', width: 800,  height: 1100 },
  { src: '/images/curtains/chistka-na-meste.webp',  alt: 'On-Site Curtain Cleaning',category: 'curtains', width: 1200, height: 800  },
  { src: '/images/curtains/texstil.webp',           alt: 'Textile Curtains',        category: 'curtains', width: 900,  height: 1200 },
  { src: '/images/ac_cleaning.webp',                alt: 'AC Cleaning',             category: 'ac',       width: 1200, height: 900  },
  { src: '/images/ac/gluboka.webp',                 alt: 'Deep AC Cleaning',        category: 'ac',       width: 1200, height: 800  },
  { src: '/images/ac/standart.webp',                alt: 'Standard AC Service',     category: 'ac',       width: 800,  height: 1066 },
  { src: '/images/ac/promyshlena.webp',             alt: 'Industrial AC Service',   category: 'ac',       width: 1200, height: 800  },
];

const SERVICE_FILTERS = [
  { key: '',         label: { ru: 'Все',          en: 'All',       ar: 'الكل'    } },
  { key: 'cleaning', label: { ru: 'Уборка',        en: 'Cleaning',  ar: 'التنظيف' } },
  { key: 'carpet',   label: { ru: 'Ковры',         en: 'Carpets',   ar: 'السجاد'  } },
  { key: 'sofa',     label: { ru: 'Диваны',        en: 'Sofas',     ar: 'الأرائك' } },
  { key: 'curtains', label: { ru: 'Шторы',         en: 'Curtains',  ar: 'الستائر' } },
  { key: 'ac',       label: { ru: 'Кондиционеры', en: 'AC',        ar: 'المكيفات'} },
];

// ── BeforeAfterSlider ──────────────────────────────────────────────────────────
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

// ── Lightbox ───────────────────────────────────────────────────────────────────
function Lightbox({ photos, index, onClose, onPrev, onNext }: {
  photos: StaticPhoto[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const photo = photos[index];
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="relative max-w-5xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
        <Image
          src={photo.src} alt={photo.alt} fill
          className="object-contain"
          sizes="(max-width: 1280px) 100vw, 80vw"
          priority
        />
      </div>
      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
        {index + 1} / {photos.length}
      </div>
    </div>
  );
}

// ── MasonryGallery ─────────────────────────────────────────────────────────────
function MasonryGallery({
  photos,
  hasMore,
  loadingMore,
  onLoadMore,
}: {
  photos: StaticPhoto[];
  hasMore: boolean;
  loadingMore: boolean;
  onLoadMore: () => void;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevPhoto = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)), [photos.length]);
  const nextPhoto = useCallback(() => setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length)), [photos.length]);

  // IntersectionObserver — подгружаем следующую партию когда sentinel виден
  useEffect(() => {
    if (!sentinelRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting && hasMore && !loadingMore) onLoadMore(); },
      { rootMargin: '300px' }
    );
    obs.observe(sentinelRef.current);
    return () => obs.disconnect();
  }, [hasMore, loadingMore, onLoadMore]);

  if (photos.length === 0 && !loadingMore) {
    return <div className="text-center py-20 text-gray-500">Нет фотографий в этой категории.</div>;
  }

  return (
    <>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
        {photos.map((photo, i) => (
          <div
            key={`${photo.src}-${i}`}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl cursor-pointer group relative"
            onClick={() => openLightbox(i)}
          >
            <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}

        {/* Skeleton-заглушки при подгрузке */}
        {loadingMore && [...Array(8)].map((_, i) => (
          <div key={`sk-${i}`} className="mb-4 break-inside-avoid rounded-xl overflow-hidden">
            <div className="w-full bg-gray-200 animate-pulse rounded-xl" style={{ aspectRatio: i % 3 === 0 ? '3/4' : '4/3', minHeight: 160 }} />
          </div>
        ))}
      </div>

      {/* Sentinel для IntersectionObserver */}
      <div ref={sentinelRef} className="h-4" />

      {!hasMore && photos.length > 0 && (
        <p className="text-center text-gray-400 text-sm mt-4 pb-4">Все фото загружены · {photos.length} шт.</p>
      )}

      {lightboxIndex !== null && (
        <Lightbox photos={photos} index={lightboxIndex} onClose={closeLightbox} onPrev={prevPhoto} onNext={nextPhoto} />
      )}
    </>
  );
}

const GALLERY_PAGE_SIZE = 24;

/** Fisher-Yates shuffle — returns a new array */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── PortfolioPage ──────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'before-after' | 'gallery'>('gallery');
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('');

  // Gallery infinite scroll state
  const [galleryFilter, setGalleryFilter] = useState('');
  const [galleryPhotos, setGalleryPhotos] = useState<StaticPhoto[]>([]);
  const [gallerySkip, setGallerySkip] = useState(0);
  const [galleryHasMore, setGalleryHasMore] = useState(true);
  const [galleryLoadingMore, setGalleryLoadingMore] = useState(false);
  const galleryInitialized = useRef(false);

  const lang = language as 'ru' | 'en' | 'ar';

  // ── Fetch before/after ──
  useEffect(() => {
    const url = activeFilter
      ? `/api/gallery?published=true&service=${activeFilter}`
      : '/api/gallery?published=true';
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => { setItems(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [activeFilter]);

  // ── Fetch one page of gallery photos ──
  const fetchGalleryPage = useCallback(async (skip: number, category: string, replace: boolean) => {
    setGalleryLoadingMore(true);
    try {
      const cat = category ? `&category=${category}` : '';
      const res  = await fetch(`/api/gallery-photos?published=true&limit=${GALLERY_PAGE_SIZE}&skip=${skip}${cat}`);
      const data = await res.json();
      // If DB returned old format (plain array) fall back to static
      if (Array.isArray(data)) {
        const mapped = shuffle(data.map((p: {url: string; alt: string; category: string; width: number; height: number}) => ({ src: p.url, alt: p.alt || '', category: p.category, width: p.width || 1200, height: p.height || 800 })));
        setGalleryPhotos((prev) => replace ? mapped : [...prev, ...mapped]);
        setGalleryHasMore(false);
        return;
      }
      const mapped: StaticPhoto[] = shuffle((data.photos || []).map((p: {url: string; alt: string; category: string; width: number; height: number}) => ({
        src: p.url, alt: p.alt || '', category: p.category, width: p.width || 1200, height: p.height || 800,
      })));
      setGalleryPhotos((prev) => replace ? mapped : [...prev, ...mapped]);
      setGalleryHasMore(data.hasMore ?? false);
      setGallerySkip(skip + mapped.length);
    } catch {
      // Fallback to local static photos
      const filtered = category ? STATIC_PHOTOS.filter((p) => p.category === category) : STATIC_PHOTOS;
      setGalleryPhotos(filtered);
      setGalleryHasMore(false);
    } finally {
      setGalleryLoadingMore(false);
    }
  }, []);

  // ── Open gallery tab → load first page ──
  useEffect(() => {
    if (activeTab !== 'gallery') return;
    if (galleryInitialized.current) return;
    galleryInitialized.current = true;
    fetchGalleryPage(0, galleryFilter, true);
  }, [activeTab, galleryFilter, fetchGalleryPage]);

  // ── Filter change → reset and reload ──
  const handleGalleryFilter = useCallback((cat: string) => {
    setGalleryFilter(cat);
    setGalleryPhotos([]);
    setGallerySkip(0);
    setGalleryHasMore(true);
    galleryInitialized.current = true;
    fetchGalleryPage(0, cat, true);
  }, [fetchGalleryPage]);

  // ── Load next page (called by IntersectionObserver) ──
  const loadMore = useCallback(() => {
    if (!galleryHasMore || galleryLoadingMore) return;
    fetchGalleryPage(gallerySkip, galleryFilter, false);
  }, [galleryHasMore, galleryLoadingMore, gallerySkip, galleryFilter, fetchGalleryPage]);

  const TAB_LABELS = {
    'before-after': { ru: 'До / После', en: 'Before / After', ar: 'قبل / بعد' },
    gallery:        { ru: 'Галерея',    en: 'Gallery',        ar: 'معرض الصور' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/buble.webp)', backgroundRepeat: 'repeat', backgroundSize: '100%' }} />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1400px] mx-auto">

            {/* Title */}
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                {t('portfolio.badge')}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('portfolio.title')}
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {t('portfolio.subtitle')}
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex bg-white rounded-full p-1 shadow-md border border-gray-100">
                {(['gallery', 'before-after'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {TAB_LABELS[tab][lang]}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Tab: Before / After ── */}
            {activeTab === 'before-after' && (
              <>
                {/* Filters */}
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
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">{t('portfolio.noItems')}</h2>
                    <p className="text-gray-500 mb-6">{t('portfolio.noItemsDescription')}</p>
                    <button
                      onClick={() => setActiveTab('gallery')}
                      className="px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                    >
                      {TAB_LABELS.gallery[lang]} →
                    </button>
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
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* ── Tab: Gallery ── */}
            {activeTab === 'gallery' && (
              <>
                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {SERVICE_FILTERS.map((f) => (
                    <button
                      key={f.key}
                      onClick={() => handleGalleryFilter(f.key)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        galleryFilter === f.key
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                      }`}
                    >
                      {f.label[lang]}
                    </button>
                  ))}
                </div>

                <MasonryGallery
                  photos={galleryPhotos}
                  hasMore={galleryHasMore}
                  loadingMore={galleryLoadingMore}
                  onLoadMore={loadMore}
                />
              </>
            )}

          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
