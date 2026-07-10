// The main services shown in the "Related services" block on every landing.
// Kept consistent across pages (the current page is filtered out at render time).

export const mainServices: {
  slug: string;
  name: { ru: string; en: string; ar?: string };
  blurb: { ru: string; en: string; ar?: string };
}[] = [
  {
    slug: 'carpet-cleaning',
    name: { ru: 'Чистка ковров', en: 'Carpet Cleaning', ar: 'تنظيف السجاد' },
    blurb: { ru: 'Стандартные ковры, забор и возврат.', en: 'Everyday carpets with pickup & return.', ar: 'سجاد يومي مع خدمة الاستلام والتسليم.' },
  },
  {
    slug: 'premium-rug-cleaning',
    name: { ru: 'Чистка элитных ковров', en: 'Premium Rug Cleaning', ar: 'تنظيف السجاد الفاخر' },
    blurb: { ru: 'Шёлк, шерсть, персидские и handmade.', en: 'Silk, wool, Persian and handmade rugs.', ar: 'حرير وصوف وسجاد فارسي ويدوي الصنع.' },
  },
  {
    slug: 'carpet-flooring-cleaning',
    name: { ru: 'Чистка ковролина', en: 'Carpet Flooring Cleaning', ar: 'تنظيف الموكيت' },
    blurb: { ru: 'Ковровое покрытие, чистка на месте.', en: 'Wall-to-wall carpet, on-site.', ar: 'موكيت مثبّت بالأرضية، تنظيف في الموقع.' },
  },
  {
    slug: 'sofa-cleaning',
    name: { ru: 'Химчистка диванов', en: 'Sofa Cleaning', ar: 'تنظيف الأرائك' },
    blurb: { ru: 'Диваны и кресла: ткань и кожа.', en: 'Sofas and armchairs, fabric & leather.', ar: 'أرائك وكراسي، قماش وجلد.' },
  },
  {
    slug: 'upholstery-cleaning',
    name: { ru: 'Чистка мягкой мебели', en: 'Upholstery Cleaning', ar: 'تنظيف المفروشات' },
    blurb: { ru: 'Стулья, кресла, изголовья кроватей.', en: 'Chairs, armchairs, headboards.', ar: 'كراسي ومقاعد ومساند رأس الأسرّة.' },
  },
  {
    slug: 'mattress-cleaning',
    name: { ru: 'Чистка матрасов', en: 'Mattress Cleaning', ar: 'تنظيف المراتب' },
    blurb: { ru: 'Глубокая чистка матрасов на дому.', en: 'Deep mattress cleaning at home.', ar: 'تنظيف عميق للمراتب في المنزل.' },
  },
  {
    slug: 'curtain-cleaning',
    name: { ru: 'Чистка штор и жалюзи', en: 'Curtain & Blind Cleaning', ar: 'تنظيف الستائر والبَلايز' },
    blurb: { ru: 'Шторы и жалюзи: снятие и навеска.', en: 'Curtains and blinds, removal & rehang.', ar: 'ستائر وبلايز، فك وإعادة تركيب.' },
  },
  {
    slug: 'window-cleaning',
    name: { ru: 'Мойка окон', en: 'Window Cleaning', ar: 'تنظيف النوافذ' },
    blurb: { ru: 'Внутренняя мойка окон.', en: 'Internal window cleaning.', ar: 'تنظيف النوافذ من الداخل.' },
  },
  {
    slug: 'central-ac-cleaning',
    name: { ru: 'Чистка кондиционеров', en: 'Central AC Cleaning', ar: 'تنظيف المكيفات المركزية' },
    blurb: { ru: 'Центральные и канальные системы.', en: 'Central & ducted AC systems.', ar: 'أنظمة التكييف المركزية والمخفية عبر القنوات.' },
  },
];
