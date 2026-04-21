'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import BookingModal from '@/app/components/BookingModal';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buildWhatsAppLink } from '@/app/utils/whatsapp';

interface PriceItem {
  name: { ru: string; en: string; ar: string };
  price: string;
  popular?: boolean;
}

interface PriceCategory {
  title: { ru: string; en: string; ar: string };
  shortTitle: { ru: string; en: string; ar: string };
  iconColor: string;
  icon: React.ReactNode;
  serviceSlug: string;
  popular?: boolean;
  items: PriceItem[];
}

const priceCategories: PriceCategory[] = [
  {
    title: { ru: 'Химчистка диванов', en: 'Sofa Cleaning', ar: 'تنظيف الأرائك' },
    shortTitle: { ru: 'Диваны', en: 'Sofas', ar: 'أرائك' },
    iconColor: 'bg-violet-100 text-violet-600',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 18V12a2 2 0 012-2h12a2 2 0 012 2v6" strokeWidth={1.5} strokeLinecap="round"/><path d="M2 18h20M6 10V7a2 2 0 012-2h8a2 2 0 012 2v3" strokeWidth={1.5} strokeLinecap="round"/></svg>,
    serviceSlug: 'sofa-cleaning-dubai',
    popular: true,
    items: [
      { name: { ru: 'Двухместный диван', en: '2-seater sofa', ar: 'أريكة مقعدين' }, price: '200–250 AED' },
      { name: { ru: 'Трёхместный диван', en: '3-seater sofa', ar: 'أريكة 3 مقاعد' }, price: '300–350 AED', popular: true },
      { name: { ru: 'Угловой диван', en: 'Corner sofa', ar: 'أريكة زاوية' }, price: '350–500 AED' },
      { name: { ru: 'Кожаный диван', en: 'Leather sofa', ar: 'أريكة جلدية' }, price: 'от 350 AED' },
      { name: { ru: 'Кресло', en: 'Armchair', ar: 'كرسي' }, price: '100–150 AED' },
    ],
  },
  {
    title: { ru: 'Чистка ковров', en: 'Carpet Cleaning', ar: 'تنظيف السجاد' },
    shortTitle: { ru: 'Ковры', en: 'Carpets', ar: 'سجاد' },
    iconColor: 'bg-amber-100 text-amber-600',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5}/><path d="M3 9h18M3 15h18M9 3v18M15 3v18" strokeWidth={1.5}/></svg>,
    serviceSlug: 'carpet-cleaning-dubai',
    popular: true,
    items: [
      { name: { ru: 'Синтетический ковёр', en: 'Synthetic carpet', ar: 'سجاد صناعي' }, price: '30 AED/м²' },
      { name: { ru: 'Шерстяной ковёр', en: 'Wool carpet', ar: 'سجاد صوفي' }, price: '35 AED/м²', popular: true },
      { name: { ru: 'Шёлковый ковёр', en: 'Silk carpet', ar: 'سجاد حريري' }, price: '50 AED/м²' },
      { name: { ru: 'Персидский / ручной работы', en: 'Persian / handmade', ar: 'فارسي / مصنوع يدويًا' }, price: 'от 200 AED' },
    ],
  },
  {
    title: { ru: 'Шторы и жалюзи', en: 'Curtain & Blind Cleaning', ar: 'تنظيف الستائر' },
    shortTitle: { ru: 'Шторы', en: 'Curtains', ar: 'ستائر' },
    iconColor: 'bg-pink-100 text-pink-600',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 3h16M4 3v14c0 0 4-3 8 0s8 0 8 0V3" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/><path d="M4 21h16" strokeWidth={1.5} strokeLinecap="round"/></svg>,
    serviceSlug: 'curtains-cleaning-dubai',
    items: [
      { name: { ru: 'Штора (стандартная)', en: 'Curtain (standard)', ar: 'ستارة (قياسية)' }, price: 'от 50 AED' },
      { name: { ru: 'Вертикальные жалюзи', en: 'Vertical blinds', ar: 'ستائر عمودية' }, price: 'от 150 AED' },
      { name: { ru: 'Горизонтальные жалюзи', en: 'Horizontal blinds', ar: 'ستائر أفقية' }, price: 'от 100 AED' },
      { name: { ru: 'Рулонные шторы', en: 'Roller blinds', ar: 'ستائر رول' }, price: 'от 80 AED' },
    ],
  },
  {
    title: { ru: 'Генеральная уборка', en: 'Deep Cleaning', ar: 'تنظيف عميق' },
    shortTitle: { ru: 'Уборка', en: 'Cleaning', ar: 'تنظيف' },
    iconColor: 'bg-emerald-100 text-emerald-600',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" strokeWidth={1.5} strokeLinejoin="round"/></svg>,
    serviceSlug: 'deep-cleaning-dubai',
    popular: true,
    items: [
      { name: { ru: 'Студия / 1-комнатная', en: 'Studio / 1-bedroom', ar: 'استوديو / غرفة واحدة' }, price: '299–399 AED' },
      { name: { ru: '2-комнатная квартира', en: '2-bedroom apartment', ar: 'شقة غرفتين' }, price: '499–549 AED', popular: true },
      { name: { ru: '3-комнатная квартира', en: '3-bedroom apartment', ar: 'شقة 3 غرف' }, price: '699–799 AED' },
      { name: { ru: 'Вилла', en: 'Villa', ar: 'فيلا' }, price: 'от 999 AED' },
      { name: { ru: 'После ремонта', en: 'Post-renovation', ar: 'بعد التجديد' }, price: 'от 500 AED' },
      { name: { ru: 'Офис (за 1 уборщика/час)', en: 'Office (per cleaner/hour)', ar: 'مكتب (لكل عامل/ساعة)' }, price: '30 AED/ч' },
    ],
  },
  {
    title: { ru: 'Чистка матрасов', en: 'Mattress Cleaning', ar: 'تنظيف المراتب' },
    shortTitle: { ru: 'Матрасы', en: 'Mattresses', ar: 'مراتب' },
    iconColor: 'bg-indigo-100 text-indigo-600',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="10" rx="3" strokeWidth={1.5}/><path d="M2 14h20" strokeWidth={1.5}/><path d="M6 8V6a2 2 0 012-2h8a2 2 0 012 2v2" strokeWidth={1.5}/></svg>,
    serviceSlug: 'sofa-cleaning-dubai',
    items: [
      { name: { ru: 'Односпальный матрас', en: 'Single mattress', ar: 'مرتبة فردية' }, price: 'от 200 AED' },
      { name: { ru: 'Двуспальный матрас', en: 'Double mattress', ar: 'مرتبة مزدوجة' }, price: 'от 350 AED' },
      { name: { ru: 'Ортопедический', en: 'Orthopedic', ar: 'طبي' }, price: 'от 400 AED' },
    ],
  },
  {
    title: { ru: 'Кондиционеры', en: 'AC Cleaning', ar: 'تنظيف المكيفات' },
    shortTitle: { ru: 'Конд.', en: 'AC', ar: 'مكيف' },
    iconColor: 'bg-sky-100 text-sky-600',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" strokeWidth={1.5} strokeLinecap="round"/></svg>,
    serviceSlug: 'ac-cleaning-dubai',
    items: [
      { name: { ru: '1 сплит-система', en: '1 split unit', ar: 'وحدة سبليت واحدة' }, price: 'от 150 AED' },
      { name: { ru: 'Канальный кондиционер', en: 'Ducted AC', ar: 'تكييف مركزي' }, price: 'от 250 AED' },
    ],
  },
  {
    title: { ru: 'Мойка окон', en: 'Window Cleaning', ar: 'تنظيف النوافذ' },
    shortTitle: { ru: 'Окна', en: 'Windows', ar: 'نوافذ' },
    iconColor: 'bg-cyan-100 text-cyan-600',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5}/><path d="M12 3v18M3 12h18" strokeWidth={1.5}/></svg>,
    serviceSlug: 'deep-cleaning-dubai',
    items: [
      { name: { ru: 'Стандартное окно', en: 'Standard window', ar: 'نافذة قياسية' }, price: 'от 15 AED' },
      { name: { ru: 'Панорамное окно', en: 'Panoramic window', ar: 'نافذة بانورامية' }, price: 'от 150 AED' },
      { name: { ru: 'Все окна в квартире', en: 'All apartment windows', ar: 'جميع نوافذ الشقة' }, price: '299 AED' },
    ],
  },
  {
    title: { ru: 'Дезинфекция', en: 'Disinfection', ar: 'التطهير' },
    shortTitle: { ru: 'Дезинф.', en: 'Disinfect', ar: 'تطهير' },
    iconColor: 'bg-lime-100 text-lime-600',
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" strokeWidth={1.5}/><path strokeLinecap="round" strokeWidth={1.5} d="M12 2v5M12 17v5M2 12h5M17 12h5M4.93 4.93l3.54 3.54M15.54 15.54l3.53 3.53M4.93 19.07l3.54-3.54M15.54 8.46l3.53-3.53" /></svg>,
    serviceSlug: 'deep-cleaning-dubai',
    items: [
      { name: { ru: '1-комнатная квартира', en: '1-bedroom apartment', ar: 'شقة غرفة واحدة' }, price: 'от 350 AED' },
    ],
  },
];

export default function PricesPageClient() {
  const pathname = usePathname();
  const { language, t, getLocalizedPath } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  const pageTitle = language === 'ru' ? 'Цены на услуги' : language === 'ar' ? 'أسعار الخدمات' : 'Service Prices';
  const pageSubtitle = language === 'ru'
    ? 'Прозрачные цены без скрытых доплат'
    : language === 'ar'
      ? 'أسعار شفافة بدون رسوم مخفية'
      : 'Transparent pricing with no hidden fees';

  const filtered = activeFilter !== null ? [priceCategories[activeFilter]] : priceCategories;

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
          <section className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-[1400px] mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
                <Link href={getLocalizedPath('/')} className="hover:text-blue-600 transition-colors">
                  {t('serviceHero.home')}
                </Link>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-medium">{pageTitle}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                {pageTitle}
              </h1>
              <p className="text-lg text-gray-500 mb-8">{pageSubtitle}</p>

              {/* Trust badges */}
              <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-8">
                {[
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
                    text: language === 'ru' ? 'Включая VAT' : language === 'ar' ? 'شاملة الضريبة' : 'VAT included' },
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>,
                    text: language === 'ru' ? 'Без скрытых доплат' : language === 'ar' ? 'بدون رسوم مخفية' : 'No hidden fees' },
                  { icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>,
                    text: language === 'ru' ? 'Оценка за 5 минут' : language === 'ar' ? 'تقييم في 5 دقائق' : 'Estimate in 5 min' },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-blue-500">{badge.icon}</span>
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Category Filter Tabs */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveFilter(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === null
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 shadow-sm'
                }`}
              >
                {language === 'ru' ? 'Все услуги' : language === 'ar' ? 'جميع الخدمات' : 'All services'}
              </button>
              {priceCategories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFilter(activeFilter === idx ? null : idx)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === idx
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 shadow-sm'
                  }`}
                >
                  {cat.shortTitle[language as keyof typeof cat.shortTitle] || cat.shortTitle.ru}
                </button>
              ))}
            </div>
          </section>

          {/* Price Cards */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className={`grid gap-6 ${activeFilter !== null ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 md:grid-cols-2'}`}>
              {filtered.map((cat, idx) => (
                <div
                  key={idx}
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/50 flex flex-col ${
                    cat.popular ? 'ring-2 ring-blue-200/60' : ''
                  }`}
                >
                  {/* Card header */}
                  <div className="p-6 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`flex items-center justify-center w-10 h-10 rounded-xl ${cat.iconColor} flex-shrink-0`}>
                        {cat.icon}
                      </span>
                      <Link
                        href={getLocalizedPath(`/services/${cat.serviceSlug}`)}
                        className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {cat.title[language as keyof typeof cat.title] || cat.title.ru}
                      </Link>
                    </div>
                    {cat.popular && (
                      <span className="text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full">
                        {language === 'ru' ? 'Популярно' : language === 'ar' ? 'شائع' : 'Popular'}
                      </span>
                    )}
                  </div>

                  {/* Price rows */}
                  <div className="px-6 pb-6 flex-1 flex flex-col">
                    <div className="bg-gray-50/80 rounded-xl divide-y divide-gray-100">
                      {cat.items.map((item, i) => (
                        <div
                          key={i}
                          className={`flex justify-between items-center px-4 py-3 ${
                            item.popular ? 'bg-blue-50/60' : ''
                          } first:rounded-t-xl last:rounded-b-xl`}
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-gray-700 text-sm sm:text-base truncate">
                              {item.name[language as keyof typeof item.name] || item.name.ru}
                            </span>
                            {item.popular && (
                              <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            )}
                          </div>
                          <span className="font-bold text-gray-900 whitespace-nowrap ml-4 text-sm sm:text-base">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Link to service */}
                    <Link
                      href={getLocalizedPath(`/services/${cat.serviceSlug}`)}
                      className="mt-auto pt-4 flex items-center justify-center gap-1.5 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      {language === 'ru' ? 'Подробнее об услуге' : language === 'ar' ? 'المزيد عن الخدمة' : 'Learn more'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Banner */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />

              <div className="relative text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {language === 'ru' ? 'Нужен точный расчёт?' : language === 'ar' ? 'هل تحتاج حسابًا دقيقًا؟' : 'Need an exact quote?'}
                </h2>
                <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                  {language === 'ru'
                    ? 'Пришлите фото — мы рассчитаем стоимость за 5 минут. Или оставьте заявку, и мы перезвоним.'
                    : language === 'ar'
                      ? 'أرسل صورة — سنحسب التكلفة خلال 5 دقائق. أو اترك طلبًا وسنعاود الاتصال.'
                      : 'Send a photo — we\'ll calculate the cost in 5 minutes. Or leave a request and we\'ll call back.'}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:scale-105"
                  >
                    {language === 'ru' ? 'Заказать услугу' : language === 'ar' ? 'اطلب الخدمة' : 'Book Service'}
                  </button>
                  <a
                    href={buildWhatsAppLink(language, pathname)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-10 py-4 border-2 border-white/50 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.325 0-4.491-.753-6.243-2.033l-.436-.326-2.645.887.887-2.645-.326-.436A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                    WhatsApp
                  </a>
                </div>
              </div>
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
