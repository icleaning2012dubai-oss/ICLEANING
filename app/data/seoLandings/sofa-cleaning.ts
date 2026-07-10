import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Sofa Cleaning" + RU "Химчистка диванов".
// Section IDs are stable anchors and must be preserved.
export const sofaCleaning: SeoLanding = {
  slug: 'sofa-cleaning',
  canonicalId: 'sofa_cleaning',
  serviceEntity: 'sofa_cleaning',
  image: '/images/sofa/standart-sofa.webp',

  meta: {
    title: {
      ru: 'Химчистка диванов в Дубае на дому - пятна, запахи, кожа | iCleaning',
      en: 'Sofa Cleaning Dubai | Fabric & Leather Sofa Cleaning at Home',
      ar: 'تنظيف الكنب في دبي | تنظيف الكنب القماشي والجلدي في المنزل',
    },
    description: {
      ru: 'Чистка диванов в Дубае на дому: тканевые и кожаные диваны, пятна, запахи, моча животных. Предварительная цена по фото в WhatsApp.',
      en: 'Professional sofa cleaning in Dubai for fabric and leather sofas, stains, odors and daily buildup. At-home service, photo quote and clear prices.',
      ar: 'تنظيف احترافي للكنب في دبي يشمل الكنب القماشي والجلدي والبقع والروائح والاتساخات اليومية. خدمة منزلية مع تسعيرة عبر الصور وأسعار واضحة.',
    },
  },

  hero: {
    h1: {
      ru: 'Химчистка диванов в Дубае на дому',
      en: 'Sofa Cleaning in Dubai',
      ar: 'تنظيف الكنب في دبي',
    },
    paragraph: {
      ru: 'Диван каждый день принимает на себя кофе, пыль, пот, шерсть животных и жизнь в целом. Отправьте фото - iCleaning оценит материал, пятна и размер, подскажет цену и приедет на чистку по адресу.',
      en: 'A sofa takes in everyday life: coffee, body oils, dust, food crumbs, pet hair, children’s spills and Dubai sand. The surface may look acceptable, but odors and darkened seating areas can sit deeper in the upholstery. iCleaning checks the material, condition and stains before choosing the cleaning method, so the service is practical, safe-minded and clear before work begins.',
      ar: 'يمتص الكنب تفاصيل الحياة اليومية: القهوة وزيوت الجسم والغبار وفتات الطعام وشعر الحيوانات الأليفة وانسكابات الأطفال ورمال دبي. قد يبدو السطح مقبولاً، لكن الروائح والمناطق الداكنة في أماكن الجلوس قد تكون أعمق داخل المفروشات. تفحص iCleaning المادة والحالة والبقع قبل اختيار طريقة التنظيف، لتكون الخدمة عملية وآمنة وواضحة قبل بدء العمل.',
    },
    miniFacts: [
      { ru: 'Цена: стандартные диваны - от AED 60, кожа - от AED 80, стулья/кресла - от AED 35', en: 'Standard sofas from AED 60', ar: 'الكنب القياسي يبدأ من AED 60' },
      { ru: 'На дому', en: 'Leather sofas from AED 80', ar: 'الكنب الجلدي يبدأ من AED 80' },
      { ru: 'Стандартные диваны от AED 60', en: 'Chairs and armchairs from AED 35', ar: 'الكراسي والمقاعد تبدأ من AED 35' },
      { ru: 'Кожаные от AED 80', en: 'At-home fabric and leather options', ar: 'خيارات منزلية للكنب القماشي والجلدي' },
      { ru: 'Фотооценка в WhatsApp', en: 'Send sofa photos on WhatsApp for a fast quote', ar: 'أرسل صور الكنب عبر واتساب للحصول على تسعيرة سريعة' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Get a sofa cleaning quote', ar: 'احصل على تسعيرة تنظيف الكنب' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Посмотреть цены на диваны', en: 'Send sofa photos on WhatsApp', ar: 'أرسل صور الكنب عبر واتساب' },
      event: 'send_photo_for_price',
      href: '#sofa-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Стулья и кресла', en: 'Chairs and armchairs', ar: 'الكراسي والمقاعد' },
      scope: { ru: 'мягкая мебель', en: 'soft seating', ar: 'مقاعد وثيرة' },
      price: { ru: 'AED 35', en: 'from AED 35', ar: 'من AED 35' },
      note: { ru: 'стартовая цена', en: 'starting price', ar: 'السعر الابتدائي' },
    },
    {
      label: { ru: 'Стандартные диваны', en: 'Standard sofas', ar: 'الكنب القياسي' },
      scope: { ru: 'тканевые диваны', en: 'fabric sofas', ar: 'الكنب القماشي' },
      price: { ru: 'AED 60', en: 'from AED 60', ar: 'من AED 60' },
      note: { ru: 'стартовая цена', en: 'starting price', ar: 'السعر الابتدائي' },
    },
    {
      label: { ru: 'Кожаные диваны', en: 'Leather sofas', ar: 'الكنب الجلدي' },
      scope: { ru: 'чистка и кондиционирование', en: 'cleaning and conditioning', ar: 'تنظيف وترطيب' },
      price: { ru: 'AED 80', en: 'from AED 80', ar: 'من AED 80' },
      note: { ru: 'стартовая цена', en: 'starting price', ar: 'السعر الابتدائي' },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Химчистка диванов от пятен, запахов и ежедневных загрязнений',
        en: 'Sofa cleaning for stains, odors and everyday upholstery buildup',
        ar: 'تنظيف الكنب من البقع والروائح والاتساخات اليومية في المفروشات',
      },
      body: {
        ru: [
          'Диван может выглядеть нормально, пока на него не падает свет под другим углом: затемненные посадочные зоны, запах, следы рук и старые пятна появляются постепенно. Обычная влажная салфетка освежает поверхность, но не решает проблему глубже в обивке.',
          'Перед чисткой специалист оценивает материал, состояние ткани или кожи, пятна, запахи и чувствительные зоны. После этого выбирается подходящий способ обработки и объясняется, какого результата реально ожидать.',
          'iCleaning делает чистку диванов на дому в Дубае: клиент отправляет фото, получает предварительный расчет и согласовывает удобный выезд.',
        ],
        en: [
          'Sofas collect the kind of dirt that normal tidying cannot fully remove: sweat, skin oils, snack crumbs, coffee drops, pet hair, dust and small particles from the room. Over time, seating areas become darker, armrests feel greasy and the sofa can hold a stale smell even after vacuuming.',
          'iCleaning’s sofa cleaning service starts with a check of the upholstery, stains, seams, cushions, sensitive areas and previous cleaning attempts. Depending on the material and condition, the technician can use suitable shampooing and extraction equipment for fabric sofas, or a separate care route for leather furniture.',
        ],
        ar: [
          'يجمع الكنب نوعاً من الاتساخات لا يمكن للتنظيف العادي إزالته بالكامل: العرق وزيوت البشرة وفتات الوجبات الخفيفة وقطرات القهوة وشعر الحيوانات الأليفة والغبار والجزيئات الصغيرة في الغرفة. مع مرور الوقت تصبح مناطق الجلوس أكثر قتامة، وتصبح مساند الذراعين دهنية، ويحتفظ الكنب برائحة غير منعشة حتى بعد استخدام المكنسة الكهربائية.',
          'تبدأ خدمة تنظيف الكنب من iCleaning بفحص المفروشات والبقع والدرزات والوسائد والمناطق الحساسة ومحاولات التنظيف السابقة. وبحسب المادة والحالة، يمكن للفني استخدام معدات الشامبو والاستخلاص المناسبة للكنب القماشي، أو اتباع طريقة عناية منفصلة للأثاث الجلدي.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send sofa photos for a quote', ar: 'أرسل صور الكنب للحصول على تسعيرة' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'sofa-at-home',
      h2: {
        ru: 'Химчистка дивана на дому без вывоза мебели',
        en: 'Sofa cleaning at home without moving the furniture out',
        ar: 'تنظيف الكنب في المنزل دون نقل الأثاث خارجاً',
      },
      body: {
        ru: [
          'Диван чистят прямо у клиента: не нужно разбирать мебель, искать транспорт или оставаться без дивана на несколько дней. Мастер приезжает по адресу и работает на месте.',
          'Перед началом он смотрит обивку, пятна, запахи, доступ к мебели и рядом стоящие предметы. Важно заранее показать фото дивана, особенно если есть пятна от мочи, кофе, еды или следы домашних животных.',
          'После чистки дивану нужно время на высыхание. Точное время зависит от материала, объема обработки, вентиляции и состояния обивки.',
        ],
        en: [
          'Most sofa cleaning jobs are best handled at the customer’s address. The sofa stays where it is, and the technician brings the cleaning equipment and products needed for the selected method. This is convenient for apartments, villas, rental properties and families who cannot move heavy furniture.',
          'At the address, the technician checks the number of seats, fabric or leather category, stains, smell, cushion condition and access around the sofa. The team can then clean the seating areas, backrests, armrests and other reachable upholstery parts according to the selected service.',
        ],
        ar: [
          'من الأفضل إنجاز معظم أعمال تنظيف الكنب في عنوان العميل. يبقى الكنب في مكانه، ويحضر الفني معدات التنظيف والمنتجات اللازمة للطريقة المختارة. وهذا مناسب للشقق والفلل والعقارات المؤجرة والعائلات التي لا يمكنها نقل الأثاث الثقيل.',
          'في الموقع، يفحص الفني عدد المقاعد وفئة القماش أو الجلد والبقع والرائحة وحالة الوسائد وإمكانية الوصول حول الكنب. بعد ذلك يستطيع الفريق تنظيف مناطق الجلوس والمساند الخلفية ومساند الذراعين وأجزاء المفروشات الأخرى التي يمكن الوصول إليها وفقاً للخدمة المختارة.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Book at-home sofa cleaning', ar: 'احجز تنظيف الكنب في المنزل' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'commercial-sofa-cleaning',
      h2: {
        ru: 'Чистка диванов для офисов, отелей и зон ожидания',
        en: 'Commercial sofa cleaning for offices, hotels and waiting areas',
        ar: 'تنظيف الكنب للمكاتب والفنادق ومناطق الانتظار',
      },
      body: {
        ru: [
          'Диваны в офисах, отелях, салонах, клиниках и лобби - это часть впечатления о бизнесе. Если обивка темная, липкая или пахнет, клиент замечает это раньше, чем интерьерный дизайн.',
          'Для коммерческого заказа менеджер уточняет количество диванов, размер, материал, состояние, фото пятен и удобное время. Это помогает рассчитать объем и согласовать выезд так, чтобы не мешать работе объекта.',
        ],
        en: [
          'Commercial sofas and soft seating work harder than home furniture. Hotel lobbies, serviced apartments, offices, clinics, salons and reception areas collect more body oils, dust, drink stains and daily contact marks because many people use the same furniture.',
          'For commercial jobs, for a quote, send the number of items, photos, material, location, preferred time and whether the work must be done in zones. This makes the quote more accurate and helps the team plan the cleaning without blocking the entire space.',
        ],
        ar: [
          'يتحمل الكنب والمقاعد الوثيرة التجارية استخداماً أكبر من أثاث المنازل. فردهات الفنادق والشقق الفندقية والمكاتب والعيادات وصالونات التجميل ومناطق الاستقبال تتراكم فيها زيوت الجسم والغبار وبقع المشروبات وآثار الاستخدام اليومي، لأن الكثير من الناس يستخدمون الأثاث نفسه.',
          'للطلبات التجارية، وللحصول على تسعيرة، أرسل عدد القطع والصور والمادة والموقع والوقت المفضل وما إذا كان يجب تنفيذ العمل على مناطق. هذا يجعل التسعيرة أكثر دقة ويساعد الفريق على تخطيط التنظيف دون تعطيل المساحة بالكامل.',
        ],
      },
      cta: {
        text: { ru: 'Запросить расчет для объекта', en: 'Request a commercial sofa cleaning quote', ar: 'اطلب تسعيرة تنظيف الكنب التجاري' },
        event: 'commercial_quote_request',
        href: 'whatsapp',
      },
    },
    {
      id: 'sofa-dubai',
      h2: {
        ru: 'Чистка диванов в квартирах и виллах Дубая',
        en: 'Sofa cleaning in Dubai apartments and villas',
        ar: 'تنظيف الكنب في شقق وفلل دبي',
      },
      body: {
        ru: [
          'В Дубае диван часто живет в режиме постоянного кондиционера, пыли и активной домашней жизни. Песок попадает с обувью, шерсть животных остается в ткани, а запахи могут накапливаться медленно.',
          'При заявке достаточно отправить фото дивана, район, количество посадочных мест и описать проблему: пятна, запах, шерсть, моча животного или обычное освежение.',
          'Менеджер подскажет предварительную цену, ближайшее время и что подготовить перед приездом мастера.',
        ],
        en: [
          'Dubai homes often run AC for long hours, keep windows closed for much of the year and still deal with fine dust and sand around entrances, balconies and parking areas. Sofas collect that environment every day, especially in family rooms and majlis-style seating areas.',
          'Professional sofa cleaning helps refresh the most-used furniture in the home without forcing the customer to transport it. The technician works at the address and can focus on the areas that matter most: seats, armrests, headrests, pet zones, food marks and visible dark patches.',
        ],
        ar: [
          'كثيراً ما تعمل مكيفات المنازل في دبي لساعات طويلة، وتبقى النوافذ مغلقة معظم أيام السنة، ومع ذلك تتعامل مع الغبار الناعم والرمال حول المداخل والشرفات ومواقف السيارات. يجمع الكنب هذه البيئة يومياً، خاصة في غرف العائلة ومناطق الجلوس على طراز المجلس.',
          'يساعد تنظيف الكنب الاحترافي على إنعاش الأثاث الأكثر استخداماً في المنزل دون إجبار العميل على نقله. يعمل الفني في العنوان ويمكنه التركيز على المناطق الأهم: المقاعد ومساند الذراعين ومساند الرأس ومناطق الحيوانات الأليفة وآثار الطعام والبقع الداكنة الظاهرة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check availability in your Dubai area', ar: 'تحقق من التوفر في منطقتك بدبي' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'sofa-materials-methods',
      h2: {
        ru: 'Материал дивана проверяют до чистки',
        en: 'Sofa material check before cleaning',
        ar: 'فحص مادة الكنب قبل التنظيف',
      },
      body: {
        ru: [
          'Диваны отличаются не только цветом и размером. Обивка может по-разному реагировать на влагу, трение и средства, а старые пятна иногда уже закреплены в волокне.',
          'Специалист оценивает материал, ворс, швы, потертости, пятна и запахи. Для кожаной мебели нужен отдельный аккуратный подход с подходящими средствами и кондиционированием поверхности после чистки.',
        ],
        en: [
          'A fabric sofa, a microfiber sofa, a velvet-style fabric and a leather sofa is not treated as the same object. Even two fabric sofas can react differently depending on fiber, dye stability, pile direction, cushion filling, age and previous cleaning attempts.',
          'Before cleaning, the technician checks material, seams, color risk, stains, odor source and worn areas. Fabric sofas may be cleaned with a shampoo and extraction workflow where appropriate. Leather sofas follows a separate surface-cleaning and conditioning route rather than soaking the material.',
        ],
        ar: [
          'لا يُعامل الكنب القماشي وكنب الألياف الدقيقة والأقمشة المخملية والكنب الجلدي على أنها الشيء نفسه. حتى كنبتان قماشيتان قد تتفاعلان بشكل مختلف تبعاً لنوع الألياف وثبات الصبغة واتجاه الوبر وحشوة الوسائد والعمر ومحاولات التنظيف السابقة.',
          'قبل التنظيف، يفحص الفني المادة والدرزات ومخاطر تغير اللون والبقع ومصدر الرائحة والمناطق البالية. يمكن تنظيف الكنب القماشي بطريقة الشامبو والاستخلاص عند الاقتضاء. أما الكنب الجلدي فيتبع طريقة منفصلة لتنظيف السطح وترطيبه بدلاً من إشباع المادة بالماء.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Ask which method fits your sofa', ar: 'استفسر عن الطريقة المناسبة لكنبتك' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'professional-sofa-cleaning',
      h2: {
        ru: 'Профессиональная чистка диванов: чем она отличается от быстрой пены',
        en: 'Professional sofa cleaning versus a quick foam wash',
        ar: 'التنظيف الاحترافي للكنب مقابل الغسل السريع بالرغوة',
      },
      body: {
        ru: [
          'Профессиональная чистка дивана начинается с оценки обивки, пятен, запахов, подлокотников, сидений и швов. Это важно, потому что диван нельзя чистить одним и тем же средством независимо от ткани, цвета и состояния.',
          'Специалист подбирает обработку под материал и задачу: где нужна локальная пятновыводка, где глубокая чистка, а где лучше работать мягче, чтобы не получить разводы, липкий остаток или повреждение ворса.',
        ],
        en: [
          'Professional sofa cleaning starts with an assessment of the upholstery, stains, odors, armrests, seats and seams. This matters because a sofa cannot be cleaned with the same product regardless of fabric, color and condition.',
          'The technician selects the treatment for the material and the task: where local spot treatment is needed, where deep cleaning is needed, and where it is better to work more gently to avoid streaks, sticky residue or pile damage.',
        ],
        ar: [
          'يبدأ التنظيف الاحترافي للكنب بتقييم المفروشات والبقع والروائح ومساند الذراعين والمقاعد والدرزات. وهذا مهم لأنه لا يمكن تنظيف الكنب بالمنتج نفسه بغض النظر عن نوع القماش واللون والحالة.',
          'يختار الفني المعالجة المناسبة للمادة والمهمة: أين تلزم معالجة موضعية للبقع، وأين تلزم تنظيف عميق، وأين يكون من الأفضل العمل بلطف أكبر لتجنب الخطوط أو البقايا اللزجة أو تلف الوبر.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Book at-home sofa cleaning', ar: 'احجز تنظيف الكنب في المنزل' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'sofa-prices',
      h2: {
        ru: 'Цены на химчистку диванов в Дубае',
        en: 'Sofa cleaning prices in Dubai',
        ar: 'أسعار تنظيف الكنب في دبي',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Актуальные стартовые цены: стулья и кресла - от AED 35, стандартные диваны - от AED 60, кожаные диваны - от AED 80.',
          'Финальная цена зависит от размера, количества посадочных мест, материала, состояния обивки, пятен, запахов и дополнительных предметов. Для точного расчета отправьте фото всего дивана и проблемных зон.',
        ],
        en: [
          'Confirmed sofa and seating price cards are: chairs and armchairs from AED 35, standard sofas from AED 60, and leather sofas from AED 80.',
          'The final price depends on item count, number of seats, fabric or leather category, stain level, pet hair, odor, size and access. Let customers send photos of each item for a fast quote.',
        ],
        ar: [
          'الأسعار المعتمدة للكنب والمقاعد هي: الكراسي والمقاعد من AED 35، والكنب القياسي من AED 60، والكنب الجلدي من AED 80.',
          'يعتمد السعر النهائي على عدد القطع وعدد المقاعد وفئة القماش أو الجلد ومستوى البقع وشعر الحيوانات الأليفة والرائحة والحجم وإمكانية الوصول. أرسل صوراً لكل قطعة للحصول على تسعيرة سريعة.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Get the price from sofa photos', ar: 'احصل على السعر من صور الكنب' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'sofa-stains-odors',
      h2: {
        ru: 'Пятна, запахи и моча животных на диване',
        en: 'Sofa stain and odor treatment',
        ar: 'معالجة بقع الكنب وروائحه',
      },
      body: {
        ru: [
          'Если диван пахнет после питомца или старого пятна, проблема может быть не только на поверхности. Жидкость уходит в швы, подушки и наполнитель, поэтому простая салфетка часто маскирует запах на короткое время.',
          'Специалист оценивает источник запаха, материал, возраст загрязнения и домашние попытки чистки. После этого выполняется локальная обработка пятен и общая чистка обивки.',
          'Мы не пишем «Гарантированно удалим любые пятна и запахи». Честная формулировка: результат зависит от глубины загрязнения, материала и времени, которое прошло после появления пятна.',
        ],
        en: [
          'Coffee, juice, food, makeup, sweat marks, pet accidents and unknown old stains all behave differently. The first question is not just “what is the stain?” but also “how long has it been there and what was already used on it?” Home sprays can sometimes set stains or leave residue that makes the area attract more dirt later.',
          'iCleaning can inspect and treat stains as part of the cleaning process. The technician focuses on visible marks, odor sources and high-contact areas such as seats, armrests and headrests. Some stains may lift well; others may only lighten if they have changed the fiber or dye.',
        ],
        ar: [
          'القهوة والعصير والطعام ومستحضرات التجميل وآثار العرق وحوادث الحيوانات الأليفة والبقع القديمة المجهولة تتصرف جميعها بشكل مختلف. والسؤال الأول ليس فقط «ما هي البقعة؟» بل أيضاً «منذ متى وهي موجودة وماذا استُخدم عليها من قبل؟». قد تثبّت البخاخات المنزلية البقع أحياناً أو تترك بقايا تجعل المنطقة تجذب المزيد من الاتساخ لاحقاً.',
          'يمكن لـ iCleaning فحص البقع ومعالجتها كجزء من عملية التنظيف. يركز الفني على العلامات الظاهرة ومصادر الرائحة والمناطق كثيرة التلامس مثل المقاعد ومساند الذراعين ومساند الرأس. بعض البقع قد تزول جيداً، وبعضها قد يفتح لونه فقط إذا كان قد غيّر الألياف أو الصبغة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send a close-up photo of the stain', ar: 'أرسل صورة مقربة للبقعة' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'sofa-availability',
      h2: {
        ru: 'Заказать химчистку дивана и проверить ближайшее время',
        en: 'Sofa cleaning booking and availability',
        ar: 'حجز تنظيف الكنب والتحقق من المواعيد المتاحة',
      },
      body: {
        ru: [
          'Чтобы быстро оформить чистку дивана, отправьте фото, район, количество мест и короткое описание проблемы. Если есть пятно или запах, добавьте крупный план.',
          'Менеджер сориентирует по цене, уточнит ближайшее доступное время и подскажет, что подготовить: доступ к дивану, свободное место вокруг и вентиляцию после чистки.',
        ],
        en: [
          'Sofa cleaning inquiries are routed through WhatsApp or a short form. The manager gives a useful estimate when the customer sends photos, the number of seats, material if known, Dubai area and preferred date.',
          'Service work is scheduled during the confirmed working window of 08:00-22:00. WhatsApp inquiries can be sent at any time.',
        ],
        ar: [
          'تُوجَّه استفسارات تنظيف الكنب عبر واتساب أو نموذج قصير. يقدم المدير تقديراً مفيداً عندما يرسل العميل الصور وعدد المقاعد والمادة إن كانت معروفة ومنطقة دبي والتاريخ المفضل.',
          'تُجدوَل أعمال الخدمة خلال ساعات العمل المعتمدة من 08:00 إلى 22:00. ويمكن إرسال استفسارات واتساب في أي وقت.',
        ],
      },
      cta: {
        text: { ru: 'Проверить ближайшее время', en: 'Message us on WhatsApp', ar: 'راسلنا عبر واتساب' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'leather-sofa-cleaning',
      h2: {
        ru: 'Чистка кожаного дивана и уход за кожаной мебелью',
        en: 'Leather sofa cleaning and conditioning',
        ar: 'تنظيف الكنب الجلدي وترطيبه',
      },
      body: {
        ru: [
          'Кожаный диван нельзя чистить как тканевую обивку. Перед работой специалист оценивает поверхность, загрязнения, потертости, чувствительные зоны и общее состояние кожи.',
          'Для кожаной мебели используют подходящий шампунь для кожи, а после чистки - кондиционер, если это подходит для состояния материала. Задача простая: аккуратно очистить поверхность и сохранить ухоженный вид, без обещаний полной реставрации.',
        ],
        en: [
          'Leather furniture needs a different approach from fabric upholstery. The surface can collect body oils, dust and dark contact marks, but it is not soaked or treated like a textile sofa.',
          'The confirmed leather furniture route uses a suitable leather shampoo and conditioner. The goal is surface cleaning and care, not restoration, recoloring or repair of scratches and cracks.',
        ],
        ar: [
          'يحتاج الأثاث الجلدي إلى أسلوب مختلف عن المفروشات القماشية. فقد يجمع السطح زيوت الجسم والغبار وآثار التلامس الداكنة، لكنه لا يُشبع بالماء أو يُعامل مثل الكنب القماشي.',
          'تستخدم طريقة الأثاث الجلدي المعتمدة شامبو ومرطباً مناسبين للجلد. والهدف هو تنظيف السطح والعناية به، وليس الترميم أو إعادة التلوين أو إصلاح الخدوش والتشققات.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото кожаного дивана', en: 'Send leather sofa photos for assessment', ar: 'أرسل صور الكنب الجلدي للتقييم' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: { ru: 'Сколько стоит химчистка дивана?', en: 'How much does sofa cleaning cost?', ar: 'كم تكلفة تنظيف الكنب؟' },
      a: {
        ru: 'Актуальные стартовые цены: стандартные диваны - от AED 60, кожаные диваны - от AED 80, стулья и кресла - от AED 35. Финальная цена зависит от размера, материала и состояния.',
        en: 'Sofa cleaning is quoted by sofa size, number of seats or items, material and condition. Send photos for a preliminary estimate before booking.',
        ar: 'تُحدد تسعيرة تنظيف الكنب بحسب حجم الكنب وعدد المقاعد أو القطع والمادة والحالة. أرسل الصور للحصول على تقدير مبدئي قبل الحجز.',
      },
    },
    {
      q: { ru: 'Диван чистят дома или забирают?', en: 'Do you clean sofas at home?', ar: 'هل تنظفون الكنب في المنزل؟' },
      a: {
        ru: 'Диваны чистятся на дому у клиента. Мастер приезжает по адресу, оценивает обивку и выполняет чистку на месте.',
        en: 'Yes. Sofa cleaning is usually done at the customer’s address. The technician checks the sofa material, stains and condition before cleaning the seats, armrests, backrests and other reachable upholstery areas.',
        ar: 'نعم. يُنجز تنظيف الكنب عادةً في عنوان العميل. يفحص الفني مادة الكنب والبقع والحالة قبل تنظيف المقاعد ومساند الذراعين والمساند الخلفية وأجزاء المفروشات الأخرى التي يمكن الوصول إليها.',
      },
    },
    {
      q: { ru: 'Можно ли убрать запах мочи кошки с дивана?', en: 'Can you remove sofa stains completely?', ar: 'هل يمكنكم إزالة بقع الكنب بالكامل؟' },
      a: {
        ru: 'Можно обработать пятно и запах, но результат зависит от глубины загрязнения, материала и времени, которое прошло. Для оценки лучше отправить фото и описать ситуацию.',
        en: 'Many common stains can be treated, but complete removal depends on the stain age, material, dye stability and previous cleaning attempts. iCleaning needs to explain realistic expectations before starting.',
        ar: 'يمكن معالجة الكثير من البقع الشائعة، لكن الإزالة الكاملة تعتمد على عمر البقعة والمادة وثبات الصبغة ومحاولات التنظيف السابقة. تحرص iCleaning على توضيح التوقعات الواقعية قبل البدء.',
      },
    },
    {
      q: { ru: 'Вы чистите кожаные диваны?', en: 'Do you clean leather sofas?', ar: 'هل تنظفون الكنب الجلدي؟' },
      a: {
        ru: 'Да, кожаная мебель входит в услугу. Подход подбирается после оценки состояния поверхности. Услуга не включает реставрацию, перекраску и ремонт трещин.',
        en: 'Yes, leather sofa cleaning is handled as part of sofa cleaning. The service uses a separate leather-care route with suitable cleaning and conditioner products, but it is not presented as leather restoration or repair.',
        ar: 'نعم، يُعد تنظيف الكنب الجلدي جزءاً من خدمة تنظيف الكنب. تعتمد الخدمة طريقة منفصلة للعناية بالجلد باستخدام منتجات تنظيف وترطيب مناسبة، لكنها ليست ترميماً أو إصلاحاً للجلد.',
      },
    },
    {
      q: { ru: 'Как заказать чистку дивана?', en: 'What do I send for a sofa quote?', ar: 'ماذا أرسل للحصول على تسعيرة الكنب؟' },
      a: {
        ru: 'Отправьте фото дивана, район, количество посадочных мест и желаемую дату в WhatsApp. Менеджер даст предварительный расчет и проверит ближайшее время.',
        en: 'Send photos of the whole sofa, close-ups of stains, number of seats, material if known and your Dubai area. This helps the manager estimate the price and choose the right cleaning method.',
        ar: 'أرسل صوراً للكنب بالكامل ولقطات مقربة للبقع وعدد المقاعد والمادة إن كانت معروفة ومنطقتك في دبي. هذا يساعد المدير على تقدير السعر واختيار طريقة التنظيف المناسبة.',
      },
    },
  ],

  related: [
    {
      slug: 'upholstery-cleaning',
      title: { ru: 'Химчистка мягкой мебели', en: 'Upholstery & Soft Furniture Cleaning', ar: 'تنظيف المفروشات والأثاث الوثير' },
      text: {
        ru: 'Для кресел, стульев, пуфов и офисной мебели.',
        en: 'Use this for chairs, armchairs, ottomans and office chairs.',
        ar: 'مناسب للكراسي والمقاعد والبوف وكراسي المكاتب.',
      },
    },
    {
      slug: 'mattress-cleaning',
      title: { ru: 'Химчистка матрасов', en: 'Mattress Cleaning', ar: 'تنظيف المراتب' },
      text: {
        ru: 'Для спальных мест, пятен и запахов.',
        en: 'Useful for customers cleaning multiple fabric items at home.',
        ar: 'مفيد للعملاء الذين ينظفون عدة قطع قماشية في المنزل.',
      },
    },
    {
      slug: 'carpet-cleaning',
      title: { ru: 'Чистка ковров', en: 'Carpet & Rug Cleaning', ar: 'تنظيف السجاد والبسط' },
      text: {
        ru: 'Для общей заявки на ковер и диван.',
        en: 'Useful for combined living-room cleaning requests.',
        ar: 'مفيد لطلبات تنظيف غرفة المعيشة المجمّعة.',
      },
    },
  ],
};
