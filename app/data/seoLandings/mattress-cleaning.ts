import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Mattress Cleaning" + RU "Химчистка матрасов".
// Section IDs are stable anchors and must be preserved. Mattresses are on-site only (no pickup/delivery).
export const mattressCleaning: SeoLanding = {
  slug: 'mattress-cleaning',
  canonicalId: 'mattress_cleaning',
  serviceEntity: 'mattress_cleaning',
  image: '/images/service/matras-hero.webp',

  meta: {
    title: {
      ru: 'Химчистка матрасов в Дубае | На дому, цены от AED 125',
      en: 'Mattress Cleaning Dubai | At-Home Bed & Mattress Cleaning',
      ar: 'تنظيف المراتب في دبي | تنظيف الأسرّة والمراتب في المنزل',
    },
    description: {
      ru: 'Чистка матрасов на дому в Дубае: пятна, запахи, следы мочи, детские и семейные матрасы. Односпальный AED 125, двуспальный AED 175, king AED 225.',
      en: 'At-home mattress cleaning in Dubai for single, double and king mattresses. Sweat, dust, stains and odors treated with realistic expectations.',
      ar: 'تنظيف المراتب في المنزل بدبي للمراتب الفردية والمزدوجة ومراتب الملك. معالجة العرق والغبار والبقع والروائح مع توقعات واقعية للنتائج.',
    },
  },

  hero: {
    h1: {
      ru: 'Химчистка матрасов на дому в Дубае',
      en: 'Mattress Cleaning at Home in Dubai',
      ar: 'تنظيف المراتب في المنزل بدبي',
    },
    paragraph: {
      ru: 'Матрас выглядит чистым дольше, чем он реально остается чистым: пот, пыль, кожные частицы и запахи не всегда видны, но именно с этим человек спит каждую ночь. Мы чистим матрасы на месте и заранее оцениваем пятна, размер и ожидаемый результат.',
      en: 'A mattress can look clean long after it stops feeling fresh. Sweat, dust, skin particles, spills and odors are not always visible, but they are part of the surface you sleep on every night. iCleaning provides at-home mattress cleaning in Dubai with a method chosen after checking size, material, stains and condition.',
      ar: 'قد تبدو المرتبة نظيفة لفترة طويلة بعد أن تفقد إحساسها بالانتعاش. فالعرق والغبار وخلايا الجلد والانسكابات والروائح لا تكون مرئية دائماً، لكنها جزء من السطح الذي تنام عليه كل ليلة. توفر iCleaning خدمة تنظيف المراتب في المنزل بدبي باستخدام أسلوب يُختار بعد فحص الحجم والمادة والبقع والحالة.',
    },
    miniFacts: [
      { ru: 'Цена: односпальный - AED 125, двуспальный - AED 175, king size - AED 225', en: 'Single mattress AED 125', ar: 'مرتبة فردية AED 125' },
      { ru: 'На дому', en: 'Double mattress AED 175', ar: 'مرتبة مزدوجة AED 175' },
      { ru: 'От AED 125', en: 'King-size mattress AED 225', ar: 'مرتبة ملك AED 225' },
      { ru: 'Пятна и запахи', en: 'On-site cleaning only', ar: 'تنظيف في الموقع فقط' },
      { ru: 'Без вывоза', en: 'Stains and odors treated on site', ar: 'معالجة البقع والروائح في الموقع' },
      { ru: 'Фотооценка', en: 'Photo estimate on WhatsApp', ar: 'تقدير عبر الصور على واتساب' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Book mattress cleaning at home', ar: 'احجز تنظيف المراتب في المنزل' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Заказать выезд специалиста', en: 'Send mattress photos for a quote', ar: 'أرسل صور المرتبة للحصول على عرض سعر' },
      event: 'send_photo_for_price',
      href: '#mattress-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Односпальный матрас', en: 'Single mattress', ar: 'مرتبة فردية' },
      scope: { ru: 'single', en: 'single', ar: 'فردية' },
      price: { ru: 'AED 125', en: 'AED 125', ar: 'AED 125' },
      note: { ru: 'стандартная чистка', en: 'standard cleaning', ar: 'تنظيف قياسي' },
    },
    {
      label: { ru: 'Двуспальный матрас', en: 'Double mattress', ar: 'مرتبة مزدوجة' },
      scope: { ru: 'double', en: 'double', ar: 'مزدوجة' },
      price: { ru: 'AED 175', en: 'AED 175', ar: 'AED 175' },
      note: { ru: 'стандартная чистка', en: 'standard cleaning', ar: 'تنظيف قياسي' },
    },
    {
      label: { ru: 'King size', en: 'King-size mattress', ar: 'مرتبة ملك' },
      scope: { ru: 'королевский размер', en: 'king size', ar: 'مقاس ملك' },
      price: { ru: 'AED 225', en: 'AED 225', ar: 'AED 225' },
      note: { ru: 'стандартная чистка', en: 'standard cleaning', ar: 'تنظيف قياسي' },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Химчистка матрасов в Дубае',
        en: 'Mattress cleaning for a fresher sleeping surface',
        ar: 'تنظيف المراتب لسطح نوم أكثر انتعاشاً',
      },
      body: {
        ru: [
          'Матрас каждый день накапливает пот, пыль, частицы кожи и запахи, которые не всегда заметны снаружи. Поэтому чистку матраса заказывают не столько ради внешнего вида, сколько ради свежести, гигиены и комфортного сна.',
          'Специалист оценивает размер, материал, пятна, запахи и состояние поверхности. После этого подбирается аккуратная обработка на месте: матрасы не забираются на вывоз, потому что услуга выполняется по адресу клиента.',
          'Для семей с детьми, животными, гостей в арендуемых апартаментах и людей, которые давно не чистили матрас, фотооценка помогает быстро понять цену и ожидания по результату.',
        ],
        en: [
          'A mattress is one of the most used items in the home, but it is also one of the least cleaned. Sheets protect the surface, yet sweat, dust, skin particles, spills and odors can still build up over time. The problem is not always dramatic stains; sometimes it is the feeling that the bed is no longer truly fresh.',
          'iCleaning cleans mattresses at the customer’s address. The technician checks mattress size, fabric surface, stains, odor, moisture history and sensitive areas before starting. The method needs to be selected to refresh the surface and treat visible problems without soaking the mattress unnecessarily.',
        ],
        ar: [
          'المرتبة من أكثر الأغراض استخداماً في المنزل، لكنها أيضاً من أقلها تنظيفاً. فالملاءات تحمي السطح، ومع ذلك يمكن أن يتراكم العرق والغبار وخلايا الجلد والانسكابات والروائح مع مرور الوقت. المشكلة ليست دائماً بقعاً واضحة؛ فأحياناً تكون مجرد شعور بأن السرير لم يعد منتعشاً حقاً.',
          'تقوم iCleaning بتنظيف المراتب في عنوان العميل. يفحص الفني حجم المرتبة وسطح القماش والبقع والرائحة وتاريخ الرطوبة والمناطق الحساسة قبل البدء. ويُختار الأسلوب بعناية لتجديد السطح ومعالجة المشكلات الظاهرة دون إغراق المرتبة بالماء دون داعٍ.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Get a mattress cleaning quote', ar: 'احصل على عرض سعر لتنظيف المرتبة' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'mattress-at-home',
      h2: {
        ru: 'Чистка матраса на дому без вывоза',
        en: 'Mattress cleaning at home in Dubai',
        ar: 'تنظيف المراتب في المنزل بدبي',
      },
      body: {
        ru: [
          'Матрасы чистятся на дому или на объекте: специалист приезжает по адресу, осматривает поверхность, уточняет пятна и запахи, подготавливает рабочую зону и выполняет согласованную обработку.',
          'На месте важно заранее показать проблемные зоны: пятна от напитков, следы детей, животных, потемнения, запахи или места, которые уже пытались чистить самостоятельно. От этого зависит метод и реалистичный результат.',
        ],
        en: [
          'Mattress cleaning is done at the customer’s address. The technician brings the equipment, checks the mattress surface and works on site without pickup or delivery.',
          'Before the visit, remove bedding and send photos of the mattress, stains and label if visible. Include the size, Dubai area and notes about child, pet, sweat, drink or unknown stains.',
        ],
        ar: [
          'يتم تنظيف المراتب في عنوان العميل. يحضر الفني المعدات ويفحص سطح المرتبة ويعمل في الموقع دون أي استلام أو توصيل.',
          'قبل الزيارة، أزل أغطية السرير وأرسل صوراً للمرتبة والبقع وبطاقة المواصفات إن كانت ظاهرة. اذكر الحجم ومنطقتك في دبي وملاحظات حول بقع الأطفال أو الحيوانات الأليفة أو العرق أو المشروبات أو البقع غير المعروفة.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Book at-home mattress cleaning', ar: 'احجز تنظيف المراتب في المنزل' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'mattress-dubai',
      h2: {
        ru: 'Чистка матрасов в Дубае для квартир, вилл и арендных апартаментов',
        en: 'Mattress cleaning for Dubai apartments and villas',
        ar: 'تنظيف المراتب لشقق وفلل دبي',
      },
      body: {
        ru: [
          'В Дубае кондиционер работает почти постоянно, а жара и влажность делают свежесть спального места особенно важной. Матрас может выглядеть аккуратно под простыней, но со временем накапливать запахи, пыль и следы ежедневного использования.',
          'Услуга подходит для квартир, вилл, гостевых комнат, апартаментов под аренду, детских комнат и ситуаций после переезда. Менеджер уточняет район, размер матраса и проблему, а затем предлагает доступное время визита.',
          'Для съемных квартир и апартаментов под аренду это особенно важно: чистый матрас влияет на впечатление гостя сильнее, чем кажется на первый взгляд.',
        ],
        en: [
          'In Dubai, bedrooms often rely on AC for long hours. Closed windows, fine dust, humidity changes and everyday use can make a mattress feel less fresh over time, especially in family homes, guest rooms, rental apartments and villas with pets or children.',
          'A professional mattress cleaning visit helps refresh the surface without removing the mattress from the home. The technician can focus on visible stains, body-contact zones, edges and odor concerns raised by the customer.',
        ],
        ar: [
          'في دبي، غالباً ما تعتمد غرف النوم على المكيّف لساعات طويلة. فالنوافذ المغلقة والغبار الناعم وتغيّرات الرطوبة والاستخدام اليومي قد تجعل المرتبة تفقد انتعاشها مع الوقت، خاصة في المنازل العائلية وغرف الضيوف والشقق المؤجرة والفلل التي بها حيوانات أليفة أو أطفال.',
          'تساعد زيارة التنظيف الاحترافي للمراتب على تجديد السطح دون إخراج المرتبة من المنزل. ويمكن للفني التركيز على البقع الظاهرة ومناطق ملامسة الجسم والحواف ومخاوف الروائح التي يذكرها العميل.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check availability in your Dubai area', ar: 'تحقق من التوفر في منطقتك بدبي' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'mattress-materials-methods',
      h2: {
        ru: 'Как подбирается метод чистки матраса',
        en: 'Mattress material and method check before cleaning',
        ar: 'فحص مادة المرتبة واختيار الأسلوب قبل التنظيف',
      },
      body: {
        ru: [
          'Перед чисткой специалист смотрит размер, тип поверхности, высоту, пятна, запахи и состояние чехла. Ортопедические, детские и плотные матрасы требуют аккуратной обработки: лишняя влага и неправильная сушка могут создать больше проблем, чем пользы.',
          'Цель - очистить поверхность и зоны загрязнения, уменьшить запахи и освежить матрас без агрессивного намокания. При наличии съёмного чехла его также можно включить в чистку после согласования по фото.',
        ],
        en: [
          'Mattresses can have different covers, stitching, pillow-top layers, foam structures and orthopedic designs. The cleaning route accounts for surface fabric, thickness, stain type and drying expectations.',
          'Before cleaning, the technician checks stains, odor source, fabric condition, seams and areas that need gentler treatment. The workflow is selected to refresh the surface and treat problem areas without soaking the mattress unnecessarily.',
        ],
        ar: [
          'قد تختلف المراتب في الأغطية والخياطة والطبقات العلوية الوثيرة وهياكل الإسفنج والتصاميم الطبية. ويراعي أسلوب التنظيف نوع القماش السطحي والسماكة ونوع البقعة وتوقعات التجفيف.',
          'قبل التنظيف، يفحص الفني البقع ومصدر الرائحة وحالة القماش والحياكة والمناطق التي تحتاج إلى معالجة أكثر لطفاً. ويُختار سير العمل لتجديد السطح ومعالجة المناطق المتضررة دون إغراق المرتبة بالماء دون داعٍ.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Ask which method fits your mattress', ar: 'استفسر عن الأسلوب المناسب لمرتبتك' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'mattress-prices',
      h2: {
        ru: 'Цены на чистку матрасов',
        en: 'Mattress cleaning prices in Dubai',
        ar: 'أسعار تنظيف المراتب في دبي',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Актуальные цены на чистку матрасов: односпальный матрас - AED 125, двуспальный матрас - AED 175, king size - AED 225.',
          'На итоговую стоимость влияют размер, высота, пятна, запахи, отдельные зоны обработки и количество матрасов в заказе. Нестандартные размеры рассчитываются по фото и размерам в WhatsApp.',
        ],
        en: [
          'Confirmed mattress cleaning price cards are: single mattress - AED 125, double mattress - AED 175, and king-size mattress - AED 225.',
          'Mattresses are cleaned on site only. The final price can change when there are multiple mattresses, heavy stains, strong odors, pet accidents or difficult access.',
        ],
        ar: [
          'أسعار تنظيف المراتب المعتمدة هي: المرتبة الفردية AED 125، والمرتبة المزدوجة AED 175، ومرتبة الملك AED 225.',
          'يتم تنظيف المراتب في الموقع فقط. وقد يتغير السعر النهائي عند وجود عدة مراتب أو بقع كثيفة أو روائح قوية أو حوادث حيوانات أليفة أو صعوبة في الوصول.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Get mattress price by photo', ar: 'احصل على سعر المرتبة عبر الصورة' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'mattress-stains-odors',
      h2: {
        ru: 'Чистка матраса от мочи, пятен и запахов',
        en: 'Mattress stain and odor treatment',
        ar: 'معالجة بقع وروائح المراتب',
      },
      body: {
        ru: [
          'Если на матрасе появилось пятно от мочи, лучше не заливать его большим количеством воды и не тереть бытовой химией. Так можно расширить зону загрязнения, закрепить запах или оставить разводы на поверхности.',
          'Специалист оценивает возраст пятна, глубину запаха, материал поверхности и то, чем матрас уже пытались чистить. После этого выполняется локальная обработка проблемной зоны и общая чистка в рамках согласованного метода.',
        ],
        en: [
          'Mattress stains can come from sweat, drinks, children, pets, body oils, humidity or unknown old marks. The older the stain, the more likely it has bonded with the fabric or changed color. Some marks are also affected by previous attempts with bleach, powders or strong home sprays.',
          'iCleaning can inspect and treat visible stains and odor concerns as part of the cleaning process. The technician needs to ask what caused the stain, how long it has been there and what was already used. These details affect the expected result.',
        ],
        ar: [
          'قد تنتج بقع المراتب من العرق أو المشروبات أو الأطفال أو الحيوانات الأليفة أو زيوت الجسم أو الرطوبة أو علامات قديمة مجهولة المصدر. وكلما كانت البقعة أقدم، زاد احتمال ارتباطها بالقماش أو تغيّر لونها. كما تتأثر بعض العلامات بمحاولات سابقة باستخدام المبيّض أو المساحيق أو البخاخات المنزلية القوية.',
          'يمكن لـ iCleaning فحص ومعالجة البقع الظاهرة ومخاوف الروائح كجزء من عملية التنظيف. ويحتاج الفني إلى معرفة سبب البقعة ومدة وجودها وما استُخدم عليها من قبل، فهذه التفاصيل تؤثر في النتيجة المتوقعة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send mattress stain photos', ar: 'أرسل صور بقع المرتبة' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'mattress-company',
      h2: {
        ru: 'Почему чистку матраса лучше доверить специалисту',
        en: 'Why choose iCleaning for mattress cleaning',
        ar: 'لماذا تختار iCleaning لتنظيف المراتب',
      },
      body: {
        ru: [
          'Матрас нельзя чистить как обычную ткань: он толстый, плохо проветривается внутри и может долго удерживать влагу. Если переборщить с водой, проблема запаха может стать сильнее, а поверхность - получить разводы.',
          'Профессиональная чистка начинается с оценки: размер, пятна, запахи, материал и состояние. Специалист подбирает обработку так, чтобы работать с загрязнением, но не превращать матрас в мокрый тяжелый блок.',
          'Это особенно важно для детских матрасов, арендных апартаментов и ситуаций после животных. Цена ошибки в домашнем эксперименте часто выше, чем аккуратная чистка с оценкой заранее.',
        ],
        en: [
          'A mattress cleaning company needs a clear quote flow, at-home service, professional equipment and realistic expectation-setting. Photos of the mattress and stains help the team recommend the right service before the visit.',
          'The service focuses on refreshing the sleeping surface and treating visible concerns without promising internal restoration or complete stain removal for every case.',
        ],
        ar: [
          'تحتاج شركة تنظيف المراتب إلى آلية واضحة لعرض الأسعار وخدمة منزلية ومعدات احترافية وتحديد واقعي للتوقعات. وتساعد صور المرتبة والبقع الفريق على اقتراح الخدمة المناسبة قبل الزيارة.',
          'تركّز الخدمة على تجديد سطح النوم ومعالجة المشكلات الظاهرة دون الوعد باستعادة الحالة الداخلية أو إزالة كاملة للبقع في كل حالة.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Talk to iCleaning about your mattress', ar: 'تحدّث إلى iCleaning بشأن مرتبتك' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'professional-mattress-cleaning',
      h2: {
        ru: 'Профессиональная чистка матрасов: не только поверхность',
        en: 'Professional mattress cleaning versus surface wiping',
        ar: 'التنظيف الاحترافي للمراتب مقابل مسح السطح',
      },
      body: {
        ru: [
          'Профессиональная чистка нужна, когда матрас давно не обслуживали, есть пятна, запах, следы пота, детские загрязнения или неприятное ощущение несвежести. Обычная уборка снимает часть пыли, но не заменяет обработку проблемных зон.',
          'Специалист оценивает матрас и выбирает способ работы, чтобы освежить поверхность, обработать пятна и уменьшить запахи без грубого намокания. Результат зависит от материала и возраста загрязнений.',
          'Мы не обещаем лечебного эффекта. Речь идет о чистоте, свежести и более комфортном сне, а результат всегда оцениваем честно.',
        ],
        en: [
          'Spraying fragrance or wiping the top of a mattress can temporarily change the smell, but it may not remove the source of dirt or odor. Too much water can also be a problem because a mattress is thick and can dry slowly if soaked.',
          'Professional mattress cleaning starts with checking the fabric, stain type and condition. The technician can focus on the sleeping surface, edges and visible problem areas with a method selected for the mattress rather than a one-size-fits-all household product.',
        ],
        ar: [
          'قد يؤدي رش العطر أو مسح سطح المرتبة إلى تغيير الرائحة مؤقتاً، لكنه قد لا يزيل مصدر الأوساخ أو الرائحة. كما أن الإفراط في استخدام الماء قد يسبب مشكلة، لأن المرتبة سميكة وقد تجف ببطء إذا تشبّعت.',
          'يبدأ التنظيف الاحترافي للمراتب بفحص القماش ونوع البقعة والحالة. ويمكن للفني التركيز على سطح النوم والحواف والمناطق المتضررة الظاهرة باستخدام أسلوب مخصص للمرتبة بدلاً من منتج منزلي واحد يناسب الجميع.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Ask before using stronger products', ar: 'استشرنا قبل استخدام منتجات أقوى' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'mattress-availability',
      h2: {
        ru: 'Как заказать химчистку матраса',
        en: 'Mattress cleaning booking and availability',
        ar: 'حجز تنظيف المراتب والتوفر',
      },
      body: {
        ru: [
          'Для заявки достаточно отправить фото матраса, размер кровати, район в Дубае, описание пятен или запаха и желаемую дату. Менеджер уточнит стоимость и предложит ближайший доступный слот.',
          'Если пятно свежее, лучше написать сразу и не экспериментировать с водой, отбеливателями или сильными средствами. Чем меньше домашних попыток, тем выше шансы на максимально эффективное удаление загрязнения.',
          'Точный состав матраса указывать не обязательно. Если вы не знаете материал, специалист предварительно оценит его по фото и уточнит при осмотре.',
        ],
        en: [
          'To book mattress cleaning, send mattress size, photos, close-ups of stains, Dubai area and preferred day. The manager confirms the estimate, availability and preparation notes.',
          'Service work is scheduled during the confirmed working window of 08:00-22:00.',
        ],
        ar: [
          'لحجز تنظيف المرتبة، أرسل حجم المرتبة والصور ولقطات مقرّبة للبقع ومنطقتك في دبي واليوم المفضل. يؤكد المدير التقدير والتوفر وملاحظات التحضير.',
          'تُجدول أعمال الخدمة خلال ساعات العمل المعتمدة من 08:00 إلى 22:00.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Message us on WhatsApp', ar: 'راسلنا عبر واتساب' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'mattress-scope-and-limits',
      h2: {
        ru: 'Что важно знать перед чисткой матраса',
        en: 'Mattress cleaning scope and limits',
        ar: 'نطاق تنظيف المراتب وحدوده',
      },
      body: {
        ru: [
          'Съемные чехлы, наматрасники, детские матрасы и нестандартные размеры лучше подтверждать по фото. Если материал чувствительный или пятно старое, результат может быть частичным.',
        ],
        en: [
          'This service covers mattress cleaning at the address. It is not a mattress pickup service, mattress repair service, foam replacement service or medical treatment. It focuses on the sleeping surface, visible stains, common odors and general freshness.',
          'Cleaning results depend on mattress age, material, stain age, stain type, depth and previous attempts. Deep internal contamination, long-term urine damage, mold concerns, structural damage or heavy water damage can need separate assessment or may be outside standard cleaning scope.',
        ],
        ar: [
          'تشمل هذه الخدمة تنظيف المراتب في العنوان. وهي ليست خدمة استلام مراتب ولا خدمة إصلاح مراتب ولا خدمة استبدال إسفنج ولا علاجاً طبياً. فهي تركّز على سطح النوم والبقع الظاهرة والروائح الشائعة والانتعاش العام.',
          'تعتمد نتائج التنظيف على عمر المرتبة والمادة وعمر البقعة ونوعها وعمقها والمحاولات السابقة. أما التلوث الداخلي العميق أو أضرار البول طويلة الأمد أو مخاوف العفن أو الأضرار الهيكلية أو أضرار المياه الشديدة فقد تحتاج إلى تقييم منفصل أو قد تكون خارج نطاق التنظيف القياسي.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить чистку вашего матраса', en: 'Ask if your mattress is suitable for cleaning', ar: 'استفسر إن كانت مرتبتك مناسبة للتنظيف' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: { ru: 'Сколько стоит чистка матраса?', en: 'How much does mattress cleaning cost?', ar: 'كم تبلغ تكلفة تنظيف المرتبة؟' },
      a: {
        ru: 'Актуальные цены: односпальный матрас - AED 125, двуспальный матрас - AED 175, king size - AED 225. Нестандартный размер рассчитывается по фото и размерам.',
        en: 'Mattress cleaning is quoted by mattress size, stains, odor and condition. Send the mattress size, photos and Dubai area for a preliminary estimate.',
        ar: 'يُحدَّد سعر تنظيف المرتبة حسب حجم المرتبة والبقع والرائحة والحالة. أرسل حجم المرتبة والصور ومنطقتك في دبي للحصول على تقدير مبدئي.',
      },
    },
    {
      q: { ru: 'Вы забираете матрас на чистку?', en: 'Do you pick up mattresses for cleaning?', ar: 'هل تقومون باستلام المراتب للتنظيف؟' },
      a: {
        ru: 'Нет, матрасы чистятся на месте. Специалист приезжает по адресу и выполняет услугу дома или на объекте.',
        en: 'No. Mattress cleaning is handled on site at the customer’s address. Pickup or delivery is not offered for mattresses.',
        ar: 'لا، يتم تنظيف المراتب في الموقع. يأتي الفني إلى العنوان وينفّذ الخدمة في المنزل أو الموقع. لا نوفّر خدمة الاستلام أو التوصيل للمراتب.',
      },
    },
    {
      q: { ru: 'Можно ли удалить запах мочи с матраса?', en: 'Can mattress cleaning remove urine stains?', ar: 'هل يمكن لتنظيف المرتبة إزالة بقع البول؟' },
      a: {
        ru: 'Иногда запах можно заметно уменьшить или убрать, но результат зависит от возраста пятна, глубины загрязнения, материала и домашних попыток чистки. Полное удаление заранее не обещается.',
        en: 'Urine stains and odors can be treated, but the result depends on how old the stain is, how deep it went, the mattress material and what products were already used. The team needs to inspect photos before setting expectations.',
        ar: 'يمكن معالجة بقع البول وروائحه، لكن النتيجة تعتمد على عمر البقعة ومدى عمقها ومادة المرتبة والمنتجات التي استُخدمت من قبل. يحتاج الفريق إلى فحص الصور قبل تحديد التوقعات.',
      },
    },
    {
      q: { ru: 'Нужно ли заранее знать материал матраса?', en: 'Is mattress cleaning safe for orthopedic mattresses?', ar: 'هل تنظيف المراتب آمن للمراتب الطبية؟' },
      a: {
        ru: 'Желательно, но не обязательно. Отправьте фото, размер и описание проблемы - менеджер уточнит детали, а специалист оценит поверхность на месте.',
        en: 'The technician needs to check the mattress type and surface before cleaning and choose a suitable method. The cleaning scope does not promise to restore or protect orthopedic properties beyond cleaning.',
        ar: 'يحتاج الفني إلى فحص نوع المرتبة وسطحها قبل التنظيف واختيار الأسلوب المناسب. ولا يتضمن نطاق التنظيف الوعد باستعادة الخصائص الطبية أو الحفاظ عليها بما يتجاوز التنظيف.',
      },
    },
    {
      q: { ru: 'Сколько сохнет матрас после чистки?', en: 'How do I prepare before the technician arrives?', ar: 'كيف أستعد قبل وصول الفني؟' },
      a: {
        ru: 'Точное время зависит от метода, вентиляции, влажности и состояния матраса. На странице лучше не обещать фиксированное время без подтверждения специалиста.',
        en: 'Remove bedding, send photos of stains and keep the area around the bed accessible. After cleaning, allow time for drying based on the method, room ventilation and mattress condition.',
        ar: 'أزل أغطية السرير، وأرسل صوراً للبقع، وحافظ على سهولة الوصول إلى المنطقة المحيطة بالسرير. وبعد التنظيف، اترك وقتاً كافياً للتجفيف بحسب الأسلوب وتهوية الغرفة وحالة المرتبة.',
      },
    },
  ],

  related: [
    {
      slug: 'sofa-cleaning',
      title: { ru: 'Химчистка диванов', en: 'Sofa Cleaning', ar: 'تنظيف الأرائك' },
      text: {
        ru: 'Для мягкой мебели на дому.',
        en: 'Useful for fabric cleaning at home.',
        ar: 'مناسب لتنظيف الأقمشة في المنزل.',
      },
    },
    {
      slug: 'upholstery-cleaning',
      title: { ru: 'Химчистка мягкой мебели', en: 'Upholstery & Soft Furniture Cleaning', ar: 'تنظيف المفروشات والأثاث الوثير' },
      text: {
        ru: 'Для кресел, стульев и пуфов.',
        en: 'Useful for chairs, armchairs and other soft furniture.',
        ar: 'مناسب للكراسي والمقاعد المريحة والأثاث الوثير الآخر.',
      },
    },
    {
      slug: 'carpet-cleaning',
      title: { ru: 'Химчистка ковров', en: 'Carpet & Rug Cleaning', ar: 'تنظيف السجاد والبسط' },
      text: {
        ru: 'Для текстиля в спальне и других комнатах.',
        en: 'Useful for bedroom textile cleaning requests.',
        ar: 'مناسب لطلبات تنظيف منسوجات غرف النوم وغيرها.',
      },
    },
  ],
};
