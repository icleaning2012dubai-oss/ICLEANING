'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import BeforeAfterGrid from '@/app/components/BeforeAfterGrid';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function BeforeAfterPage() {
  const { language } = useLanguage();
  const lang = language as 'ru' | 'en' | 'ar';
  const tr = (ru: string, en: string, ar: string) => (lang === 'en' ? en : lang === 'ar' ? ar : ru);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            {tr('До / После', 'Before / After', 'قبل / بعد')}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            {tr('Результаты «до и после»', 'Before & After Results', 'نتائج قبل وبعد')}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            {tr(
              'Реальные примеры наших работ — перетащите ползунок, чтобы увидеть разницу. Любой пример можно открыть отдельной ссылкой и отправить.',
              'Real examples of our work — drag the slider to see the difference. Open any example as its own link and share it.',
              'أمثلة حقيقية من أعمالنا — اسحب الشريط لرؤية الفرق. يمكنك فتح أي مثال برابط منفصل ومشاركته.'
            )}
          </p>
        </div>

        <BeforeAfterGrid />
      </main>
      <Footer />
    </div>
  );
}
