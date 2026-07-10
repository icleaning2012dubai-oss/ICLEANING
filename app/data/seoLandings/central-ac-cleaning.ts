import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Central / Ducted AC Cleaning" + RU "Чистка центральных и канальных кондиционеров".
// Cleaning-only page: no repair, installation or gas/freon refill. Section IDs are stable anchors and must be preserved.
export const centralAcCleaning: SeoLanding = {
  slug: 'central-ac-cleaning',
  canonicalId: 'central_ac_cleaning',
  serviceEntity: 'central_ac_cleaning',
  image: '/images/service/konder.webp',

  meta: {
    title: {
      ru: 'Чистка кондиционеров в Дубае | Central & Duct AC Cleaning',
      en: 'Central AC Cleaning Dubai | Ducted AC Cleaning Service',
      ar: 'تنظيف المكيفات المركزية في دبي | خدمة تنظيف مكيفات القنوات (الدكت)',
    },
    description: {
      ru: 'Чистка центральных и канальных кондиционеров в Дубае: пакеты для студий, квартир и вилл, оценка по фото, понятный состав работ без ремонта и заправки.',
      en: 'Central and ducted AC cleaning in Dubai for apartments, villas and commercial spaces. Filters, ducts, grilles, drain pans and diffusers cleaned.',
      ar: 'تنظيف المكيفات المركزية ومكيفات القنوات في دبي للشقق والفلل والمساحات التجارية. نقوم بتنظيف الفلاتر والقنوات والشبكات وصواني التصريف والموزعات.',
    },
  },

  hero: {
    h1: {
      ru: 'Чистка центральных и канальных кондиционеров в Дубае',
      en: 'Central & Ducted AC Cleaning in Dubai',
      ar: 'تنظيف المكيفات المركزية ومكيفات القنوات في دبي',
    },
    paragraph: {
      ru: 'В Дубае кондиционер работает почти постоянно, поэтому пыль, запахи и загрязнения внутри быстрее начинают влиять на комфорт. Мы занимаемся чисткой центральных и канальных систем, заранее уточняем тип кондиционера.',
      en: 'In Dubai, AC is not a seasonal appliance - it runs for much of the year. Dust, odor, moisture and buildup inside a central or ducted system can affect comfort, airflow and how fresh the room feels. iCleaning focuses on AC cleaning, not repair or gas refill, with standard and deep cleaning routes depending on system condition.',
      ar: 'في دبي، المكيف ليس جهازاً موسمياً، بل يعمل معظم أيام السنة. ويمكن للغبار والروائح والرطوبة والترسبات داخل النظام المركزي أو نظام القنوات أن تؤثر على راحتك وتدفق الهواء ومدى انتعاش الغرفة. تركّز iCleaning على تنظيف المكيفات فقط، وليس على الإصلاح أو تعبئة الغاز، مع خيارات للتنظيف العادي والتنظيف العميق حسب حالة النظام.',
    },
    miniFacts: [
      { ru: 'Цена: студия / 1 кондиционер - AED 950, 1 спальня / 2 кондиционера - AED 2150', en: 'Studio / 1 conditioner AED 950', ar: 'استوديو / مكيف واحد AED 950' },
      { ru: 'Центральные и канальные кондиционеры', en: '1 Bedroom / 2 conditioners AED 2,150', ar: 'غرفة نوم واحدة / مكيفان AED 2,150' },
      { ru: 'Пакеты от AED 950', en: 'Packages up to 4 Bedroom / 5 conditioners AED 4,250', ar: 'باقات تصل إلى 4 غرف نوم / 5 مكيفات AED 4,250' },
      { ru: 'Без ремонта и заправки', en: 'Cleaning only, no repair or gas refill', ar: 'تنظيف فقط، دون إصلاح أو تعبئة غاز' },
      { ru: 'Фотооценка', en: 'Material check before cleaning', ar: 'فحص قبل التنظيف' },
      { ru: 'Для квартир, вилл и объектов', en: 'For apartments, villas and commercial spaces', ar: 'للشقق والفلل والمساحات التجارية' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Book central AC cleaning', ar: 'احجز تنظيف المكيف المركزي' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Рассчитать услугу по количеству AC', en: 'Request an AC cleaning quote', ar: 'اطلب عرض سعر لتنظيف المكيف' },
      event: 'send_photo_for_price',
      href: '#central-ac-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Студия', en: 'Studio', ar: 'استوديو' },
      scope: { ru: '1 кондиционер', en: '1 conditioner', ar: 'مكيف واحد' },
      price: { ru: 'AED 950', en: 'AED 950', ar: 'AED 950' },
      note: { ru: 'пакет чистки кондиционеров', en: 'AC cleaning package', ar: 'باقة تنظيف المكيفات' },
    },
    {
      label: { ru: '1 спальня', en: '1 Bedroom', ar: 'غرفة نوم واحدة' },
      scope: { ru: '2 кондиционера', en: '2 conditioners', ar: 'مكيفان' },
      price: { ru: 'AED 2150', en: 'AED 2,150', ar: 'AED 2,150' },
      note: { ru: 'пакет чистки кондиционеров', en: 'AC cleaning package', ar: 'باقة تنظيف المكيفات' },
    },
    {
      label: { ru: '2 спальни', en: '2 Bedroom', ar: 'غرفتا نوم' },
      scope: { ru: '3 кондиционера', en: '3 conditioners', ar: '3 مكيفات' },
      price: { ru: 'AED 2900', en: 'AED 2,900', ar: 'AED 2,900' },
      note: { ru: 'пакет чистки кондиционеров', en: 'AC cleaning package', ar: 'باقة تنظيف المكيفات' },
    },
    {
      label: { ru: '3 спальни', en: '3 Bedroom', ar: '3 غرف نوم' },
      scope: { ru: '4 кондиционера', en: '4 conditioners', ar: '4 مكيفات' },
      price: { ru: 'AED 3600', en: 'AED 3,600', ar: 'AED 3,600' },
      note: { ru: 'пакет чистки кондиционеров', en: 'AC cleaning package', ar: 'باقة تنظيف المكيفات' },
    },
    {
      label: { ru: '4 спальни', en: '4 Bedroom', ar: '4 غرف نوم' },
      scope: { ru: '5 кондиционеров', en: '5 conditioners', ar: '5 مكيفات' },
      price: { ru: 'AED 4250', en: 'AED 4,250', ar: 'AED 4,250' },
      note: { ru: 'пакет чистки кондиционеров', en: 'AC cleaning package', ar: 'باقة تنظيف المكيفات' },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Чистка центральных и канальных кондиционеров в Дубае',
        en: 'Central and ducted AC cleaning for cleaner airflow',
        ar: 'تنظيف المكيفات المركزية ومكيفات القنوات لتدفق هواء أنظف',
      },
      body: {
        ru: [
          'Когда кондиционер работает каждый день, внутри системы постепенно собираются пыль, налет, запахи и загрязнения на доступных компонентах. Клиент замечает это не сразу: сначала появляется слабый запах, хуже ощущается поток воздуха или комната кажется менее свежей.',
          'iCleaning занимается именно чисткой центральных и канальных кондиционеров, а не ремонтом. Специалист оценивает тип системы, количество блоков, доступ и состояние, а затем выполняет согласованный объем работ.',
        ],
        en: [
          'Central and ducted AC systems move air through rooms every day. In Dubai, filters, grilles, diffusers, drain pans and ducted sections can collect dust, moisture-related buildup and odors faster than people expect.',
          'iCleaning focuses on AC cleaning only. The confirmed scope is central and ducted AC cleaning, with split AC handled only when it fits the confirmed service route. The service can cover filters, ducts, grilles, drain pans and diffusers within the cleaning scope.',
        ],
        ar: [
          'تعمل أنظمة التكييف المركزية وأنظمة القنوات على تحريك الهواء عبر الغرف كل يوم. وفي دبي، يمكن أن تتجمّع في الفلاتر والشبكات والموزعات وصواني التصريف وأقسام القنوات كمية من الغبار والترسبات الناتجة عن الرطوبة والروائح أسرع مما يتوقعه الكثيرون.',
          'تركّز iCleaning على تنظيف المكيفات فقط. ويشمل النطاق المؤكد تنظيف المكيفات المركزية ومكيفات القنوات، مع التعامل مع مكيفات السبليت فقط عندما تتناسب مع مسار الخدمة المؤكد. وتشمل الخدمة الفلاتر والقنوات والشبكات وصواني التصريف والموزعات ضمن نطاق التنظيف.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Request central AC cleaning', ar: 'اطلب تنظيف المكيف المركزي' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'commercial-central-ac-cleaning',
      h2: {
        ru: 'Чистка AC-систем для вилл, офисов, ресторанов и коммерческих объектов',
        en: 'Commercial central AC cleaning for offices, restaurants and hotels',
        ar: 'تنظيف المكيفات المركزية التجارية للمكاتب والمطاعم والفنادق',
      },
      body: {
        ru: [
          'Для вилл, офисов, ресторанов, салонов, магазинов и арендных объектов важно заранее понять масштаб: сколько блоков, какая система, где расположен доступ, есть ли запахи, слабый поток воздуха или жалобы от пользователей помещения.',
          'Менеджер может запросить тип объекта, количество блоков, фото решеток и диффузоров, район и удобное время. После этого проще подготовить расчет и согласовать визит так, чтобы работа не мешала бизнесу.',
          'Это услуга по чистке, а не по ремонту. Если нужен ремонт, заправка газом, установка или поиск поломки, это уже отдельная задача, и менеджер сразу об этом скажет.',
        ],
        en: [
          'Commercial AC systems work hard in offices, restaurants, clinics, hotels, shops and warehouses. Dust, odors and moisture-related buildup can become more noticeable because the system runs for long hours and many people share the same indoor air.',
          'For commercial AC cleaning, send property type, number of units or zones, system type, access points, visible symptoms, photos if possible and preferred timing. This helps the team quote the job and plan technicians, tools and disruption control.',
        ],
        ar: [
          'تعمل أنظمة التكييف التجارية بجهد كبير في المكاتب والمطاعم والعيادات والفنادق والمتاجر والمستودعات. ويمكن أن يصبح الغبار والروائح والترسبات المرتبطة بالرطوبة أكثر وضوحاً لأن النظام يعمل لساعات طويلة ويتشارك العديد من الأشخاص الهواء الداخلي نفسه.',
          'لتنظيف المكيفات التجارية، أرسل نوع العقار وعدد الوحدات أو المناطق ونوع النظام ونقاط الوصول والأعراض الظاهرة والصور إن أمكن والوقت المفضل. يساعد ذلك الفريق على تسعير العمل والتخطيط للفنيين والأدوات وإدارة أي إزعاج.',
        ],
      },
      cta: {
        text: { ru: 'Запросить расчет для объекта', en: 'Request a commercial AC cleaning quote', ar: 'اطلب عرض سعر لتنظيف مكيفات المنشأة التجارية' },
        event: 'commercial_quote_request',
        href: 'whatsapp',
      },
    },
    {
      id: 'central-ac-dubai',
      h2: {
        ru: 'Почему кондиционер в Дубае нужно чистить внимательнее',
        en: 'Central AC cleaning in Dubai homes and villas',
        ar: 'تنظيف المكيفات المركزية في منازل وفلل دبي',
      },
      body: {
        ru: [
          'В Дубае кондиционер часто работает не сезонно, а почти круглый год. Пыль из воздуха, мелкий песок, влажность и активное использование помещения быстрее проявляются в решетках, фильтрах, дренажных зонах и запахах.',
          'Если обслуживание откладывать, клиент может столкнуться с неприятным запахом, слабым воздушным потоком, пылью у решеток и ощущением несвежего воздуха. Это не всегда означает поломку, но часто говорит, что систему нужно осмотреть и почистить в рамках доступного объема.',
          'Чтобы подобрать удобное время и рассчитать работу, менеджеру достаточно знать ваш район в Дубае. Адрес уточняется при заявке в WhatsApp.',
        ],
        en: [
          'Dubai’s climate makes AC part of everyday life. Many apartments and villas run cooling for long periods, and fine dust can settle around vents, filters and room surfaces. When the AC starts blowing a stale smell or dust appears near diffusers, customers want a practical cleaning solution.',
          'Central and ducted AC cleaning needs to begin with system access and condition checks. The technician identifies filters, grilles, diffusers, drain pans and duct sections that can be cleaned within the confirmed service scope.',
        ],
        ar: [
          'يجعل مناخ دبي التكييف جزءاً من الحياة اليومية. فالكثير من الشقق والفلل تشغّل التبريد لفترات طويلة، ويمكن للغبار الناعم أن يتراكم حول الفتحات والفلاتر وأسطح الغرفة. وعندما يبدأ المكيف بإطلاق رائحة غير منعشة أو يظهر الغبار قرب الموزعات، يبحث العملاء عن حل تنظيف عملي.',
          'يجب أن يبدأ تنظيف المكيفات المركزية ومكيفات القنوات بالوصول إلى النظام وفحص حالته. يحدّد الفني الفلاتر والشبكات والموزعات وصواني التصريف وأقسام القنوات التي يمكن تنظيفها ضمن نطاق الخدمة المؤكد.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check AC cleaning availability in Dubai', ar: 'تحقق من توفر خدمة تنظيف المكيفات في دبي' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'central-ac-materials-methods',
      h2: {
        ru: 'Канальный, центральный и split AC: что важно уточнить до чистки',
        en: 'Ducted, central and split AC: what to confirm before cleaning',
        ar: 'مكيفات القنوات والمركزية والسبليت: ما الذي يجب تأكيده قبل التنظيف',
      },
      body: {
        ru: [
          'Перед расчетом нужно уточнить тип системы: центральная или канальная система, сплит-блок, количество блоков, доступ к решеткам, дренажу, фильтрам и внутренним компонентам. От этого зависит цена, время и состав работ.',
        ],
        en: [
          'Before quoting, the system type needs to be confirmed: central or ducted system, split unit, number of units, and access to grilles, drainage, filters and internal components. This affects the price, the timing and the scope of work.',
        ],
        ar: [
          'قبل إعداد عرض السعر، يجب تأكيد نوع النظام: نظام مركزي أو نظام قنوات، وحدة سبليت، عدد الوحدات، وإمكانية الوصول إلى الشبكات والتصريف والفلاتر والمكونات الداخلية. يؤثر ذلك على السعر والوقت ونطاق العمل.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Tell us the system type or send a photo', ar: 'أخبرنا بنوع النظام أو أرسل صورة' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'central-ac-prices',
      h2: {
        ru: 'Цены на чистку кондиционеров',
        en: 'Central AC cleaning prices in Dubai',
        ar: 'أسعار تنظيف المكيفات المركزية في دبي',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Актуальные пакеты чистки кондиционеров: студия / 1 кондиционер - AED 950, 1 спальня / 2 кондиционера - AED 2150, 2 спальни / 3 кондиционера - AED 2900, 3 спальни / 4 кондиционера - AED 3600, 4 спальни / 5 кондиционеров - AED 4250.',
          'Финальная стоимость зависит от типа системы, доступа к блокам, степени загрязнения, высоты, объекта и дополнительных работ. Цены в пакетах - подтвержденные и фиксированные.',
        ],
        en: [
          'Confirmed central and ducted AC cleaning packages are: Studio with 1 conditioner - AED 950; 1 Bedroom with 2 conditioners - AED 2,150; 2 Bedroom with 3 conditioners - AED 2,900; 3 Bedroom with 4 conditioners - AED 3,600; and 4 Bedroom with 5 conditioners - AED 4,250.',
          'These prices are for AC cleaning service only. Repair, installation, electrical diagnostics, gas refill or freon refill are not included in this page.',
        ],
        ar: [
          'باقات تنظيف المكيفات المركزية ومكيفات القنوات المؤكدة هي: استوديو بمكيف واحد - AED 950؛ غرفة نوم واحدة بمكيفين - AED 2,150؛ غرفتا نوم بثلاثة مكيفات - AED 2,900؛ 3 غرف نوم بأربعة مكيفات - AED 3,600؛ و4 غرف نوم بخمسة مكيفات - AED 4,250.',
          'هذه الأسعار مخصصة لخدمة تنظيف المكيفات فقط. ولا تشمل هذه الصفحة الإصلاح أو التركيب أو التشخيص الكهربائي أو تعبئة الغاز أو تعبئة الفريون.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Get an AC cleaning price for your apartment', ar: 'احصل على سعر تنظيف المكيف لشقتك' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'central-ac-stains-odors',
      h2: {
        ru: 'Запах, пыль у решеток и слабый поток воздуха из кондиционера',
        en: 'AC dust, smells and weak airflow',
        ar: 'غبار المكيف والروائح وضعف تدفق الهواء',
      },
      body: {
        ru: [
          'Неприятный запах, пыль вокруг решеток, слабый поток воздуха или ощущение, что помещение хуже охлаждается, могут быть связаны с загрязнением доступных компонентов системы. Но такие симптомы также могут указывать на техническую проблему.',
          'Поэтому правильный маршрут - сначала уточнить тип системы, количество блоков, фото решеток и описание симптома. Если речь именно о чистке, специалист согласует объем работ. Если нужен ремонт, заправка газом или установка, это уже другая услуга, и менеджер сразу об этом скажет.',
          'Так клиент сразу понимает, за что платит: чистка возвращает свежесть и убирает загрязнения, но не заменяет ремонт кондиционера.',
        ],
        en: [
          'Common AC cleaning triggers include stale smell when the system starts, visible dust near vents, dirty filters, weak airflow, damp smell or dust returning soon after cleaning the room. These signs do not always mean the same thing, so the first step is inspection.',
          'iCleaning can clean confirmed components such as filters, ducts, grilles, drain pans and diffusers within the service scope, and can use suitable antibacterial or mold-focused products where applicable. If the issue is caused by mechanical failure, refrigerant level, electrical faults or drainage problems beyond cleaning, that needs to be treated as outside the cleaning service.',
        ],
        ar: [
          'من الأسباب الشائعة التي تدفع لطلب تنظيف المكيف: رائحة غير منعشة عند تشغيل النظام، غبار ظاهر قرب الفتحات، فلاتر متسخة، ضعف في تدفق الهواء، رائحة رطوبة، أو عودة الغبار بسرعة بعد تنظيف الغرفة. لا تعني هذه العلامات دائماً الشيء نفسه، لذا فإن الخطوة الأولى هي الفحص.',
          'يمكن لـ iCleaning تنظيف المكونات المؤكدة مثل الفلاتر والقنوات والشبكات وصواني التصريف والموزعات ضمن نطاق الخدمة، ويمكن استخدام منتجات مناسبة مضادة للبكتيريا أو مخصصة لمعالجة العفن عند الحاجة. أما إذا كانت المشكلة ناتجة عن عطل ميكانيكي أو مستوى غاز التبريد أو أعطال كهربائية أو مشكلات تصريف خارج نطاق التنظيف، فيجب اعتبارها خارج خدمة التنظيف.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Describe the smell or dust issue', ar: 'صف مشكلة الرائحة أو الغبار' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'central-ac-company',
      h2: {
        ru: 'Почему чистку AC не стоит сводить к быстрой промывке фильтра',
        en: 'Why choose iCleaning for AC cleaning',
        ar: 'لماذا تختار iCleaning لتنظيف المكيفات',
      },
      body: {
        ru: [
          'Сильный сервис по чистке AC объясняет клиенту, что именно входит в работу: какие зоны доступны, какие компоненты очищаются, что не входит и какие признаки требуют не чистки, а ремонта. Это важнее, чем громкое обещание «идеального воздуха».',
          'Менеджер уточняет тип системы, количество блоков, доступ и симптомы. Специалист на месте оценивает состояние и выполняет согласованный объем без навязывания неподтвержденных услуг.',
          'Мы не даем универсальных гарантий «идеального воздуха». Доверие проще построить иначе: понятный состав работ, оценка по фото, честные ограничения и отсутствие скрытых доплат.',
        ],
        en: [
          'A good AC cleaning service makes the service boundary clear. iCleaning provides AC cleaning, not AC repair, installation or gas refill.',
          'The team can review the system type, symptoms, access points and visible contamination before confirming whether the issue fits the cleaning scope.',
        ],
        ar: [
          'تحرص خدمة تنظيف المكيفات الجيدة على توضيح حدود الخدمة. تقدّم iCleaning تنظيف المكيفات، وليس إصلاح المكيفات أو تركيبها أو تعبئة الغاز.',
          'يمكن للفريق مراجعة نوع النظام والأعراض ونقاط الوصول والتلوث الظاهر قبل تأكيد ما إذا كانت المشكلة تندرج ضمن نطاق التنظيف.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Ask iCleaning about AC cleaning scope', ar: 'استفسر من iCleaning عن نطاق تنظيف المكيفات' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'professional-central-ac-cleaning',
      h2: {
        ru: 'Профессиональная чистка центрального AC: что отличает ее от DIY',
        en: 'Professional AC cleaning versus a quick filter rinse',
        ar: 'التنظيف الاحترافي للمكيفات مقابل شطف سريع للفلتر',
      },
      body: {
        ru: [
          'Самостоятельная чистка обычно ограничивается решеткой или фильтром. Это может быть полезно как базовый уход, но запахи, пыль, дренажные зоны и внутренние компоненты требуют более аккуратной проверки и понимания доступа.',
          'Профессиональная чистка начинается с оценки системы и согласования объема. Мастер работает с доступными компонентами, использует подходящие средства и не разбирает то, что не входит в услугу или требует HVAC-ремонта.',
        ],
        en: [
          'Rinsing a filter is useful maintenance, but it does not always address dust and buildup around grilles, diffusers, ducted sections, drain pans or deeper system components. If the AC smells stale or dust appears around vents, a broader cleaning check may be needed.',
          'Professional AC cleaning includes preparation of the work area, access to the relevant components, cleaning of confirmed parts, careful handling around the indoor space and reassembly after cleaning. For deeper cleaning, additional components such as fan or motor areas may be handled according to system condition and confirmed scope.',
        ],
        ar: [
          'يُعد شطف الفلتر صيانة مفيدة، لكنه لا يعالج دائماً الغبار والترسبات حول الشبكات والموزعات وأقسام القنوات وصواني التصريف أو المكونات الأعمق في النظام. وإذا كانت رائحة المكيف غير منعشة أو ظهر الغبار حول الفتحات، فقد يلزم فحص تنظيف أشمل.',
          'يشمل التنظيف الاحترافي للمكيفات تجهيز منطقة العمل، والوصول إلى المكونات المعنية، وتنظيف الأجزاء المؤكدة، والتعامل بحذر داخل المساحة الداخلية، وإعادة التركيب بعد التنظيف. وللتنظيف العميق، قد يتم التعامل مع مكونات إضافية مثل مناطق المروحة أو المحرك حسب حالة النظام والنطاق المؤكد.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Book a professional AC cleaning check', ar: 'احجز فحص تنظيف احترافي للمكيف' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'central-ac-scope',
      h2: {
        ru: 'Что входит в чистку кондиционеров и что подтверждено до заказа',
        en: 'What is included in central and ducted AC cleaning',
        ar: 'ما الذي يشمله تنظيف المكيفات المركزية ومكيفات القنوات',
      },
      body: {
        ru: [
          'Состав работ зависит от выбранного пакета. Сюда могут входить фильтры, решетки, диффузоры, дренажные элементы, зона вентилятора и двигателя, наружный блок и антибактериальная обработка - но только то, что реально входит в конкретный пакет. Точный список менеджер подтверждает заранее.',
          'Мы не обещаем, что чистка решит вопросы здоровья. Честнее сказать так: чистка убирает загрязнения с доступных частей системы и помогает вернуть ощущение свежести и комфорта в помещении.',
        ],
        en: [
          'The service does not include AC repair, installation, refrigerant or gas refill, electrical diagnostics, parts replacement or guaranteed resolution of every airflow problem.',
          'When the technician sees an issue outside the cleaning scope, the customer is told clearly so the cleaning job is not confused with repair work.',
        ],
        ar: [
          'لا تشمل الخدمة إصلاح المكيفات أو تركيبها أو تعبئة غاز التبريد أو الغاز أو التشخيص الكهربائي أو استبدال القطع أو ضمان حل كل مشكلة في تدفق الهواء.',
          'عندما يلاحظ الفني مشكلة خارج نطاق التنظيف، يُبلَّغ العميل بوضوح حتى لا يختلط عمل التنظيف بأعمال الإصلاح.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить состав работ по AC', en: 'Confirm AC cleaning scope before booking', ar: 'أكّد نطاق تنظيف المكيف قبل الحجز' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: { ru: 'Сколько стоит чистка кондиционеров?', en: 'How much does central AC cleaning cost?', ar: 'كم تبلغ تكلفة تنظيف المكيف المركزي؟' },
      a: {
        ru: 'Актуальные пакеты: студия / 1 кондиционер - AED 950, 1 спальня / 2 кондиционера - AED 2150, 2 спальни / 3 кондиционера - AED 2900, 3 спальни / 4 кондиционера - AED 3600, 4 спальни / 5 кондиционеров - AED 4250.',
        en: 'Central AC cleaning is quoted after system type, property type, number of units or zones, access and scope are reviewed. Send photos and system details for a package estimate.',
        ar: 'يتم تسعير تنظيف المكيف المركزي بعد مراجعة نوع النظام ونوع العقار وعدد الوحدات أو المناطق وإمكانية الوصول والنطاق. أرسل الصور وتفاصيل النظام للحصول على تقدير الباقة.',
      },
    },
    {
      q: { ru: 'Вы чистите центральные и канальные кондиционеры?', en: 'What is included in standard AC cleaning?', ar: 'ما الذي يشمله تنظيف المكيف العادي؟' },
      a: {
        ru: 'Да, мы чистим именно центральные и канальные кондиционеры. Тип системы, количество блоков и доступ нужно уточнить до расчета.',
        en: 'Standard AC cleaning can cover filters, ducts, grilles, drain pans, diffusers and cleaning treatment within the confirmed cleaning scope. Deeper cleaning is quoted after system access and condition are reviewed.',
        ar: 'يمكن أن يشمل التنظيف العادي للمكيف الفلاتر والقنوات والشبكات وصواني التصريف والموزعات ومعالجة التنظيف ضمن نطاق التنظيف المؤكد. أما التنظيف العميق فيُسعّر بعد مراجعة إمكانية الوصول إلى النظام وحالته.',
      },
    },
    {
      q: { ru: 'Вы ремонтируете кондиционеры или заправляете фреон?', en: 'Do you repair AC units or refill gas?', ar: 'هل تقومون بإصلاح المكيفات أو تعبئة الغاز؟' },
      a: {
        ru: 'Нет. Мы занимаемся только чисткой кондиционеров. Ремонт, установка, замена деталей и заправка фреоном в услугу не входят.',
        en: 'No. This service covers AC cleaning only. It does not offer repair, installation, gas refill, freon refill, electrical diagnostics or parts replacement.',
        ar: 'لا. تغطي هذه الخدمة تنظيف المكيفات فقط. ولا تشمل الإصلاح أو التركيب أو تعبئة الغاز أو تعبئة الفريون أو التشخيص الكهربائي أو استبدال القطع.',
      },
    },
    {
      q: { ru: 'Поможет ли чистка убрать запах из кондиционера?', en: 'Can AC cleaning remove bad smells?', ar: 'هل يمكن لتنظيف المكيف إزالة الروائح الكريهة؟' },
      a: {
        ru: 'Чистка может помочь, если запах связан с загрязнением доступных компонентов. Если причина техническая, может потребоваться отдельная HVAC-диагностика или ремонт.',
        en: 'Cleaning can help address dust and buildup that may contribute to stale smells, but it cannot guarantee resolution of every odor. Some smells may be related to drainage, mechanical, moisture or repair issues outside cleaning scope.',
        ar: 'يمكن أن يساعد التنظيف في معالجة الغبار والترسبات التي قد تسهم في الروائح غير المنعشة، لكنه لا يضمن إزالة كل رائحة. فبعض الروائح قد ترتبط بمشكلات في التصريف أو مشكلات ميكانيكية أو رطوبة أو إصلاح خارج نطاق التنظيف.',
      },
    },
    {
      q: { ru: 'Нужно ли чистить воздуховоды ради здоровья?', en: 'Do you clean split AC?', ar: 'هل تنظفون مكيفات السبليت؟' },
      a: {
        ru: 'Не стоит давать медицинские обещания. Корректнее говорить, что чистка убирает загрязнения с доступных компонентов и может улучшить ощущение свежести и комфорта, но не является лечением или гарантией здоровья.',
        en: 'Split AC can be accepted when it fits the confirmed cleaning scope, but this service focuses on central and ducted AC cleaning. Send system photos so the manager can route the inquiry correctly.',
        ar: 'يمكن قبول مكيفات السبليت عندما تتناسب مع نطاق التنظيف المؤكد، لكن هذه الخدمة تركّز على تنظيف المكيفات المركزية ومكيفات القنوات. أرسل صور النظام حتى يتمكن المدير من توجيه الطلب بشكل صحيح.',
      },
    },
  ],

  related: [
    {
      slug: 'curtain-cleaning',
      title: { ru: 'Чистка штор и жалюзи', en: 'Curtain & Blinds Cleaning', ar: 'تنظيف الستائر والبليندات' },
      text: {
        ru: 'Для текстиля, который собирает пыль от кондиционера и окон.',
        en: 'Useful when dust buildup affects curtains and indoor surfaces.',
        ar: 'مفيد عندما يؤثر تراكم الغبار على الستائر والأسطح الداخلية.',
      },
    },
    {
      slug: 'window-cleaning',
      title: { ru: 'Мойка окон', en: 'Internal Window Cleaning', ar: 'تنظيف النوافذ الداخلية' },
      text: {
        ru: 'Для общего освежения квартиры, виллы или офиса.',
        en: 'Useful for broader apartment or villa refresh requests.',
        ar: 'مفيد لطلبات تجديد الشقة أو الفيلا بشكل أوسع.',
      },
    },
  ],
};
