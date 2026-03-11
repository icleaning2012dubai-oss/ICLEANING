const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://similia:1111@cluster0.lmzxae0.mongodb.net/icleaning?retryWrites=true&w=majority&appName=Cluster0';

const BlogPostSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title: { ru: String, en: String, ar: String },
  excerpt: { ru: String, en: String, ar: String },
  content: { ru: String, en: String, ar: String },
  coverImage: String,
  tags: [String],
  published: { type: Boolean, default: false },
}, { timestamps: true });

const GalleryItemSchema = new mongoose.Schema({
  title: { ru: String, en: String, ar: String },
  description: { ru: String, en: String, ar: String },
  beforeImage: String,
  afterImage: String,
  service: String,
  tags: [String],
  published: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
const GalleryItem = mongoose.model('GalleryItem', GalleryItemSchema);

const blogPosts = [
  {
    slug: 'carpet-cleaning-tips-dubai',
    title: {
      ru: '7 советов по уходу за коврами в Дубае',
      en: '7 Carpet Care Tips for Dubai Residents',
      ar: '7 نصائح للعناية بالسجاد في دبي',
    },
    excerpt: {
      ru: 'Как сохранить ковры чистыми в условиях пустынного климата. Практические рекомендации от экспертов iCleaning.',
      en: 'How to keep your carpets clean in desert climate. Practical tips from iCleaning experts.',
      ar: 'كيف تحافظ على نظافة سجادك في المناخ الصحراوي. نصائح عملية من خبراء آي كلينينغ.',
    },
    content: {
      ru: '<h2>Почему уход за коврами в Дубае важен</h2><p>Пустынный климат Дубая означает, что песок и пыль постоянно проникают в ваш дом. Ковры выступают как фильтр, задерживая эти частицы, но без регулярной чистки они накапливаются и повреждают волокна.</p><h3>1. Пылесосьте минимум 2 раза в неделю</h3><p>В условиях Дубая стандартное правило «раз в неделю» недостаточно. Мелкий песок проникает глубоко в ворс и абразивно действует на волокна при ходьбе.</p><h3>2. Используйте коврики у входа</h3><p>Размещайте коврики как снаружи, так и внутри входной двери. Это значительно снижает количество песка, попадающего на основные ковры.</p><h3>3. Профессиональная чистка каждые 6 месяцев</h3><p>Даже при регулярной уборке ковры нуждаются в глубокой профессиональной чистке. Мы используем метод горячей экстракции, который удаляет до 98% загрязнений.</p><h3>4. Быстро реагируйте на пятна</h3><p>Промокните пятно бумажным полотенцем (не трите!). Используйте раствор воды с небольшим количеством мягкого мыла.</p><h3>5. Поддерживайте влажность в квартире</h3><p>Сухой воздух Дубая может сделать ковровые волокна хрупкими. Увлажнитель воздуха поможет сохранить эластичность ковра.</p><h3>6. Переворачивайте ковёр</h3><p>Раз в год переворачивайте ковёр для равномерного износа. Это особенно важно в зонах с высокой проходимостью.</p><h3>7. Защита от солнца</h3><p>Прямые солнечные лучи могут выцветить ковёр. Используйте жалюзи или шторы в часы наиболее интенсивного солнечного света.</p>',
      en: '<h2>Why Carpet Care in Dubai Matters</h2><p>Dubai\'s desert climate means sand and dust constantly infiltrate your home. Carpets act as filters, trapping these particles, but without regular cleaning, they accumulate and damage fibers.</p><h3>1. Vacuum at Least Twice a Week</h3><p>In Dubai\'s conditions, the standard "once a week" rule isn\'t enough. Fine sand penetrates deep into the pile and abrasively damages fibers when walked on.</p><h3>2. Use Doormats</h3><p>Place mats both outside and inside your entrance door. This significantly reduces the amount of sand reaching your main carpets.</p><h3>3. Professional Cleaning Every 6 Months</h3><p>Even with regular vacuuming, carpets need deep professional cleaning. We use hot water extraction that removes up to 98% of contaminants.</p><h3>4. React Quickly to Spills</h3><p>Blot the stain with a paper towel (don\'t rub!). Use a solution of water with a small amount of mild soap.</p><h3>5. Maintain Indoor Humidity</h3><p>Dubai\'s dry air can make carpet fibers brittle. A humidifier will help maintain carpet elasticity.</p><h3>6. Rotate Your Carpet</h3><p>Once a year, rotate your carpet for even wear. This is especially important in high-traffic areas.</p><h3>7. Sun Protection</h3><p>Direct sunlight can fade your carpet. Use blinds or curtains during peak sunlight hours.</p>',
      ar: '',
    },
    coverImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    tags: ['carpet', 'tips', 'dubai'],
    published: true,
  },
  {
    slug: 'sofa-cleaning-guide',
    title: {
      ru: 'Полное руководство по чистке диванов',
      en: 'Complete Guide to Sofa Cleaning',
      ar: 'دليل شامل لتنظيف الأرائك',
    },
    excerpt: {
      ru: 'Когда и как чистить диван? Разбираем типы обивки и подходящие методы чистки для каждого.',
      en: 'When and how to clean your sofa? We break down upholstery types and the right cleaning methods for each.',
      ar: 'متى وكيف تنظف أريكتك؟ نحلل أنواع التنجيد وطرق التنظيف المناسبة لكل نوع.',
    },
    content: {
      ru: '<h2>Зачем чистить диван профессионально</h2><p>Диван — один из самых используемых предметов мебели в доме. Он впитывает пот, пыль, крошки еды и аллергены. Регулярная профессиональная чистка продлевает срок службы обивки и создаёт здоровую среду.</p><h3>Типы обивки</h3><p><strong>Ткань (микрофибра, велюр, жаккард)</strong> — требует деликатной чистки с низким содержанием влаги. Мы используем метод сухой экстракции для тканевых диванов.</p><p><strong>Кожа</strong> — нуждается в специализированных средствах, которые не пересушивают материал. После чистки наносим кондиционер для кожи.</p><p><strong>Смешанные ткани</strong> — комбинированный подход с тестированием на незаметном участке.</p><h3>Как часто чистить</h3><ul><li>Семья с детьми или питомцами: каждые 3-4 месяца</li><li>Пара без детей: каждые 6 месяцев</li><li>Редко используемая мебель: раз в год</li></ul><h3>Что мы делаем</h3><p>В iCleaning мы проводим полный цикл: осмотр → тест на цветостойкость → предварительная обработка пятен → глубокая чистка → сушка. Весь процесс занимает 2-3 часа, диван готов к использованию через 4-6 часов.</p>',
      en: '<h2>Why Professional Sofa Cleaning Matters</h2><p>The sofa is one of the most used furniture pieces in your home. It absorbs sweat, dust, food crumbs, and allergens. Regular professional cleaning extends upholstery life and creates a healthy environment.</p><h3>Upholstery Types</h3><p><strong>Fabric (microfiber, velour, jacquard)</strong> — requires delicate low-moisture cleaning. We use dry extraction for fabric sofas.</p><p><strong>Leather</strong> — needs specialized products that don\'t dry out the material. After cleaning, we apply leather conditioner.</p><p><strong>Mixed fabrics</strong> — combined approach with testing on a hidden area first.</p><h3>How Often to Clean</h3><ul><li>Family with kids or pets: every 3-4 months</li><li>Couple without kids: every 6 months</li><li>Rarely used furniture: once a year</li></ul><h3>What We Do</h3><p>At iCleaning, we perform a full cycle: inspection → colorfastness test → pre-treatment of stains → deep cleaning → drying. The entire process takes 2-3 hours, and the sofa is ready to use in 4-6 hours.</p>',
      ar: '',
    },
    coverImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    tags: ['sofa', 'guide', 'cleaning'],
    published: true,
  },
  {
    slug: 'ac-maintenance-dubai-summer',
    title: {
      ru: 'Подготовка кондиционера к лету в Дубае',
      en: 'Preparing Your AC for Dubai Summer',
      ar: 'تجهيز مكيف الهواء لصيف دبي',
    },
    excerpt: {
      ru: 'Почему важно обслужить кондиционер до начала жары и что включает профессиональная чистка AC в Дубае.',
      en: 'Why it\'s important to service your AC before the heat hits and what professional AC cleaning in Dubai includes.',
      ar: 'لماذا من المهم صيانة مكيف الهواء قبل بدء الحرارة وماذا يتضمن التنظيف المهني للمكيف في دبي.',
    },
    content: {
      ru: '<h2>Лето в Дубае — испытание для кондиционера</h2><p>При температуре свыше 45°C кондиционер работает на пределе. Без надлежащего обслуживания это приводит к поломкам, увеличению счетов за электричество и ухудшению качества воздуха.</p><h3>Когда обслуживать</h3><p>Оптимальное время — март-апрель, до начала экстремальной жары. Это даёт время устранить проблемы до пиковой нагрузки.</p><h3>Что включает чистка AC</h3><ul><li><strong>Чистка фильтров</strong> — снижает потребление энергии на 5-15%</li><li><strong>Промывка испарителя</strong> — устраняет бактерии и неприятные запахи</li><li><strong>Чистка дренажной системы</strong> — предотвращает протечки</li><li><strong>Проверка фреона</strong> — обеспечивает эффективное охлаждение</li><li><strong>Чистка внешнего блока</strong> — улучшает теплоотдачу</li></ul><h3>Признаки, что пора чистить</h3><p>Неприятный запах при включении, слабый поток воздуха, кондиционер не охлаждает до заданной температуры, повышенный шум, капает вода.</p><h3>Результат</h3><p>После профессиональной чистки кондиционер работает эффективнее, тише и потребляет меньше энергии. Средняя экономия — 20-30% на счетах за электричество.</p>',
      en: '<h2>Dubai Summer — A Test for Your AC</h2><p>At temperatures exceeding 45°C, your AC works at full capacity. Without proper maintenance, this leads to breakdowns, higher electricity bills, and poor air quality.</p><h3>When to Service</h3><p>The optimal time is March-April, before extreme heat begins. This allows time to fix issues before peak load.</p><h3>What AC Cleaning Includes</h3><ul><li><strong>Filter cleaning</strong> — reduces energy consumption by 5-15%</li><li><strong>Evaporator washing</strong> — eliminates bacteria and bad odors</li><li><strong>Drainage system cleaning</strong> — prevents leaks</li><li><strong>Refrigerant check</strong> — ensures efficient cooling</li><li><strong>Outdoor unit cleaning</strong> — improves heat dissipation</li></ul><h3>Signs It\'s Time to Clean</h3><p>Bad smell when turning on, weak airflow, AC doesn\'t cool to set temperature, increased noise, water dripping.</p><h3>Result</h3><p>After professional cleaning, your AC works more efficiently, quietly, and consumes less energy. Average savings — 20-30% on electricity bills.</p>',
      ar: '',
    },
    coverImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    tags: ['ac', 'maintenance', 'summer', 'dubai'],
    published: true,
  },
];

const galleryItems = [
  {
    title: {
      ru: 'Чистка персидского ковра',
      en: 'Persian Carpet Cleaning',
      ar: 'تنظيف سجادة فارسية',
    },
    description: {
      ru: 'Глубокая чистка шёлкового персидского ковра. Удаление пятен от кофе и восстановление цвета.',
      en: 'Deep cleaning of a silk Persian carpet. Coffee stain removal and color restoration.',
      ar: '',
    },
    beforeImage: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    service: 'carpet',
    tags: ['carpet', 'persian', 'stain removal'],
    published: true,
    order: 1,
  },
  {
    title: {
      ru: 'Химчистка углового дивана',
      en: 'L-Shaped Sofa Deep Cleaning',
      ar: 'تنظيف عميق لأريكة زاوية',
    },
    description: {
      ru: 'Полная химчистка большого углового дивана из микрофибры. Удаление пятен и запахов.',
      en: 'Full deep cleaning of a large microfiber L-shaped sofa. Stain and odor removal.',
      ar: '',
    },
    beforeImage: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
    service: 'sofa',
    tags: ['sofa', 'microfiber', 'deep cleaning'],
    published: true,
    order: 2,
  },
  {
    title: {
      ru: 'Чистка штор в гостиной',
      en: 'Living Room Curtain Cleaning',
      ar: 'تنظيف ستائر غرفة المعيشة',
    },
    description: {
      ru: 'Деликатная чистка штор из органзы без снятия. Удаление пыли и освежение ткани.',
      en: 'Delicate organza curtain cleaning without removal. Dust removal and fabric refreshing.',
      ar: '',
    },
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&q=80',
    service: 'curtains',
    tags: ['curtains', 'organza', 'delicate'],
    published: true,
    order: 3,
  },
  {
    title: {
      ru: 'Обслуживание кондиционера',
      en: 'AC Unit Maintenance',
      ar: 'صيانة وحدة تكييف',
    },
    description: {
      ru: 'Полная чистка сплит-системы: фильтры, испаритель, дренаж и внешний блок.',
      en: 'Complete split system cleaning: filters, evaporator, drainage, and outdoor unit.',
      ar: '',
    },
    beforeImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1631545806609-72e225a4610e?w=600&q=80',
    service: 'ac',
    tags: ['ac', 'maintenance', 'split system'],
    published: true,
    order: 4,
  },
];

async function seed() {
  console.log('Connecting to MongoDB...');
  await mongoose.connect(MONGODB_URI);
  console.log('Connected!');

  // Seed blog posts
  console.log('\nSeeding blog posts...');
  for (const post of blogPosts) {
    const exists = await BlogPost.findOne({ slug: post.slug });
    if (exists) {
      console.log(`  ✓ "${post.slug}" already exists, skipping`);
    } else {
      await BlogPost.create(post);
      console.log(`  + Created "${post.slug}"`);
    }
  }

  // Seed gallery items
  console.log('\nSeeding gallery items...');
  const existingCount = await GalleryItem.countDocuments();
  if (existingCount > 0) {
    console.log(`  ✓ ${existingCount} items already exist, skipping`);
  } else {
    await GalleryItem.insertMany(galleryItems);
    console.log(`  + Created ${galleryItems.length} gallery items`);
  }

  console.log('\nDone!');
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
