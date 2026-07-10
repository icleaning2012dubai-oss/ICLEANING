import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Curtain & Blinds Cleaning" + RU "Чистка штор и жалюзи".
// Section IDs are stable anchors and must be preserved.
export const curtainCleaning: SeoLanding = {
  slug: 'curtain-cleaning',
  canonicalId: 'curtain_blinds_cleaning',
  serviceEntity: 'curtain_blinds_cleaning',
  image: '/images/service/shtory-page.webp',

  meta: {
    title: {
      ru: 'Чистка штор и жалюзи в Дубае | На дому, снятие и возврат',
      en: 'Curtain Cleaning Dubai | Blinds Cleaning, Removal & Reinstallation',
      ar: 'تنظيف الستائر في دبي | تنظيف الستائر المعدنية والفك وإعادة التركيب',
    },
    description: {
      ru: 'Чистка штор, занавесок и жалюзи в Дубае: текстильные, римские, рулонные, деревянные и пластиковые. Расчет по фото, цены от AED 17/м².',
      en: 'Curtain and blinds cleaning in Dubai for textile curtains, Roman, roller, wooden and plastic blinds. On-site or factory flow with removal and reinstallation.',
      ar: 'تنظيف الستائر والستائر المعدنية في دبي للستائر القماشية والرومانية والدوارة والخشبية والبلاستيكية. تنظيف في الموقع أو عبر المصنع مع الفك وإعادة التركيب.',
    },
  },

  hero: {
    h1: {
      ru: 'Чистка штор и жалюзи в Дубае',
      en: 'Curtain & Blinds Cleaning in Dubai',
      ar: 'تنظيف الستائر والستائر المعدنية في دبي',
    },
    paragraph: {
      ru: 'Шторы и жалюзи каждый день собирают пыль, запахи, следы кондиционера и уличную мелкую грязь. Мы подбираем формат под материал и задачу: чистка на месте, аккуратная обработка ламелей или сервис со снятием, возвратом и навеской после подтверждения.',
      en: 'Curtains and blinds work like a large filter for the room. They collect dust, AC particles, kitchen smells, outdoor fine dust and hand contact, yet they are often cleaned much less often than floors or sofas. iCleaning handles curtains and blinds with a method matched to the fabric, mechanism and installation, including on-site care or a factory-style removal, cleaning, ironing, delivery and installation flow where suitable.',
      ar: 'تعمل الستائر والستائر المعدنية مثل فلتر كبير للغرفة. فهي تجمع الغبار وجزيئات المكيّف وروائح المطبخ والأتربة الدقيقة من الخارج وآثار اللمس، ومع ذلك يتم تنظيفها غالبًا بمعدل أقل بكثير من الأرضيات أو الأرائك. تتعامل iCleaning مع الستائر والستائر المعدنية بأسلوب يناسب نوع القماش والآلية وطريقة التركيب، بما في ذلك العناية في الموقع أو خدمة على طريقة المصنع تشمل الفك والتنظيف والكي والتوصيل وإعادة التركيب عند الحاجة.',
    },
    miniFacts: [
      { ru: 'Цена: шторы - AED 17/м², жалюзи - AED 25/м²', en: 'Curtains at AED 17 per m2', ar: 'الستائر بسعر AED 17 لكل م²' },
      { ru: 'Шторы от AED 17/м²', en: 'Blinds at AED 25 per m2', ar: 'الستائر المعدنية بسعر AED 25 لكل م²' },
      { ru: 'Жалюзи от AED 25/м²', en: 'On-site or removal flow', ar: 'تنظيف في الموقع أو مع الفك' },
      { ru: 'На дому или с вывозом', en: 'Reinstallation and steaming where applicable', ar: 'إعادة التركيب والتبخير عند الحاجة' },
      { ru: 'Фотооценка', en: 'Material check before cleaning', ar: 'فحص المادة قبل التنظيف' },
      { ru: 'Для дома и бизнеса', en: 'For homes and businesses', ar: 'للمنازل والشركات' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Get a curtain cleaning quote', ar: 'احصل على عرض سعر لتنظيف الستائر' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Уточнить снятие и возврат', en: 'Send photos of curtains or blinds', ar: 'أرسل صور الستائر أو الستائر المعدنية' },
      event: 'send_photo_for_price',
      href: '#curtain-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Шторы', en: 'Curtains', ar: 'الستائر' },
      scope: { ru: 'чистка текстиля', en: 'textile curtain cleaning', ar: 'تنظيف الستائر القماشية' },
      price: { ru: 'AED 17/м²', en: 'AED 17 per m2', ar: 'AED 17 لكل م²' },
      note: { ru: 'расчет по площади', en: 'priced by area', ar: 'السعر حسب المساحة' },
    },
    {
      label: { ru: 'Жалюзи', en: 'Blinds', ar: 'الستائر المعدنية' },
      scope: { ru: 'чистка ламелей', en: 'slat cleaning', ar: 'تنظيف الشرائح' },
      price: { ru: 'AED 25/м²', en: 'AED 25 per m2', ar: 'AED 25 لكل م²' },
      note: { ru: 'расчет по площади', en: 'priced by area', ar: 'السعر حسب المساحة' },
    },
    {
      label: { ru: 'Рулонные шторы', en: 'Roller blinds', ar: 'الستائر الدوارة' },
      scope: { ru: 'при подтвержденном типе изделия', en: 'on confirmed item type', ar: 'عند تأكيد نوع المنتج' },
      price: { ru: 'от AED 35/м²', en: 'from AED 35 per m2', ar: 'من AED 35 لكل م²' },
      note: { ru: 'расчет по площади', en: 'priced by area', ar: 'السعر حسب المساحة' },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Чистка штор и жалюзи в Дубае',
        en: 'Curtain and blinds cleaning for fresher rooms',
        ar: 'تنظيف الستائر والستائر المعدنية لغرف أكثر انتعاشًا',
      },
      body: {
        ru: [
          'Шторы работают как большой фильтр комнаты: они постоянно ловят пыль, запахи, частицы от кондиционера и мелкую грязь с улицы. Жалюзи дополнительно собирают налет на ламелях, креплениях и местах, куда сложно добраться обычной тряпкой.',
          'iCleaning принимает заявки для дома, офиса, апартаментов, вилл и коммерческих помещений. Клиент отправляет фото, тип штор или жалюзи, примерный размер и район, а менеджер подсказывает предварительную стоимость и формат работы.',
          'Услуга помогает не бороться с тяжелыми шторами, высотой, складками и пылью самостоятельно. Формат подбирается по материалу: на месте, с вывозом или со снятием, возвратом и навеской.',
        ],
        en: [
          'Curtains and blinds quietly collect what moves through the room: dust from AC airflow, cooking odors, fine outdoor particles, hand marks and humidity-related smells. Because they hang vertically, the dirt is not always obvious until sunlight hits the fabric or blinds start to look grey around the edges.',
          'iCleaning cleans curtains and blinds with attention to the material and installation type. Textile curtains, classic panels, Roman curtains, roller blinds, wooden blinds and plastic or vinyl blinds can need different handling. For a faster quote, send photos, size, type and whether the customer wants on-site cleaning or removal and reinstallation where suitable.',
        ],
        ar: [
          'تجمع الستائر والستائر المعدنية بهدوء كل ما يتحرك في الغرفة: الغبار من تيار هواء المكيّف وروائح الطهي والجزيئات الخارجية الدقيقة وآثار اللمس والروائح المرتبطة بالرطوبة. ولأنها معلقة عموديًا، فإن الأوساخ ليست واضحة دائمًا إلى أن يسقط عليها ضوء الشمس أو تبدأ الستائر المعدنية بالظهور رمادية عند الأطراف.',
          'تنظّف iCleaning الستائر والستائر المعدنية مع مراعاة نوع المادة وطريقة التركيب. فالستائر القماشية والألواح الكلاسيكية والستائر الرومانية والستائر الدوارة والستائر الخشبية والبلاستيكية أو الفينيلية قد تحتاج إلى معالجة مختلفة. وللحصول على عرض سعر أسرع، أرسل الصور والحجم والنوع وما إذا كان العميل يرغب في التنظيف في الموقع أو الفك وإعادة التركيب عند الحاجة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send curtain or blind photos for a quote', ar: 'أرسل صور الستائر للحصول على عرض سعر' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'curtain-at-home',
      h2: {
        ru: 'Чистка штор на дому: когда не хочется снимать тяжелый текстиль',
        en: 'Curtain cleaning at home without unnecessary hassle',
        ar: 'تنظيف الستائر في المنزل دون عناء لا داعي له',
      },
      body: {
        ru: [
          'Чистка штор на дому подходит, когда нужно освежить ткань, убрать пыль, запахи и часть поверхностных загрязнений без самостоятельного демонтажа и перевозки. Специалист приезжает по адресу, оценивает материал, высоту, крепления и состояние ткани.',
          'Для плотных, тяжелых, сильно загрязненных или деликатных штор может быть лучше формат со снятием, вывозом, чисткой, глажкой или отпариванием и возвратом. Решение зависит от материала, крепления, объема и результата, который ожидает клиент.',
        ],
        en: [
          'Some curtains and blinds can be cleaned at the address, especially when the goal is to remove dust and refresh the visible surface without a full removal workflow. This is useful for apartments, villas, offices and rental properties where the customer wants less disruption.',
          'At-home work starts with a check of fabric, mounting, stains, dust level, curtain height and access. The team can advise whether the item needs to be cleaned on site or whether removal, deeper cleaning, ironing, delivery and reinstallation would be more suitable.',
        ],
        ar: [
          'يمكن تنظيف بعض الستائر والستائر المعدنية في مكانها، خاصة عندما يكون الهدف إزالة الغبار وتجديد السطح الظاهر دون الحاجة إلى فكها بالكامل. وهذا مفيد للشقق والفلل والمكاتب والعقارات المؤجرة حيث يرغب العميل في تقليل الإزعاج.',
          'يبدأ العمل في المنزل بفحص القماش والتركيب والبقع ومستوى الغبار وارتفاع الستارة وسهولة الوصول إليها. ويستطيع الفريق تقديم المشورة حول ما إذا كان يمكن تنظيف القطعة في الموقع أم أن الفك والتنظيف العميق والكي والتوصيل وإعادة التركيب سيكون أكثر ملاءمة.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Ask if on-site cleaning is suitable', ar: 'استفسر إن كان التنظيف في الموقع مناسبًا' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'commercial-curtain-cleaning',
      h2: {
        ru: 'Чистка штор и жалюзи для офисов, отелей, ресторанов и апартаментов',
        en: 'Commercial curtain and blinds cleaning for offices, hotels and clinics',
        ar: 'تنظيف الستائر والستائر المعدنية للمكاتب والفنادق والعيادات',
      },
      body: {
        ru: [
          'В офисах, отелях, ресторанах, салонах и меблированных апартаментах текстиль быстрее собирает пыль, запахи и следы ежедневной эксплуатации. Для таких заказов важны не общие фразы, а точный объем: сколько окон, какие типы штор или жалюзи, высота, доступ и график работ.',
          'Менеджер может запросить фото окон, количество комплектов, район и удобное время. После этого проще рассчитать стоимость и предложить формат: на месте, со снятием и возвратом или комбинированный вариант.',
        ],
        en: [
          'In commercial spaces, window coverings are part of the customer experience. Dusty curtains in a hotel room, marked blinds in a clinic or dull fabric panels in an office can make the space feel older than it is.',
          'For commercial curtain and blinds cleaning, for a quote, send photos, number of windows, approximate dimensions, type of curtains or blinds, installation height and preferred timing. Larger jobs can need removal, labeling, cleaning, ironing, return and reinstallation planning.',
        ],
        ar: [
          'في المساحات التجارية، تُعد مغطيات النوافذ جزءًا من تجربة العميل. فالستائر المغبرة في غرفة الفندق أو الستائر المعدنية المتسخة في العيادة أو الألواح القماشية الباهتة في المكتب قد تجعل المكان يبدو أقدم مما هو عليه.',
          'لتنظيف الستائر والستائر المعدنية التجارية، وللحصول على عرض سعر، أرسل الصور وعدد النوافذ والأبعاد التقريبية ونوع الستائر أو الستائر المعدنية وارتفاع التركيب والوقت المفضل. قد تتطلب الأعمال الكبيرة تخطيطًا للفك ووضع العلامات والتنظيف والكي والإعادة وإعادة التركيب.',
        ],
      },
      cta: {
        text: { ru: 'Запросить расчет для объекта', en: 'Request a commercial curtain cleaning quote', ar: 'اطلب عرض سعر لتنظيف الستائر التجارية' },
        event: 'commercial_quote_request',
        href: 'whatsapp',
      },
    },
    {
      id: 'curtain-dubai',
      h2: {
        ru: 'Почему шторы в Дубае быстро собирают пыль и запахи',
        en: 'Curtain and blinds cleaning in Dubai homes and offices',
        ar: 'تنظيف الستائر والستائر المعدنية في منازل ومكاتب دبي',
      },
      body: {
        ru: [
          'В Дубае окна, балконы, кондиционеры и уличная пыль быстро влияют на текстиль. Даже если шторы выглядят аккуратно, ткань может удерживать запахи кухни, пыль после проветривания и следы постоянного потока воздуха от кондиционера.',
          'Жалюзи особенно быстро показывают загрязнение: на ламелях появляется серый налет, который заметен на свету и портит вид окна. Пластик, винил, дерево и текстильные элементы требуют разного ухода.',
          'Регулярная чистка помогает поддерживать интерьер свежим без замены дорогих штор или жалюзи.',
        ],
        en: [
          'Dubai interiors often rely on constant AC, closed windows and heavy curtains for light control and privacy. Fine dust still enters from balconies, doors and ventilation, then settles on fabric folds, curtain tops, blinds and tracks.',
          'Cleaning curtains and blinds helps refresh the room without changing the decor. It is especially useful after moving in, before guests, after renovation dust, in rental turnovers or when the fabric starts to hold odors from cooking, humidity or pets.',
        ],
        ar: [
          'تعتمد التصاميم الداخلية في دبي غالبًا على التكييف المستمر والنوافذ المغلقة والستائر الثقيلة للتحكم في الإضاءة والخصوصية. ومع ذلك يظل الغبار الدقيق يدخل من الشرفات والأبواب والتهوية، ثم يستقر على ثنايا القماش وأعلى الستائر والستائر المعدنية والمسارات.',
          'يساعد تنظيف الستائر والستائر المعدنية على تجديد الغرفة دون تغيير الديكور. وهو مفيد بشكل خاص بعد الانتقال إلى منزل جديد وقبل استقبال الضيوف وبعد غبار التجديدات وعند تغيير المستأجرين أو عندما يبدأ القماش باحتباس الروائح الناتجة عن الطهي أو الرطوبة أو الحيوانات الأليفة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check availability in your Dubai area', ar: 'تحقق من التوفر في منطقتك في دبي' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'curtain-materials-methods',
      h2: {
        ru: 'Текстильные шторы, римские, рулонные и жалюзи: разный материал - разная чистка',
        en: 'Different curtains and blinds need different cleaning methods',
        ar: 'أنواع الستائر والستائر المعدنية المختلفة تحتاج إلى طرق تنظيف مختلفة',
      },
      body: {
        ru: [
          'Классические шторы, римские, рулонные, плиссированные, деревянные, пластиковые и виниловые жалюзи загрязняются по-разному. Ткань удерживает пыль и запахи, ламели собирают налет, а механизмы и крепления требуют аккуратности.',
          'Перед чисткой важно оценить материал, плотность, цвет, крепления, наличие подкладки, складок и чувствительных декоративных элементов. Для части тканей уместна более деликатная чистка, для жалюзи - аккуратная обработка ламелей и креплений.',
        ],
        en: [
          'A classic textile curtain, Roman blind, roller blind, wooden blind and plastic blind is not treated the same way. Fabric can shrink, lining can react differently from the front panel, wooden slats can be sensitive to moisture and blinds mechanisms can be damaged by rough handling.',
          'Before cleaning, iCleaning needs to check the curtain type, fabric, lining, stains, dust level, mounting system and whether the item needs ironing or steaming after cleaning. For blinds, the team needs to consider slats, cords, tracks, brackets and surface material.',
        ],
        ar: [
          'لا تتم معالجة الستارة القماشية الكلاسيكية والستارة الرومانية والستارة الدوارة والستارة الخشبية والستارة البلاستيكية بالطريقة نفسها. فالقماش قد ينكمش، وقد تتفاعل البطانة بشكل مختلف عن اللوح الأمامي، والشرائح الخشبية قد تكون حساسة للرطوبة، وقد تتلف آليات الستائر المعدنية بسبب المعالجة الخشنة.',
          'قبل التنظيف، تحتاج iCleaning إلى فحص نوع الستارة والقماش والبطانة والبقع ومستوى الغبار ونظام التركيب وما إذا كانت القطعة تحتاج إلى كي أو تبخير بعد التنظيف. أما بالنسبة للستائر المعدنية، فيحتاج الفريق إلى مراعاة الشرائح والحبال والمسارات والمثبتات ومادة السطح.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Send photos so we can choose the method', ar: 'أرسل الصور لنختار الطريقة المناسبة' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'curtain-prices',
      h2: {
        ru: 'Цены на чистку штор и жалюзи',
        en: 'Curtain and blinds cleaning prices',
        ar: 'أسعار تنظيف الستائر والستائر المعدنية',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Актуальные цены: шторы - AED 17/м², жалюзи - AED 25/м², рулонные шторы - от AED 35/м².',
          'На стоимость влияют тип изделия, площадь, высота, материал, сложность снятия, загрязнения, глажка, отпаривание и возврат с навеской. Если клиент не знает площадь, расчет можно сделать по фото и примерным размерам окна.',
        ],
        en: [
          'Confirmed curtain and blind cleaning prices are: curtains - AED 17 per m2, and blinds - AED 25 per m2.',
          'The final quote depends on measurement, fabric, blind type, height, removal route, reinstallation, steaming, stain level and access. The team offers a simple path for customers who know the size and customers who need the team to measure.',
        ],
        ar: [
          'الأسعار المعتمدة لتنظيف الستائر والستائر المعدنية هي: الستائر - AED 17 لكل م²، والستائر المعدنية - AED 25 لكل م².',
          'يعتمد السعر النهائي على القياس ونوع القماش ونوع الستارة المعدنية والارتفاع وطريقة الفك وإعادة التركيب والتبخير ومستوى البقع وسهولة الوصول. يقدم الفريق مسارًا بسيطًا للعملاء الذين يعرفون المقاس وللعملاء الذين يحتاجون إلى أن يقوم الفريق بالقياس.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Get curtain or blind price by photo', ar: 'احصل على سعر الستائر عبر الصورة' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'curtain-stains-odors',
      h2: {
        ru: 'Пыль, запахи и пятна на шторах: почему обычного пылесоса часто мало',
        en: 'Dust, stains and odors on curtains and blinds',
        ar: 'الغبار والبقع والروائح على الستائر والستائر المعدنية',
      },
      body: {
        ru: [
          'Пылесос помогает убрать часть поверхности, но не всегда справляется с запахами, серым налетом, пятнами и загрязнениями в складках. Если стирать шторы самостоятельно без понимания ткани, можно получить усадку, заломы, потерю формы или проблемы с глажкой.',
          'Специалист оценивает ткань, плотность, цвет, крепления и загрязнения. После этого подбирается формат: чистка на месте, снятие и вывоз, отдельная обработка пятен, глажка или отпаривание по возможности.',
          'Старые пятна и следы солнца не стоит обещать убрать полностью. Честная оценка до работы защищает доверие сильнее, чем агрессивная гарантия.',
        ],
        en: [
          'Curtain stains are not always simple surface dirt. Water marks, sun fading, humidity stains, smoke odor, pet marks, kitchen smells and old dust can all behave differently. On blinds, grease, dust and hand marks can collect around slats, edges and cords.',
          'iCleaning can assess the fabric or blind material and recommend the right cleaning route. Some odors and dust respond well to cleaning; some discoloration or sun fading may remain because it is damage to the material rather than removable soil.',
        ],
        ar: [
          'بقع الستائر ليست دائمًا مجرد أوساخ سطحية بسيطة. فآثار الماء وبهتان الشمس وبقع الرطوبة ورائحة الدخان وآثار الحيوانات الأليفة وروائح المطبخ والغبار القديم قد تتصرف جميعها بشكل مختلف. وعلى الستائر المعدنية، قد تتجمع الدهون والغبار وآثار اللمس حول الشرائح والحواف والحبال.',
          'تستطيع iCleaning تقييم القماش أو مادة الستارة المعدنية والتوصية بطريقة التنظيف المناسبة. بعض الروائح والغبار يستجيب جيدًا للتنظيف؛ في حين قد يبقى بعض تغير اللون أو بهتان الشمس لأنه ضرر لحق بالمادة وليس أوساخًا يمكن إزالتها.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send stain and fabric photos', ar: 'أرسل صور البقع والقماش' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'curtain-availability',
      h2: {
        ru: 'Как заказать чистку штор без долгих замеров и переписки',
        en: 'Curtain cleaning booking and availability',
        ar: 'حجز تنظيف الستائر والتوفر',
      },
      body: {
        ru: [
          'Самый простой маршрут - отправить фото штор или жалюзи, район, примерную высоту/ширину окна и написать, нужно ли снятие и обратная навеска. Менеджер уточнит детали и подготовит предварительный расчет.',
          'Если на объекте много окон, лучше отправить короткое видео: так проще понять тип креплений, высоту и объем. Для коммерческих помещений можно сразу запросить расчет по списку окон или плану.',
          'Вам не нужно заранее высчитывать точные метры. Проще отправить фото в WhatsApp - по нему менеджер сам прикинет объем и стоимость.',
        ],
        en: [
          'Curtain and blind cleaning bookings start with photos, window count, curtain or blind type, approximate size if known and Dubai area. The manager then advises the right service route.',
          'Service work is scheduled during the confirmed working window of 08:00-22:00. WhatsApp inquiries can be sent at any time.',
        ],
        ar: [
          'يبدأ حجز تنظيف الستائر والستائر المعدنية بإرسال الصور وعدد النوافذ ونوع الستارة أو الستارة المعدنية والمقاس التقريبي إن كان معروفًا ومنطقتك في دبي. ثم يقدم المدير المشورة حول مسار الخدمة المناسب.',
          'تُجدول أعمال الخدمة خلال فترة العمل المعتمدة من 08:00 إلى 22:00. ويمكن إرسال استفسارات واتساب في أي وقت.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Message us on WhatsApp', ar: 'راسلنا عبر واتساب' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'curtain-blinds-factory-steaming',
      h2: {
        ru: 'Снятие, вывоз, чистка, глажка и возврат штор',
        en: 'Removal, cleaning, ironing, installation and steaming',
        ar: 'الفك والتنظيف والكي والتركيب والتبخير',
      },
      body: {
        ru: [
          'Мы можем взять весь процесс на себя: снять шторы, почистить, при необходимости отгладить или отпарить, привезти обратно и повесить. Точный формат и стоимость менеджер подтвердит после фото.',
        ],
        en: [
          'Some curtains and blinds need more than a quick surface clean. When suitable, the team can remove the items, clean them through the correct route, return them and reinstall them.',
          'Before removal, the team checks the fabric, mechanism, tracks, hooks and condition. Proper hanging and finishing after cleaning help the curtains look ready for the room again.',
        ],
        ar: [
          'تحتاج بعض الستائر والستائر المعدنية إلى أكثر من تنظيف سطحي سريع. وعند الملاءمة، يستطيع الفريق فك القطع وتنظيفها عبر المسار الصحيح وإعادتها وتركيبها من جديد.',
          'قبل الفك، يفحص الفريق القماش والآلية والمسارات والخطافات والحالة. ويساعد التعليق السليم واللمسات النهائية بعد التنظيف على أن تبدو الستائر جاهزة للغرفة من جديد.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить полный сервис по шторам', en: 'Ask for removal and reinstallation service', ar: 'استفسر عن خدمة الفك وإعادة التركيب' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: { ru: 'Сколько стоит чистка штор в Дубае?', en: 'Do you clean curtains at home or take them down?', ar: 'هل تنظفون الستائر في المنزل أم تقومون بفكها؟' },
      a: {
        ru: 'Актуальные цены: шторы - AED 17/м², жалюзи - AED 25/м², рулонные шторы - от AED 35/м². Итоговая цена зависит от площади, типа изделия, материала, снятия, глажки и возврата.',
        en: 'Both routes are available when suitable. Some curtains can be cleaned on site, while others may be better handled through removal, cleaning, ironing, return, installation and steaming. The team needs to advise after photos and material check.',
        ar: 'كلا الخيارين متاح عند الملاءمة. فبعض الستائر يمكن تنظيفها في الموقع، بينما قد يكون من الأفضل التعامل مع غيرها عبر الفك والتنظيف والكي والإعادة والتركيب والتبخير. ويحتاج الفريق إلى تقديم المشورة بعد الاطلاع على الصور وفحص المادة.',
      },
    },
    {
      q: { ru: 'Вы чистите шторы на дому?', en: 'How much does curtain cleaning cost?', ar: 'كم تكلفة تنظيف الستائر؟' },
      a: {
        ru: 'Да, часть штор можно чистить на месте. Для тяжелых, деликатных или сильно загрязненных штор может быть лучше формат со снятием, вывозом, чисткой и возвратом.',
        en: 'Curtain and blind cleaning is quoted by size, material, item type, access and whether removal or return service is included. Send photos and the number of windows for a preliminary estimate.',
        ar: 'يُحدد سعر تنظيف الستائر والستائر المعدنية حسب المقاس والمادة ونوع القطعة وسهولة الوصول وما إذا كانت خدمة الفك أو الإعادة مشمولة. أرسل الصور وعدد النوافذ للحصول على تقدير مبدئي.',
      },
    },
    {
      q: { ru: 'Вы снимаете и вешаете шторы обратно?', en: 'What types of blinds do you clean?', ar: 'ما أنواع الستائر المعدنية التي تنظفونها؟' },
      a: {
        ru: 'Да. Формат со снятием, возвратом и навеской доступен по заказу. Менеджер уточняет тип ткани, высоту, крепления, район и объем работ по фото.',
        en: 'The service can cover wooden blinds, plastic and vinyl blinds, roller blinds, Roman blinds and textile styles when the material and mechanism are suitable for cleaning.',
        ar: 'يمكن أن تشمل الخدمة الستائر المعدنية الخشبية والبلاستيكية والفينيلية والستائر الدوارة والستائر الرومانية والأنماط القماشية عندما تكون المادة والآلية مناسبة للتنظيف.',
      },
    },
    {
      q: { ru: 'Чистите ли вы деревянные и пластиковые жалюзи?', en: 'Can you remove curtain odors?', ar: 'هل يمكنكم إزالة روائح الستائر؟' },
      a: {
        ru: 'Да. iCleaning принимает заявки на деревянные, пластиковые и виниловые жалюзи. Метод и цена подтверждаются по фото, типу ламелей, площади и состоянию креплений.',
        en: 'Cleaning can improve many common odors from dust, cooking, smoke or closed-room air, but results depend on fabric, lining, odor source and age. Some discoloration or sun fading may not be removable.',
        ar: 'يمكن أن يحسّن التنظيف الكثير من الروائح الشائعة الناتجة عن الغبار أو الطهي أو الدخان أو هواء الغرف المغلقة، لكن النتائج تعتمد على القماش والبطانة ومصدر الرائحة والمدة. وقد لا يمكن إزالة بعض تغير اللون أو بهتان الشمس.',
      },
    },
    {
      q: { ru: 'Можно ли убрать запахи со штор?', en: 'What do I send for a quote?', ar: 'ماذا أرسل للحصول على عرض سعر؟' },
      a: {
        ru: 'Чистка помогает освежить ткань и уменьшить запахи, но результат зависит от материала, глубины запаха, возраста загрязнения и предыдущих попыток стирки.',
        en: 'Send photos of the curtains or blinds, number of windows, approximate measurements if known, installation height, material/type if known and your Dubai area.',
        ar: 'أرسل صور الستائر أو الستائر المعدنية وعدد النوافذ والقياسات التقريبية إن كانت معروفة وارتفاع التركيب والمادة أو النوع إن كان معروفًا ومنطقتك في دبي.',
      },
    },
  ],

  related: [
    {
      slug: 'window-cleaning',
      title: { ru: 'Мойка окон', en: 'Internal Window Cleaning', ar: 'تنظيف النوافذ الداخلية' },
      text: {
        ru: 'Логичная пара после чистки штор и жалюзи.',
        en: 'Useful because curtains and windows are cleaned around the same room area.',
        ar: 'مفيد لأن الستائر والنوافذ تُنظف في المنطقة نفسها من الغرفة.',
      },
    },
    {
      slug: 'upholstery-cleaning',
      title: { ru: 'Химчистка мягкой мебели', en: 'Upholstery & Soft Furniture Cleaning', ar: 'تنظيف المفروشات والأثاث الناعم' },
      text: {
        ru: 'Для общей уборки текстильных поверхностей.',
        en: 'Useful for dust and fabric cleaning requests in the same room.',
        ar: 'مفيد لطلبات تنظيف الغبار والأقمشة في الغرفة نفسها.',
      },
    },
  ],
};
