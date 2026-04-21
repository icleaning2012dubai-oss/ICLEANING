'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import BookingModal from '@/app/components/BookingModal';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { buildWhatsAppLink } from '@/app/utils/whatsapp';

interface Review {
  name: string;
  initials: string;
  color: string;
  location: { ru: string; en: string; ar: string };
  service: { ru: string; en: string; ar: string };
  serviceColor: string;
  text: { ru: string; en: string; ar: string };
  rating: number;
  featured?: boolean;
}

const reviews: Review[] = [
  {
    name: 'Марина К.',
    initials: 'МК',
    color: 'bg-rose-500',
    location: { ru: 'Dubai Marina', en: 'Dubai Marina', ar: 'دبي مارينا' },
    service: { ru: 'Химчистка дивана', en: 'Sofa cleaning', ar: 'تنظيف الأريكة' },
    serviceColor: 'bg-violet-100 text-violet-700',
    text: {
      ru: 'Заказывала чистку углового дивана. Приехали вовремя, работали аккуратно. Пятна от кофе, которые я считала безнадёжными, исчезли. Очень довольна!',
      en: 'Ordered corner sofa cleaning. They arrived on time and worked carefully. Coffee stains I thought were hopeless disappeared. Very satisfied!',
      ar: 'طلبت تنظيف أريكة زاوية. وصلوا في الموعد وعملوا بعناية. بقع القهوة التي اعتقدت أنها ميؤوس منها اختفت. راضية جدًا!',
    },
    rating: 5,
    featured: true,
  },
  {
    name: 'Ahmed R.',
    initials: 'AR',
    color: 'bg-blue-500',
    location: { ru: 'JLT', en: 'JLT', ar: 'JLT' },
    service: { ru: 'Чистка ковров', en: 'Carpet cleaning', ar: 'تنظيف السجاد' },
    serviceColor: 'bg-amber-100 text-amber-700',
    text: {
      ru: 'У нас большой персидский ковёр 3×4 метра. Боялись отдавать кому-то. Но ребята из iCleaning почистили его на месте, вручную. Ковёр как новый, цвета стали ярче. Рекомендую.',
      en: 'We have a large 3×4m Persian rug. We were afraid to give it to anyone. But the iCleaning team cleaned it on-site, by hand. The rug looks like new, colors became brighter. Recommended.',
      ar: 'لدينا سجادة فارسية كبيرة 3×4 م. كنا خائفين من إعطائها لأي شخص. لكن فريق iCleaning نظفها في المكان، يدويًا. السجادة كالجديدة، الألوان أصبحت أكثر إشراقًا. أنصح.',
    },
    rating: 5,
  },
  {
    name: 'Елена В.',
    initials: 'ЕВ',
    color: 'bg-emerald-500',
    location: { ru: 'Downtown Dubai', en: 'Downtown Dubai', ar: 'داون تاون دبي' },
    service: { ru: 'Генеральная уборка', en: 'Deep cleaning', ar: 'تنظيف عميق' },
    serviceColor: 'bg-emerald-100 text-emerald-700',
    text: {
      ru: 'Заказала генеральную уборку перед сдачей квартиры. Приехали втроём, за 4 часа убрали всё: кухню, ванную, окна. Хозяин остался доволен при приёмке. Спасибо!',
      en: 'Ordered deep cleaning before handing over the apartment. Three people came, cleaned everything in 4 hours: kitchen, bathroom, windows. The landlord was pleased at handover. Thank you!',
      ar: 'طلبت تنظيف عميق قبل تسليم الشقة. جاء ثلاثة أشخاص، نظفوا كل شيء في 4 ساعات: المطبخ، الحمام، النوافذ. المالك كان سعيدًا عند التسليم. شكرًا!',
    },
    rating: 5,
  },
  {
    name: 'Khalid M.',
    initials: 'KM',
    color: 'bg-sky-500',
    location: { ru: 'Palm Jumeirah', en: 'Palm Jumeirah', ar: 'نخلة جميرا' },
    service: { ru: 'Кондиционеры', en: 'AC cleaning', ar: 'تنظيف المكيفات' },
    serviceColor: 'bg-sky-100 text-sky-700',
    text: {
      ru: 'Вилла на Пальме, 6 кондиционеров. Перед летом всегда чистим. iCleaning делают это профессионально – разбирают, моют, сушат, собирают. Воздух после них – как в горах.',
      en: 'Villa on the Palm, 6 AC units. We always clean before summer. iCleaning does it professionally – disassemble, wash, dry, reassemble. Air after them – like in the mountains.',
      ar: 'فيلا في النخلة، 6 وحدات تكييف. دائمًا ننظفها قبل الصيف. iCleaning يقومون بذلك باحترافية – يفككون، يغسلون، يجففون، يعيدون التجميع. الهواء بعدهم – كأنه في الجبال.',
    },
    rating: 5,
    featured: true,
  },
  {
    name: 'Анна С.',
    initials: 'АС',
    color: 'bg-pink-500',
    location: { ru: 'Al Barsha', en: 'Al Barsha', ar: 'البرشاء' },
    service: { ru: 'Стирка штор', en: 'Curtain washing', ar: 'غسيل الستائر' },
    serviceColor: 'bg-pink-100 text-pink-700',
    text: {
      ru: 'Сняли шторы, постирали, отпарили и повесили обратно. Я даже не заметила, что их снимали! Очень деликатная работа. Приятные ребята.',
      en: 'They took down the curtains, washed, steamed, and hung them back. I didn\'t even notice they were taken down! Very delicate work. Nice team.',
      ar: 'أنزلوا الستائر، غسلوها، بخروها وعلقوها مرة أخرى. لم ألاحظ حتى أنها أُنزلت! عمل دقيق جدًا. فريق لطيف.',
    },
    rating: 5,
  },
  {
    name: 'Fatima H.',
    initials: 'FH',
    color: 'bg-orange-500',
    location: { ru: 'Sharjah', en: 'Sharjah', ar: 'الشارقة' },
    service: { ru: 'Химчистка дивана', en: 'Sofa cleaning', ar: 'تنظيف الأريكة' },
    serviceColor: 'bg-violet-100 text-violet-700',
    text: {
      ru: 'Живу в Шардже, думала, никто не поедет. Но iCleaning приехали на следующий день. Доплата за дорогу небольшая. Зато результат – отличный. Диван стал белоснежным.',
      en: 'I live in Sharjah, thought no one would come. But iCleaning arrived the next day. Travel surcharge was small. And the result – excellent. The sofa became snow-white.',
      ar: 'أعيش في الشارقة، ظننت أن أحدًا لن يأتي. لكن iCleaning وصلوا في اليوم التالي. رسوم الطريق كانت صغيرة. والنتيجة – ممتازة. الأريكة أصبحت بيضاء ناصعة.',
    },
    rating: 5,
  },
  {
    name: 'Дмитрий Л.',
    initials: 'ДЛ',
    color: 'bg-indigo-500',
    location: { ru: 'International City', en: 'International City', ar: 'المدينة العالمية' },
    service: { ru: 'Чистка матраса', en: 'Mattress cleaning', ar: 'تنظيف المرتبة' },
    serviceColor: 'bg-violet-100 text-violet-700',
    text: {
      ru: 'Квартира съёмная, матрас был в ужасном состоянии. После чистки – исчез запах, пятна стали почти невидимыми. Говорят, ещё и клещей убрали. Сон стал лучше!',
      en: 'Rental apartment, mattress was in terrible condition. After cleaning – odor gone, stains became almost invisible. They say they removed mites too. Sleep got better!',
      ar: 'شقة إيجار، المرتبة كانت في حالة مروعة. بعد التنظيف – الرائحة ذهبت، البقع أصبحت شبه غير مرئية. يقولون أنهم أزالوا العث أيضًا. النوم تحسن!',
    },
    rating: 4,
  },
  {
    name: 'Sara A.',
    initials: 'SA',
    color: 'bg-teal-500',
    location: { ru: 'Jumeirah', en: 'Jumeirah', ar: 'جميرا' },
    service: { ru: 'Шёлковый ковёр', en: 'Silk carpet', ar: 'سجاد حريري' },
    serviceColor: 'bg-amber-100 text-amber-700',
    text: {
      ru: 'У меня дорогой шёлковый ковёр. Боялась, что испортят. Но мастер сначала проверил кусочек, объяснил метод, и только потом начал. Ковёр идеальный. Профессионалы.',
      en: 'I have an expensive silk carpet. Was afraid they\'d ruin it. But the specialist first tested a small area, explained the method, then started. Carpet is perfect. Professionals.',
      ar: 'لدي سجادة حريرية غالية. كنت خائفة أن يتلفوها. لكن المتخصص أولاً اختبر منطقة صغيرة، شرح الطريقة، ثم بدأ. السجادة مثالية. محترفون.',
    },
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPageClient() {
  const pathname = usePathname();
  const { language, t, getLocalizedPath } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageTitle = language === 'ru' ? 'Отзывы клиентов' : language === 'ar' ? 'آراء العملاء' : 'Customer Reviews';
  const pageSubtitle = language === 'ru'
    ? 'Нам доверяют жители Дубая, Абу-Даби и Шарджи'
    : language === 'ar'
      ? 'يثق بنا سكان دبي وأبوظبي والشارقة'
      : 'Trusted by residents of Dubai, Abu Dhabi, and Sharjah';

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const fiveStarPct = Math.round((reviews.filter(r => r.rating === 5).length / reviews.length) * 100);

  // Split reviews into 3 columns for masonry
  const cols: Review[][] = [[], [], []];
  reviews.forEach((r, i) => cols[i % 3].push(r));

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

              {/* Stats Bar */}
              <div className="inline-flex items-center gap-6 sm:gap-10 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-5 shadow-lg border border-white/50">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-3xl font-bold text-gray-900">{avgRating}</span>
                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">{language === 'ru' ? 'Средняя оценка' : language === 'ar' ? 'التقييم المتوسط' : 'Average rating'}</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{reviews.length}+</div>
                  <p className="text-xs text-gray-500">{language === 'ru' ? 'Отзывов' : language === 'ar' ? 'التقييمات' : 'Reviews'}</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{fiveStarPct}%</div>
                  <p className="text-xs text-gray-500">{language === 'ru' ? '5 звёзд' : language === 'ar' ? '5 نجوم' : '5 stars'}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews Masonry Grid */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Mobile: single column, Tablet: 2 cols, Desktop: 3 cols masonry */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className={`break-inside-avoid bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-white/50 overflow-hidden ${
                    review.featured ? 'ring-2 ring-blue-200/60' : ''
                  }`}
                >
                  {/* Featured badge */}
                  {review.featured && (
                    <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-xs font-semibold text-white flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {language === 'ru' ? 'Выбор редакции' : language === 'ar' ? 'اختيار المحرر' : 'Editor\'s Pick'}
                    </div>
                  )}

                  <div className="p-6">
                    {/* Quote icon */}
                    <svg className="w-8 h-8 text-blue-100 mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    {/* Review text */}
                    <p className="text-gray-700 leading-relaxed mb-5">
                      {review.text[language] || review.text.ru}
                    </p>

                    {/* Rating */}
                    <div className="mb-4">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                      <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                        <div className="text-xs text-gray-400">{review.location[language] || review.location.ru}</div>
                      </div>
                      <span className={`ml-auto text-xs font-medium px-2.5 py-1 rounded-full ${review.serviceColor} flex-shrink-0`}>
                        {review.service[language] || review.service.ru}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA — Leave a Review */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />

              <div className="relative text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  {language === 'ru' ? 'Попробовали наш сервис?' : language === 'ar' ? 'هل جربت خدمتنا؟' : 'Tried our service?'}
                </h2>
                <p className="text-blue-100 mb-8 max-w-lg mx-auto">
                  {language === 'ru'
                    ? 'Оставьте отзыв или закажите первую чистку — мы вас не разочаруем'
                    : language === 'ar'
                      ? 'اترك تقييمًا أو اطلب أول تنظيف — لن نخيب ظنك'
                      : 'Leave a review or book your first cleaning — we won\'t disappoint'}
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
