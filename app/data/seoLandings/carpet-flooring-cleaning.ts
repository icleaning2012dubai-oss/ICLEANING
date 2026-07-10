import type { SeoLanding } from './types';

// Source: SEO handoff - EN "Carpet Flooring / Kovrolin Cleaning" + RU "Чистка ковролина и коврового покрытия".
// Carpet flooring is ON-SITE ONLY (fixed wall-to-wall) - no pickup/return on this page.
// Section IDs are stable anchors and must be preserved.
export const carpetFlooringCleaning: SeoLanding = {
  slug: 'carpet-flooring-cleaning',
  canonicalId: 'carpet_flooring_cleaning',
  serviceEntity: 'carpet_flooring_cleaning',
  image: '/images/service/kovrolin.webp',

  meta: {
    title: {
      ru: 'Чистка ковролина в Дубае - ковровое покрытие на дому и в офисе | iCleaning',
      en: 'Carpet Flooring Cleaning Dubai | Wall-to-Wall Carpet Cleaning',
      ar: 'تنظيف السجاد المثبت في دبي | تنظيف الموكيت من الحائط إلى الحائط',
    },
    description: {
      ru: 'Профессиональная чистка ковролина и коврового покрытия в Дубае на месте. Для офисов, вилл, коридоров и зон высокой проходимости.',
      en: 'On-site carpet flooring cleaning in Dubai for apartments, offices, villas and commercial spaces. Traffic lanes, dust, sand and stains treated professionally.',
      ar: 'تنظيف الموكيت المثبت في الموقع بدبي للشقق والمكاتب والفلل والمساحات التجارية. معالجة احترافية لممرات المرور والغبار والرمال والبقع.',
    },
  },

  hero: {
    h1: {
      ru: 'Чистка ковролина и коврового покрытия в Дубае',
      en: 'Carpet Flooring Cleaning in Dubai',
      ar: 'تنظيف الموكيت والسجاد المثبت في دبي',
    },
    paragraph: {
      ru: 'Ковролин нельзя свернуть и отвезти на фабрику - его чистят прямо на объекте. iCleaning оценивает покрытие, проходные зоны, пятна и условия работы, чтобы подобрать подходящий способ обработки.',
      en: 'Carpet flooring cannot be rolled up, collected and cleaned like a rug. It is fixed into the room, so the service needs a different plan: on-site inspection, furniture-aware workflow, careful moisture control and a method that fits the surface, foot traffic and condition of the space.',
      ar: 'لا يمكن لف الموكيت المثبت وجمعه وتنظيفه مثل السجادة، فهو مثبت في الغرفة، لذا تتطلب الخدمة خطة مختلفة: فحص في الموقع، وسير عمل يراعي الأثاث، وتحكم دقيق في الرطوبة، وأسلوب يناسب السطح وحركة المرور وحالة المكان.',
    },
    miniFacts: [
      { ru: 'Цена: расчет по фото, видео или площади объекта', en: 'Fixed carpet flooring from AED 25 per m2', ar: 'الموكيت المثبت يبدأ من AED 25 للمتر المربع' },
      { ru: 'Чистка только на месте', en: 'On-site only for apartments, villas and offices', ar: 'في الموقع فقط للشقق والفلل والمكاتب' },
      { ru: 'Для офисов и вилл', en: 'Traffic-lane and sand buildup focus', ar: 'التركيز على ممرات المرور وتراكم الرمال' },
      { ru: 'Расчет по фото или площади', en: 'Quote by area and condition', ar: 'عرض السعر حسب المساحة والحالة' },
      { ru: 'Без вывоза', en: 'Fixed wall-to-wall carpet, cleaned in place', ar: 'موكيت مثبت من الحائط إلى الحائط، يُنظّف في مكانه' },
    ],
    primaryCta: {
      text: { ru: 'Отправить фото и получить предварительную цену', en: 'Book on-site carpet flooring cleaning', ar: 'احجز تنظيف الموكيت في الموقع' },
      event: 'whatsapp_get_price_hero',
      href: 'whatsapp',
    },
    secondaryCta: {
      text: { ru: 'Запросить расчет по площади', en: 'Request a quote for your space', ar: 'اطلب عرض سعر لمساحتك' },
      event: 'send_photo_for_price',
      href: '#carpet-flooring-prices',
    },
  },

  priceCards: [
    {
      label: { ru: 'Ковролин (ковровое покрытие)', en: 'Installed carpet flooring', ar: 'الموكيت المثبت' },
      scope: { ru: 'фиксированное покрытие, чистка на месте', en: 'fixed wall-to-wall, cleaned on site', ar: 'موكيت مثبت من الحائط إلى الحائط، يُنظّف في الموقع' },
      price: { ru: 'от AED 25 / м²', en: 'from AED 25 / m²', ar: 'من AED 25 / م²' },
      note: {
        ru: 'Расчет по фото, видео или площади объекта; финальная цена - после проверки метража и доступа.',
        en: 'Final quote by room area, access and condition; on-site only - no pickup or delivery.',
        ar: 'العرض النهائي حسب مساحة الغرفة وسهولة الوصول والحالة؛ في الموقع فقط - بدون استلام أو توصيل.',
      },
    },
  ],

  sections: [
    {
      id: 'page-root',
      h2: {
        ru: 'Чистка ковролина и коврового покрытия на месте',
        en: 'On-site carpet flooring cleaning for fixed carpet surfaces',
        ar: 'تنظيف الموكيت في الموقع للأسطح المثبتة',
      },
      body: {
        ru: [
          'Ковролин живет иначе, чем обычный ковер. По нему ходят каждый день, он вмонтирован в пол и собирает песок, пыль, следы обуви и пятна в проходных местах.',
          'iCleaning чистит ковролин на адресе клиента: специалист оценивает покрытие, загрязнения, зоны высокой проходимости и условия работы. После этого подбирается обработка, которая подходит для фиксированной поверхности.',
        ],
        en: [
          'Wall-to-wall carpet flooring takes the weight of daily movement: shoes, sand, office chairs, children, pets and spilled drinks. Over time, high-traffic lanes become darker than the rest of the room, and vacuuming alone cannot always lift soil that has settled deeper into the fibers.',
          'iCleaning cleans fixed carpet flooring on site. The technician checks the area, carpet condition, visible stains, access, furniture situation and drying conditions before choosing the cleaning workflow. This is different from loose rug cleaning because the flooring stays in place and needs controlled work inside the property.',
        ],
        ar: [
          'يتحمل الموكيت المثبت من الحائط إلى الحائط عبء الحركة اليومية: الأحذية والرمال وكراسي المكاتب والأطفال والحيوانات الأليفة والمشروبات المسكوبة. ومع مرور الوقت تصبح ممرات المرور المزدحمة أغمق من بقية الغرفة، ولا يستطيع الشفط وحده دائمًا إزالة الأوساخ التي استقرت في أعماق الألياف.',
          'تقوم iCleaning بتنظيف الموكيت المثبت في الموقع. يفحص الفني المساحة وحالة الموكيت والبقع الظاهرة وسهولة الوصول ووضع الأثاث وظروف التجفيف قبل اختيار سير عمل التنظيف. ويختلف هذا عن تنظيف السجاد المتحرك لأن الموكيت يبقى في مكانه ويتطلب عملًا مدروسًا داخل العقار.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send room photos for an on-site quote', ar: 'أرسل صور الغرفة للحصول على عرض سعر في الموقع' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-flooring-at-home',
      h2: {
        ru: 'Чистка ковролина на дому и на объекте',
        en: 'Carpet flooring cleaning at home and on site',
        ar: 'تنظيف الموكيت في المنزل وفي الموقع',
      },
      body: {
        ru: [
          'Ковровое покрытие чистится на месте: в квартире, вилле, офисе, коридоре, шоуруме или коммерческом помещении. Специалист приезжает по адресу, оценивает площадь, проходимость, пятна, состояние покрытия и доступ к зоне работы.',
          'Такой формат удобен для объектов, где покрытие закреплено и его невозможно вывезти на фабрику. Важно заранее отправить фото, примерную площадь и указать, есть ли мебель, пятна, запахи или зоны с высокой проходимостью.',
        ],
        en: [
          'Carpet flooring is cleaned in place: in apartments, villas, offices, corridors, showrooms and commercial spaces. The technician comes to the address and checks the area, foot traffic, stains, carpet condition and access to the working zone.',
          'This format suits properties where the carpet is fixed and cannot be taken to a factory. It helps to send photos, the approximate size and a note about furniture, stains, odors or high-traffic lanes before booking.',
        ],
        ar: [
          'يُنظّف الموكيت في مكانه: في الشقق والفلل والمكاتب والممرات وصالات العرض والمساحات التجارية. يأتي الفني إلى العنوان ويفحص المساحة وحركة المرور والبقع وحالة الموكيت وسهولة الوصول إلى منطقة العمل.',
          'يناسب هذا التنسيق العقارات التي يكون فيها الموكيت مثبتًا ولا يمكن نقله إلى المصنع. ومن المفيد إرسال الصور والمساحة التقريبية وملاحظة عن الأثاث والبقع والروائح أو ممرات المرور المزدحمة قبل الحجز.',
        ],
      },
      cta: {
        text: { ru: 'Заказать выезд мастера', en: 'Book an on-site technician visit', ar: 'احجز زيارة فني إلى الموقع' },
        event: 'request_home_visit',
        href: 'whatsapp',
      },
    },
    {
      id: 'commercial-carpet-flooring-cleaning',
      h2: {
        ru: 'Чистка ковролина для офисов и коммерческих помещений',
        en: 'Commercial carpet flooring cleaning for offices and busy spaces',
        ar: 'تنظيف الموكيت التجاري للمكاتب والمساحات المزدحمة',
      },
      body: {
        ru: [
          'Для офисов, шоурумов, коридоров, ресепшенов и коммерческих объектов ковролин - часть первого впечатления. Если покрытие потемнело дорожками, даже чистый интерьер выглядит уставшим.',
          'Коммерческому клиенту нужен понятный расчет: площадь, состояние, доступ, график, возможные ограничения по времени и зонам. iCleaning может оценить объект по фото или видео и согласовать формат работ.',
        ],
        en: [
          'In offices, clinics, showrooms and shared workspaces, carpet flooring starts to show traffic lanes quickly. Reception areas, corridors, desk zones and meeting rooms collect dust, sand and marks from shoes and wheels.',
          'For commercial spaces, send photos, approximate square meters, business type, access hours and the areas that need special attention. The team can then plan the cleaning around the site, furniture and drying time.',
        ],
        ar: [
          'في المكاتب والعيادات وصالات العرض ومساحات العمل المشتركة، يبدأ الموكيت في إظهار ممرات المرور بسرعة. فمناطق الاستقبال والممرات ومناطق المكاتب وغرف الاجتماعات تتجمع فيها الأتربة والرمال وآثار الأحذية والعجلات.',
          'للمساحات التجارية، أرسل الصور والمساحة التقريبية بالمتر المربع ونوع النشاط وساعات الوصول والمناطق التي تحتاج إلى عناية خاصة. عندئذٍ يمكن للفريق تخطيط التنظيف بما يتناسب مع الموقع والأثاث ووقت التجفيف.',
        ],
      },
      cta: {
        text: { ru: 'Запросить расчет для объекта', en: 'Request a commercial carpet flooring quote', ar: 'اطلب عرض سعر للموكيت التجاري' },
        event: 'commercial_quote_request',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-flooring-dubai',
      h2: {
        ru: 'Чистка ковролина в квартирах, виллах и офисах Дубая',
        en: 'Carpet flooring cleaning in Dubai apartments, villas and offices',
        ar: 'تنظيف الموكيت في شقق وفلل ومكاتب دبي',
      },
      body: {
        ru: [
          'Ковролин в Дубае часто страдает не только от пятен, но и от постоянного песка. Он забивается в волокна, делает покрытие тусклым и усиливает разницу между проходными и менее используемыми зонами.',
          'При заявке менеджер уточняет район, тип объекта, примерную площадь, фото загрязнений и желаемое время. Это помогает заранее понять объем и подготовить выезд.',
          'Если объект большой, лучше отправить план или короткое видео проходных зон - так расчет будет точнее, а график работ проще согласовать.',
        ],
        en: [
          'Dubai homes and offices deal with fine dust, AC airflow and sand brought in from parking areas, balconies, entrances and delivery traffic. Carpet flooring catches this gradually. A room may look acceptable from a distance but still feel flat, dusty or darker in walking paths.',
          'On-site carpet flooring cleaning helps refresh the surface without removing the flooring from the property. The technician works inside the apartment, villa or office, checks ventilation and access, and adjusts the process to the layout and carpet condition.',
        ],
        ar: [
          'تتعامل المنازل والمكاتب في دبي مع الغبار الناعم وتيارات هواء المكيفات والرمال القادمة من مواقف السيارات والشرفات والمداخل وحركة التوصيل. ويلتقط الموكيت هذا تدريجيًا. فقد تبدو الغرفة مقبولة من بعيد لكنها تظل باهتة أو مغبرة أو أغمق في مسارات المشي.',
          'يساعد تنظيف الموكيت في الموقع على تجديد السطح دون إزالة الموكيت من العقار. يعمل الفني داخل الشقة أو الفيلا أو المكتب، ويتحقق من التهوية وسهولة الوصول، ويعدّل العملية بما يتناسب مع التخطيط وحالة الموكيت.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Check availability in your Dubai area', ar: 'تحقق من التوفر في منطقتك بدبي' },
        event: 'check_availability',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-flooring-materials-methods',
      h2: {
        ru: 'Метод чистки ковролина зависит от покрытия и состояния',
        en: 'Cleaning methods matched to carpet flooring material and condition',
        ar: 'أساليب التنظيف تُختار حسب مادة الموكيت وحالته',
      },
      body: {
        ru: [
          'Фиксированное ковровое покрытие нельзя обрабатывать как съемный ковер. Здесь важно учитывать основание, швы, мебель вокруг, доступ к зонам и влажность после чистки.',
          'Специалист оценивает материал, ворс, пятна, дорожки загрязнений и чувствительные зоны. После этого выбирается способ обработки, объем влаги и последовательность чистки.',
          'Слишком мокрая или слишком агрессивная обработка может оставить запах, увеличить время высыхания или дать неровный результат по участкам. Поэтому предварительная оценка важна даже для обычного ковролина.',
        ],
        en: [
          'Fixed carpet flooring can vary in fiber, backing, pile height, installation type and age. A method that works well for one carpet may leave too much moisture, residue or uneven results on another. The first step is to inspect the surface and identify traffic lanes, stains, fragile areas and any existing damage.',
          'The cleaning process can include dry soil removal, targeted pre-treatment, agitation where appropriate and extraction or another suitable professional method. The technician avoids over-promising: wear patterns, sun fading, bleach marks and permanent fiber damage are not the same as removable dirt.',
        ],
        ar: [
          'يختلف الموكيت المثبت من حيث الألياف والطبقة السفلية وارتفاع الوبر ونوع التركيب والعمر. فالأسلوب الذي ينجح مع موكيت قد يترك رطوبة زائدة أو بقايا أو نتائج غير متساوية على آخر. الخطوة الأولى هي فحص السطح وتحديد ممرات المرور والبقع والمناطق الحساسة وأي أضرار قائمة.',
          'يمكن أن تتضمن عملية التنظيف إزالة الأوساخ الجافة والمعالجة المسبقة الموجهة والتحريك عند الحاجة والاستخلاص أو أسلوبًا احترافيًا مناسبًا آخر. يتجنب الفني المبالغة في الوعود: فأنماط التآكل وبهتان الشمس وآثار المبيّض وتلف الألياف الدائم ليست كالأوساخ القابلة للإزالة.',
        ],
      },
      cta: {
        text: { ru: 'Уточнить подход по материалу', en: 'Ask which method fits your flooring', ar: 'استفسر عن الأسلوب المناسب لموكيتك' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-flooring-scope',
      h2: {
        ru: 'Что входит в чистку ковролина',
        en: 'What is included in carpet flooring cleaning',
        ar: 'ما الذي يشمله تنظيف الموكيت',
      },
      body: {
        ru: [
          'В услугу входит выезд на адрес, оценка покрытия, подготовка рабочей зоны, обработка загрязнений и чистка ковролина на месте. Особое внимание обычно требуется проходным дорожкам, пятнам, зонам у входа и участкам возле мебели.',
          'Финальный состав работ зависит от площади, состояния покрытия и доступа. Если на объекте много мебели, это лучше показать на фото до расчета.',
        ],
        en: [
          'Carpet flooring cleaning focuses on fixed carpet surfaces inside the property. The work covers visible carpeted areas, traffic lanes, common stains and general freshness according to condition.',
          'Share approximate size, number of rooms, furniture situation, stain type and access before booking. Heavy furniture movement, extreme stains, water damage, mold concerns or damaged installation need separate assessment before the job is accepted.',
        ],
        ar: [
          'يركز تنظيف الموكيت على الأسطح المثبتة داخل العقار. ويشمل العمل المناطق المغطاة بالموكيت الظاهرة وممرات المرور والبقع الشائعة والانتعاش العام بحسب الحالة.',
          'شارك المساحة التقريبية وعدد الغرف ووضع الأثاث ونوع البقع وسهولة الوصول قبل الحجز. أما نقل الأثاث الثقيل والبقع الشديدة وأضرار المياه ومخاوف العفن أو التركيب التالف فتحتاج إلى تقييم منفصل قبل قبول المهمة.',
        ],
      },
      cta: {
        text: { ru: 'Отправить фото и получить предварительную цену', en: 'Send carpeted room photos for scope confirmation', ar: 'أرسل صور الغرف المفروشة بالموكيت لتأكيد نطاق العمل' },
        event: 'ask_material_or_scope',
        href: 'whatsapp',
      },
    },
    {
      id: 'carpet-flooring-prices',
      h2: {
        ru: 'Стоимость чистки ковролина',
        en: 'Carpet flooring cleaning price estimates',
        ar: 'تقديرات أسعار تنظيف الموكيت',
      },
      showPriceCards: true,
      body: {
        ru: [
          'Стоимость чистки ковролина рассчитывается по фото, видео или площади объекта. Это фиксированное покрытие, поэтому расчет зависит от метража, типа покрытия и сложности доступа.',
          'На цену влияет метраж, загрязнение проходных зон, пятна, мебель, доступ и необходимость работать по частям, чтобы объект продолжал функционировать. В hero и прайс-блоке используйте прозрачную формулировку: расчет по фото, видео или площади.',
        ],
        en: [
          'Confirmed fixed carpet flooring pricing starts from AED 25 per m2 after room area and access are checked. This applies to installed carpet flooring and wall-to-wall carpet cleaning handled on site.',
          'The final price depends on approximate square meters, furniture situation, stains, traffic lanes, access and whether the space is residential or commercial. Use photos and room measurements to confirm the quote before work starts.',
        ],
        ar: [
          'يبدأ السعر المؤكد للموكيت المثبت من AED 25 للمتر المربع بعد التحقق من مساحة الغرفة وسهولة الوصول. وينطبق ذلك على الموكيت المثبت وتنظيف السجاد من الحائط إلى الحائط الذي يتم في الموقع.',
          'يعتمد السعر النهائي على المساحة التقريبية بالمتر المربع ووضع الأثاث والبقع وممرات المرور وسهولة الوصول وما إذا كانت المساحة سكنية أم تجارية. استخدم الصور وقياسات الغرفة لتأكيد عرض السعر قبل بدء العمل.',
        ],
      },
      cta: {
        text: { ru: 'Рассчитать стоимость по фото', en: 'Request a carpet flooring estimate', ar: 'اطلب تقدير سعر تنظيف الموكيت' },
        event: 'send_photo_for_price',
        href: 'whatsapp',
      },
    },
  ],

  faq: [
    {
      q: { ru: 'Ковролин забирают на чистку?', en: 'Is carpet flooring cleaning done at home or taken away?', ar: 'هل يتم تنظيف الموكيت في المنزل أم يؤخذ إلى الخارج؟' },
      a: {
        ru: 'Нет. Ковролин обычно закреплен на полу, поэтому его чистят на месте у клиента. Забор и возврат относятся к съемным коврам.',
        en: 'Carpet flooring is cleaned on site because it is fixed to the room. Rugs and loose carpets may be eligible for pickup, but wall-to-wall or installed carpet flooring is handled at the address.',
        ar: 'يُنظّف الموكيت في الموقع لأنه مثبت في الغرفة. أما السجاد المتحرك فقد يكون مؤهلًا للاستلام، لكن الموكيت المثبت من الحائط إلى الحائط يُعالَج في العنوان.',
      },
    },
    {
      q: { ru: 'Можно ли почистить ковролин в офисе?', en: 'Do you clean office carpet flooring?', ar: 'هل تنظفون موكيت المكاتب؟' },
      a: {
        ru: 'Да, ковролин подходит для офисов и коммерческих помещений. Для расчета лучше отправить площадь, фото проходных зон и желаемое время работ.',
        en: 'Yes, this service covers office and commercial carpet flooring cleaning. For a faster quote, send photos, approximate size, business type and preferred time so the team can plan the work with minimal disruption.',
        ar: 'نعم، تشمل هذه الخدمة تنظيف موكيت المكاتب والمساحات التجارية. وللحصول على عرض سعر أسرع، أرسل الصور والمساحة التقريبية ونوع النشاط والوقت المفضل حتى يتمكن الفريق من تخطيط العمل بأقل قدر من الإزعاج.',
      },
    },
    {
      q: { ru: 'Сколько стоит чистка ковролина?', en: 'How is carpet flooring price calculated?', ar: 'كيف يُحسب سعر تنظيف الموكيت؟' },
      a: {
        ru: 'Для ковролина нужна отдельная подтверждение цены. Предварительный расчет лучше делать по площади, фото или видео объекта, потому что цена зависит от метража, пятен, мебели и состояния покрытия.',
        en: 'Carpet flooring is quoted after photos, approximate area, condition and access are reviewed. The final price is confirmed before booking.',
        ar: 'يُحدَّد سعر الموكيت بعد مراجعة الصور والمساحة التقريبية والحالة وسهولة الوصول. ويُؤكَّد السعر النهائي قبل الحجز.',
      },
    },
    {
      q: { ru: 'Чем чистка ковролина отличается от чистки ковра?', en: 'Can cleaning remove dark walking lanes?', ar: 'هل يمكن للتنظيف إزالة ممرات المشي الداكنة؟' },
      a: {
        ru: 'Ковер можно свернуть и забрать на обработку, а ковролин чистится на месте как фиксированное покрытие. Поэтому отличаются логистика, оборудование, сушка и расчет.',
        en: 'Cleaning can reduce soil buildup and improve the appearance of traffic lanes, but permanent wear, crushed pile, sun fading or fiber damage may remain visible. The technician needs to explain expected results after inspection.',
        ar: 'يمكن للتنظيف أن يقلل من تراكم الأوساخ ويحسّن مظهر ممرات المرور، لكن التآكل الدائم والوبر المسحوق وبهتان الشمس أو تلف الألياف قد يظل ظاهرًا. ويجب على الفني توضيح النتائج المتوقعة بعد الفحص.',
      },
    },
    {
      q: { ru: 'Что отправить перед заказом?', en: 'What do I send before booking?', ar: 'ماذا أرسل قبل الحجز؟' },
      a: {
        ru: 'Отправьте фото помещения, примерную площадь, район в Дубае, фото пятен и комментарий про животных, проходимость в офисе или прошлые попытки чистки. Это поможет менеджеру подобрать услугу и оценить объем.',
        en: 'Send room photos, approximate size, location in Dubai, photos of stains and notes about pets, office traffic or any previous cleaning attempts. This helps the manager recommend the right service and estimate the job.',
        ar: 'أرسل صور الغرفة والمساحة التقريبية والموقع في دبي وصور البقع وملاحظات عن الحيوانات الأليفة أو حركة المرور في المكتب أو أي محاولات تنظيف سابقة. يساعد ذلك المدير على التوصية بالخدمة المناسبة وتقدير حجم العمل.',
      },
    },
  ],

  related: [
    {
      slug: 'carpet-cleaning',
      title: { ru: 'Чистка стандартных ковров', en: 'Standard Carpet & Rug Cleaning', ar: 'تنظيف السجاد العادي' },
      text: {
        ru: 'Для съемных ковров с забором и возвратом.',
        en: 'Use this for loose rugs that can be picked up or cleaned separately.',
        ar: 'استخدم هذا للسجاد المتحرك الذي يمكن استلامه أو تنظيفه بشكل منفصل.',
      },
    },
    {
      slug: 'upholstery-cleaning',
      title: { ru: 'Коммерческая чистка мебели', en: 'Commercial Upholstery Cleaning', ar: 'تنظيف المفروشات التجارية' },
      text: {
        ru: 'Для офисных кресел, стульев и мягких зон.',
        en: 'Useful for offices that also need chairs, armchairs or soft seating cleaned.',
        ar: 'مفيد للمكاتب التي تحتاج أيضًا إلى تنظيف الكراسي والمقاعد الوثيرة أو أماكن الجلوس الوثيرة.',
      },
    },
  ],
};
