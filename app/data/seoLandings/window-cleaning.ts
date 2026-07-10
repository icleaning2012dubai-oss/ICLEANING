import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Internal Window Cleaning" + RU "Мойка окон".
// Internal windows only (glass, frames, tracks). No high-rise, rope-access or facade work.
// Section IDs are stable anchors and must be preserved.
export const windowCleaning: SeoLanding = {
  slug: 'window-cleaning',
  canonicalId: 'window_cleaning',
  serviceEntity: 'window_cleaning',
  image: '/images/cleaning/okna.webp',

  meta: {
    title: {
      ru: 'Мойка окон в Дубае | Внутренние окна, рамы и треки',
      en: 'Internal Window Cleaning Dubai | Glass, Frames & Tracks',
      ar: 'تنظيف النوافذ الداخلية في دبي | الزجاج والإطارات والمجاري',
    },
    description: {
      ru: 'Мойка окон в Дубае: внутренние стекла, рамы, подоконники и направляющие. Для квартир, вилл, офисов и объектов после ремонта. Расчет по фото.',
      en: 'Internal window cleaning in Dubai for apartments, villas and offices. Glass, frames and tracks cleaned from inside. No high-rise or exterior facade work.',
      ar: 'تنظيف النوافذ الداخلية في دبي للشقق والفلل والمكاتب. تنظيف الزجاج والإطارات والمجاري من الداخل. لا نقدم أعمال المرتفعات أو تنظيف الواجهات الخارجية.',
    },
  },

  hero: {
    h1: {
      ru: 'Мойка окон в Дубае',
      en: 'Internal Window Cleaning in Dubai',
      ar: 'تنظيف النوافذ الداخلية في دبي',
    },
    paragraph: {
      ru: 'Пыль, песок, следы воды и загрязнения быстро портят вид окон в Дубае. Мы помогаем вернуть стеклам прозрачность и аккуратный внешний вид, выполняя мойку стекол, рам, подоконников и направляющих внутри помещения. Для фасадного остекления и высотных работ требуются отдельные специалисты.',
      en: 'Dubai windows collect fine dust, fingerprints, AC condensation marks and sand around frames and tracks. This service covers internal window cleaning for glass, frames and tracks, not rope-access, high-rise exterior or facade cleaning.',
      ar: 'تتجمع على نوافذ دبي الأتربة الدقيقة وبصمات الأصابع وآثار تكاثف المكيفات والرمال حول الإطارات والمجاري. تشمل هذه الخدمة تنظيف النوافذ الداخلية من زجاج وإطارات ومجاري، ولا تشمل أعمال الحبال أو المرتفعات الخارجية أو تنظيف الواجهات.',
    },
    miniFacts: [
      { ru: 'Цена: внутренняя мойка окон - от AED 250/час', en: 'Standard internal windows from AED 15', ar: 'النوافذ الداخلية القياسية تبدأ من AED 15' },
      { ru: 'Внутренние окна', en: 'Panoramic windows from AED 150', ar: 'النوافذ البانورامية تبدأ من AED 150' },
      { ru: 'Рамы и треки', en: 'All-apartment internal cleaning from AED 299', ar: 'تنظيف داخلي لكامل الشقة يبدأ من AED 299' },
      { ru: 'Квартиры и виллы', en: 'Internal glass, frames and tracks only', ar: 'الزجاج والإطارات والمجاري الداخلية فقط' },
      { ru: 'После ремонта', en: 'Apartments, villas and offices', ar: 'شقق وفلل ومكاتب' },
      { ru: 'Расчет по фото', en: 'Quote by photo', ar: 'عرض سعر بالصور' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Book internal window cleaning', ar: 'احجز تنظيف النوافذ الداخلية' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Уточнить мойку окон по фото', en: 'Send window photos for a quote', ar: 'أرسل صور النوافذ للحصول على عرض سعر' },
      event: 'send_photo_for_price',
      href: '#window-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Стандартное внутреннее окно', en: 'Standard internal window', ar: 'نافذة داخلية قياسية' },
      scope: { ru: 'внутренняя мойка', en: 'internal glass, frame and tracks', ar: 'الزجاج والإطار والمجاري الداخلية' },
      price: { ru: 'от AED 15', en: 'from AED 15', ar: 'تبدأ من AED 15' },
      note: { ru: 'для стандартного объема - от AED 250/час', en: 'from AED 250/hour for standard scope', ar: 'تبدأ من AED 250/ساعة للنطاق القياسي' },
    },
    {
      label: { ru: 'Панорамное окно', en: 'Panoramic internal window', ar: 'نافذة داخلية بانورامية' },
      scope: { ru: 'панорамное остекление', en: 'panoramic glass panels', ar: 'ألواح زجاجية بانورامية' },
      price: { ru: 'от AED 150', en: 'from AED 150', ar: 'تبدأ من AED 150' },
    },
    {
      label: { ru: 'Мойка окон по всей квартире', en: 'All-apartment internal cleaning', ar: 'تنظيف داخلي لكامل الشقة' },
      scope: { ru: 'все внутренние окна квартиры', en: 'all internal windows in the apartment', ar: 'جميع النوافذ الداخلية في الشقة' },
      price: { ru: 'от AED 299', en: 'from AED 299', ar: 'تبدأ من AED 299' },
      note: { ru: 'только внутренние и безопасно доступные окна', en: 'internal and safely accessible windows only', ar: 'النوافذ الداخلية والتي يمكن الوصول إليها بأمان فقط' },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Мойка окон в Дубае',
        en: 'Internal window cleaning for clearer glass and cleaner frames',
        ar: 'تنظيف النوافذ الداخلية لزجاج أكثر صفاءً وإطارات أنظف',
      },
      body: {
        ru: [
          'Окна в Дубае пачкаются быстрее, чем кажется: мелкая пыль, песок, следы воды, отпечатки, налет на рамах и грязь в направляющих портят вид даже в аккуратной квартире или офисе.',
          'Для клиента главный маршрут простой: отправить фото окон, район, тип объекта и количество окон. Менеджер уточнит, что входит в работу, доступ и предварительную стоимость.',
        ],
        en: [
          'Windows can make a clean room feel unfinished when glass has fingerprints, dust, streaks or water marks. Frames and tracks collect fine sand and grey buildup, especially near balconies, sliding doors and street-facing rooms.',
          'iCleaning handles internal window cleaning: glass, frames and tracks that can be cleaned safely from inside the property. This service is suitable for apartments, villas and offices where the customer wants the interior-facing side of windows and accessible frames cleaned.',
        ],
        ar: [
          'قد تجعل النوافذ الغرفة النظيفة تبدو غير مكتملة عندما يكون الزجاج مليئاً ببصمات الأصابع والأتربة والخطوط أو آثار المياه. كما تتجمع في الإطارات والمجاري رمال دقيقة وطبقة رمادية، خاصةً بالقرب من الشرفات والأبواب المنزلقة والغرف المطلة على الشارع.',
          'تتولى iCleaning تنظيف النوافذ الداخلية: الزجاج والإطارات والمجاري التي يمكن تنظيفها بأمان من داخل العقار. هذه الخدمة مناسبة للشقق والفلل والمكاتب حيث يرغب العميل في تنظيف الجانب الداخلي من النوافذ والإطارات التي يمكن الوصول إليها.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send window photos for a quote', ar: 'أرسل صور النوافذ للحصول على عرض سعر' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'window-at-home',
      h2: {
        ru: 'Мойка окон на дому без самостоятельной возни с рамами и треками',
        en: 'At-home internal window cleaning',
        ar: 'تنظيف النوافذ الداخلية في المنزل',
      },
      body: {
        ru: [
          'Специалист приезжает по адресу, осматривает окна, оценивает доступ, количество створок, состояние рам и направляющих, затем выполняет согласованную мойку. Клиенту не нужно покупать инвентарь, лезть к трудным углам или бороться с разводами.',
          'Особенно полезно это после пыльной погоды, перед сдачей апартамента, после переезда или когда окна давно не мыли. Важно заранее отправить фото, чтобы менеджер понял тип окон и доступ.',
        ],
        en: [
          'At-home internal window cleaning covers suitable glass, frames and tracks inside apartments, villas and accessible indoor spaces. The technician checks window type, access, tracks, dust and marks before starting.',
          'Send photos of the windows and mention whether they are standard windows, panoramic glass, balcony doors or internal partitions. Exterior height access is outside this service.',
        ],
        ar: [
          'يشمل تنظيف النوافذ الداخلية في المنزل الزجاج والإطارات والمجاري المناسبة داخل الشقق والفلل والمساحات الداخلية التي يمكن الوصول إليها. يفحص الفني نوع النافذة وإمكانية الوصول والمجاري والأتربة والآثار قبل البدء.',
          'أرسل صور النوافذ واذكر ما إذا كانت نوافذ قياسية أو زجاجاً بانورامياً أو أبواب شرفات أو فواصل داخلية. لا يشمل هذا الخدمة الوصول إلى الارتفاعات الخارجية.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Book internal window cleaning at home', ar: 'احجز تنظيف النوافذ الداخلية في المنزل' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'commercial-window-cleaning',
      h2: {
        ru: 'Мойка окон для офисов, магазинов и коммерческих помещений',
        en: 'Internal window cleaning for offices and commercial spaces',
        ar: 'تنظيف النوافذ الداخلية للمكاتب والمساحات التجارية',
      },
      body: {
        ru: [
          'Для офисов, магазинов, салонов, шоурумов и ресторанов важно быстро понять объем: сколько окон, какие размеры, есть ли витрины, как устроен доступ и когда можно работать без помех для клиентов и сотрудников.',
          'Менеджер может запросить фото, адрес, тип объекта и желаемый график. После этого проще дать расчет и согласовать работу до открытия, после закрытия или в спокойный интервал.',
          'Если нужны фасадные или высотные работы, это отдельный вопрос и не должно автоматически обещаться на этой странице.',
        ],
        en: [
          'Commercial internal window cleaning is useful for offices, clinics, salons, showrooms, furnished apartments and other indoor spaces where clear glass affects the customer experience.',
          'For commercial quotes, send window count, photos, property type, access hours and whether the glass is internal, accessible from inside or part of an exterior facade. Only internal and safely accessible areas are accepted through this service.',
        ],
        ar: [
          'يُعد تنظيف النوافذ الداخلية التجاري مفيداً للمكاتب والعيادات والصالونات وصالات العرض والشقق المفروشة وغيرها من المساحات الداخلية حيث يؤثر صفاء الزجاج على تجربة العميل.',
          'للحصول على عروض الأسعار التجارية، أرسل عدد النوافذ والصور ونوع العقار وساعات الوصول وما إذا كان الزجاج داخلياً أو يمكن الوصول إليه من الداخل أو جزءاً من واجهة خارجية. تُقبل من خلال هذه الخدمة المناطق الداخلية والتي يمكن الوصول إليها بأمان فقط.',
        ],
      },
      cta: {
        text: { ru: 'Запросить расчет для объекта', en: 'Request a commercial internal window quote', ar: 'اطلب عرض سعر لتنظيف النوافذ الداخلية التجارية' },
        event: 'commercial_quote_request',
        href: 'whatsapp',
      },
    },
    {
      id: 'window-dubai',
      h2: {
        ru: 'Почему окна в Дубае быстро теряют чистый вид',
        en: 'Window cleaning in Dubai apartments, villas and offices',
        ar: 'تنظيف النوافذ في شقق وفلل ومكاتب دبي',
      },
      body: {
        ru: [
          'Мелкий песок, строительная пыль, влажность и следы воды быстро становятся заметны на стеклах, особенно на солнечной стороне. На рамах и направляющих грязь накапливается еще быстрее, потому что туда редко добираются во время обычной уборки.',
          'Профессиональная мойка помогает вернуть прозрачность стеклам и аккуратный вид оконной зоне без самостоятельного разбора грязных треков. Для квартир, вилл и офисов это простой способ заметно освежить интерьер.',
          'Район в Дубае нужен для логистики и доступных слотов, а фото - для оценки количества окон и сложности доступа.',
        ],
        en: [
          "Dubai's fine dust and sand make window tracks and frames dirty faster than many customers expect. Even when the glass is mostly clean, the frame corners and sliding tracks can collect grey buildup that makes the whole window area look neglected.",
          'Internal window cleaning helps refresh the view from inside the property and makes rooms feel brighter. The service is useful after dust storms, renovation work, move-in/move-out cleaning, guest preparation or regular villa and apartment upkeep.',
        ],
        ar: [
          'تجعل الأتربة والرمال الدقيقة في دبي مجاري النوافذ وإطاراتها تتسخ أسرع مما يتوقعه كثير من العملاء. وحتى عندما يكون الزجاج نظيفاً في معظمه، قد تتجمع في زوايا الإطارات والمجاري المنزلقة طبقة رمادية تجعل منطقة النافذة بأكملها تبدو مهملة.',
          'يساعد تنظيف النوافذ الداخلية على تجديد الإطلالة من داخل العقار ويجعل الغرف تبدو أكثر إشراقاً. تكون هذه الخدمة مفيدة بعد العواصف الترابية وأعمال التجديد وتنظيف الانتقال من وإلى العقار وتجهيز استقبال الضيوف أو الصيانة الدورية للفلل والشقق.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check availability in your Dubai area', ar: 'تحقق من التوفر في منطقتك بدبي' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'window-apartment-villa',
      h2: {
        ru: 'Мойка окон в квартирах, виллах и апартаментах',
        en: 'Internal window cleaning in apartments, villas and serviced apartments',
        ar: 'تنظيف النوافذ الداخلية في الشقق والفلل والشقق الفندقية',
      },
      body: {
        ru: [
          'В квартире чаще важны стекла, рамы и балконные двери. В вилле - больше окон, разные высоты, патио, раздвижные двери и треки. В арендных апартаментах важен быстрый аккуратный результат перед гостями или приемкой.',
          'Чтобы рассчитать заказ, достаточно отправить фото или короткое видео, количество окон/дверей, район и пожелания по дате. Менеджер уточнит, какие зоны доступны и что входит в работу.',
          'Если объект большой, лучше использовать расчет по времени или индивидуальную смету после фото.',
        ],
        en: [
          'In an apartment, glass, frames and balcony doors usually matter most. A villa has more windows, different heights, patios, sliding doors and tracks. In rented apartments a fast, tidy result before guests or handover is the priority.',
          'To estimate the job, send photos or a short video, the number of windows and doors, your area and preferred date. The manager confirms which areas are accessible and what is included in the work.',
          'For larger properties, an hourly calculation or an individual quote after photos works best.',
        ],
        ar: [
          'في الشقة، عادةً ما يكون الأهم هو الزجاج والإطارات وأبواب الشرفة. أما الفيلا فتضم نوافذ أكثر وارتفاعات مختلفة وأفنية وأبواباً منزلقة ومجاري. وفي الشقق المؤجرة، تكون الأولوية للحصول على نتيجة سريعة ومرتبة قبل وصول الضيوف أو التسليم.',
          'لتقدير تكلفة العمل، أرسل صوراً أو مقطع فيديو قصير وعدد النوافذ والأبواب ومنطقتك والتاريخ المفضل. يؤكد المدير المناطق التي يمكن الوصول إليها وما يشمله العمل.',
          'بالنسبة للعقارات الكبيرة، يكون الحساب بالساعة أو عرض السعر المخصص بعد الاطلاع على الصور هو الأنسب.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send window photos for a quote', ar: 'أرسل صور النوافذ للحصول على عرض سعر' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'window-after-renovation',
      h2: {
        ru: 'Мойка окон после ремонта: пыль, следы работ и строительный налет',
        en: 'Internal window cleaning after renovation: dust, work marks and construction film',
        ar: 'تنظيف النوافذ الداخلية بعد التجديد: الأتربة وآثار الأعمال والطبقة الإنشائية',
      },
      body: {
        ru: [
          'Мойка окон после ремонта требует больше внимания, чем обычная уборка. На стеклах могут быть строительная пыль, следы воды, остатки наклеек, скотча или мелкий налет, а в треках - песок и мусор.',
          'Специалист должен оценить загрязнения до начала работы. Некоторые следы - например, застарелая краска, царапины, повреждения стекла или остатки материалов - могут не удаляться обычной мойкой и требуют отдельной оценки.',
        ],
        en: [
          'Window cleaning after renovation needs more attention than regular cleaning. Glass can carry construction dust, water marks, sticker or tape residue and fine film, while tracks hold sand and debris.',
          'The technician should assess the soiling before starting. Some marks - such as old paint, scratches, glass damage or material residue - may not come off with standard cleaning and need a separate assessment.',
        ],
        ar: [
          'يتطلب تنظيف النوافذ بعد التجديد اهتماماً أكبر من التنظيف العادي. فقد يحمل الزجاج أتربة إنشائية وآثار مياه وبقايا ملصقات أو شرائط لاصقة وطبقة رقيقة، بينما تحتوي المجاري على الرمال والمخلفات.',
          'ينبغي على الفني تقييم الاتساخ قبل البدء. فبعض الآثار - مثل الطلاء القديم والخدوش وأضرار الزجاج أو بقايا المواد - قد لا تُزال بالتنظيف العادي وتحتاج إلى تقييم منفصل.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send window photos for a quote', ar: 'أرسل صور النوافذ للحصول على عرض سعر' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'window-frames-tracks',
      h2: {
        ru: 'Рамы, подоконники и оконные треки: зона, которую чаще всего забывают',
        en: 'Glass, frames and tracks cleaned with the right method',
        ar: 'تنظيف الزجاج والإطارات والمجاري بالطريقة الصحيحة',
      },
      body: {
        ru: [
          'Оконные треки и направляющие собирают пыль, песок, насекомых, шерсть и мелкий мусор. На первый взгляд это мелочь, но именно эти зоны делают окно визуально грязным даже после быстрой протирки стекла.',
          'В зависимости от типа окна специалист моет доступные рамы, подоконники и направляющие в рамках согласованного объема. Если грязь застарелая или забилась в труднодоступный механизм, возможность обработки подтверждают уже на месте.',
          'iCleaning смотрит не только на стекло, но и на детали вокруг него. Обычно именно их клиент замечает уже после того, как мастер ушел, поэтому им стоит уделить внимание сразу.',
        ],
        en: [
          'Good window cleaning is not just a quick pass over the center of the glass. Frames, edges, handles, sliding tracks and corners often hold more dust than the pane itself. If these areas are ignored, the window still looks dirty when the light changes.',
          'Before cleaning, the technician checks access, glass panels, frame material, tracks, seals, stickers, paint marks, old silicone, hard-water marks and existing scratches. Some marks may be removable, while scratches, etched stains, old paint or damaged seals may remain.',
        ],
        ar: [
          'التنظيف الجيد للنوافذ ليس مجرد مسح سريع لوسط الزجاج. فالإطارات والحواف والمقابض والمجاري المنزلقة والزوايا غالباً ما تحتجز أتربة أكثر من اللوح الزجاجي نفسه. وإذا أُهملت هذه المناطق، تظل النافذة تبدو متسخة عندما يتغير الضوء.',
          'قبل التنظيف، يفحص الفني إمكانية الوصول والألواح الزجاجية ومادة الإطار والمجاري والحشوات والملصقات وآثار الطلاء والسيليكون القديم وآثار المياه العسرة والخدوش الموجودة. بعض الآثار قد يمكن إزالتها، بينما قد تبقى الخدوش والبقع المحفورة والطلاء القديم أو الحشوات التالفة.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Ask what can be cleaned from inside', ar: 'استفسر عمّا يمكن تنظيفه من الداخل' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'window-prices',
      h2: {
        ru: 'Стоимость мойки окон',
        en: 'Internal window cleaning prices',
        ar: 'أسعار تنظيف النوافذ الداخلية',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Актуальная стартовая цена для внутренней мойки окон: от AED 250/час для стандартного объема работ.',
          'На цену влияют количество окон, тип объекта, наличие балкона или раздвижных дверей, состояние рам, треков, следы ремонта и доступ к внешней стороне. Для точного расчета отправьте фото окон и описание объекта.',
        ],
        en: [
          'Confirmed internal window cleaning price cards are: standard internal window from AED 15, panoramic window from AED 150, and all-apartment internal window cleaning from AED 299.',
          'Final price depends on number of windows, glass size, panoramic panels, tracks, frames, dirt level, access and whether the job is residential or commercial. Keep this page limited to internal and safely accessible window cleaning.',
        ],
        ar: [
          'بطاقات الأسعار المعتمدة لتنظيف النوافذ الداخلية هي: نافذة داخلية قياسية تبدأ من AED 15، ونافذة بانورامية تبدأ من AED 150، وتنظيف داخلي لكامل الشقة يبدأ من AED 299.',
          'يعتمد السعر النهائي على عدد النوافذ وحجم الزجاج والألواح البانورامية والمجاري والإطارات ومستوى الاتساخ وإمكانية الوصول وما إذا كان العمل سكنياً أو تجارياً. تقتصر هذه الصفحة على تنظيف النوافذ الداخلية والتي يمكن الوصول إليها بأمان.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Get internal window price by photo', ar: 'احصل على سعر النوافذ الداخلية بالصور' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'window-stains-odors',
      h2: {
        ru: 'Пыль, разводы, отпечатки и налет в треках',
        en: 'Dust, streaks, fingerprints and track buildup',
        ar: 'الأتربة والخطوط وبصمات الأصابع وتراكمات المجاري',
      },
      body: {
        ru: [
          'Частые проблемы внутренних окон - это отпечатки пальцев, пылевая пленка, разводы, следы на балконных дверях, песок в треках, грязь вокруг ручек и следы воды у краев. Эти мелкие детали делают даже чистую комнату незавершенной.',
          'iCleaning моет внутренние стекла, рамы и направляющие и уделяет внимание зонам, которые заметнее всего при дневном свете. Некоторые следы - царапины, въевшиеся следы жесткой воды, пятна краски или поврежденные уплотнители - могут не исчезнуть при обычной мойке.',
        ],
        en: [
          'Common internal window issues include fingerprints, dust film, streaks, balcony-door marks, sand in tracks, grime around handles and water marks near edges. These small details can make an otherwise clean room feel unfinished.',
          'iCleaning can clean internal glass, frames and tracks and focus on the areas that are most visible in daylight. Some marks, such as scratches, etched hard-water damage, paint spots or damaged seals, may not disappear with standard cleaning.',
        ],
        ar: [
          'تشمل المشكلات الشائعة للنوافذ الداخلية بصمات الأصابع وطبقة الأتربة والخطوط وآثار أبواب الشرفة والرمال في المجاري والأوساخ حول المقابض وآثار المياه بالقرب من الحواف. هذه التفاصيل الصغيرة قد تجعل الغرفة النظيفة تبدو غير مكتملة.',
          'يمكن لـ iCleaning تنظيف الزجاج والإطارات والمجاري الداخلية والتركيز على المناطق الأكثر وضوحاً في ضوء النهار. بعض الآثار، مثل الخدوش وأضرار المياه العسرة المحفورة وبقع الطلاء أو الحشوات التالفة، قد لا تختفي بالتنظيف العادي.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото следов или треков крупным планом', en: 'Send close-up photos of marks or tracks', ar: 'أرسل صوراً مقربة للآثار أو المجاري' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'window-company',
      h2: {
        ru: 'Почему выбирают iCleaning для внутренней мойки окон',
        en: 'Why choose iCleaning for internal window cleaning',
        ar: 'لماذا تختار iCleaning لتنظيف النوافذ الداخلية',
      },
      body: {
        ru: [
          'Хорошая компания по мойке окон дает понятную оценку по фото, подтверждает доступ и объясняет безопасный объем услуги до бронирования.',
          'Эта услуга сосредоточена на внутренних стеклах, рамах и направляющих. Внешняя высотная мойка, промышленный альпинизм и фасадные работы остаются за рамками этой услуги.',
        ],
        en: [
          'A good internal window cleaning company gives a clear photo estimate, confirms access and explains the safe service scope before booking.',
          'This service focuses on internal glass, frames and tracks. Exterior high-rise, rope access and facade cleaning stay outside this service.',
        ],
        ar: [
          'تقدم شركة تنظيف النوافذ الداخلية الجيدة تقديراً واضحاً بالصور، وتؤكد إمكانية الوصول، وتوضح نطاق الخدمة الآمن قبل الحجز.',
          'تركز هذه الخدمة على الزجاج والإطارات والمجاري الداخلية. أما أعمال المرتفعات الخارجية والوصول بالحبال وتنظيف الواجهات فتبقى خارج نطاق هذه الخدمة.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить мойку ваших окон', en: 'Ask iCleaning about internal window cleaning', ar: 'استفسر من iCleaning عن تنظيف النوافذ الداخلية' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'professional-window-cleaning',
      h2: {
        ru: 'Профессиональная мойка окон против быстрой протирки',
        en: 'Professional internal window cleaning versus quick wiping',
        ar: 'التنظيف الاحترافي للنوافذ الداخلية مقابل المسح السريع',
      },
      body: {
        ru: [
          'Самостоятельно можно протереть стекло, но на высоких створках, рамах, треках и углах быстро появляются разводы и пропущенные зоны. Особенно это заметно на солнце, когда стекло вроде чистое, но вся поверхность в полосах.',
          'Профессиональная мойка полезна, когда окон много, они давно не мылись, остались следы ремонта или нужно подготовить квартиру к гостям, переезду или сдаче. Специалист приезжает со своим инвентарем и работает в согласованном объеме.',
          'Важная граница: профессиональная мойка не означает автоматический доступ к опасным внешним поверхностям. Безопасность и согласованный объем важнее громкого обещания.',
        ],
        en: [
          'A cloth and spray can help with small fingerprints, but it often misses the window edges, tracks, frame corners and sliding-door channels. These are the areas where Dubai dust and sand collect most heavily.',
          'Professional internal window cleaning works systematically: check access, clean glass, address frames and tracks, remove accessible dust and finish with a clearer internal surface. The goal is a cleaner view and cleaner window area, not unsafe exterior access.',
        ],
        ar: [
          'قد تساعد قطعة قماش وبخاخ في إزالة بصمات الأصابع الصغيرة، لكنهما غالباً ما يتجاهلان حواف النافذة والمجاري وزوايا الإطار وقنوات الأبواب المنزلقة. وهذه هي المناطق التي تتجمع فيها أتربة ورمال دبي بأكثف صورة.',
          'يعمل التنظيف الاحترافي للنوافذ الداخلية بشكل منهجي: فحص إمكانية الوصول، وتنظيف الزجاج، ومعالجة الإطارات والمجاري، وإزالة الأتربة التي يمكن الوصول إليها، والانتهاء بسطح داخلي أكثر صفاءً. الهدف هو إطلالة أوضح ومنطقة نوافذ أنظف، وليس الوصول الخارجي غير الآمن.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Book professional internal window cleaning', ar: 'احجز التنظيف الاحترافي للنوافذ الداخلية' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'internal-window-scope',
      h2: {
        ru: 'Внутренняя мойка окон: стекла, рамы и направляющие',
        en: 'Internal window cleaning scope and exclusions',
        ar: 'نطاق تنظيف النوافذ الداخلية والاستثناءات',
      },
      body: {
        ru: [
          'Мы выполняем внутреннюю мойку окон, включая стекла, рамы, подоконники и направляющие. Удаляем пыль, следы воды, бытовые загрязнения и налет, которые постепенно накапливаются даже в помещениях с кондиционированием. Перед началом работ уточняем тип окон и доступ к ним, чтобы подобрать подходящий формат обслуживания.',
        ],
        en: [
          'This service does not cover exterior high-rise windows, rope access, facade cleaning, gondola work, abseiling, exterior tower glass or unsafe outside access.',
          'If a customer needs exterior or high-access cleaning, the inquiry is routed away from internal window cleaning unless a separate service is launched.',
        ],
        ar: [
          'لا تشمل هذه الخدمة نوافذ المرتفعات الخارجية أو الوصول بالحبال أو تنظيف الواجهات أو أعمال المنصات المعلقة أو الإنزال بالحبال أو زجاج الأبراج الخارجي أو الوصول الخارجي غير الآمن.',
          'إذا احتاج العميل إلى تنظيف خارجي أو وصول إلى ارتفاعات عالية، يُوجَّه الاستفسار بعيداً عن تنظيف النوافذ الداخلية ما لم تُطلق خدمة منفصلة لذلك.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить мойку ваших окон', en: 'Confirm your windows are internal/accessibly cleaned', ar: 'تأكد أن نوافذك تُنظَّف من الداخل أو بوصول آمن' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: { ru: 'Вы моете окна снаружи?', en: 'Do you clean exterior high-rise windows?', ar: 'هل تنظفون نوافذ المرتفعات الخارجية؟' },
      a: {
        ru: 'Основной объем - внутренняя мойка окон и доступных зон: стекла изнутри, рамы, подоконники и направляющие. Высотная мойка, фасад, промышленный альпинизм и труднодоступные внешние стекла в эту услугу не входят.',
        en: 'No. This service is for internal window cleaning only: accessible glass from inside, frames and tracks. It does not offer high-rise, rope access, facade, gondola or exterior tower cleaning.',
        ar: 'لا. هذه الخدمة مخصصة لتنظيف النوافذ الداخلية فقط: الزجاج الذي يمكن الوصول إليه من الداخل والإطارات والمجاري. ولا تشمل تنظيف المرتفعات أو الوصول بالحبال أو الواجهات أو المنصات المعلقة أو زجاج الأبراج الخارجي.',
      },
    },
    {
      q: { ru: 'Что входит в мойку окон?', en: 'What is included in internal window cleaning?', ar: 'ماذا يشمل تنظيف النوافذ الداخلية؟' },
      a: {
        ru: 'В работу входят стекла, рамы, подоконники и направляющие/треки в рамках доступного и безопасного объема. Финальный состав работ подтверждается по фото или на месте.',
        en: 'The confirmed scope is internal glass, frames and tracks. The exact quote depends on number of windows, size, access and condition.',
        ar: 'يشمل النطاق المعتمد الزجاج والإطارات والمجاري الداخلية. ويعتمد عرض السعر الدقيق على عدد النوافذ وحجمها وإمكانية الوصول وحالتها.',
      },
    },
    {
      q: { ru: 'Сколько стоит мойка окон?', en: 'How much does window cleaning cost?', ar: 'كم تكلفة تنظيف النوافذ؟' },
      a: {
        ru: 'Стартовая цена внутренней мойки окон - от AED 250/час. Итоговая стоимость зависит от количества окон, доступа, рам, треков, следов ремонта и типа объекта.',
        en: 'Internal window cleaning is quoted by window type, count, glass size, frames, tracks, access and condition. Send photos for a preliminary estimate before booking.',
        ar: 'يُحدَّد سعر تنظيف النوافذ الداخلية حسب نوع النافذة وعددها وحجم الزجاج والإطارات والمجاري وإمكانية الوصول والحالة. أرسل الصور للحصول على تقدير مبدئي قبل الحجز.',
      },
    },
    {
      q: { ru: 'Вы моете окна после ремонта?', en: 'Can you remove hard-water marks or scratches?', ar: 'هل يمكنكم إزالة آثار المياه العسرة أو الخدوش؟' },
      a: {
        ru: 'Да, такие запросы принимаются после фотооценки. Некоторые строительные следы, царапины, старая краска или повреждения стекла могут не удаляться обычной мойкой.',
        en: 'Some marks can improve with cleaning, but scratches, etched glass, damaged seals, old paint and severe mineral marks may remain. This service is cleaning, not glass restoration.',
        ar: 'قد تتحسن بعض الآثار بالتنظيف، لكن الخدوش والزجاج المحفور والحشوات التالفة والطلاء القديم وآثار المعادن الشديدة قد تبقى. هذه الخدمة تنظيف وليست ترميماً للزجاج.',
      },
    },
    {
      q: { ru: 'Можно ли заказать мойку окон для офиса?', en: 'What do I send for a quote?', ar: 'ماذا أرسل للحصول على عرض سعر؟' },
      a: {
        ru: 'Да, для офиса или коммерческого помещения лучше отправить фото, количество окон, адрес и удобное время. Менеджер подготовит расчет по объекту.',
        en: 'Send photos of the windows, approximate count, whether they are standard or panoramic, close-ups of dirty tracks or marks and your Dubai area.',
        ar: 'أرسل صور النوافذ والعدد التقريبي وما إذا كانت قياسية أو بانورامية، وصوراً مقربة للمجاري أو الآثار المتسخة، ومنطقتك في دبي.',
      },
    },
  ],

  related: [
    {
      slug: 'curtain-cleaning',
      title: { ru: 'Чистка штор и жалюзи', en: 'Curtain & Blinds Cleaning', ar: 'تنظيف الستائر والمظلات' },
      text: {
        ru: 'Связанная услуга для окна и текстиля рядом с ним.',
        en: 'Useful because curtains, blinds and windows are connected visually and functionally.',
        ar: 'خدمة مرتبطة، لأن الستائر والمظلات والنوافذ مترابطة بصرياً ووظيفياً.',
      },
    },
    {
      slug: 'central-ac-cleaning',
      title: { ru: 'Чистка центральных и канальных кондиционеров', en: 'Central & Ducted AC Cleaning', ar: 'تنظيف المكيفات المركزية والمجارية' },
      text: {
        ru: 'Для общего обновления интерьера.',
        en: 'Useful for customers dealing with dust around indoor surfaces.',
        ar: 'مفيدة للعملاء الذين يتعاملون مع الأتربة حول الأسطح الداخلية.',
      },
    },
  ],
};
