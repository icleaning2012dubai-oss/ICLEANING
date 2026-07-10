import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Elite / Handmade / Silk / Persian Rug Cleaning" + RU "Чистка элитных ковров".
// Section IDs are stable anchors and must be preserved.
export const premiumRugCleaning: SeoLanding = {
  slug: 'premium-rug-cleaning',
  canonicalId: 'specialty_rug_cleaning',
  serviceEntity: 'specialty_rug_cleaning',
  image: '/images/carpet/silk.webp',

  meta: {
    title: {
      ru: 'Чистка элитных ковров в Дубае - шелк, шерсть, хендмейд, персидские ковры | iCleaning',
      en: 'Premium Rug Cleaning Dubai | Persian, Silk & Wool Rugs',
      ar: 'تنظيف السجاد الفاخر في دبي | السجاد الفارسي والحريري والصوفي',
    },
    description: {
      ru: 'Деликатная чистка ковров ручной работы, шелковых, шерстяных, персидских и других ценных ковров в Дубае. Диагностика по фото и аккуратный подбор метода.',
      en: 'Inspection-first premium rug cleaning in Dubai for Persian, handmade, silk, wool and delicate rugs. Quote by photo, pickup and careful handling.',
      ar: 'تنظيف السجاد الفاخر في دبي يبدأ بالفحص أولاً، ويشمل السجاد الفارسي واليدوي والحريري والصوفي والحساس. عرض سعر بالصورة، مع خدمة الاستلام والعناية الدقيقة.',
    },
  },

  hero: {
    h1: {
      ru: 'Чистка элитных ковров в Дубае - шелк, шерсть, хендмейд и персидские ковры',
      en: 'Premium Rug Cleaning in Dubai - Silk, Wool, Handmade & Persian Rugs',
      ar: 'تنظيف السجاد الفاخر في دبي - السجاد الحريري والصوفي واليدوي والفارسي',
    },
    paragraph: {
      ru: 'Дорогие ковры нельзя чистить по принципу «одно средство для всех». Отправьте фото ковра - мы оценим материал, пятна, бахрому и состояние основы, а затем подскажем безопасный маршрут чистки без завышенных обещаний.',
      en: 'A valuable rug is not treated like an ordinary floor mat. Handmade, Persian, wool, silk, viscose and vintage rugs can react differently to moisture, friction and generic chemicals. Before cleaning, iCleaning checks the material, pile, dye stability, backing, old repairs and visible stain history so the method is chosen for the rug in front of us, not for a generic category.',
      ar: 'السجادة الثمينة لا تُعامل مثل سجادة الأرضية العادية. فالسجاد اليدوي والفارسي والصوفي والحريري والفسكوز والقديم قد يتفاعل بشكل مختلف مع الرطوبة والاحتكاك والمواد الكيميائية العامة. قبل التنظيف، تفحص iCleaning الخامة والوبرة وثبات الأصباغ والظهر والإصلاحات القديمة وتاريخ البقع الظاهرة، بحيث تُختار الطريقة المناسبة للسجادة التي أمامنا وليس لفئة عامة.',
    },
    miniFacts: [
      { ru: 'Цена: до 4 м² - AED 396, до 6 м² - AED 594, до 12 м² - AED 1188', en: 'Premium rugs from AED 396 up to 4 m2', ar: 'السجاد الفاخر يبدأ من AED 396 حتى 4 m2' },
      { ru: 'От AED 396', en: 'AED 99 per m2 for premium rug cards', ar: 'AED 99 لكل m2 لباقات السجاد الفاخر' },
      { ru: 'Диагностика материала', en: 'Pickup and return available by area', ar: 'خدمة الاستلام والإرجاع متوفرة حسب المنطقة' },
      { ru: 'Ручная работа, шерсть, шелк, персидские ковры', en: 'Inspection-first handling', ar: 'تعامل يبدأ بالفحص أولاً' },
      { ru: 'Без обещаний 100% удаления пятен', en: 'No 100% stain-removal promises', ar: 'دون وعود بإزالة البقع بنسبة 100%' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send rug photos for assessment', ar: 'أرسل صور السجادة للتقييم' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Уточнить подход для деликатного ковра', en: 'Ask for pickup and return', ar: 'استفسر عن خدمة الاستلام والإرجاع' },
      event: 'send_photo_for_price',
      href: '#premium-rug-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Маленький handmade ковер', en: 'Small handmade rug', ar: 'سجادة يدوية صغيرة' },
      scope: { ru: 'размер до 4 м²', en: 'up to 4 m²', ar: 'حتى 4 m²' },
      price: { ru: 'AED 396', en: 'AED 396', ar: 'AED 396' },
      note: { ru: '2м × 2м = 396 AED', en: '2m × 2m = AED 396', ar: '2m × 2m = AED 396' },
    },
    {
      label: { ru: 'Средний handmade ковер', en: 'Medium handmade rug', ar: 'سجادة يدوية متوسطة' },
      scope: { ru: 'размер до 6 м²', en: 'up to 6 m²', ar: 'حتى 6 m²' },
      price: { ru: 'AED 594', en: 'AED 594', ar: 'AED 594' },
      note: { ru: '2м × 3м = 594 AED', en: '2m × 3m = AED 594', ar: '2m × 3m = AED 594' },
    },
    {
      label: { ru: 'Большой handmade ковер', en: 'Large handmade rug', ar: 'سجادة يدوية كبيرة' },
      scope: { ru: 'размер до 12 м²', en: 'up to 12 m²', ar: 'حتى 12 m²' },
      price: { ru: 'AED 1188', en: 'AED 1,188', ar: 'AED 1,188' },
      note: { ru: 'ориентир 99 AED/м²', en: 'AED 99 / m² for larger areas', ar: 'AED 99 / m² للمساحات الأكبر' },
    },
    {
      label: { ru: 'Тариф за метр', en: 'Per-metre rate', ar: 'سعر المتر' },
      scope: { ru: 'расчет по площади', en: 'premium rug rate', ar: 'سعر السجاد الفاخر' },
      price: { ru: 'AED 99/м²', en: 'AED 99 per m²', ar: 'AED 99 لكل m²' },
      note: { ru: 'для расчета по площади', en: 'for area-based calculation', ar: 'للحساب على أساس المساحة' },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Чистка элитных ковров начинается с диагностики, а не с универсального шампуня',
        en: 'Premium rug cleaning that starts with inspection, not shortcuts',
        ar: 'تنظيف السجاد الفاخر يبدأ بالفحص وليس بالحلول السريعة',
      },
      body: {
        ru: [
          'Элитный ковер - это не просто предмет на полу. В нем могут быть натуральные волокна, ручное плетение, старые красители, тонкая основа и следы прошлых ремонтов. Поэтому чистка таких ковров должна начинаться с оценки, а не с сильного средства.',
          'iCleaning разделяет стандартные ковры и деликатные ковры ручной работы. Для персидских, иранских, винтажных, марокканских, афганских, берберских ковров, а также изделий из шелка, шерсти, и других чувствительных материалов метод чистки подбирается после фото и осмотра.',
          'Цель премиальной чистки - аккуратно убрать загрязнения и снизить риски для ворса, цвета и основы. Нельзя обещать полное восстановление или 100% удаление любых пятен без диагностики.',
        ],
        en: [
          'Premium rugs often look strong because they are dense and heavy, but the real risks are hidden in the fiber, dyes, foundation and previous treatments. Handmade wool rugs, silk rugs, viscose rugs and older Persian rugs do not automatically receive the same moisture level, agitation or cleaning product.',
          'iCleaning treats premium rugs as individual items. The technician or intake team checks construction, material, pile condition, fringe, backing, color movement risk and visible stains before recommending the cleaning route.',
        ],
        ar: [
          'غالباً ما يبدو السجاد الفاخر متيناً لأنه كثيف وثقيل، لكن المخاطر الحقيقية تكمن في الألياف والأصباغ والقاعدة والمعالجات السابقة. فالسجاد الصوفي اليدوي والحريري والفسكوز والسجاد الفارسي القديم لا يتلقى تلقائياً نفس مستوى الرطوبة أو الفرك أو المنتج ذاته.',
          'تتعامل iCleaning مع السجاد الفاخر كقطع فردية. حيث يفحص الفني أو فريق الاستلام البنية والخامة وحالة الوبرة والأهداب والظهر واحتمال انتقال اللون والبقع الظاهرة قبل التوصية بطريقة التنظيف.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send photos of the rug for a careful assessment', ar: 'أرسل صور السجادة لتقييم دقيق' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'persian-handmade-rug-cleaning',
      h2: {
        ru: 'Чистка персидских и хендмейд ковров без агрессивных коротких путей',
        en: 'Persian and handmade rug cleaning without aggressive shortcuts',
        ar: 'تنظيف السجاد الفارسي واليدوي دون حلول سريعة قاسية',
      },
      body: {
        ru: [
          'Персидские и хендмейд ковры часто ценны не только из-за цены, но и из-за происхождения, плетения и возраста. Ошибка при чистке может привести к потере формы, миграции цвета или жесткости ворса.',
          'Перед обработкой важно оценить структуру ковра: материал ворса, основу, плотность, бахрому, старые пятна и реакцию цвета. После этого подбирается более аккуратный способ чистки, а не стандартная схема для всех ковров.',
          'Если ковер старинный, сильно поврежденный или с нестойкими красителями, менеджер заранее расскажет об ограничениях и о том, какого результата стоит ожидать.',
        ],
        en: [
          'Persian and handmade rugs can hold a lot of dust inside the pile and foundation. At the same time, they can have natural fibers, hand-tied knots, delicate fringe, older repairs or dyes that do not behave like synthetic machine-made carpets. That is why a quick soak, hot water or strong supermarket cleaner is a bad starting point.',
          'Before cleaning, the rug needs to be reviewed for dye stability, pile wear, foundation condition, fringe strength and stain type. If the rug has an old stain, pet accident or previous home treatment, the team needs to know this before the main cleaning begins because it can change the expected result.',
        ],
        ar: [
          'يمكن للسجاد الفارسي واليدوي أن يحتجز كميات كبيرة من الغبار داخل الوبرة والقاعدة. وفي الوقت نفسه قد يحتوي على ألياف طبيعية وعُقد منسوجة يدوياً وأهداب رقيقة وإصلاحات قديمة أو أصباغ لا تتصرف مثل السجاد الصناعي المصنوع آلياً. لذلك فإن النقع السريع أو الماء الساخن أو منظفات السوبر ماركت القوية نقطة بداية سيئة.',
          'قبل التنظيف، ينبغي مراجعة السجادة من حيث ثبات الأصباغ وتآكل الوبرة وحالة القاعدة وقوة الأهداب ونوع البقعة. وإذا كانت السجادة تحمل بقعة قديمة أو أثراً لحيوان أليف أو معالجة منزلية سابقة، فيجب أن يعرف الفريق ذلك قبل بدء التنظيف الرئيسي لأنه قد يغيّر النتيجة المتوقعة.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Ask if your handmade rug needs premium cleaning', ar: 'استفسر إن كانت سجادتك اليدوية تحتاج تنظيفاً فاخراً' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'wool-silk-viscose-rug-cleaning',
      h2: {
        ru: 'Шерсть, шелк и вискоза требуют разных способов чистки',
        en: 'Wool, silk and viscose rugs need different care',
        ar: 'السجاد الصوفي والحريري والفسكوز يحتاج عناية مختلفة',
      },
      body: {
        ru: [
          'Шерстяной ковер может быть плотным и теплым, но чувствительным к лишней влаге и агрессивным средствам. Шелк требует особенно аккуратного обращения с блеском и гладкостью волокна. Вискоза часто выглядит роскошно, но может быть капризной при намокании и трении.',
          'Поэтому нельзя обещать один метод для всех натуральных ковров. Специалист смотрит материал, плотность ворса, устойчивость цвета, состояние основы и только потом предлагает способ обработки.',
        ],
        en: [
          'Wool rugs are durable but can still react badly to harsh alkaline products, over-wetting or poor drying. Silk and viscose rugs are more sensitive to friction and moisture, and visible pile distortion or water marks can be harder to correct after the wrong treatment.',
          'iCleaning can use a more careful route for premium rug materials after checking the item. The team may recommend a different cleaning method, spot treatment order or drying approach depending on the rug’s material, dye stability, density and condition.',
        ],
        ar: [
          'السجاد الصوفي متين لكنه قد يتفاعل بشكل سيئ مع المنتجات القلوية القاسية أو الترطيب الزائد أو التجفيف غير الجيد. أما السجاد الحريري والفسكوز فهو أكثر حساسية للاحتكاك والرطوبة، وقد يكون تشوّه الوبرة أو آثار الماء الظاهرة أصعب في التصحيح بعد المعالجة الخاطئة.',
          'يمكن لـ iCleaning اتباع أسلوب أكثر عناية مع خامات السجاد الفاخر بعد فحص القطعة. وقد يوصي الفريق بطريقة تنظيف مختلفة أو ترتيب معالجة موضعية أو أسلوب تجفيف يعتمد على خامة السجادة وثبات أصباغها وكثافتها وحالتها.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Send front, back and stain photos', ar: 'أرسل صوراً للوجه والظهر والبقع' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'premium-rug-diy-risks',
      h2: {
        ru: 'Почему деликатный ковер не стоит чистить дома бытовой химией',
        en: 'Why DIY cleaning can damage delicate rugs',
        ar: 'لماذا قد يُتلف التنظيف المنزلي السجاد الحساس',
      },
      body: {
        ru: [
          'На дорогом ковре опасны не только пятна, но и неправильная первая помощь. Горячая вода, универсальный пятновыводитель, жесткая щетка или попытка сушить ковер на солнце могут повлиять на цвет, форму и фактуру.',
          'Особенно рискованны натуральные красители, шелк, старая бахрома и плотные ковры, которые сложно высушить равномерно. Если ковер дорогой, лучше не экспериментировать: отправьте фото, опишите пятно и дождитесь рекомендации.',
          'Профессиональная диагностика помогает выбрать более безопасный маршрут: локальная обработка, ручная чистка, аккуратная машинная обработка или отказ от агрессивной пятновыводки, если риск слишком высок.',
        ],
        en: [
          'A premium rug is one of the worst places to experiment with generic cleaners. Scrubbing can fuzz the pile, hot water can affect dyes, and too much moisture can reach the foundation before the rug dries properly. Some home products can also leave residue that attracts new soil or makes a later professional stain treatment harder.',
          'A professional inspection does not guarantee that every stain will disappear, but it helps choose the least risky route. The team can identify whether the stain is likely to be fresh, oxidized, oil-based, dye-based, pet-related or affected by previous attempts.',
        ],
        ar: [
          'السجادة الفاخرة من أسوأ الأماكن لتجربة المنظفات العامة. فالفرك قد يجعل الوبرة مبعثرة، والماء الساخن قد يؤثر على الأصباغ، والرطوبة الزائدة قد تصل إلى القاعدة قبل أن تجف السجادة بشكل صحيح. كما أن بعض المنتجات المنزلية قد تترك بقايا تجذب الأوساخ الجديدة أو تجعل معالجة البقع الاحترافية لاحقاً أصعب.',
          'لا يضمن الفحص الاحترافي زوال كل بقعة، لكنه يساعد على اختيار الأسلوب الأقل خطورة. ويمكن للفريق تحديد ما إذا كانت البقعة طازجة أو متأكسدة أو زيتية أو ناتجة عن صبغة أو حيوان أليف أو متأثرة بمحاولات سابقة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check the rug before you scrub it', ar: 'افحص السجادة قبل أن تفركها' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'premium-rug-process',
      h2: {
        ru: 'Как проходит чистка премиального ковра',
        en: 'How the premium rug cleaning process works',
        ar: 'كيف تسير عملية تنظيف السجاد الفاخر',
      },
      body: {
        ru: [
          'Работа начинается с фото и первичного вопроса: какой материал, размер, есть ли пятна, запахи, бахрома, старые повреждения и предыдущие попытки чистки. После этого команда подтверждает, подходит ли премиальный маршрут.',
          'Дальше ковер осматривают, подбирают средства и способ обработки под материал. У деликатных ковров важны не только пятна, но и устойчивость цвета, состояние основы, влажность обработки и сушка.',
          'После чистки ковер возвращают клиенту в согласованном формате. Если по пятну или запаху есть ограничения, их лучше объяснить до начала работы, а не после.',
        ],
        en: [
          'The process starts before cleaning. The manager asks for photos, size, material if known, Dubai area and the main concern: dust, odor, pet accident, old stain, dull pile or general maintenance.',
          'The cleaning route is selected for the rug’s condition. It can include dust removal, targeted stain treatment, careful washing or lower-moisture handling where appropriate, drying under controlled conditions and a final visual check before return.',
        ],
        ar: [
          'تبدأ العملية قبل التنظيف. يطلب المدير الصور والحجم والخامة إن كانت معروفة ومنطقتك في دبي والاهتمام الرئيسي: الغبار أو الرائحة أو أثر حيوان أليف أو بقعة قديمة أو وبرة باهتة أو صيانة عامة.',
          'يُختار أسلوب التنظيف بحسب حالة السجادة. وقد يشمل إزالة الغبار ومعالجة البقع المستهدفة والغسيل الدقيق أو التعامل بأقل رطوبة عند الحاجة والتجفيف في ظروف مضبوطة وفحصاً بصرياً نهائياً قبل الإرجاع.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Request the premium rug cleaning process', ar: 'اطلب خدمة تنظيف السجاد الفاخر' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'premium-rug-pickup-delivery',
      h2: {
        ru: 'Забор и возврат деликатных ковров в Дубае',
        en: 'Pickup and return for premium rugs in Dubai',
        ar: 'استلام وإرجاع السجاد الفاخر في دبي',
      },
      body: {
        ru: [
          'Для премиальных ковров удобно использовать забор и возврат: команда принимает изделие по адресу, передает его на чистку и возвращает после завершения работ.',
          'При заявке лучше отправить фото всего ковра, крупный план ворса, бахромы, пятна и обратной стороны. Это помогает заранее понять риски и подготовить правильный способ транспортировки и обработки.',
        ],
        en: [
          'For many premium rugs, pickup is the most practical option. The team can collect the rug from the address, move it to the appropriate cleaning workflow and return it after cleaning and drying are complete.',
          'Send photos, approximate size and location so the manager can confirm current pickup availability, minimum-order rules and the preliminary estimate before booking.',
        ],
        ar: [
          'بالنسبة للعديد من أنواع السجاد الفاخر، يُعد الاستلام الخيار الأكثر عملية. فبإمكان الفريق استلام السجادة من العنوان ونقلها إلى مسار التنظيف المناسب وإرجاعها بعد اكتمال التنظيف والتجفيف.',
          'أرسل الصور والحجم التقريبي والموقع حتى يتمكن المدير من تأكيد توفر الاستلام حالياً وقواعد الحد الأدنى للطلب والتقدير المبدئي قبل الحجز.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить забор и возврат', en: 'Check pickup availability for your area', ar: 'تحقق من توفر الاستلام في منطقتك' },
        event: 'request_pickup_delivery',
        href: 'whatsapp',
      },
    },
    {
      id: 'premium-rug-prices',
      h2: {
        ru: 'Цены на чистку ковров ручной работы и деликатных ковров',
        en: 'Premium rug cleaning prices',
        ar: 'أسعار تنظيف السجاد الفاخر',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Актуальные цены на ковры ручной работы и деликатные ковры: до 4 м² - AED 396, до 6 м² - AED 594, до 12 м² - AED 1188. Для расчета по площади используйте ориентир AED 99/м².',
          'Цена подтверждается после фото и оценки материала. Для шелка, шерсти, вискозы, handmade и Persian rugs важно учитывать не только площадь, но и состояние ворса, основы, бахромы, пятен и риска по цвету.',
        ],
        en: [
          'Confirmed premium handmade rug price cards are: up to 4 m2 - AED 396, up to 6 m2 - AED 594, and up to 12 m2 - AED 1,188. The confirmed premium rug rate shown by the business is AED 99 per m2.',
          'The final quote still depends on material, construction, dye stability, fringe condition, stain history, odor and pickup area. Use premium assessment for Persian, handmade, silk, wool, viscose, vintage and high-value rugs.',
        ],
        ar: [
          'باقات أسعار السجاد اليدوي الفاخر المؤكدة هي: حتى 4 m2 - AED 396، وحتى 6 m2 - AED 594، وحتى 12 m2 - AED 1,188. وسعر السجاد الفاخر المعتمد لدى الشركة هو AED 99 لكل m2.',
          'يبقى عرض السعر النهائي متوقفاً على الخامة والبنية وثبات الأصباغ وحالة الأهداب وتاريخ البقع والرائحة ومنطقة الاستلام. استخدم التقييم الفاخر للسجاد الفارسي واليدوي والحريري والصوفي والفسكوز والقديم وعالي القيمة.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Get a premium rug quote by photo', ar: 'احصل على عرض سعر للسجاد الفاخر بالصورة' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'premium-rug-stains-odors',
      h2: {
        ru: 'Пятна, моча животных и запахи на премиальных коврах',
        en: 'Stains, pet accidents and odors on premium rugs',
        ar: 'البقع وحوادث الحيوانات الأليفة والروائح على السجاد الفاخر',
      },
      body: {
        ru: [
          'Если на премиальном ковре появилось пятно или запах, не стоит тереть его щеткой и заливать бытовыми средствами. Часть пятен может вступать в реакцию с красителями или глубоко уходить в основу.',
          'Лучше промокнуть излишки чистой белой тканью без трения, сфотографировать пятно и написать в WhatsApp. Специалист подскажет, что можно сделать до приезда команды и когда лучше не трогать ковер вообще.',
          'Результат зависит от материала, возраста пятна, состава загрязнения и прошлой обработки. Честная оценка здесь важнее агрессивной рекламы.',
        ],
        en: [
          'Spills, pet accidents and old stains are more serious on premium rugs because the wrong first reaction can make the problem worse. Rubbing can spread dye, home chemicals can change the fiber, and too much water can move contamination deeper into the foundation.',
          'iCleaning can inspect the affected area and choose a suitable stain or odor treatment route. The team needs to ask what caused the mark, when it happened and whether anything was already applied. These details matter because fresh stains, old oxidized stains and chemical damage do not respond the same way.',
        ],
        ar: [
          'الانسكابات وحوادث الحيوانات الأليفة والبقع القديمة أكثر خطورة على السجاد الفاخر لأن رد الفعل الأول الخاطئ قد يفاقم المشكلة. فالفرك قد ينشر الصبغة، والمواد الكيميائية المنزلية قد تغيّر الألياف، والماء الزائد قد يدفع التلوث أعمق داخل القاعدة.',
          'يمكن لـ iCleaning فحص المنطقة المتضررة واختيار مسار مناسب لمعالجة البقعة أو الرائحة. ويحتاج الفريق لمعرفة سبب العلامة ومتى حدثت وما إذا كان قد طُبِّق عليها شيء مسبقاً. هذه التفاصيل مهمة لأن البقع الطازجة والبقع القديمة المتأكسدة والتلف الكيميائي لا تستجيب بالطريقة نفسها.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send a close-up photo of the stain', ar: 'أرسل صورة مقرّبة للبقعة' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'premium-rug-company',
      h2: {
        ru: 'Почему премиальный ковер нужно доверять специалистам, а не случайной чистке',
        en: 'Why choose iCleaning for valuable rug care',
        ar: 'لماذا تختار iCleaning للعناية بالسجاد الثمين',
      },
      body: {
        ru: [
          'В уходе за ценными коврами профессионализм - это не только сильное оборудование. Это умение сначала оценить риск, подобрать щадящий метод и честно сказать, где нельзя давать гарантию на 100%.',
          'iCleaning - это аккуратный сервис для владельцев дорогих ковров, а не история в стиле «мы всё умеем». Здесь есть оценка по фото, диагностика материала и отдельный подход к шелку, шерсти, вискозе и коврам ручной работы.',
          'Так клиент с самого начала понимает, что его ковер не будут чистить по той же схеме, что и все остальные. Для дорогого изделия это спокойнее, чем громкие обещания без диагностики.',
        ],
        en: [
          'A premium rug cleaning company earns trust by asking the right questions before cleaning. The team checks photos, material, condition, stains and pickup needs, then explains the cleaning route and realistic limits before the rug is accepted.',
          'For valuable rugs, restraint is a trust signal. An inspection-first answer protects rugs where material, dye stability and age can change the cleaning plan.',
        ],
        ar: [
          'تكسب شركة تنظيف السجاد الفاخر الثقة بطرح الأسئلة الصحيحة قبل التنظيف. حيث يفحص الفريق الصور والخامة والحالة والبقع واحتياجات الاستلام، ثم يشرح أسلوب التنظيف والحدود الواقعية قبل قبول السجادة.',
          'بالنسبة للسجاد الثمين، يُعد التحفظ إشارة ثقة. فالإجابة التي تبدأ بالفحص تحمي السجاد الذي قد تغيّر فيه الخامة وثبات الأصباغ والعمر خطة التنظيف.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Talk to the team before booking', ar: 'تحدث مع الفريق قبل الحجز' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: {
        ru: 'Можно ли чистить шелковые и шерстяные ковры?',
        en: 'Is premium rug cleaning different from standard carpet cleaning?',
        ar: 'هل يختلف تنظيف السجاد الفاخر عن تنظيف السجاد العادي؟',
      },
      a: {
        ru: 'Да, такие ковры можно рассматривать на чистку, но метод подбирается после фото и оценки материала. Нельзя обещать универсальную безопасную обработку для любого шелка, шерсти или старого ковра без диагностики.',
        en: 'Yes. Standard carpet cleaning is usually suitable for regular synthetic or machine-made rugs. Premium rug cleaning is for Persian, handmade, silk, wool, viscose, antique or high-value rugs where material, dyes, fringe and backing need a more careful inspection before cleaning.',
        ar: 'نعم. التنظيف العادي للسجاد يناسب عادةً السجاد الصناعي أو المصنوع آلياً. أما تنظيف السجاد الفاخر فهو للسجاد الفارسي واليدوي والحريري والصوفي والفسكوز والقديم أو عالي القيمة، حيث تحتاج الخامة والأصباغ والأهداب والظهر إلى فحص أكثر دقة قبل التنظيف.',
      },
    },
    {
      q: {
        ru: 'Сколько стоит чистка ковра ручной работы?',
        en: 'Can you clean Persian rugs?',
        ar: 'هل يمكنكم تنظيف السجاد الفارسي؟',
      },
      a: {
        ru: 'Актуальные цены: ковер ручной работы до 4 м² - AED 396, до 6 м² - AED 594, до 12 м² - AED 1188. Для расчета по площади используйте AED 99/м².',
        en: 'Persian rugs need to be assessed before cleaning because fiber, dye stability, age and previous repairs can change the method. Send photos of the front, back, fringe and any stains so the team can advise whether premium rug cleaning is the right route.',
        ar: 'يحتاج السجاد الفارسي إلى التقييم قبل التنظيف لأن الألياف وثبات الأصباغ والعمر والإصلاحات السابقة قد تغيّر الطريقة. أرسل صوراً للوجه والظهر والأهداب وأي بقع حتى يتمكن الفريق من إبداء الرأي فيما إذا كان تنظيف السجاد الفاخر هو الأسلوب المناسب.',
      },
    },
    {
      q: {
        ru: 'Почему нельзя почистить дорогой ковер обычным средством?',
        en: 'How much does premium rug cleaning cost?',
        ar: 'كم تبلغ تكلفة تنظيف السجاد الفاخر؟',
      },
      a: {
        ru: 'У деликатных ковров могут быть нестабильные красители, натуральные волокна и чувствительная основа. Универсальные средства, трение и лишняя влага могут повредить ворс или цвет.',
        en: 'Premium rug cleaning is quoted after size, material, condition, stain history and pickup area are checked. Send photos of the front, back, fringe and stains for a preliminary estimate.',
        ar: 'يُحدَّد سعر تنظيف السجاد الفاخر بعد التحقق من الحجم والخامة والحالة وتاريخ البقع ومنطقة الاستلام. أرسل صوراً للوجه والظهر والأهداب والبقع للحصول على تقدير مبدئي.',
      },
    },
    {
      q: {
        ru: 'Вы гарантируете полное удаление пятен?',
        en: 'Can you remove old stains from silk or wool rugs?',
        ar: 'هل يمكنكم إزالة البقع القديمة من السجاد الحريري أو الصوفي؟',
      },
      a: {
        ru: 'Нет, для премиальных ковров это было бы небезопасным обещанием. Результат зависит от материала, возраста пятна, состава загрязнения и прошлых попыток чистки.',
        en: 'Some stains can be removed or lightened, but complete removal depends on the stain age, fiber, dye stability and any previous cleaning attempts. The safest first step is to inspect the rug before applying more product.',
        ar: 'يمكن إزالة بعض البقع أو تفتيحها، لكن الإزالة الكاملة تعتمد على عمر البقعة والألياف وثبات الأصباغ وأي محاولات تنظيف سابقة. والخطوة الأولى الأكثر أماناً هي فحص السجادة قبل استخدام مزيد من المنتجات.',
      },
    },
    {
      q: {
        ru: 'Как отправить ковер на оценку?',
        en: 'Do you pick up and return premium rugs?',
        ar: 'هل تستلمون السجاد الفاخر وتعيدونه؟',
      },
      a: {
        ru: 'Отправьте фото всего ковра, крупный план ворса, бахромы, пятна и обратной стороны. Менеджер сориентирует по цене, рискам и подходящему формату чистки.',
        en: 'Pickup and return can be arranged for rugs, with minimum order rules depending on the area. Send the rug size, photos and your location so the manager can confirm the current logistics and estimate.',
        ar: 'يمكن ترتيب خدمة الاستلام والإرجاع للسجاد، مع قواعد للحد الأدنى للطلب حسب المنطقة. أرسل حجم السجادة والصور وموقعك حتى يتمكن المدير من تأكيد الترتيبات اللوجستية الحالية والتقدير.',
      },
    },
  ],

  related: [
    {
      slug: 'carpet-cleaning',
      title: { ru: 'Стандартная чистка ковров', en: 'Standard Carpet & Rug Cleaning', ar: 'تنظيف السجاد العادي' },
      text: {
        ru: 'Для обычных синтетических и машинных ковров.',
        en: 'Use this for everyday loose rugs and standard carpets.',
        ar: 'استخدم هذا للسجاد اليومي المنفصل والسجاد العادي.',
      },
    },
    {
      slug: 'carpet-flooring-cleaning',
      title: { ru: 'Чистка ковролина', en: 'Carpet Flooring Cleaning', ar: 'تنظيف موكيت الأرضيات' },
      text: {
        ru: 'Для покрытия, которое нельзя свернуть и вывезти.',
        en: 'Use this for installed carpet surfaces that cannot be picked up.',
        ar: 'استخدم هذا للأسطح المفروشة المثبتة التي لا يمكن استلامها.',
      },
    },
  ],
};
