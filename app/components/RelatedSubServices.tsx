'use client';

import Link from 'next/link';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { getSubServicesForParent } from '@/app/data/subServicesData';

interface RelatedSubServicesProps {
  parentSlug: string;
}

export default function RelatedSubServices({ parentSlug }: RelatedSubServicesProps) {
  const { language, getLocalizedPath } = useLanguage();

  const subServices = getSubServicesForParent(parentSlug);

  if (subServices.length === 0) return null;

  const sectionTitle = language === 'ru'
    ? 'Наши услуги подробнее'
    : language === 'ar'
      ? 'خدماتنا بالتفصيل'
      : 'Our Services in Detail';

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((sub) => (
            <Link
              key={sub.slug}
              href={getLocalizedPath(`/${sub.slug}`)}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                {sub.h1[language] || sub.h1.ru}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-3">
                {sub.description[language] || sub.description.ru}
              </p>
              <span className="inline-flex items-center mt-4 text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                {language === 'ru' ? 'Подробнее' : language === 'ar' ? 'المزيد' : 'Learn more'}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
