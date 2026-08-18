import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { connectDB } from '@/lib/mongodb';
import { GalleryItem } from '@/lib/models/GalleryItem';
import { buildWhatsAppLink } from '@/app/utils/whatsapp';

const baseUrl = 'https://icleaning.ae';
type Lang = 'ru' | 'en' | 'ar';

type Item = {
  _id: string;
  title: { ru?: string; en?: string; ar?: string };
  description?: { ru?: string; en?: string; ar?: string };
  beforeImage: string;
  afterImage: string;
  service?: string;
  published?: boolean;
};

async function getItem(id: string): Promise<Item | null> {
  if (!/^[a-f0-9]{24}$/i.test(id)) return null;
  try {
    await connectDB();
    const item = await GalleryItem.findById(id).lean();
    if (!item) return null;
    return JSON.parse(JSON.stringify(item)) as Item;
  } catch {
    return null;
  }
}

const pick = (o: { ru?: string; en?: string; ar?: string } | undefined, l: Lang) =>
  (o && (o[l] || o.en || o.ru)) || '';

function pathFor(l: Lang, id: string) {
  return l === 'en' ? `/portfolio/${id}` : `/${l}/portfolio/${id}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const l = (lang === 'ar' ? 'ar' : lang === 'ru' ? 'ru' : 'en') as Lang;
  const item = await getItem(id);
  if (!item) return { title: 'Not found', robots: { index: false, follow: false } };
  const name = pick(item.title, l) || 'Before & After';
  const title = `${name} — ${l === 'ru' ? 'до и после' : l === 'ar' ? 'قبل وبعد' : 'before & after'} | iCleaning Dubai`;
  const description =
    pick(item.description, l) ||
    (l === 'ru'
      ? 'Пример нашей работы: фото до и после чистки — iCleaning Dubai.'
      : l === 'ar'
      ? 'مثال على عملنا: صور قبل وبعد التنظيف — iCleaning دبي.'
      : 'A real before & after cleaning example by iCleaning Dubai.');
  const url = `${baseUrl}${pathFor(l, id)}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: false, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: 'iCleaning Dubai',
      images: [item.afterImage, item.beforeImage].filter(Boolean) as string[],
      type: 'article',
    },
  };
}

export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const l = (lang === 'ar' ? 'ar' : lang === 'ru' ? 'ru' : 'en') as Lang;
  const item = await getItem(id);
  if (!item || item.published === false) notFound();

  const tr = (ru: string, en: string, ar: string) => (l === 'en' ? en : l === 'ar' ? ar : ru);
  const name = pick(item.title, l);
  const desc = pick(item.description, l);
  const portfolioPath = l === 'en' ? '/portfolio' : `/${l}/portfolio`;
  const wa = buildWhatsAppLink(l, pathFor(l, id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white" dir={l === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <Link href={portfolioPath} className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          {tr('Все примеры', 'All examples', 'كل الأمثلة')}
        </Link>

        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
          {tr('Наша работа: до / после', 'Our work: before / after', 'عملنا: قبل / بعد')}
        </span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">{name}</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <figure className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
            <span className="absolute top-3 left-3 z-10 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {tr('До', 'Before', 'قبل')}
            </span>
            <img src={item.beforeImage} alt={`${name} — ${tr('до', 'before', 'قبل')}`} className="w-full h-full object-cover aspect-[4/3]" />
          </figure>
          <figure className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
            <span className="absolute top-3 left-3 z-10 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {tr('После', 'After', 'بعد')}
            </span>
            <img src={item.afterImage} alt={`${name} — ${tr('после', 'after', 'بعد')}`} className="w-full h-full object-cover aspect-[4/3]" />
          </figure>
        </div>

        {desc && <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-6 max-w-3xl">{desc}</p>}

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-500 text-white rounded-full font-semibold text-sm hover:bg-green-600 transition-all shadow-lg shadow-green-500/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            {tr('Хочу так же — расчёт в WhatsApp', 'I want the same — quote on WhatsApp', 'أريد مثله — عرض سعر على واتساب')}
          </a>
          <Link
            href={portfolioPath}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-gray-800 border border-gray-200 rounded-full font-semibold text-sm hover:bg-gray-50 transition-all"
          >
            {tr('Больше примеров', 'More examples', 'المزيد من الأمثلة')}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
