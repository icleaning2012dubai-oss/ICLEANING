const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://similia:1111@cluster0.7ig1y0n.mongodb.net/icleaning';

const GalleryItemSchema = new mongoose.Schema({
  title: { ru: String, en: String, ar: String },
  description: { ru: String, en: String, ar: String },
  beforeImage: String,
  afterImage: String,
  service: String,
  tags: [String],
  published: Boolean,
  order: Number,
}, { timestamps: true });

const GalleryItem = mongoose.model('GalleryItem', GalleryItemSchema);

const CLD = 'https://res.cloudinary.com/dbrgnwy5b/image/upload';

const items = [
  // === AC (dirty → clean pairs) ===
  {
    title: { ru: 'Чистка змеевика кондиционера', en: 'AC Coil Cleaning', ar: 'تنظيف ملف المكيف' },
    description: { ru: 'Глубокая чистка змеевика — до и после обработки', en: 'Deep coil cleaning — before and after treatment', ar: 'تنظيف عميق للملف - قبل وبعد المعالجة' },
    beforeImage: `${CLD}/v1775818343/icleaning/photos/coil.webp`,
    afterImage: `${CLD}/v1775818334/icleaning/photos/coil2.webp`,
    service: 'ac', tags: ['ac', 'coil'], published: true, order: 1,
  },
  {
    title: { ru: 'Очистка воздуховода', en: 'Duct Cleaning', ar: 'تنظيف مجرى الهواء' },
    description: { ru: 'Воздуховод до и после профессиональной чистки', en: 'Air duct before and after professional cleaning', ar: 'مجرى الهواء قبل وبعد التنظيف المهني' },
    beforeImage: `${CLD}/v1775818338/icleaning/photos/duct.webp`,
    afterImage: `${CLD}/v1775818336/icleaning/photos/duct2.webp`,
    service: 'ac', tags: ['ac', 'duct'], published: true, order: 2,
  },
  {
    title: { ru: 'Чистка фильтра кондиционера', en: 'AC Filter Cleaning', ar: 'تنظيف فلتر المكيف' },
    description: { ru: 'Фильтр кондиционера — забитый пылью и после очистки', en: 'AC filter — clogged with dust and after cleaning', ar: 'فلتر المكيف - مسدود بالغبار وبعد التنظيف' },
    beforeImage: `${CLD}/v1775818353/icleaning/photos/filter.webp`,
    afterImage: `${CLD}/v1775818348/icleaning/photos/filter2.webp`,
    service: 'ac', tags: ['ac', 'filter'], published: true, order: 3,
  },
  {
    title: { ru: 'Чистка диффузора', en: 'Diffuser Cleaning', ar: 'تنظيف الناشر' },
    description: { ru: 'Диффузор кондиционера — грязный и после обработки', en: 'AC diffuser — dirty and after treatment', ar: 'ناشر المكيف - متسخ وبعد المعالجة' },
    beforeImage: `${CLD}/v1775818346/icleaning/photos/diffuser.webp`,
    afterImage: `${CLD}/v1775818332/icleaning/photos/diffuser2.webp`,
    service: 'ac', tags: ['ac', 'diffuser'], published: true, order: 4,
  },
  {
    title: { ru: 'Очистка турбины кондиционера', en: 'Blower Cleaning', ar: 'تنظيف المروحة' },
    description: { ru: 'Турбина (blower) — скопившаяся пыль и результат чистки', en: 'Blower fan — accumulated dust and cleaning result', ar: 'مروحة النفخ - الغبار المتراكم ونتيجة التنظيف' },
    beforeImage: `${CLD}/v1775818318/icleaning/photos/blows_dirty.webp`,
    afterImage: `${CLD}/v1775818327/icleaning/photos/blowersor.webp`,
    service: 'ac', tags: ['ac', 'blower'], published: true, order: 5,
  },

  // === SOFA ===
  {
    title: { ru: 'Химчистка дивана', en: 'Sofa Deep Cleaning', ar: 'تنظيف الأريكة' },
    description: { ru: 'Профессиональная химчистка мягкой мебели', en: 'Professional upholstery deep cleaning', ar: 'تنظيف احترافي عميق للمفروشات' },
    beforeImage: `${CLD}/v1773630768/icleaning/photos/img-20260226-wa0028.webp`,
    afterImage: `${CLD}/v1773630798/icleaning/photos/img-20250714-wa0034.webp`,
    service: 'sofa', tags: ['sofa'], published: true, order: 6,
  },
  {
    title: { ru: 'Чистка обивки дивана', en: 'Upholstery Cleaning', ar: 'تنظيف تنجيد الأريكة' },
    description: { ru: 'Удаление пятен и восстановление цвета обивки', en: 'Stain removal and upholstery color restoration', ar: 'إزالة البقع واستعادة لون التنجيد' },
    beforeImage: `${CLD}/v1773630944/icleaning/photos/img-20250507-wa0043.webp`,
    afterImage: `${CLD}/v1773630959/icleaning/photos/img-20250502-wa0076.webp`,
    service: 'sofa', tags: ['sofa'], published: true, order: 7,
  },
  {
    title: { ru: 'Восстановление мягкой мебели', en: 'Furniture Restoration', ar: 'ترميم الأثاث' },
    description: { ru: 'Глубокая чистка и восстановление внешнего вида', en: 'Deep cleaning and appearance restoration', ar: 'تنظيف عميق واستعادة المظهر' },
    beforeImage: `${CLD}/v1773631158/icleaning/photos/img-20250329-wa0072.webp`,
    afterImage: `${CLD}/v1773631203/icleaning/photos/img-20250324-wa0028.webp`,
    service: 'sofa', tags: ['sofa'], published: true, order: 8,
  },

  // === CARPET ===
  {
    title: { ru: 'Химчистка ковра', en: 'Carpet Deep Cleaning', ar: 'تنظيف السجاد' },
    description: { ru: 'Профессиональная химчистка ковра на дому', en: 'Professional carpet deep cleaning at home', ar: 'تنظيف احترافي عميق للسجاد في المنزل' },
    beforeImage: `${CLD}/v1773630859/icleaning/photos/img-20250529-wa0019.webp`,
    afterImage: `${CLD}/v1773631339/icleaning/photos/img-20250822-wa0054.webp`,
    service: 'carpet', tags: ['carpet'], published: true, order: 9,
  },
  {
    title: { ru: 'Выведение пятен с ковра', en: 'Carpet Stain Removal', ar: 'إزالة البقع من السجاد' },
    description: { ru: 'Удаление стойких пятен с ковра', en: 'Removing stubborn stains from carpet', ar: 'إزالة البقع العنيدة من السجاد' },
    beforeImage: `${CLD}/v1773631927/icleaning/photos/img-20250525-wa0029.webp`,
    afterImage: `${CLD}/v1773631963/icleaning/photos/img-20250506-wa0024.webp`,
    service: 'carpet', tags: ['carpet'], published: true, order: 10,
  },
  {
    title: { ru: 'Чистка ковра от грязи', en: 'Carpet Dirt Removal', ar: 'إزالة الأوساخ من السجاد' },
    description: { ru: 'Глубокая чистка ковра — результат до и после', en: 'Deep carpet cleaning — before and after result', ar: 'تنظيف عميق للسجاد - النتيجة قبل وبعد' },
    beforeImage: `${CLD}/v1773632655/icleaning/photos/whatsapp_image_2026-03-05_at_10_42_29.webp`,
    afterImage: `${CLD}/v1773632655/icleaning/photos/whatsapp_image_2026-03-05_at_10_42_27.webp`,
    service: 'carpet', tags: ['carpet'], published: true, order: 11,
  },

  // === CURTAINS ===
  {
    title: { ru: 'Стирка штор', en: 'Curtain Washing', ar: 'غسيل الستائر' },
    description: { ru: 'Профессиональная стирка и глажка штор', en: 'Professional curtain washing and ironing', ar: 'غسيل وكي احترافي للستائر' },
    beforeImage: `${CLD}/v1773630634/icleaning/photos/img-20250320-wa0073.webp`,
    afterImage: `${CLD}/v1773630637/icleaning/photos/photo_2025-12-19_08-24-48.webp`,
    service: 'curtains', tags: ['curtains'], published: true, order: 12,
  },
  {
    title: { ru: 'Химчистка штор', en: 'Curtain Dry Cleaning', ar: 'تنظيف جاف للستائر' },
    description: { ru: 'Деликатная химчистка штор без снятия', en: 'Delicate curtain dry cleaning without removal', ar: 'تنظيف جاف دقيق للستائر بدون إزالتها' },
    beforeImage: `${CLD}/v1773630639/icleaning/photos/photo_2025-12-19_08-24-53.webp`,
    afterImage: `${CLD}/v1773630642/icleaning/photos/photo_2025-12-20_13-35-41.webp`,
    service: 'curtains', tags: ['curtains'], published: true, order: 13,
  },
  {
    title: { ru: 'Чистка тюля', en: 'Tulle Cleaning', ar: 'تنظيف التول' },
    description: { ru: 'Отбеливание и чистка тюля', en: 'Tulle whitening and cleaning', ar: 'تبييض وتنظيف التول' },
    beforeImage: `${CLD}/v1773630645/icleaning/photos/photo_2025-12-22_22-29-16.webp`,
    afterImage: `${CLD}/v1773630647/icleaning/photos/photo_2025-12-22_22-29-17.webp`,
    service: 'curtains', tags: ['curtains'], published: true, order: 14,
  },

  // === CLEANING (stains) ===
  {
    title: { ru: 'Выведение пятен', en: 'Stain Removal', ar: 'إزالة البقع' },
    description: { ru: 'Профессиональное выведение сложных пятен', en: 'Professional removal of tough stains', ar: 'إزالة احترافية للبقع الصعبة' },
    beforeImage: `${CLD}/v1773631425/icleaning/photos/img_20250710_194803_348_1_.webp`,
    afterImage: `${CLD}/v1773631427/icleaning/photos/img_20250605_133243_087_2_.webp`,
    service: 'cleaning', tags: ['cleaning', 'stains'], published: true, order: 15,
  },
  {
    title: { ru: 'Удаление загрязнений', en: 'Deep Stain Treatment', ar: 'معالجة البقع العميقة' },
    description: { ru: 'Глубокая обработка и удаление застарелых пятен', en: 'Deep treatment and removal of old stains', ar: 'معالجة عميقة وإزالة البقع القديمة' },
    beforeImage: `${CLD}/v1773631431/icleaning/photos/img_20250418_185229_147_1_.webp`,
    afterImage: `${CLD}/v1773631433/icleaning/photos/photo_2025-12-26_23-04-59.webp`,
    service: 'cleaning', tags: ['cleaning', 'stains'], published: true, order: 16,
  },
];

async function main() {
  await mongoose.connect(MONGODB_URI);
  console.log('Connected to MongoDB');

  const existing = await GalleryItem.countDocuments();
  if (existing > 0) {
    console.log(`Already have ${existing} gallery items. Skipping.`);
    await mongoose.disconnect();
    return;
  }

  await GalleryItem.insertMany(items);
  console.log(`Inserted ${items.length} before/after gallery items:`);
  
  const byService = {};
  items.forEach(i => { byService[i.service] = (byService[i.service] || 0) + 1; });
  Object.entries(byService).forEach(([k, v]) => console.log(`  ${k}: ${v}`));
  
  await mongoose.disconnect();
}

main().catch(err => { console.error(err); mongoose.disconnect(); process.exit(1); });
