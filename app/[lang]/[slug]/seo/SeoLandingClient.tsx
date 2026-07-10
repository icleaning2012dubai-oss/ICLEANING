'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import { FeatureIcon, iconColors } from '@/app/components/FeatureIcon';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { buildWhatsAppLink } from '@/app/utils/whatsapp';
import { trackCta } from '@/app/utils/trackCta';
import { fireLeadFormSuccess } from '@/app/utils/leadEvent';
import { getSeoLanding } from '@/app/data/seoLandings';
import { getSectionImage } from '@/app/data/seoLandings/sectionImages';
import DatePicker from './DatePicker';
import { mainServices } from '@/app/data/seoLandings/mainServices';
import ServiceWorks from './ServiceWorks';
// import BeforeAfterSection from './BeforeAfterSection'; // temporarily disabled
import type { Cta, Loc, SeoSection } from '@/app/data/seoLandings/types';

type Lang = 'ru' | 'en' | 'ar';
const pick = (loc: Loc | undefined, lang: Lang): string => (loc && (loc[lang] ?? loc.en ?? loc.ru)) || '';

// Gradient palette cycled across content blocks (on-brand multi-color accents).
const GRADS = [
  'from-blue-500 to-cyan-400',
  'from-emerald-500 to-teal-400',
  'from-amber-500 to-orange-400',
  'from-violet-500 to-fuchsia-400',
  'from-sky-500 to-blue-400',
  'from-rose-500 to-pink-400',
];

// Short eyebrow label per section type (premium "kicker" above the heading).
function sectionTag(id: string, lang: Lang): string {
  const s = id.toLowerCase();
  const t = (ru: string, en: string, ar: string) => (lang === 'en' ? en : lang === 'ar' ? ar : ru);
  if (/at-home/.test(s)) return t('На дому', 'On-site', 'في الموقع');
  if (/pickup|delivery/.test(s)) return t('Забор и возврат', 'Pickup & return', 'استلام وتسليم');
  if (/material|method/.test(s)) return t('Материалы', 'Materials', 'المواد');
  if (/stain|odor/.test(s)) return t('Пятна и запахи', 'Stains & odors', 'البقع والروائح');
  if (/booking/.test(s)) return t('Как заказать', 'How to book', 'كيفية الحجز');
  if (/process/.test(s)) return t('Процесс', 'Process', 'آلية العمل');
  if (/dubai|near|local/.test(s)) return t('По Дубаю', 'Across Dubai', 'في أنحاء دبي');
  if (/diy|risk/.test(s)) return t('Важно знать', 'Good to know', 'معلومة مهمة');
  if (/company|trust/.test(s)) return t('О сервисе', 'About us', 'من نحن');
  if (/commercial|office|b2b/.test(s)) return t('Бизнесу', 'For business', 'للشركات');
  if (/availability|urgent|fast/.test(s)) return t('Срочно', 'Fast service', 'خدمة سريعة');
  if (/professional|quality/.test(s)) return t('Профессионально', 'Professional', 'احترافي');
  if (/scope|limit/.test(s)) return t('Что входит', 'Scope', 'نطاق الخدمة');
  if (/bundle/.test(s)) return t('Комплекс', 'Bundle', 'باقة');
  if (/steaming|factory/.test(s)) return t('Отпаривание', 'Steaming', 'التبخير');
  return t('Услуга', 'Service', 'خدمة');
}

// Map a section id to a meaningful icon so the block is scannable at a glance.
function sectionIcon(id: string): string {
  const s = id.toLowerCase();
  if (/at-home/.test(s)) return 'home';
  if (/pickup|delivery/.test(s)) return 'truck';
  if (/material|method/.test(s)) return 'flask';
  if (/stain|odor/.test(s)) return 'droplet';
  if (/booking|process/.test(s)) return 'calendar';
  if (/dubai|near|local/.test(s)) return 'mapPin';
  if (/diy|risk/.test(s)) return 'shield';
  if (/company|trust/.test(s)) return 'shield';
  if (/commercial|office|b2b/.test(s)) return 'building';
  if (/availability|urgent|fast/.test(s)) return 'clock';
  if (/professional|quality/.test(s)) return 'sparkles';
  if (/scope|limit/.test(s)) return 'check';
  if (/bundle/.test(s)) return 'sparkles';
  if (/steaming|factory/.test(s)) return 'steam';
  if (/window/.test(s)) return 'window';
  if (/ac|central|cooling/.test(s)) return 'snow';
  return 'leaf';
}

export default function SeoLandingClient({ slug }: { slug: string }) {
  const pathname = usePathname();
  const { language, getLocalizedPath } = useLanguage();
  const lang = language as Lang;
  const page = getSeoLanding(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const tr = (ru: string, en: string, ar?: string) => (lang === 'en' ? en : lang === 'ar' ? ar ?? ru : ru);

  // Scroll-reveal (progressive enhancement: content stays visible without JS).
  useEffect(() => {
    const root = document.getElementById('seo-landing-root');
    if (!root) return;
    root.classList.add('reveal-enabled');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            obs.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    root.querySelectorAll('[data-reveal]').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [slug]);

  if (!page) return null;

  const resolveHref = (cta: Cta): string => {
    if (cta.href === 'form') return '#lead-form';
    if (cta.href && cta.href.startsWith('#')) return cta.href;
    return buildWhatsAppLink(language, pathname);
  };
  const isExternal = (cta: Cta) => !cta.href || cta.href === 'whatsapp';
  const fireCta = (cta: Cta, sectionId: string) =>
    trackCta(cta.event, {
      page_slug: slug,
      service_entity: page.serviceEntity,
      section_id: sectionId,
      cta_text: pick(cta.text, lang),
      language: lang,
    });

  const SolidCta = ({ cta, sectionId }: { cta: Cta; sectionId: string }) => (
    <a
      href={resolveHref(cta)}
      target={isExternal(cta) ? '_blank' : undefined}
      rel={isExternal(cta) ? 'noopener noreferrer' : undefined}
      onClick={() => fireCta(cta, sectionId)}
      className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
    >
      {pick(cta.text, lang)}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );

  const intro = page.sections.find((s) => s.id === 'page-root');
  const priceSection = page.sections.find((s) => s.showPriceCards);
  const blocks = page.sections.filter((s) => s.id !== 'page-root' && !s.showPriceCards);

  // Trust badges (icon bullets at the top — generic, on-brand).
  const trust = [
    { icon: 'clock', label: tr('Ответим за 15 минут', 'Reply in 15 minutes', 'رد خلال 15 دقيقة') },
    { icon: 'dollar', label: tr('Цена по фото', 'Price by photo', 'سعر بالصور') },
    { icon: 'mapPin', label: tr('Работаем по Дубаю', 'Across all Dubai', 'في جميع أنحاء دبي') },
    { icon: 'shield', label: tr('Гарантия на работу', 'Work guarantee', 'ضمان على العمل') },
  ];

  // Step 3 depends on the service: some are on-site only (no pickup).
  const pickupService = ['carpet-cleaning', 'premium-rug-cleaning', 'curtain-cleaning'].includes(slug);
  const step3 = pickupService
    ? { icon: 'truck', t: tr('Чистка или забор', 'Cleaning or pickup', 'تنظيف أو استلام'), d: tr('Работаем на дому или с вывозом', 'On-site or with pickup', 'في الموقع أو مع الاستلام') }
    : { icon: 'home', t: tr('Чистим на месте', 'On-site cleaning', 'تنظيف في الموقع'), d: tr('Приезжаем и чистим у вас на объекте', 'We come and clean at your place', 'نأتي وننظف لديك') };
  const step4 = pickupService
    ? { icon: 'check', t: tr('Возврат', 'Return', 'الإرجاع'), d: tr('Привозим чистое обратно - аккуратно и в срок', 'We bring it back clean, carefully and on time', 'نعيده نظيفًا في الوقت المحدد') }
    : { icon: 'check', t: tr('Готово', 'Done', 'جاهز'), d: tr('Чистый результат - принимаете работу на месте', 'Clean result you check on the spot', 'نتيجة نظيفة تتحقق منها في الموقع') };
  const howSteps = [
    { icon: 'sparkles', t: tr('Отправьте фото', 'Send a photo', 'أرسل صورة'), d: tr('Фото в WhatsApp - самый быстрый способ', 'A WhatsApp photo is the fastest way', 'صورة عبر واتساب') },
    { icon: 'dollar', t: tr('Получите расчёт', 'Get an estimate', 'احصل على عرض'), d: tr('Предварительная цена по фото за 15 минут', 'Preliminary price by photo in 15 minutes', 'سعر مبدئي خلال 15 دقيقة') },
    step3,
    step4,
  ];

  return (
    <div id="seo-landing-root" className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-blue-100">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'url(/images/buble.webp)', backgroundRepeat: 'repeat', backgroundSize: '100%' }}
        />
      </div>

      <div className="relative z-10 pb-[68px] lg:pb-0">
        <Header />
        <main>
          {/* ===== HERO (banner + form unified) ===== */}
          <section id="page-root" className="relative pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 scroll-mt-28">
            <div className="max-w-[1400px] mx-auto">
              <div className="relative rounded-[2.25rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 z-0 bg-gray-900">
                  <img src={page.image} alt={pick(page.hero.h1, lang)} className="w-full h-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/92 via-black/65 to-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="pointer-events-none absolute -top-24 -right-10 w-72 h-72 rounded-full bg-blue-500/30 blur-3xl z-0" />

                <div className="relative z-10 grid lg:grid-cols-[1.25fr_0.85fr]">
                  <div className="px-6 sm:px-10 lg:px-14 pt-6 sm:pt-14 pb-8 lg:pb-14 flex flex-col justify-center">
                    {/* Breadcrumbs — hidden on mobile so the hero title sits higher */}
                    <div className="hidden sm:flex items-center gap-2 text-white/70 text-sm flex-wrap mb-5">
                      <Link href={getLocalizedPath('/')} className="hover:text-white transition-colors">
                        {tr('Главная', 'Home', 'الرئيسية')}
                      </Link>
                      <span>/</span>
                      <span className="text-white/90 font-medium line-clamp-1">{pick(page.hero.h1, lang)}</span>
                    </div>
                    <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-bold text-white leading-[1.07] tracking-tight mb-5 max-w-2xl">
                      {pick(page.hero.h1, lang)}
                    </h1>
                    <p className="hidden lg:block text-white/85 text-base sm:text-lg max-w-xl mb-7">{pick(page.hero.paragraph, lang)}</p>
                    <div className="flex flex-wrap gap-2.5 mb-8">
                      {page.hero.miniFacts.map((f, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 rounded-full bg-white/12 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm px-3.5 py-2"
                        >
                          <svg className="w-3.5 h-3.5 text-blue-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          {pick(f, lang)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-5 sm:px-8 lg:pr-10 lg:pl-2 pb-8 lg:py-10 flex items-center">
                    <LeadForm page={page} slug={slug} lang={lang} tr={tr} />
                  </div>
                </div>
              </div>

              {/* Trust badges (icon bullets) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-5">
                {trust.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl p-3.5 shadow-lg border border-white/60">
                    <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-md flex-shrink-0">
                      <FeatureIcon iconKey={b.icon} className="w-5 h-5" />
                    </span>
                    <span className="text-sm font-semibold text-gray-800 leading-tight">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== CONTENT ===== */}
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
            {/* Intro lead — two-column opener (text + value card) */}
            {intro && (
              <div data-reveal className="grid lg:grid-cols-[1.25fr_0.85fr] gap-6 lg:gap-8 items-stretch mb-12 sm:mb-16">
                <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl flex flex-col justify-center">
                  <span className="inline-flex w-fit items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    iCleaning · Dubai
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-[1.12] mb-5">{pick(intro.h2, lang)}</h2>
                  {(intro.body[lang] ?? intro.body.ru).map((p, i) => (
                    <p key={i} className={`text-gray-600 leading-relaxed mb-4 ${i === 0 ? 'text-base sm:text-lg text-gray-700' : 'text-[15px] sm:text-base'}`}>{p}</p>
                  ))}
                  {intro.cta && (
                    <div className="mt-3">
                      <SolidCta cta={intro.cta} sectionId="page-root" />
                    </div>
                  )}
                </div>

                {/* Value card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-10 text-white shadow-2xl flex flex-col justify-center overflow-hidden">
                  <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ backgroundImage: 'url(/images/buble.webp)', backgroundSize: '60%' }} />
                  <div className="relative">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-100 mb-5">
                      <span className="w-6 h-px bg-blue-300/70" />{tr('Почему iCleaning', 'Why iCleaning', 'لماذا iCleaning')}
                    </span>
                    <ul className="space-y-4">
                      {page.hero.miniFacts.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </span>
                          <span className="text-white/95 text-[15px] sm:text-base font-medium leading-snug">{pick(f, lang)}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={buildWhatsAppLink(language, pathname)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-7 px-6 py-3 bg-white text-blue-700 rounded-full font-semibold text-sm hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
                    >
                      {tr('Написать в WhatsApp', 'Message on WhatsApp', 'راسلنا على واتساب')}
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Price band — full-width accent */}
            {priceSection && page.priceCards && (
              <section id={priceSection.id} data-reveal className="scroll-mt-28 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/15 mb-12 sm:mb-16">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 sm:p-12 text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-7 tracking-tight">{pick(priceSection.h2, lang)}</h2>
                  <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 mb-7">
                    {page.priceCards.map((c, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <span className="block text-sm font-semibold text-white/90">{pick(c.label, lang)}</span>
                        <span className="block text-xs text-white/60 mb-3">{pick(c.scope, lang)}</span>
                        <span className="text-3xl sm:text-4xl font-bold">{pick(c.price, lang)}</span>
                        {c.note && <span className="block text-xs text-white/55 mt-2">{pick(c.note, lang)}</span>}
                      </div>
                    ))}
                  </div>
                  {(priceSection.body[lang] ?? priceSection.body.ru).map((p, i) => (
                    <p key={i} className="text-white/85 leading-relaxed mb-3 max-w-4xl">{p}</p>
                  ))}
                  {priceSection.cta && (
                    <a
                      href={resolveHref(priceSection.cta)}
                      target={isExternal(priceSection.cta) ? '_blank' : undefined}
                      rel={isExternal(priceSection.cta) ? 'noopener noreferrer' : undefined}
                      onClick={() => fireCta(priceSection.cta!, priceSection.id)}
                      className="inline-flex items-center gap-2 mt-4 px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
                    >
                      {pick(priceSection.cta.text, lang)}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </section>
            )}

            {/* How it works — steps */}
            <div data-reveal className="mb-12 sm:mb-16">
              <div className="text-center mb-10">
                <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                  {tr('4 простых шага', '4 simple steps', '4 خطوات بسيطة')}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  {tr('Как это работает', 'How it works', 'كيف نعمل')}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {howSteps.map((st, i) => (
                  <div key={i} className="relative bg-white rounded-3xl p-6 shadow-lg shadow-blue-900/5 border border-gray-100">
                    <div className="relative w-14 h-14 mb-4">
                      <span className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${GRADS[i % GRADS.length]} text-white flex items-center justify-center shadow-lg`}>
                        <FeatureIcon iconKey={st.icon} className="w-7 h-7" />
                      </span>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white text-blue-600 text-xs font-bold flex items-center justify-center shadow ring-1 ring-blue-100">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1.5">{st.t}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{st.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After — temporarily disabled */}
            {/* <BeforeAfterSection slug={slug} lang={lang} /> */}

            {/* Wide alternating rows (AboutSection style) */}
            <div className="space-y-10 sm:space-y-14">
              {blocks.map((s, i) => (
                <ContentRow
                  key={s.id}
                  section={s}
                  index={i + 1}
                  image={getSectionImage(slug, s.id)}
                  grad={GRADS[i % GRADS.length]}
                  reverse={i % 2 === 1}
                  lang={lang}
                  SolidCta={SolidCta}
                />
              ))}
            </div>
          </div>

          {/* ===== OUR WORKS (real portfolio, with static fallback) ===== */}
          <ServiceWorks slug={slug} />

          {/* ===== FEATURES (reused) ===== */}
          {page.features && page.features.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 tracking-tight">
                {tr('Почему выбирают нас', 'Why Choose Us', 'لماذا يختاروننا')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {page.features.map((f, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/60 hover:-translate-y-1 transition-transform">
                    <div className={`w-12 h-12 rounded-xl ${iconColors[f.iconKey] || 'bg-blue-100 text-blue-600'} flex items-center justify-center mb-4`}>
                      <FeatureIcon iconKey={f.iconKey} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{pick(f.title, lang)}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{pick(f.desc, lang)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ===== FAQ ===== */}
          {page.faq.length > 0 && (
            <section id="faq" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 scroll-mt-28">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-start">
                {/* Left: heading + WhatsApp CTA */}
                <div className="lg:sticky lg:top-28">
                  <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                    FAQ
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                    {tr('Частые вопросы', 'Frequently asked questions', 'الأسئلة الشائعة')}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {tr('Не нашли ответ? Напишите в WhatsApp - подскажем по цене и срокам за 15 минут.', "Didn't find your answer? Message us on WhatsApp - price and timing in 15 minutes.", 'لم تجد إجابتك؟ راسلنا على واتساب.')}
                  </p>
                  <a
                    href={buildWhatsAppLink(language, pathname)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-lg shadow-green-500/30"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                    WhatsApp
                  </a>
                </div>

                {/* Right: accordion */}
                <div className="space-y-3">
                  {page.faq.map((item, i) => {
                    const open = openFaq === i;
                    return (
                      <div key={i} className={`bg-white rounded-2xl border transition-shadow ${open ? 'border-blue-200 shadow-lg' : 'border-gray-100 shadow-sm hover:shadow-md'}`}>
                        <button
                          onClick={() => setOpenFaq(open ? null : i)}
                          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left font-semibold text-gray-900"
                        >
                          <span className="text-base sm:text-lg">{pick(item.q, lang)}</span>
                          <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>
                            <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v14M5 12h14" />
                            </svg>
                          </span>
                        </button>
                        {open && (
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">{pick(item.a, lang)}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* ===== OTHER SERVICES (main landings) ===== */}
          <section data-reveal className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center tracking-tight">
              {tr('Другие услуги', 'Other Services', 'خدمات أخرى')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainServices
                .filter((s) => s.slug !== slug)
                .slice(0, 6)
                .map((s) => {
                  const img = getSeoLanding(s.slug)?.image;
                  return (
                    <Link
                      key={s.slug}
                      href={getLocalizedPath(`/${s.slug}`)}
                      className="group bg-white/85 backdrop-blur-sm rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/60 hover:border-blue-200"
                    >
                      {img && (
                        <div className="relative h-40 overflow-hidden">
                          <img src={img} alt={pick(s.name, lang)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{pick(s.name, lang)}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{pick(s.blurb, lang)}</p>
                        <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                          {tr('Подробнее', 'Learn more', 'المزيد')}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </section>

          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* Sticky mobile CTA bar — quote button + WhatsApp */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-3 py-2.5 flex items-center gap-2.5 shadow-[0_-6px_24px_rgba(0,0,0,0.08)]">
        <a
          href="#lead-form"
          onClick={() => fireCta(page.hero.primaryCta, 'sticky-bar')}
          className="flex-1 inline-flex items-center justify-center px-4 py-3.5 bg-blue-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-blue-600/25"
        >
          {tr('Получить расчёт по фото', 'Get a photo quote', 'احصل على عرض')}
        </a>
        <a
          href={buildWhatsAppLink(language, pathname)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </div>
    </div>
  );
}

// ---- Wide alternating content row (AboutSection style: big visual + text card) ----
function ContentRow({
  section,
  index,
  image,
  grad,
  reverse,
  lang,
  SolidCta,
}: {
  section: SeoSection;
  index: number;
  image?: string;
  grad: string;
  reverse: boolean;
  lang: Lang;
  SolidCta: (p: { cta: Cta; sectionId: string }) => React.ReactElement;
}) {
  const paras = section.body[lang] ?? section.body.ru;
  const bullets = section.bullets ? section.bullets[lang] ?? section.bullets.ru : [];
  const icon = sectionIcon(section.id);
  const tag = sectionTag(section.id, lang);
  const num = String(index).padStart(2, '0');
  const [open, setOpen] = useState(false);
  const tr = (ru: string, en: string, ar?: string) => (lang === 'en' ? en : lang === 'ar' ? ar ?? ru : ru);

  // First paragraph always visible; the rest collapse behind "Show more"
  // (kept in the DOM for SEO).
  const Paras = () => (
    <>
      <p className="text-gray-700 leading-relaxed mb-4 text-base sm:text-lg">{paras[0]}</p>
      {paras.length > 1 && (
        <>
          <div className={open ? '' : 'hidden'}>
            {paras.slice(1).map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed mb-4 text-[15px] sm:text-base">{p}</p>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mb-4 hover:gap-1.5 transition-all"
          >
            {open ? tr('Свернуть', 'Show less', 'إخفاء') : tr('Показать ещё', 'Show more', 'المزيد')}
            <svg className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </>
      )}
    </>
  );

  const Bullets = () =>
    bullets.length > 0 ? (
      <ul className="space-y-2.5 mb-5">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-700">
            <span className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </span>
            <span className="text-[15px] sm:text-base">{b}</span>
          </li>
        ))}
      </ul>
    ) : null;

  // Showcase row: real photo + text card (alternating sides)
  if (image) {
    return (
      <section id={section.id} data-reveal className="scroll-mt-28">
        <div className="grid lg:grid-cols-2 gap-5 sm:gap-7 items-stretch">
          <div className={`group relative rounded-3xl overflow-hidden shadow-xl min-h-[240px] sm:min-h-[300px] lg:min-h-[420px] ${reverse ? 'lg:order-2' : ''}`}>
            <img src={image} alt={pick(section.h2, lang)} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <span className="absolute top-5 left-5 inline-flex items-center justify-center min-w-12 h-12 px-3 rounded-2xl bg-white/90 backdrop-blur-sm text-blue-600 font-bold shadow-lg">{num}</span>
          </div>
          <div className="bg-white rounded-3xl p-7 sm:p-10 lg:p-12 shadow-xl flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
              <span className="w-6 h-px bg-blue-400" />{tag}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-gray-900 tracking-tight leading-[1.12] mb-5">{pick(section.h2, lang)}</h2>
            <Paras />
            <Bullets />
            {section.cta && <div className="mt-1"><SolidCta cta={section.cta} sectionId={section.id} /></div>}
          </div>
        </div>
      </section>
    );
  }

  // Text-only section: light card, small icon, magazine 2-column body (no big panels)
  return (
    <section id={section.id} data-reveal className="scroll-mt-28 bg-white/85 backdrop-blur-sm rounded-3xl p-7 sm:p-9 lg:p-10 shadow-lg border border-white/60">
      <div className="flex items-center gap-4 mb-5">
        <span className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${grad} text-white flex items-center justify-center shadow-lg`}>
          <FeatureIcon iconKey={icon} className="w-6 h-6" />
        </span>
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">{tag}</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-snug">{pick(section.h2, lang)}</h2>
        </div>
      </div>
      <div className="max-w-3xl">
        <Paras />
      </div>
      <Bullets />
      {section.cta && <div className="mt-2"><SolidCta cta={section.cta} sectionId={section.id} /></div>}
    </section>
  );
}

// ---- Hero lead form (minimal: name, phone, date+time) ----
function LeadForm({
  page,
  slug,
  lang,
  tr,
}: {
  page: NonNullable<ReturnType<typeof getSeoLanding>>;
  slug: string;
  lang: Lang;
  tr: (ru: string, en: string, ar?: string) => string;
}) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', phone: '', when: '' });

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const message = form.when ? `${tr('Желаемая дата', 'Preferred date', 'التاريخ المفضل')}: ${form.when}` : '';
      const res = await fetch('/api/bitrix/create-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, phone: form.phone, service: page.serviceEntity, message }),
      });
      if (!res.ok) throw new Error('failed');
      fireLeadFormSuccess('top');
      trackCta('lead_form_submit', {
        page_slug: slug,
        service_entity: page.serviceEntity,
        section_id: 'hero-form',
        cta_text: tr('Получить расчёт', 'Get a quote', 'احصل على عرض'),
        language: lang,
      });
      setStatus('ok');
      setForm({ name: '', phone: '', when: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputCls =
    'w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition';

  return (
    <form
      id="lead-form"
      onSubmit={submit}
      className="w-full bg-white/80 backdrop-blur-2xl rounded-[1.75rem] p-6 sm:p-7 shadow-2xl ring-1 ring-white/60 border border-white/40 flex flex-col gap-3.5 scroll-mt-28"
    >
      <div className="flex items-center gap-2">
        <span className="inline-flex w-9 h-9 rounded-xl bg-green-100 text-green-600 items-center justify-center">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </span>
        <div>
          <h2 className="text-base font-bold text-gray-900 leading-tight">{tr('Получить расчёт', 'Get a quote', 'احصل على عرض')}</h2>
          <p className="text-xs text-gray-600">{tr('Ответим в WhatsApp за 15 минут', 'WhatsApp reply in 15 min', 'رد خلال 15 دقيقة')}</p>
        </div>
      </div>

      {/* Trust strip — social proof up top, before the ask (keeps the CTA clean) */}
      <div className="flex items-center gap-2.5 -mt-0.5 pb-0.5">
        <div className="flex -space-x-2 flex-shrink-0">
          {[33, 47, 32].map((n) => (
            <img key={n} src={`https://i.pravatar.cc/100?img=${n}`} alt="" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" loading="lazy" />
          ))}
        </div>
        <div className="leading-tight min-w-0">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-400">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.922-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.196-1.539-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.98 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.286-3.958z" /></svg>
              ))}
            </div>
            <span className="text-gray-900 font-bold text-sm">4.9</span>
          </div>
          <div className="text-gray-500 text-xs whitespace-nowrap">
            <span className="font-semibold text-gray-700">4,234+</span> {tr('довольных клиентов', 'happy customers', 'عميل سعيد')}
          </div>
        </div>
      </div>
      <input className={inputCls} name="name" autoComplete="name" placeholder={tr('Имя', 'Name', 'الاسم')} value={form.name} onChange={onChange('name')} required />
      <input className={inputCls} name="tel" type="tel" inputMode="tel" autoComplete="tel" placeholder={tr('Телефон / WhatsApp', 'Phone / WhatsApp', 'الهاتف')} value={form.phone} onChange={onChange('phone')} required />
      <label className="text-xs text-gray-600 -mb-2">{tr('Удобная дата', 'Preferred date', 'التاريخ المفضل')}</label>
      <DatePicker
        value={form.when}
        onChange={(v) => setForm((p) => ({ ...p, when: v }))}
        lang={lang}
        placeholder={tr('Выберите дату', 'Pick a date', 'اختر التاريخ')}
        triggerClassName={inputCls}
      />

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-all disabled:opacity-60 shadow-lg shadow-green-500/30"
      >
        {status !== 'sending' && (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        )}
        {status === 'sending' ? tr('Отправка…', 'Sending…', 'جارٍ الإرسال…') : tr('Получить расчёт', 'Get a quote', 'احصل على عرض')}
      </button>
      {status === 'ok' && <p className="text-sm text-green-600">{tr('Заявка отправлена!', 'Request sent!', 'تم الإرسال!')}</p>}
      {status === 'error' && <p className="text-sm text-red-600">{tr('Ошибка. Напишите в WhatsApp.', 'Error. Please use WhatsApp.', 'خطأ.')}</p>}
    </form>
  );
}
