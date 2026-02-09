import { Metadata } from 'next';
import type { Locale } from '@/app/i18n/config';

const baseUrl = 'https://icleaning.ae';

const serviceSlugs = [
  'carpet-cleaning',
  'sofa-mattresses',
  'curtains-blinds',
  'regular-cleaning',
  'air-conditioner',
  'deep-cleaning',
] as const;

const locales: Locale[] = ['en', 'ru', 'ar'];

// Static generation для всех комбинаций языков × slug'ов
export async function generateStaticParams() {
  return serviceSlugs.flatMap(slug => 
    locales.map(lang => ({ lang, slug }))
  );
}

// SEO метаданные для каждого сервиса на каждом языке
const serviceMetadata: Record<string, Record<Locale, { title: string; description: string; keywords: string[] }>> = {
  'carpet-cleaning': {
    en: {
      title: 'Carpet Cleaning Dubai | Professional Deep Cleaning Services',
      description: 'Professional carpet cleaning in Dubai. Deep steam cleaning, stain removal, fast drying. Eco-friendly products safe for kids & pets. Book now!',
      keywords: ['carpet cleaning Dubai', 'rug cleaning', 'steam cleaning', 'carpet deep cleaning UAE'],
    },
    ru: {
      title: 'Чистка ковров Дубай | Профессиональная химчистка ковров',
      description: 'Профессиональная чистка ковров в Дубае. Глубокая паровая чистка, удаление пятен, быстрая сушка. Экологичные средства. Закажите!',
      keywords: ['чистка ковров Дубай', 'химчистка ковров', 'паровая чистка', 'глубокая чистка ковров ОАЭ'],
    },
    ar: {
      title: 'تنظيف السجاد دبي | خدمات التنظيف العميق الاحترافية',
      description: 'تنظيف سجاد احترافي في دبي. تنظيف عميق بالبخار، إزالة البقع، تجفيف سريع. منتجات صديقة للبيئة. احجز الآن!',
      keywords: ['تنظيف السجاد دبي', 'تنظيف السجاد بالبخار', 'تنظيف عميق للسجاد الإمارات'],
    },
  },
  'sofa-mattresses': {
    en: {
      title: 'Sofa & Mattress Cleaning Dubai | Dust Mite Removal',
      description: 'Professional sofa and mattress cleaning in Dubai. Remove dust mites, stains & allergens. Deep fabric cleaning & sanitization. Book online!',
      keywords: ['sofa cleaning Dubai', 'mattress cleaning', 'upholstery cleaning', 'dust mite removal UAE'],
    },
    ru: {
      title: 'Чистка диванов и матрасов Дубай | Удаление пылевых клещей',
      description: 'Профессиональная чистка диванов и матрасов в Дубае. Удаление пылевых клещей, пятен и аллергенов. Глубокая чистка и дезинфекция.',
      keywords: ['чистка диванов Дубай', 'чистка матрасов', 'химчистка мебели', 'удаление клещей ОАЭ'],
    },
    ar: {
      title: 'تنظيف الأرائك والمراتب دبي | إزالة عث الغبار',
      description: 'تنظيف احترافي للأرائك والمراتب في دبي. إزالة عث الغبار والبقع ومسببات الحساسية. تنظيف عميق وتعقيم.',
      keywords: ['تنظيف الأرائك دبي', 'تنظيف المراتب', 'تنظيف المفروشات', 'إزالة عث الغبار الإمارات'],
    },
  },
  'curtains-blinds': {
    en: {
      title: 'Curtains & Blinds Cleaning Dubai | On-site Professional Service',
      description: 'Professional curtain and blind cleaning in Dubai. On-site service, delicate fabric care, dust & allergen removal. No need to remove curtains!',
      keywords: ['curtain cleaning Dubai', 'blind cleaning', 'drapes cleaning', 'on-site curtain cleaning UAE'],
    },
    ru: {
      title: 'Чистка штор и жалюзи Дубай | Выездная услуга',
      description: 'Профессиональная чистка штор и жалюзи в Дубае. Выездная услуга, уход за деликатными тканями, удаление пыли и аллергенов. Снимать не нужно!',
      keywords: ['чистка штор Дубай', 'чистка жалюзи', 'химчистка штор на дому', 'чистка занавесей ОАЭ'],
    },
    ar: {
      title: 'تنظيف الستائر والستائر الدوارة دبي | خدمة احترافية في الموقع',
      description: 'تنظيف احترافي للستائر والستائر في دبي. خدمة في الموقع، عناية بالأقمشة الحساسة، إزالة الغبار ومسببات الحساسية.',
      keywords: ['تنظيف الستائر دبي', 'تنظيف الستائر الدوارة', 'تنظيف الستائر في الموقع الإمارات'],
    },
  },
  'regular-cleaning': {
    en: {
      title: 'Regular Cleaning Service Dubai | Weekly & Monthly Packages',
      description: 'Regular home cleaning in Dubai. Weekly, bi-weekly or monthly packages. Professional team, quality guaranteed. Book your regular cleaning!',
      keywords: ['regular cleaning Dubai', 'weekly cleaning', 'monthly cleaning', 'home maintenance UAE'],
    },
    ru: {
      title: 'Регулярная уборка Дубай | Еженедельные и ежемесячные пакеты',
      description: 'Регулярная уборка дома в Дубае. Пакеты: еженедельно, раз в две недели или ежемесячно. Профессиональная команда, гарантия качества.',
      keywords: ['регулярная уборка Дубай', 'еженедельная уборка', 'месячная уборка', 'поддержание чистоты ОАЭ'],
    },
    ar: {
      title: 'خدمة التنظيف المنتظم دبي | باقات أسبوعية وشهرية',
      description: 'تنظيف منزلي منتظم في دبي. باقات أسبوعية أو كل أسبوعين أو شهرية. فريق محترف، جودة مضمونة.',
      keywords: ['التنظيف المنتظم دبي', 'التنظيف الأسبوعي', 'التنظيف الشهري', 'صيانة المنزل الإمارات'],
    },
  },
  'air-conditioner': {
    en: {
      title: 'Air Conditioner Cleaning Dubai | AC Maintenance & Repair',
      description: 'Professional AC cleaning and maintenance in Dubai. Improve air quality, reduce energy bills, extend AC lifespan. Expert technicians.',
      keywords: ['AC cleaning Dubai', 'air conditioner maintenance', 'AC repair', 'AC service UAE'],
    },
    ru: {
      title: 'Чистка кондиционеров Дубай | Обслуживание и ремонт',
      description: 'Профессиональная чистка и обслуживание кондиционеров в Дубае. Улучшение качества воздуха, снижение счетов за электричество, продление срока службы.',
      keywords: ['чистка кондиционеров Дубай', 'обслуживание кондиционеров', 'ремонт кондиционеров', 'сервис AC ОАЭ'],
    },
    ar: {
      title: 'تنظيف مكيفات الهواء دبي | صيانة وإصلاح المكيفات',
      description: 'تنظيف وصيانة احترافية للمكيفات في دبي. تحسين جودة الهواء، تقليل فواتير الكهرباء، إطالة عمر المكيف.',
      keywords: ['تنظيف المكيفات دبي', 'صيانة المكيفات', 'إصلاح المكيفات', 'خدمة المكيفات الإمارات'],
    },
  },
  'deep-cleaning': {
    en: {
      title: 'Deep Cleaning Service Dubai | Complete Home Sanitization',
      description: 'Professional deep cleaning in Dubai. Complete home sanitization, kitchen, bathrooms, hard-to-reach areas. Move-in/out cleaning available.',
      keywords: ['deep cleaning Dubai', 'home sanitization', 'move-in cleaning', 'complete cleaning UAE'],
    },
    ru: {
      title: 'Глубокая уборка Дубай | Полная санитарная обработка дома',
      description: 'Профессиональная глубокая уборка в Дубае. Полная санитарная обработка, кухня, ванные, труднодоступные места. Уборка при въезде/выезде.',
      keywords: ['глубокая уборка Дубай', 'генеральная уборка', 'уборка при переезде', 'полная уборка ОАЭ'],
    },
    ar: {
      title: 'خدمة التنظيف العميق دبي | تعقيم كامل للمنزل',
      description: 'تنظيف عميق احترافي في دبي. تعقيم كامل للمنزل، المطبخ، الحمامات، الأماكن التي يصعب الوصول إليها. تنظيف الانتقال متاح.',
      keywords: ['التنظيف العميق دبي', 'تعقيم المنزل', 'تنظيف الانتقال', 'تنظيف شامل الإمارات'],
    },
  },
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ lang: string; slug: string }> 
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = (lang as Locale) || 'ru';
  
  if (!serviceMetadata[slug]) {
    return { title: 'Service Not Found' };
  }

  const meta = serviceMetadata[slug][locale] || serviceMetadata[slug]['en'];
  
  // Build URL: ru без префикса, en/ar с префиксом
  const urlPath = locale === 'ru' 
    ? `/services/${slug}` 
    : `/${locale}/services/${slug}`;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `${baseUrl}${urlPath}`,
      languages: {
        en: `${baseUrl}/en/services/${slug}`,
        ru: `${baseUrl}/services/${slug}`,
        ar: `${baseUrl}/ar/services/${slug}`,
        'x-default': `${baseUrl}/services/${slug}`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}${urlPath}`,
      locale: locale === 'ar' ? 'ar_AE' : locale === 'ru' ? 'ru_RU' : 'en_AE',
      siteName: 'iCleaning Dubai',
      type: 'website',
    },
  };
}

export default function ServiceSlugLayout({ children }: { children: React.ReactNode }) {
  return children;
}
