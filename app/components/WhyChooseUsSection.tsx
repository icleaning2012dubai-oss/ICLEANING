'use client';

import { memo, useEffect, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageProvider';

type Slide = {
  title: { ru: string; en: string; ar: string };
  desc: { ru: string; en: string; ar: string };
  icon: React.ReactNode;
  gradient: string;
};

const slides: Slide[] = [
  {
    title: { ru: 'Квалифицированный персонал', en: 'Qualified Personnel', ar: 'كوادر مؤهلة' },
    desc: {
      ru: 'Только обученные и опытные специалисты — никаких случайных людей.',
      en: 'Only trained and experienced professionals — no random hires.',
      ar: 'فقط محترفون مدربون وذوو خبرة — لا توظيف عشوائي.',
    },
    gradient: 'from-blue-600 to-blue-400',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: { ru: 'Современное оборудование и своя база', en: 'Modern Equipment & Own Facility', ar: 'معدات حديثة ومرافق خاصة' },
    desc: {
      ru: 'Продвинутая техника. Обработка ковров и текстиля на собственной базе.',
      en: 'Advanced equipment. In-house processing of carpets and textiles.',
      ar: 'معدات متقدمة. معالجة السجاد والمنسوجات في منشأتنا الخاصة.',
    },
    gradient: 'from-emerald-600 to-emerald-400',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: { ru: 'Бесплатный самовывоз', en: 'Free Pick-Up', ar: 'استلام مجاني' },
    desc: {
      ru: 'Заберём ковры и текстиль у вас дома — без доплаты.',
      en: 'We pick up your carpets and textiles from home — no extra fee.',
      ar: 'نلتقط السجاد والمنسوجات من منزلك — بدون رسوم إضافية.',
    },
    gradient: 'from-amber-600 to-amber-400',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
      </svg>
    ),
  },
  {
    title: { ru: 'Доставка и установка', en: 'Delivery & Installation', ar: 'التوصيل والتركيب' },
    desc: {
      ru: 'Возвращаем чистые вещи и устанавливаем на место — всё под ключ.',
      en: 'We deliver cleaned items back and install them in place — turnkey.',
      ar: 'نعيد الأشياء النظيفة ونركبها في مكانها — خدمة متكاملة.',
    },
    gradient: 'from-purple-600 to-purple-400',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
  {
    title: { ru: 'Эко-подход', en: 'Eco-Friendly Approach', ar: 'نهج صديق للبيئة' },
    desc: {
      ru: 'Безопасные средства — для вас, детей и питомцев.',
      en: 'Safe products — for you, children and pets.',
      ar: 'منتجات آمنة — لك ولأطفالك وحيواناتك الأليفة.',
    },
    gradient: 'from-green-600 to-lime-400',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const WhyChooseUsSection = memo(function WhyChooseUsSection() {
  const { language } = useLanguage();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const heading = language === 'ru' ? 'Почему выбирают нас' : language === 'ar' ? 'لماذا تختارنا' : 'Why Choose Us';
  const lang = language as 'ru' | 'en' | 'ar';

  return (
    <section className="pb-20 sm:pb-26 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-10 sm:mb-12 tracking-tight">
          {heading}
        </h2>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${idx * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl text-center min-h-[280px] sm:min-h-[320px] flex flex-col items-center justify-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${s.gradient} text-white mb-6 shadow-lg`}>
                      {s.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {s.title[lang] || s.title.en}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                      {s.desc[lang] || s.desc.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setIdx(i => (i - 1 + slides.length) % slides.length)}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-blue-600 flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => setIdx(i => (i + 1) % slides.length)}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg hover:shadow-xl text-gray-700 hover:text-blue-600 flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${i === idx ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default WhyChooseUsSection;
