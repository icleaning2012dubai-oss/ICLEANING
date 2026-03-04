export default function SchemaMarkup({ lang = 'ru' }: { lang?: string }) {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://icleaning.ae/#organization',
    name: 'iCleaning Dubai',
    image: 'https://icleaning.ae/images/logo.svg',
    logo: 'https://icleaning.ae/images/logo.svg',
    url: 'https://icleaning.ae',
    telephone: '+971508648401',
    email: 'customer@icleaning.ae',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No.10, Jebel Ali Industrial Area',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.0071,
      longitude: 55.1272,
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/icleaning_dubai/',
      'https://api.whatsapp.com/send/?phone=971508648401',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const services = [
    {
      name: lang === 'ar' ? 'تنظيف السجاد' : lang === 'en' ? 'Carpet Cleaning' : 'Чистка ковров',
      description: lang === 'ar' ? 'خدمة تنظيف السجاد المهنية في دبي' : lang === 'en' ? 'Professional carpet cleaning service in Dubai' : 'Профессиональная чистка ковров в Дубае',
      url: 'https://icleaning.ae/services/carpet-cleaning-dubai',
    },
    {
      name: lang === 'ar' ? 'تنظيف الأرائك والمراتب' : lang === 'en' ? 'Sofa & Mattress Cleaning' : 'Чистка диванов и матрасов',
      description: lang === 'ar' ? 'تنظيف الأرائك والمراتب المهني في دبي' : lang === 'en' ? 'Professional sofa and mattress cleaning in Dubai' : 'Профессиональная чистка диванов и матрасов в Дубае',
      url: 'https://icleaning.ae/services/sofa-cleaning-dubai',
    },
    {
      name: lang === 'ar' ? 'تنظيف مكيفات الهواء' : lang === 'en' ? 'Air Conditioner Cleaning' : 'Чистка кондиционеров',
      description: lang === 'ar' ? 'خدمة تنظيف مكيفات الهواء في دبي' : lang === 'en' ? 'Professional AC cleaning and maintenance in Dubai' : 'Профессиональная чистка и обслуживание кондиционеров в Дубае',
      url: 'https://icleaning.ae/services/ac-cleaning-dubai',
    },
    {
      name: lang === 'ar' ? 'تنظيف الستائر' : lang === 'en' ? 'Curtains & Blinds Cleaning' : 'Чистка штор и жалюзи',
      description: lang === 'ar' ? 'خدمة تنظيف الستائر في دبي' : lang === 'en' ? 'Professional curtains and blinds cleaning in Dubai' : 'Профессиональная чистка штор и жалюзи в Дубае',
      url: 'https://icleaning.ae/services/curtains-cleaning-dubai',
    },
    {
      name: lang === 'ar' ? 'التنظيف المنتظم' : lang === 'en' ? 'Regular Cleaning' : 'Регулярная уборка',
      description: lang === 'ar' ? 'خدمة التنظيف المنتظم في دبي' : lang === 'en' ? 'Professional regular cleaning service in Dubai' : 'Профессиональная регулярная уборка в Дубае',
      url: 'https://icleaning.ae/services/regular-cleaning-dubai',
    },
    {
      name: lang === 'ar' ? 'التنظيف العميق' : lang === 'en' ? 'Deep Cleaning' : 'Глубокая уборка',
      description: lang === 'ar' ? 'خدمة التنظيف العميق في دبي' : lang === 'en' ? 'Professional deep cleaning service in Dubai' : 'Профессиональная глубокая уборка в Дубае',
      url: 'https://icleaning.ae/services/deep-cleaning-dubai',
    },
  ];

  const serviceSchema = services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'LocalBusiness',
      name: 'iCleaning Dubai',
      '@id': 'https://icleaning.ae/#organization',
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
  }));

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'ar' ? 'الرئيسية' : lang === 'en' ? 'Home' : 'Главная',
        item: 'https://icleaning.ae',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      {serviceSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
