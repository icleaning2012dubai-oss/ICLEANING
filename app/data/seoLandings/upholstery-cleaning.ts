import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Upholstery & Soft Furniture Cleaning" + RU "Химчистка мягкой мебели".
// Section IDs are stable anchors and must be preserved.
export const upholsteryCleaning: SeoLanding = {
  slug: 'upholstery-cleaning',
  canonicalId: 'upholstery_cleaning',
  serviceEntity: 'upholstery_cleaning',
  image: '/images/sofa/chear.webp',

  meta: {
    title: {
      ru: 'Химчистка мягкой мебели в Дубае | Стулья, кресла, офисная мебель',
      en: 'Upholstery Cleaning Dubai | Chairs, Armchairs & Soft Furniture',
      ar: 'تنظيف المفروشات في دبي | الكراسي والفوتيهات والأثاث الوثير',
    },
    description: {
      ru: 'Профессиональная чистка мягкой мебели в Дубае: стулья, кресла, пуфы, офисные кресла и обивка на дому. Предварительная цена по фото в WhatsApp.',
      en: 'Upholstery cleaning in Dubai for chairs, armchairs, ottomans and soft furniture. At-home and commercial service, stains, odors and photo quotes.',
      ar: 'تنظيف المفروشات في دبي للكراسي والفوتيهات والبوفات والأثاث الوثير. خدمة منزلية وتجارية، إزالة البقع والروائح، وتسعير مبدئي حسب الصور.',
    },
  },

  hero: {
    h1: {
      ru: 'Химчистка мягкой мебели в Дубае',
      en: 'Upholstery & Soft Furniture Cleaning in Dubai',
      ar: 'تنظيف المفروشات والأثاث الوثير في دبي',
    },
    paragraph: {
      ru: 'Кресла, стулья, пуфы и офисная мебель каждый день собирают пыль, пот, запахи, следы рук, еды и напитков. Мы оцениваем материал, пятна и состояние обивки, а затем подбираем аккуратный способ чистки на месте.',
      en: 'Upholstery cleaning covers the soft furniture around the sofa: armchairs, dining chairs, office chairs, ottomans, benches and fabric seating. These items often look small, but they collect the same dust, sweat, food marks and pet hair as larger furniture. iCleaning checks the material and condition before choosing a suitable cleaning method.',
      ar: 'يشمل تنظيف المفروشات الأثاث الوثير المحيط بالأريكة: الفوتيهات وكراسي الطعام والكراسي المكتبية والبوفات والمقاعد الوثيرة. غالبًا ما تبدو هذه القطع صغيرة، لكنها تجمع الغبار والعرق وآثار الطعام وشعر الحيوانات مثل الأثاث الأكبر تمامًا. تفحص iCleaning المادة والحالة قبل اختيار طريقة التنظيف المناسبة.',
    },
    miniFacts: [
      { ru: 'Цена: стулья/кресла - от AED 35, стандартные диваны - от AED 60, кожа - от AED 80', en: 'Chairs and armchairs from AED 35', ar: 'الكراسي والفوتيهات ابتداءً من AED 35' },
      { ru: 'На дому', en: 'Standard upholstered sofas from AED 60', ar: 'الأرائك القماشية القياسية ابتداءً من AED 60' },
      { ru: 'Фотооценка', en: 'Leather sofas from AED 80', ar: 'الأرائك الجلدية ابتداءً من AED 80' },
      { ru: 'Для дома и офиса', en: 'At-home and commercial upholstery cleaning', ar: 'تنظيف المفروشات في المنازل والمنشآت التجارية' },
      { ru: 'Стулья и кресла', en: 'Material check before cleaning', ar: 'فحص المادة قبل التنظيف' },
      { ru: 'Реалистичная оценка пятен', en: 'Realistic stain assessment', ar: 'تقييم واقعي للبقع' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Get an upholstery cleaning quote', ar: 'احصل على عرض سعر لتنظيف المفروشات' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Заказать выезд специалиста', en: 'Send furniture photos', ar: 'أرسل صور الأثاث' },
      event: 'send_photo_for_price',
      href: '#upholstery-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Стулья и кресла', en: 'Chairs and armchairs', ar: 'الكراسي والفوتيهات' },
      scope: { ru: 'мягкая мебель', en: 'soft furniture', ar: 'أثاث وثير' },
      price: { ru: 'AED 35', en: 'from AED 35', ar: 'ابتداءً من AED 35' },
      note: { ru: 'стартовая цена', en: 'starting price', ar: 'السعر الابتدائي' },
    },
    {
      label: { ru: 'Стандартные диваны', en: 'Standard upholstered sofas', ar: 'الأرائك القماشية القياسية' },
      scope: { ru: 'тканевая обивка', en: 'fabric upholstery', ar: 'تنجيد قماشي' },
      price: { ru: 'AED 60', en: 'from AED 60', ar: 'ابتداءً من AED 60' },
      note: { ru: 'стартовая цена', en: 'starting price', ar: 'السعر الابتدائي' },
    },
    {
      label: { ru: 'Кожаная мебель', en: 'Leather sofas', ar: 'الأرائك الجلدية' },
      scope: { ru: 'чистка и кондиционер', en: 'cleaning and conditioning', ar: 'تنظيف وترطيب' },
      price: { ru: 'AED 80', en: 'from AED 80', ar: 'ابتداءً من AED 80' },
      note: { ru: 'стартовая цена', en: 'starting price', ar: 'السعر الابتدائي' },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Химчистка мягкой мебели в Дубае',
        en: 'Upholstery cleaning for chairs, armchairs and soft furniture',
        ar: 'تنظيف المفروشات للكراسي والفوتيهات والأثاث الوثير',
      },
      body: {
        ru: [
          'Мягкая мебель часто выглядит нормально до того момента, пока на светлой обивке не появляются темные зоны, запах или пятна. Сиденья, спинки, подлокотники и подушки каждый день контактируют с одеждой, руками, едой, напитками и пылью из воздуха.',
          'Перед чисткой специалист оценивает ткань, состояние обивки, старые пятна, запахи и чувствительные элементы. После этого подбирается способ обработки: локальная пятновыводка, глубокая чистка, аккуратная обработка сидений и зон частого контакта.',
          'Для клиента это удобный формат: не нужно везти кресло или стулья в химчистку. Отправьте фото мебели, район и количество предметов - менеджер подскажет предварительную стоимость и доступный слот.',
        ],
        en: [
          'Soft furniture gets dirty in small, repetitive ways: hands on armrests, body oils on chair backs, food marks on dining seats, dust on office chairs and pet hair on favorite corners. Because these items are often lighter than sofas, people delay cleaning them until the fabric looks visibly dull.',
          'iCleaning can clean upholstered chairs, armchairs, ottomans and soft furniture at the address. The technician checks the fabric, seams, stains, cushioning and high-contact areas before starting. For commercial or multi-item jobs, photos and item counts help create a faster and more accurate estimate.',
        ],
        ar: [
          'يتّسخ الأثاث الوثير بطرق صغيرة ومتكررة: أيدٍ على المساند، وزيوت الجسم على ظهور الكراسي، وآثار طعام على مقاعد الطعام، وغبار على الكراسي المكتبية، وشعر الحيوانات في الزوايا المفضلة. ولأن هذه القطع غالبًا أخف من الأرائك، يؤجل الناس تنظيفها إلى أن يبدو القماش باهتًا بوضوح.',
          'تستطيع iCleaning تنظيف الكراسي والفوتيهات والبوفات والأثاث الوثير المنجّد في موقعك. يفحص الفني القماش والحياكة والبقع والحشوات والمناطق كثيرة الملامسة قبل البدء. وبالنسبة للأعمال التجارية أو متعددة القطع، تساعد الصور وعدد القطع في إعداد تقدير أسرع وأدق.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send upholstery photos for a quote', ar: 'أرسل صور المفروشات للحصول على عرض سعر' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'upholstery-at-home',
      h2: {
        ru: 'Химчистка мебели на дому без перевозки и лишней суеты',
        en: 'At-home upholstery cleaning for everyday furniture',
        ar: 'تنظيف المفروشات في المنزل للأثاث اليومي',
      },
      body: {
        ru: [
          'Большинство предметов мягкой мебели можно чистить прямо по адресу. Специалист приезжает в квартиру, виллу, офис или апартамент, осматривает обивку, уточняет зоны загрязнения и готовит рабочее место.',
          'На месте обрабатываются сиденья, спинки, подлокотники, мягкие вставки и другие зоны, которые входят в согласованный заказ. Важно заранее показать пятна и описать запахи: старое пятно, моча животного или след от бытовой химии требуют разного подхода.',
          'Если материал выглядит деликатным или есть риск для цвета, специалист не начинает агрессивную чистку вслепую. Безопаснее объяснить ограничения и подобрать более аккуратный способ обработки.',
        ],
        en: [
          'At-home upholstery cleaning is practical when furniture is already in use around the apartment, villa or office. The team comes to the address, checks each item and works around the space instead of asking the customer to transport chairs or armchairs.',
          'Before cleaning, the technician reviews material, stain type, wear, seams and whether the item has delicate trim, buttons or decorative details. This is important because a dining chair, velvet-style armchair and office chair may all need slightly different handling.',
        ],
        ar: [
          'يُعد تنظيف المفروشات في المنزل خيارًا عمليًا عندما يكون الأثاث مستخدمًا بالفعل داخل الشقة أو الفيلا أو المكتب. يأتي الفريق إلى موقعك، ويفحص كل قطعة، ويعمل ضمن المساحة بدلًا من مطالبة العميل بنقل الكراسي أو الفوتيهات.',
          'قبل التنظيف، يراجع الفني المادة ونوع البقعة ودرجة التآكل والحياكة وما إذا كانت القطعة تحتوي على حواف رقيقة أو أزرار أو تفاصيل زخرفية. وهذا مهم لأن كرسي الطعام والفوتيه المخملي والكرسي المكتبي قد تحتاج جميعها إلى معالجة مختلفة قليلًا.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Book at-home upholstery cleaning', ar: 'احجز تنظيف المفروشات في المنزل' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'commercial-upholstery-cleaning',
      h2: {
        ru: 'Химчистка офисной мебели, кресел и стульев для коммерческих объектов',
        en: 'Commercial upholstery cleaning for offices, restaurants and hospitality',
        ar: 'تنظيف المفروشات التجاري للمكاتب والمطاعم وقطاع الضيافة',
      },
      body: {
        ru: [
          'Коммерческому клиенту нужен не красивый слоган, а понятный расчет: сколько кресел, стульев, диванов или мягких зон, где находится объект и когда можно работать без помех для команды или гостей.',
          'Для офисной мебели важно учитывать не только пятна, но и потемневшие сиденья, подлокотники, запахи, пыль и регулярную нагрузку. Менеджер может запросить фото, список предметов и удобное время, чтобы подготовить расчет и план визита.',
        ],
        en: [
          'Restaurants, offices, hotels, clinics and salons often have dozens of upholstered seats. One dirty chair may be ignored at home, but in a public-facing space stained seating can affect how customers judge the whole business.',
          'For commercial upholstery cleaning, send item count, photos, material, location, preferred timing and whether the work can be done in sections. This helps the team plan labor, equipment, drying time and access without disrupting the business.',
        ],
        ar: [
          'كثيرًا ما تضم المطاعم والمكاتب والفنادق والعيادات وصالونات التجميل عشرات المقاعد المنجّدة. قد يُتغاضى عن كرسي متسخ واحد في المنزل، لكن في مكان يستقبل الجمهور قد تؤثر المقاعد المتّسخة في نظرة العملاء إلى المنشأة بأكملها.',
          'لتنظيف المفروشات التجاري، أرسل عدد القطع والصور والمادة والموقع والوقت المفضل وما إذا كان يمكن تنفيذ العمل على مراحل. يساعد ذلك الفريق في تخطيط العمالة والمعدات ووقت التجفيف وسهولة الوصول دون تعطيل سير العمل.',
        ],
      },
      cta: {
        text: { ru: 'Запросить расчет для объекта', en: 'Request a commercial upholstery quote', ar: 'اطلب عرض سعر تجاري للمفروشات' },
        event: 'commercial_quote_request',
        href: 'whatsapp',
      },
    },
    {
      id: 'upholstery-dubai',
      h2: {
        ru: 'Чистка мягкой мебели в Дубае с учетом пыли, песка и постоянного кондиционера',
        en: 'Upholstery cleaning in Dubai homes and businesses',
        ar: 'تنظيف المفروشات في منازل ومنشآت دبي',
      },
      body: {
        ru: [
          'Даже если мебелью аккуратно пользуются, песок и мелкая пыль постепенно оседают на обивке, забиваются в швы и делают ткань более тусклой. В помещениях с постоянным кондиционером запахи и сухая пыль могут задерживаться в мягких поверхностях дольше, чем кажется.',
          'Профессиональная чистка помогает освежить внешний вид и убрать загрязнения из зон, куда обычный пылесос или влажная салфетка не добираются. Особенно это заметно на светлых стульях, офисных креслах, подлокотниках и мебели в зонах ожидания.',
          'Отправьте район в Дубае и фото предметов - менеджер уточнит доступность, цену и формат работы по вашему адресу.',
        ],
        en: [
          'Dubai furniture deals with indoor AC airflow, fine dust, sand from entrances and frequent indoor entertaining. Upholstered chairs and armchairs can collect this gradually, especially in dining rooms, waiting areas and family spaces.',
          'Professional upholstery cleaning helps refresh frequently touched furniture at the address. The technician can focus on dirty seat centers, armrests, headrests, corners and stains that ordinary vacuuming does not fully address.',
        ],
        ar: [
          'يتعرض الأثاث في دبي لتيار هواء المكيفات والغبار الناعم والرمال القادمة من المداخل والاستضافة المنزلية المتكررة. ويمكن للكراسي والفوتيهات المنجّدة أن تجمع هذا تدريجيًا، خاصة في غرف الطعام ومناطق الانتظار والمساحات العائلية.',
          'يساعد التنظيف الاحترافي للمفروشات في تجديد الأثاث كثير الاستخدام في موقعك. ويمكن للفني التركيز على مراكز المقاعد المتّسخة والمساند ومساند الرأس والزوايا والبقع التي لا يعالجها الشفط العادي بالكامل.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check upholstery cleaning availability in Dubai', ar: 'تحقق من توفر خدمة تنظيف المفروشات في دبي' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'upholstery-materials-methods',
      h2: {
        ru: 'Почему обивку нельзя чистить одним универсальным средством',
        en: 'Upholstery material and method selection',
        ar: 'اختيار مادة المفروشات وطريقة التنظيف',
      },
      body: {
        ru: [
          'Микрофибра, флок, велюр, плотная ткань, искусственная кожа и кожаная мебель требуют разного обращения. Визуально кресло может выглядеть простым, но неправильное средство способно оставить разводы, липкий остаток или изменить фактуру поверхности.',
          'Перед чисткой специалист смотрит материал, плотность обивки, устойчивость цвета, старые пятна, потертости и декоративные элементы. После этого выбирается подходящий режим обработки и уровень влажности.',
          'Не стоит обещать «подходит для всех материалов». Корректнее: метод подбирается после оценки, а по деликатным материалам менеджер заранее уточняет ограничения.',
        ],
        en: [
          'Upholstery can be made from many fabrics and finishes, and the label is not always visible. A heavy woven chair, a soft velvet-style armchair and a synthetic office seat can all react differently to moisture, agitation and cleaning products.',
          'The technician needs to inspect fabric texture, dye stability risk, stains, seams, decorative details and previous cleaning attempts before selecting the cleaning route. The workflow can include dry vacuuming, spot treatment, shampooing and extraction where suitable, followed by a final check.',
        ],
        ar: [
          'يمكن أن تُصنع المفروشات من أنواع كثيرة من الأقمشة والتشطيبات، وغالبًا لا تكون بطاقة العناية مرئية. فالكرسي المنسوج الثقيل والفوتيه المخملي الناعم والمقعد المكتبي الصناعي قد يتفاعل كل منها بشكل مختلف مع الرطوبة والفرك ومنتجات التنظيف.',
          'يحتاج الفني إلى فحص ملمس القماش ومخاطر ثبات الصبغة والبقع والحياكة والتفاصيل الزخرفية ومحاولات التنظيف السابقة قبل اختيار مسار التنظيف. وقد يتضمن العمل الشفط الجاف ومعالجة البقع الموضعية والغسل بالشامبو والاستخلاص عند الحاجة، يتبعه فحص نهائي.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Ask which method fits your furniture', ar: 'استفسر عن الطريقة المناسبة لأثاثك' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'upholstery-prices',
      h2: {
        ru: 'Цены на химчистку мягкой мебели',
        en: 'Upholstery cleaning prices and item quote',
        ar: 'أسعار تنظيف المفروشات وعرض السعر حسب القطعة',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Актуальные стартовые цены для мягкой мебели: стулья и кресла - от AED 35, стандартные диваны - от AED 60, кожаная мебель - от AED 80.',
          'На цену влияют размер, количество предметов, материал, степень загрязнения, пятна, запахи, подушки, спинка, подлокотники и декоративные элементы. Лучший маршрут - фотооценка в WhatsApp.',
        ],
        en: [
          'Confirmed upholstery pricing starts from AED 35 for chairs and armchairs. Use photo-based quoting for dining chairs, office chairs, armchairs, ottomans and mixed upholstered furniture.',
          'For larger upholstered items, use the sofa pricing cards when relevant: standard sofas from AED 60 and leather sofas from AED 80. The final quote depends on item count, size, fabric, stains and access.',
        ],
        ar: [
          'تبدأ أسعار تنظيف المفروشات المعتمدة من AED 35 للكراسي والفوتيهات. استخدم التسعير حسب الصور لكراسي الطعام والكراسي المكتبية والفوتيهات والبوفات والأثاث المنجّد المتنوع.',
          'للقطع المنجّدة الأكبر، استعن ببطاقات أسعار الأرائك عند الحاجة: الأرائك القياسية من AED 60 والأرائك الجلدية من AED 80. يعتمد العرض النهائي على عدد القطع والحجم والقماش والبقع وسهولة الوصول.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Get an upholstery price by photo', ar: 'احصل على سعر المفروشات عبر الصور' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'upholstery-stains-odors',
      h2: {
        ru: 'Пятна, запахи и следы животных на мягкой мебели',
        en: 'Upholstery stain and odor cleaning',
        ar: 'تنظيف بقع وروائح المفروشات',
      },
      body: {
        ru: [
          'Кофе, еда, пот, косметика, моча животных и детские пятна часто проходят глубже поверхности. Если сразу тереть обивку водой или бытовым пятновыводителем, можно получить разводы, закрепить запах или повредить цвет.',
          'Специалист оценивает, что именно загрязнило ткань, сколько времени прошло, была ли уже домашняя обработка и насколько глубоко мог уйти запах. После этого выбирается локальная обработка и общий способ чистки.',
          'Полное удаление сложных пятен не стоит обещать заранее. Честная формулировка сильнее: свежие загрязнения обычно поддаются лучше, старые и химически закрепленные пятна могут только осветлиться.',
        ],
        en: [
          'Upholstery stains often happen in high-contact places: food on dining chairs, makeup on armrests, coffee on office seats, pet marks on ottomans and sweat on headrests. Odors can remain even when the surface looks dry, especially if the spill reached deeper into the fabric or cushion.',
          'iCleaning can inspect the stain, ask what caused it and treat it as part of the cleaning process. The team needs to always consider the age of the stain, material and previous attempts before setting expectations.',
        ],
        ar: [
          'كثيرًا ما تظهر بقع المفروشات في المناطق كثيرة الملامسة: طعام على كراسي الطعام، ومكياج على المساند، وقهوة على المقاعد المكتبية، وآثار حيوانات على البوفات، وعرق على مساند الرأس. وقد تبقى الروائح حتى عندما يبدو السطح جافًا، خاصة إذا وصل الانسكاب إلى عمق القماش أو الحشوة.',
          'تستطيع iCleaning فحص البقعة والسؤال عن سببها ومعالجتها ضمن عملية التنظيف. ويحتاج الفريق دائمًا إلى مراعاة عمر البقعة والمادة والمحاولات السابقة قبل تحديد التوقعات.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send stain photos before booking', ar: 'أرسل صور البقع قبل الحجز' },
        event: 'stain_odor_assessment',
        href: 'whatsapp',
      },
    },
    {
      id: 'upholstery-company',
      h2: {
        ru: 'Как понять, что мебели предлагают не поверхностную мойку, а нормальную химчистку',
        en: 'Why choose iCleaning for upholstery cleaning',
        ar: 'لماذا تختار iCleaning لتنظيف المفروشات',
      },
      body: {
        ru: [
          'Сильная химчистка мебели начинается не с распылителя, а с диагностики: материал, пятна, запах, износ, цвет, швы и зоны частого контакта. Без этого мастер не понимает, где можно работать интенсивнее, а где нужен более мягкий режим.',
          'Для iCleaning важно показывать понятный маршрут: фото в WhatsApp, предварительная оценка, приезд специалиста, осмотр на месте, чистка согласованных зон и приемка результата. Такой процесс снижает тревогу клиента и повышает доверие к цене.',
        ],
        en: [
          'A good upholstery cleaning company asks for photos, material, item count, stains and location before quoting. This keeps the booking clear and helps the team choose the right route for chairs, armchairs and soft furniture.',
          'Clear communication matters as much as equipment. The customer gets a practical estimate, an at-home service plan and realistic expectations before the visit.',
        ],
        ar: [
          'تطلب شركة تنظيف مفروشات جيدة الصور والمادة وعدد القطع والبقع والموقع قبل تقديم العرض. يبقي ذلك الحجز واضحًا ويساعد الفريق في اختيار المسار المناسب للكراسي والفوتيهات والأثاث الوثير.',
          'التواصل الواضح لا يقل أهمية عن المعدات. يحصل العميل على تقدير عملي وخطة خدمة منزلية وتوقعات واقعية قبل الزيارة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Talk to iCleaning about your upholstery', ar: 'تحدث إلى iCleaning بشأن مفروشاتك' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'professional-upholstery-cleaning',
      h2: {
        ru: 'Глубокая чистка мебели, когда обычной уборки уже мало',
        en: 'Professional upholstery cleaning versus basic home cleaning',
        ar: 'التنظيف الاحترافي للمفروشات مقابل التنظيف المنزلي البسيط',
      },
      body: {
        ru: [
          'Глубокая чистка нужна, когда сиденья потемнели, обивка стала липкой на ощупь, появился запах или пятна уже не уходят после обычной уборки. Это частая история для кресел, офисных стульев, пуфов и мебели в гостиных.',
          'Профессиональный подход учитывает материал и состояние мебели, а не просто добавляет больше воды. Задача - очистить загрязнения, обработать пятна и по возможности убрать остатки средств, чтобы ткань не собирала новую пыль быстрее.',
          'Часто проще один раз заказать нормальную чистку, чем несколько раз пробовать бытовые средства и в итоге только закрепить пятно или испортить обивку.',
        ],
        en: [
          'Home sprays and wet cloths can help with small fresh marks, but they do not always remove soil from the fabric structure. Scrubbing can distort pile, push stain deeper or leave a visible ring. Rented machines may also leave too much moisture if the item is not suitable for that level of wet cleaning.',
          'Professional upholstery cleaning starts with a material and condition check. The technician can decide where to pre-treat, how much moisture to use, whether extraction is appropriate and how to handle sensitive seams or decorative details.',
        ],
        ar: [
          'قد تساعد البخاخات المنزلية والقطع القماشية المبللة في إزالة الآثار الصغيرة الطازجة، لكنها لا تزيل دائمًا الأوساخ من بنية القماش. فالفرك قد يشوّه الوبر أو يدفع البقعة إلى العمق أو يترك حلقة مرئية. كما قد تترك الآلات المستأجرة رطوبة زائدة إذا كانت القطعة غير مناسبة لهذا المستوى من التنظيف الرطب.',
          'يبدأ التنظيف الاحترافي للمفروشات بفحص المادة والحالة. ويمكن للفني تحديد المناطق التي تحتاج معالجة أولية، ومقدار الرطوبة المستخدمة، وما إذا كان الاستخلاص مناسبًا، وكيفية التعامل مع الحياكة الحساسة أو التفاصيل الزخرفية.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Ask before trying stronger chemicals', ar: 'استشرنا قبل تجربة مواد كيميائية أقوى' },
        event: 'whatsapp_get_price_section',
        href: 'whatsapp',
      },
    },
    {
      id: 'upholstery-scope-and-limits',
      h2: {
        ru: 'Что входит в чистку мягкой мебели и какие ограничения важно знать',
        en: 'Upholstery cleaning scope and service limits',
        ar: 'نطاق خدمة تنظيف المفروشات وحدودها',
      },
      body: {
        ru: [
          'Если у вас кожаная мебель, детское кресло, съемные чехлы, декоративные подушки или необычный материал, просто пришлите фото. Менеджер посмотрит и подтвердит, можно ли взять предмет в работу, еще до заказа.',
        ],
        en: [
          'This upholstery service covers soft furniture such as chairs, armchairs, ottomans, dining chairs, office chairs and similar upholstered items. Sofas, mattresses and curtains are handled through their own service pages.',
          'The quote needs item photos, quantity, material if known, stains and location. This keeps mixed furniture requests clear and avoids placing every soft item under one vague service.',
        ],
        ar: [
          'تغطي خدمة المفروشات هذه الأثاث الوثير مثل الكراسي والفوتيهات والبوفات وكراسي الطعام والكراسي المكتبية والقطع المنجّدة المماثلة. أما الأرائك والمراتب والستائر فتُعالَج عبر صفحات الخدمات الخاصة بها.',
          'يتطلب العرض صور القطع وعددها والمادة إن كانت معروفة والبقع والموقع. يبقي ذلك طلبات الأثاث المتنوع واضحة ويتجنب وضع كل قطعة وثيرة تحت خدمة واحدة غامضة.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить, входит ли ваш предмет', en: 'Confirm whether your item is upholstery or another service', ar: 'تأكد ما إذا كانت قطعتك ضمن المفروشات أم خدمة أخرى' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: { ru: 'Сколько стоит химчистка мягкой мебели?', en: 'What furniture is included in upholstery cleaning?', ar: 'ما الأثاث المشمول في تنظيف المفروشات؟' },
      a: {
        ru: 'Актуальные ориентиры: стулья и кресла - AED 35, стандартные диваны - AED 60, кожаная мебель - AED 80. Точная цена зависит от размера, материала, количества предметов и состояния обивки.',
        en: 'The service covers chairs, armchairs, ottomans, dining chairs, office chairs, benches and similar soft furniture. Sofas, mattresses and curtains are routed to their own services.',
        ar: 'تشمل الخدمة الكراسي والفوتيهات والبوفات وكراسي الطعام والكراسي المكتبية والمقاعد الطويلة والأثاث الوثير المماثل. أما الأرائك والمراتب والستائر فتُوجَّه إلى الخدمات الخاصة بها.',
      },
    },
    {
      q: { ru: 'Можно ли почистить мебель на дому?', en: 'Do you clean upholstery at home?', ar: 'هل تنظّفون المفروشات في المنزل؟' },
      a: {
        ru: 'Да, большинство предметов мягкой мебели чистятся на месте. Специалист приезжает по адресу, оценивает материал и загрязнения, затем выполняет согласованную обработку.',
        en: 'Yes. Upholstery cleaning is usually done at the address. The technician checks the material, stains and condition of each item before cleaning.',
        ar: 'نعم. عادةً ما يُجرى تنظيف المفروشات في موقعك. يفحص الفني المادة والبقع وحالة كل قطعة قبل التنظيف.',
      },
    },
    {
      q: { ru: 'Удаляются ли запахи и пятна от животных?', en: 'How much does upholstery cleaning cost?', ar: 'كم تبلغ تكلفة تنظيف المفروشات؟' },
      a: {
        ru: 'Часть органических пятен и запахов можно убрать или заметно ослабить, но результат зависит от возраста загрязнения, материала и глубины проникновения. Полное удаление заранее не обещается.',
        en: 'Upholstery cleaning is quoted by item type, size, quantity, material and condition. Send photos and item count for a preliminary estimate.',
        ar: 'يُحتسب سعر تنظيف المفروشات حسب نوع القطعة وحجمها وعددها والمادة والحالة. أرسل الصور وعدد القطع للحصول على تقدير مبدئي.',
      },
    },
    {
      q: { ru: 'Вы чистите офисные кресла и стулья?', en: 'Can you clean office chairs and restaurant seating?', ar: 'هل تنظّفون الكراسي المكتبية ومقاعد المطاعم؟' },
      a: {
        ru: 'Да, мы чистим офисную мебель и работаем с коммерческими объектами. Для расчета лучше отправить количество предметов, фото, район и удобное время.',
        en: 'Yes, commercial upholstery cleaning can be quoted for offices, restaurants, hotels, clinics and similar spaces. For a faster quote, send item count, photos, material and preferred timing.',
        ar: 'نعم، يمكن تقديم عروض تنظيف المفروشات التجاري للمكاتب والمطاعم والفنادق والعيادات والمساحات المماثلة. للحصول على عرض أسرع، أرسل عدد القطع والصور والمادة والوقت المفضل.',
      },
    },
    {
      q: { ru: 'Чем профессиональная чистка отличается от домашней?', en: 'Will upholstery cleaning remove all odors?', ar: 'هل يزيل تنظيف المفروشات كل الروائح؟' },
      a: {
        ru: 'Профессиональная чистка начинается с оценки материала и пятен. Это помогает подобрать метод и снизить риск разводов, липкого остатка, лишней влаги или повреждения цвета.',
        en: 'It can improve many common odors, but full odor removal depends on the source, depth, material and age of the contamination. The team needs to inspect the item and explain expected results before cleaning.',
        ar: 'يمكنه تحسين كثير من الروائح الشائعة، لكن الإزالة الكاملة للرائحة تعتمد على المصدر والعمق والمادة وعمر التلوث. يحتاج الفريق إلى فحص القطعة وشرح النتائج المتوقعة قبل التنظيف.',
      },
    },
  ],

  related: [
    {
      slug: 'sofa-cleaning',
      title: { ru: 'Химчистка диванов', en: 'Sofa Cleaning', ar: 'تنظيف الأرائك' },
      text: {
        ru: 'Для отдельной страницы по диванам и коже.',
        en: 'Use this for larger sofas and couches.',
        ar: 'استخدم هذا للأرائك والكنب الأكبر حجمًا.',
      },
    },
    {
      slug: 'mattress-cleaning',
      title: { ru: 'Химчистка матрасов', en: 'Mattress Cleaning', ar: 'تنظيف المراتب' },
      text: {
        ru: 'Для матрасов на дому.',
        en: 'Useful for customers booking home textile cleaning together.',
        ar: 'مفيد للعملاء الذين يحجزون تنظيف المنسوجات المنزلية معًا.',
      },
    },
    {
      slug: 'curtain-cleaning',
      title: { ru: 'Чистка ковров', en: 'Curtain & Blinds Cleaning', ar: 'تنظيف الستائر والبراويز' },
      text: {
        ru: 'Для текстиля на полу.',
        en: 'Useful for room refresh requests.',
        ar: 'مفيد لطلبات تجديد الغرفة.',
      },
    },
  ],
};
