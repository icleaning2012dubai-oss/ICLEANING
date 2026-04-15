export interface SubServicePage {
  slug: string;
  parentService: string; // slug of parent service page
  h1: { ru: string; en: string; ar: string };
  title: { ru: string; en: string; ar: string };
  description: { ru: string; en: string; ar: string };
  content: { ru: string; en: string; ar: string };
  image: string;
}

export const subServicesData: Record<string, SubServicePage> = {
  // === SOFA SUB-SERVICES ===
  'leather-sofa-cleaning': {
    slug: 'leather-sofa-cleaning',
    parentService: 'sofa-cleaning-dubai',
    h1: {
      ru: 'Химчистка кожаного дивана в Дубае – бережно и эффективно',
      en: 'Leather Sofa Cleaning in Dubai – Gentle & Effective',
      ar: 'تنظيف الأريكة الجلدية في دبي – بلطف وفعالية',
    },
    title: {
      ru: 'Чистка кожаного дивана в Дубае – уход за натуральной кожей',
      en: 'Leather Sofa Cleaning in Dubai – Natural Leather Care',
      ar: 'تنظيف الأريكة الجلدية في دبي – العناية بالجلد الطبيعي',
    },
    description: {
      ru: 'Специализированная химчистка кожаных диванов в Дубае. Удаление пятен, восстановление цвета, защита от трещин. Выезд на дом.',
      en: 'Specialized leather sofa cleaning in Dubai. Stain removal, color restoration, crack protection. Home visit service.',
      ar: 'تنظيف متخصص للأرائك الجلدية في دبي. إزالة البقع، استعادة اللون، حماية من التشققات. خدمة منزلية.',
    },
    content: {
      ru: `Кожаный диван – это красиво и статусно. Но он требует особого ухода. Обычная пена или порошок могут пересушить кожу, оставить разводы или даже трещины. Мы используем только pH-нейтральные средства с натуральными маслами. Сначала мягко очищаем поры, затем наносим кондиционер, который возвращает эластичность, и в конце – защитный крем от влаги и ультрафиолета.

Частые проблемы, которые мы решаем: потёртости на подлокотниках, следы от джинсов (синий оттенок), жирные пятна, царапины от когтей. Даже если кожа потеряла цвет, мы её тонируем специальными красками. Результат держится до года.

Цена – от 350 AED за двухместный диван. Выезд по Дубаю и Абу-Даби.`,
      en: `A leather sofa is beautiful and prestigious. But it requires special care. Regular foam or powder can dry out the leather, leave streaks, or even cause cracks. We use only pH-neutral products with natural oils. First, we gently clean the pores, then apply a conditioner that restores elasticity, and finally – a protective cream against moisture and UV rays.

Common problems we solve: worn armrests, jeans dye transfer (blue tint), grease stains, claw scratches. Even if the leather has lost its color, we tone it with special dyes. The result lasts up to a year.

Price – from 350 AED for a two-seater sofa. Service available across Dubai and Abu Dhabi.`,
      ar: `الأريكة الجلدية جميلة وأنيقة. لكنها تحتاج إلى عناية خاصة. الرغوة العادية أو المسحوق يمكن أن يجفف الجلد، ويترك خطوطًا أو حتى تشققات. نستخدم فقط منتجات متعادلة الحموضة مع زيوت طبيعية. أولاً ننظف المسام بلطف، ثم نضع بلسمًا يعيد المرونة، وأخيرًا – كريم حماية من الرطوبة والأشعة فوق البنفسجية.

المشاكل الشائعة التي نحلها: التآكل على مساند الأذرع، آثار الجينز (اللون الأزرق)، البقع الدهنية، خدوش المخالب. حتى لو فقد الجلد لونه، نقوم بتلوينه بأصباغ خاصة. النتيجة تدوم حتى عام.

السعر – من 350 درهم للأريكة ذات المقعدين. خدمة في جميع أنحاء دبي وأبوظبي.`,
    },
    image: '/images/service/dyvan-page.webp',
  },

  'fabric-sofa-cleaning': {
    slug: 'fabric-sofa-cleaning',
    parentService: 'sofa-cleaning-dubai',
    h1: {
      ru: 'Чистка тканевого дивана – удаляем пятна с велюра, флока и микрофибры',
      en: 'Fabric Sofa Cleaning – Removing Stains from Velour, Flock & Microfiber',
      ar: 'تنظيف الأريكة القماشية – إزالة البقع من المخمل والفلوك والمايكروفايبر',
    },
    title: {
      ru: 'Химчистка тканевого дивана в Дубае – безопасно для любых обивок',
      en: 'Fabric Sofa Cleaning in Dubai – Safe for All Upholstery Types',
      ar: 'تنظيف الأريكة القماشية في دبي – آمن لجميع أنواع التنجيد',
    },
    description: {
      ru: 'Эффективная чистка тканевых диванов в Дубае. Бережное удаление пятен, грязи и запахов. Безопасно для детей и животных.',
      en: 'Effective fabric sofa cleaning in Dubai. Gentle removal of stains, dirt, and odors. Safe for children and pets.',
      ar: 'تنظيف فعال للأرائك القماشية في دبي. إزالة لطيفة للبقع والأوساخ والروائح. آمن للأطفال والحيوانات الأليفة.',
    },
    content: {
      ru: `Тканевые диваны – самые популярные, но и самые капризные. Велюр боится воды, флок собирает пыль, микрофибра быстро затирается. Наши мастера подбирают метод под конкретный тип ткани. Для велюра – только сухая пена, для флока – влажная экстракция с низким давлением, для микрофибры – обработка щёткой и паром.

Выводим даже застарелые пятна от красного вина, ягод, шоколада и жира. А после чистки обрабатываем обивку антистатиком – пыль и шерсть будут меньше прилипать.

Стоимость – от 250 AED. При заказе двух диванов – скидка 10%.`,
      en: `Fabric sofas are the most popular but also the most delicate. Velour is afraid of water, flock collects dust, microfiber wears out quickly. Our specialists select the method for each specific fabric type. For velour – dry foam only, for flock – low-pressure wet extraction, for microfiber – brush and steam treatment.

We remove even old stains from red wine, berries, chocolate, and grease. After cleaning, we treat the upholstery with antistatic – dust and pet hair will stick less.

Price – from 250 AED. Order two sofas – get 10% discount.`,
      ar: `الأرائك القماشية هي الأكثر شعبية ولكنها أيضًا الأكثر حساسية. المخمل يخاف من الماء، والفلوك يجمع الغبار، والمايكروفايبر يتآكل بسرعة. يختار متخصصونا الطريقة المناسبة لكل نوع قماش. للمخمل – رغوة جافة فقط، للفلوك – استخراج رطب بضغط منخفض، للمايكروفايبر – معالجة بالفرشاة والبخار.

نزيل حتى البقع القديمة من النبيذ الأحمر والتوت والشوكولاتة والدهون. بعد التنظيف، نعالج التنجيد بمضاد للكهرباء الساكنة – الغبار وشعر الحيوانات سيلتصق بشكل أقل.

السعر – من 250 درهم. عند طلب أريكتين – خصم 10%.`,
    },
    image: '/images/service/dyvan-page.webp',
  },

  // === CARPET SUB-SERVICES ===
  'wool-carpet-cleaning': {
    slug: 'wool-carpet-cleaning',
    parentService: 'carpet-cleaning-dubai',
    h1: {
      ru: 'Чистка шерстяных ковров в Дубае – без усадки и выцветания',
      en: 'Wool Carpet Cleaning in Dubai – No Shrinkage or Fading',
      ar: 'تنظيف السجاد الصوفي في دبي – بدون انكماش أو بهتان',
    },
    title: {
      ru: 'Химчистка шерстяных ковров – бережно и эффективно',
      en: 'Wool Carpet Dry Cleaning – Gentle and Effective',
      ar: 'التنظيف الجاف للسجاد الصوفي – لطيف وفعال',
    },
    description: {
      ru: 'Бережная химчистка шерстяных ковров без усадки и повреждения ворса. Удаляем пятна и запахи. Гарантия качества.',
      en: 'Gentle wool carpet cleaning without shrinkage or pile damage. We remove stains and odors. Quality guaranteed.',
      ar: 'تنظيف لطيف للسجاد الصوفي بدون انكماش أو تلف الوبر. نزيل البقع والروائح. ضمان الجودة.',
    },
    content: {
      ru: `Шерстяной ковёр – это дорого и тепло. Но он боится горячей воды, сильных щелочей и агрессивной сушки. Мы чистим шерсть только холодной водой (до 30°C) с использованием специальных шампуней с нейтральным pH. После очистки обрабатываем кондиционером, который сохраняет мягкость ворса.

Особое внимание – пятнам от чая, кофе, соков. Они глубоко въедаются в шерсть, но наши средства их расщепляют на молекулярном уровне. Если ковёр пахнет сыростью или плесенью – проводим озонирование (без запаха). Цена – от 35 AED/кв.м.`,
      en: `A wool carpet is expensive and warm. But it's afraid of hot water, strong alkalies, and aggressive drying. We clean wool only with cold water (up to 30°C) using special pH-neutral shampoos. After cleaning, we treat it with a conditioner that preserves the softness of the pile.

Special attention to tea, coffee, and juice stains. They deeply penetrate into wool, but our products break them down at the molecular level. If the carpet smells musty or moldy – we perform ozonation (odor-free). Price – from 35 AED/sq.m.`,
      ar: `السجاد الصوفي غالي ودافئ. لكنه يخاف من الماء الساخن والقلويات القوية والتجفيف العنيف. ننظف الصوف فقط بالماء البارد (حتى 30 درجة مئوية) باستخدام شامبوهات خاصة متعادلة الحموضة. بعد التنظيف، نعالجه ببلسم يحافظ على نعومة الوبر.

اهتمام خاص ببقع الشاي والقهوة والعصير. تتغلغل بعمق في الصوف، لكن منتجاتنا تفككها على المستوى الجزيئي. إذا كان السجاد يفوح منه رائحة رطوبة أو عفن – نقوم بالأوزون (بدون رائحة). السعر – من 35 درهم/متر مربع.`,
    },
    image: '/images/service/kover-page.webp',
  },

  'silk-carpet-cleaning': {
    slug: 'silk-carpet-cleaning',
    parentService: 'carpet-cleaning-dubai',
    h1: {
      ru: 'Химчистка шёлковых ковров в Дубае – деликатно, как с антиквариатом',
      en: 'Silk Carpet Cleaning in Dubai – Delicate as Antique Care',
      ar: 'تنظيف السجاد الحريري في دبي – بدقة كالتحف الأثرية',
    },
    title: {
      ru: 'Чистка шёлковых ковров – профессиональная ручная химчистка',
      en: 'Silk Carpet Cleaning – Professional Hand Dry Cleaning',
      ar: 'تنظيف السجاد الحريري – تنظيف جاف يدوي احترافي',
    },
    description: {
      ru: 'Профессиональная чистка шёлковых ковров с использованием мягких средств. Сохраняем цвет и блеск. Выезд по Дубаю.',
      en: 'Professional silk carpet cleaning with gentle products. We preserve color and shine. Service across Dubai.',
      ar: 'تنظيف احترافي للسجاد الحريري بمنتجات لطيفة. نحافظ على اللون واللمعان. خدمة في جميع أنحاء دبي.',
    },
    content: {
      ru: `Шёлковый ковёр – это произведение искусства. Вода для него губительна. Поэтому мы используем метод сухой пены. Специальный состав взбивается в плотную пену, наносится на ковёр, впитывает грязь, а затем удаляется пылесосом. Никакой влаги внутри – рисунок не плывёт, цвета не блекнут.

Мы также обрабатываем шёлк антистатиком – к нему меньше прилипает пыль, и он дольше остаётся чистым. Цена – от 50 AED/кв.м (из-за трудоёмкости). Для особо ценных ковров выезжаем на осмотр бесплатно.`,
      en: `A silk carpet is a work of art. Water is destructive for it. That's why we use the dry foam method. A special compound is whipped into dense foam, applied to the carpet, absorbs dirt, and then vacuumed away. No moisture inside – the pattern doesn't run, colors don't fade.

We also treat silk with antistatic – less dust sticks to it, and it stays clean longer. Price – from 50 AED/sq.m (due to labor intensity). For especially valuable carpets, we visit for inspection free of charge.`,
      ar: `السجاد الحريري هو عمل فني. الماء مدمر له. لذلك نستخدم طريقة الرغوة الجافة. يُخفق مركب خاص في رغوة كثيفة، يُوضع على السجاد، يمتص الأوساخ، ثم يُزال بالمكنسة الكهربائية. لا رطوبة بالداخل – النقش لا يسيل، والألوان لا تبهت.

نعالج الحرير أيضًا بمضاد للكهرباء الساكنة – يلتصق به غبار أقل، ويبقى نظيفًا لفترة أطول. السعر – من 50 درهم/متر مربع (بسبب كثافة العمل). للسجاد الثمين بشكل خاص، نزور للفحص مجانًا.`,
    },
    image: '/images/service/kover-page.webp',
  },

  'persian-rug-cleaning': {
    slug: 'persian-rug-cleaning',
    parentService: 'carpet-cleaning-dubai',
    h1: {
      ru: 'Химчистка персидских ковров в Дубае – возвращаем былую красоту',
      en: 'Persian Rug Cleaning in Dubai – Restoring Former Beauty',
      ar: 'تنظيف السجاد الفارسي في دبي – نعيد الجمال السابق',
    },
    title: {
      ru: 'Чистка персидских и восточных ковров – ручная работа',
      en: 'Persian & Oriental Rug Cleaning – Handcrafted Care',
      ar: 'تنظيف السجاد الفارسي والشرقي – عناية يدوية',
    },
    description: {
      ru: 'Ручная стирка и глубокая чистка персидских ковров. Чистка бахромы, удаление пятен, обработка от моли. Бесплатный забор и доставка.',
      en: 'Hand washing and deep cleaning of Persian rugs. Fringe cleaning, stain removal, moth treatment. Free pickup and delivery.',
      ar: 'غسيل يدوي وتنظيف عميق للسجاد الفارسي. تنظيف الشراشيب، إزالة البقع، معالجة العث. استلام وتوصيل مجاني.',
    },
    content: {
      ru: `Персидский ковёр – это инвестиция. Но со временем он темнеет, бахрома истрепывается, появляются потёртости. Наши мастера работают с восточными коврами более 10 лет. Мы не стираем их в машине, а чистим вручную: сначала выбиваем пыль, потом наносим специальный гель, который вытягивает грязь из самых глубоких слоёв, и в конце – ополаскиваем мягкой водой под небольшим напором.

Восстанавливаем бахрому – распутываем, подкрашиваем, укрепляем. Также проводим обработку от моли и жучков – это важно для дубайского климата. Стоимость – от 200 AED за небольшой ковёр (2x3 м). Даём гарантию 3 месяца на сохранность цвета.`,
      en: `A Persian rug is an investment. But over time it darkens, the fringe frays, and worn spots appear. Our specialists have been working with oriental rugs for over 10 years. We don't machine wash them – we clean by hand: first we beat out the dust, then apply a special gel that draws dirt from the deepest layers, and finally – rinse with soft water under low pressure.

We restore fringes – untangle, recolor, reinforce. We also treat against moths and beetles – important for Dubai's climate. Cost – from 200 AED for a small rug (2x3 m). We give a 3-month guarantee on color preservation.`,
      ar: `السجاد الفارسي هو استثمار. لكنه مع مرور الوقت يصبح داكنًا، وتتلف الشراشيب، وتظهر التآكلات. متخصصونا يعملون مع السجاد الشرقي لأكثر من 10 سنوات. لا نغسله في الغسالة، بل ننظفه يدويًا: أولاً ننفض الغبار، ثم نضع جلًا خاصًا يسحب الأوساخ من أعمق الطبقات، وأخيرًا – نشطفه بماء ناعم تحت ضغط منخفض.

نستعيد الشراشيب – نفككها، ونلونها، ونقويها. كما نعالج ضد العث والحشرات – وهذا مهم لمناخ دبي. التكلفة – من 200 درهم للسجادة الصغيرة (2×3 م). نقدم ضمان 3 أشهر على الحفاظ على اللون.`,
    },
    image: '/images/service/kover-page.webp',
  },

  'handmade-rug-cleaning': {
    slug: 'handmade-rug-cleaning',
    parentService: 'carpet-cleaning-dubai',
    h1: {
      ru: 'Чистка ковров ручной работы – индивидуальный подход',
      en: 'Handmade Rug Cleaning – Individual Approach',
      ar: 'تنظيف السجاد المصنوع يدويًا – نهج فردي',
    },
    title: {
      ru: 'Химчистка ковров ручной работы – бережно и профессионально',
      en: 'Handmade Rug Cleaning – Gentle and Professional',
      ar: 'تنظيف السجاد المصنوع يدويًا – بلطف واحترافية',
    },
    description: {
      ru: 'Деликатная чистка ковров ручной работы. Сохраняем уникальный рисунок и натуральные красители. Бесплатная консультация.',
      en: 'Delicate cleaning of handmade rugs. We preserve unique patterns and natural dyes. Free consultation.',
      ar: 'تنظيف دقيق للسجاد المصنوع يدويًا. نحافظ على النقوش الفريدة والأصباغ الطبيعية. استشارة مجانية.',
    },
    content: {
      ru: `Каждый ковёр ручной работы – уникален. Натуральные красители, разная плотность ворса, особенности ткачества. Мы подбираем состав после анализа волокна под микроскопом. Чаще всего это сухая чистка с применением абсорбентов – мелкопористого порошка, который втирается в ворс, впитывает грязь и затем вычищается пылесосом. Никакой воды, никакого риска.

Цена договорная – зависит от сложности и размера. Звоните, пришлите фото – сделаем расчёт.`,
      en: `Every handmade rug is unique. Natural dyes, varying pile density, weaving peculiarities. We select the cleaning composition after analyzing the fiber under a microscope. Most often it's dry cleaning with absorbents – fine-pored powder that is rubbed into the pile, absorbs dirt, and then vacuumed out. No water, no risk.

Price negotiable – depends on complexity and size. Call us or send a photo – we'll calculate the cost.`,
      ar: `كل سجادة مصنوعة يدويًا فريدة. أصباغ طبيعية، كثافة وبر متفاوتة، خصوصيات النسيج. نختار تركيبة التنظيف بعد تحليل الألياف تحت المجهر. غالبًا ما يكون التنظيف الجاف بالمواد الماصة – مسحوق ناعم المسام يُفرك في الوبر، يمتص الأوساخ، ثم يُزال بالمكنسة الكهربائية. لا ماء، لا مخاطر.

السعر بالاتفاق – يعتمد على التعقيد والحجم. اتصلوا أو أرسلوا صورة – سنحسب التكلفة.`,
    },
    image: '/images/service/kover-page.webp',
  },

  // === CURTAIN & BLIND SERVICES ===
  'curtain-cleaning': {
    slug: 'curtain-cleaning',
    parentService: 'curtains-cleaning-dubai',
    h1: {
      ru: 'Химчистка штор в Дубае – стирка и чистка на дому',
      en: 'Curtain Cleaning in Dubai – Washing & Cleaning at Home',
      ar: 'تنظيف الستائر في دبي – غسيل وتنظيف في المنزل',
    },
    title: {
      ru: 'Стирка штор в Дубае – химчистка тюля, блэкаут, римских штор',
      en: 'Curtain Washing in Dubai – Tulle, Blackout & Roman Blind Cleaning',
      ar: 'غسيل الستائر في دبي – تنظيف التول والبلاك آوت والستائر الرومانية',
    },
    description: {
      ru: 'Химчистка штор любой сложности: тюль, блэкаут, римские шторы. Деликатная стирка, глажка, возврат свежести. Цены от 50 AED.',
      en: 'Curtain cleaning of any complexity: tulle, blackout, Roman blinds. Delicate washing, ironing, freshness restored. Prices from 50 AED.',
      ar: 'تنظيف الستائر بأي تعقيد: التول، البلاك آوت، الستائر الرومانية. غسيل دقيق، كي، استعادة النضارة. الأسعار من 50 درهم.',
    },
    content: {
      ru: `Шторы впитывают кухонный жир, уличную пыль, запахи. Даже если вы их регулярно пылесосите, настоящая чистота возможна только после стирки или химчистки. Мы снимаем шторы, везём в нашу прачечную (или стираем на месте, если позволяет ткань), а потом вешаем обратно. Вы даже не заметите, что их не было.

Что мы делаем:
Тюль и вуаль – ручная стирка в прохладной воде, чтобы не сели и не пожелтели.
Блэкаут – химчистка, так как плотные шторы нельзя стирать в машинке (повреждается затемняющий слой).
Римские шторы – чистим пылесосом с насадкой и, если нужно, выводим пятна локально.
Шторы с люверсами и ламбрекенами – аккуратно, чтобы не повредить фурнитуру.

Цена – от 50 AED за одну штору (стандартный размер). Глажка и паровая обработка – бесплатно. Работаем по Дубаю, включая отели и рестораны.`,
      en: `Curtains absorb kitchen grease, street dust, and odors. Even if you vacuum them regularly, true cleanliness is only possible after washing or dry cleaning. We take down the curtains, transport them to our laundry (or wash on-site if the fabric allows), and then hang them back. You won't even notice they were gone.

What we do:
Tulle and voile – hand washing in cool water to prevent shrinking and yellowing.
Blackout curtains – dry cleaning, as heavy curtains cannot be machine washed (the darkening layer gets damaged).
Roman blinds – vacuum with attachment and spot-treat stains if needed.
Curtains with grommets and pelmets – carefully, so as not to damage the hardware.

Price – from 50 AED per curtain (standard size). Ironing and steam treatment – free. We work across Dubai, including hotels and restaurants.`,
      ar: `الستائر تمتص دهون المطبخ وغبار الشارع والروائح. حتى لو تكنسها بانتظام، النظافة الحقيقية ممكنة فقط بعد الغسيل أو التنظيف الجاف. نقوم بإنزال الستائر ونقلها إلى مغسلتنا (أو نغسلها في المكان إذا سمح القماش)، ثم نعلقها مرة أخرى. لن تلاحظوا حتى أنها كانت غائبة.

ما نقوم به:
التول والفوال – غسيل يدوي بماء بارد لمنع الانكماش والاصفرار.
ستائر البلاك آوت – تنظيف جاف، لأن الستائر الثقيلة لا يمكن غسلها في الغسالة (تتلف طبقة التعتيم).
الستائر الرومانية – تنظيف بالمكنسة الكهربائية بملحق وإزالة البقع موضعيًا إذا لزم الأمر.
الستائر مع الحلقات والكورنيش – بعناية حتى لا نتلف الأجهزة.

السعر – من 50 درهم للستارة الواحدة (الحجم القياسي). الكي والمعالجة بالبخار – مجانًا. نعمل في جميع أنحاء دبي، بما في ذلك الفنادق والمطاعم.`,
    },
    image: '/images/service/shtory-page.webp',
  },

  'blind-cleaning': {
    slug: 'blind-cleaning',
    parentService: 'curtains-cleaning-dubai',
    h1: {
      ru: 'Чистка жалюзи в Дубае – ультразвук и ручная обработка',
      en: 'Blind Cleaning in Dubai – Ultrasonic & Manual Treatment',
      ar: 'تنظيف الستائر المعدنية في دبي – بالموجات فوق الصوتية والمعالجة اليدوية',
    },
    title: {
      ru: 'Химчистка жалюзи – вертикальные, горизонтальные, рулонные',
      en: 'Blind Cleaning – Vertical, Horizontal, Roller',
      ar: 'تنظيف الستائر – عمودية، أفقية، رول',
    },
    description: {
      ru: 'Качественная чистка жалюзи в Дубае: вертикальные, горизонтальные, рулонные, деревянные. Ультразвуковая чистка. Выезд на дом.',
      en: 'Quality blind cleaning in Dubai: vertical, horizontal, roller, wooden. Ultrasonic cleaning. Home service.',
      ar: 'تنظيف جودة للستائر في دبي: عمودية، أفقية، رول، خشبية. تنظيف بالموجات فوق الصوتية. خدمة منزلية.',
    },
    content: {
      ru: `Жалюзи – удобно, но мыть каждую ламель вручную – это долго и муторно. Мы используем ультразвуковую ванну: жалюзи разбираются, помещаются в специальный раствор, и ультразвук выбивает грязь из микрощелей. Метод подходит для пластика, алюминия, ткани. Деревянные жалюзи чистим только сухой мягкой щёткой и пылесосом – вода для них враг.

Цены: чистка вертикальных жалюзи – от 150 AED, горизонтальных – от 100 AED, рулонных – от 80 AED. Скидка 15% при заказе чистки всех окон в квартире.`,
      en: `Blinds are convenient, but washing each slat by hand is tedious and time-consuming. We use an ultrasonic bath: blinds are disassembled, placed in a special solution, and ultrasound knocks dirt out of micro-crevices. This method works for plastic, aluminum, and fabric. Wooden blinds are cleaned only with a soft dry brush and vacuum – water is their enemy.

Prices: vertical blind cleaning – from 150 AED, horizontal – from 100 AED, roller – from 80 AED. 15% discount when ordering cleaning for all windows in the apartment.`,
      ar: `الستائر المعدنية مريحة، لكن غسل كل شريحة يدويًا أمر طويل وممل. نستخدم حمام الموجات فوق الصوتية: يتم تفكيك الستائر، ووضعها في محلول خاص، وتقوم الموجات فوق الصوتية بإخراج الأوساخ من الشقوق الدقيقة. هذه الطريقة مناسبة للبلاستيك والألومنيوم والقماش. الستائر الخشبية نقوم بتنظيفها فقط بفرشاة ناعمة جافة ومكنسة كهربائية – الماء عدوها.

الأسعار: تنظيف الستائر العمودية – من 150 درهم، الأفقية – من 100 درهم، الرول – من 80 درهم. خصم 15% عند طلب تنظيف جميع نوافذ الشقة.`,
    },
    image: '/images/service/shtory-page.webp',
  },

  'vertical-blinds-cleaning': {
    slug: 'vertical-blinds-cleaning',
    parentService: 'curtains-cleaning-dubai',
    h1: {
      ru: 'Чистка вертикальных жалюзи в Дубае – быстро и без разводов',
      en: 'Vertical Blind Cleaning in Dubai – Fast & Streak-Free',
      ar: 'تنظيف الستائر العمودية في دبي – سريع وبدون خطوط',
    },
    title: {
      ru: 'Ультразвуковая чистка вертикальных жалюзи – эффективно',
      en: 'Ultrasonic Vertical Blind Cleaning – Effective Results',
      ar: 'تنظيف الستائر العمودية بالموجات فوق الصوتية – نتائج فعالة',
    },
    description: {
      ru: 'Эффективная чистка вертикальных жалюзи от пыли, жира и пятен. Ультразвуковая технология. Быстро и недорого.',
      en: 'Effective vertical blind cleaning from dust, grease, and stains. Ultrasonic technology. Fast and affordable.',
      ar: 'تنظيف فعال للستائر العمودية من الغبار والدهون والبقع. تقنية الموجات فوق الصوتية. سريع وبأسعار معقولة.',
    },
    content: {
      ru: `Демонтируем вертикальные жалюзи, помещаем в ультразвуковую ванну со специальным раствором. Ультразвук выбивает грязь из каждой ламели за считанные минуты. После обработки – сушка и сборка. Всё занимает около 2 часов. Цена от 150 AED.`,
      en: `We disassemble vertical blinds, place them in an ultrasonic bath with a special solution. Ultrasound knocks dirt out of each slat in minutes. After treatment – drying and reassembly. Everything takes about 2 hours. Price from 150 AED.`,
      ar: `نقوم بتفكيك الستائر العمودية، ووضعها في حمام الموجات فوق الصوتية مع محلول خاص. الموجات فوق الصوتية تخرج الأوساخ من كل شريحة في دقائق. بعد المعالجة – التجفيف وإعادة التجميع. كل شيء يستغرق حوالي ساعتين. السعر من 150 درهم.`,
    },
    image: '/images/service/shtory-page.webp',
  },

  'horizontal-blinds-cleaning': {
    slug: 'horizontal-blinds-cleaning',
    parentService: 'curtains-cleaning-dubai',
    h1: {
      ru: 'Чистка горизонтальных жалюзи – каждая ламель идеально чистая',
      en: 'Horizontal Blind Cleaning – Every Slat Perfectly Clean',
      ar: 'تنظيف الستائر الأفقية – كل شريحة نظيفة تمامًا',
    },
    title: {
      ru: 'Профессиональная чистка горизонтальных жалюзи',
      en: 'Professional Horizontal Blind Cleaning',
      ar: 'تنظيف احترافي للستائر الأفقية',
    },
    description: {
      ru: 'Детальная чистка горизонтальных жалюзи. Удаляем пыль, жир, следы от пальцев. Цена от 100 AED.',
      en: 'Detailed horizontal blind cleaning. We remove dust, grease, fingerprints. Price from 100 AED.',
      ar: 'تنظيف تفصيلي للستائر الأفقية. نزيل الغبار والدهون وآثار الأصابع. السعر من 100 درهم.',
    },
    content: {
      ru: `Горизонтальные жалюзи чистим на месте специальными перчатками-салфетками или при сильном загрязнении – снимаем и помещаем в ультразвуковую ванну. Вы выбираете метод, мы рекомендуем оптимальный вариант. Цена от 100 AED.`,
      en: `We clean horizontal blinds on-site with special glove-cloths or, for heavy soiling – remove them and place in an ultrasonic bath. You choose the method, we recommend the optimal option. Price from 100 AED.`,
      ar: `نقوم بتنظيف الستائر الأفقية في المكان بقفازات خاصة أو في حالة الاتساخ الشديد – نقوم بإزالتها ووضعها في حمام الموجات فوق الصوتية. أنت تختار الطريقة، ونحن نوصي بالخيار الأمثل. السعر من 100 درهم.`,
    },
    image: '/images/service/shtory-page.webp',
  },

  'roller-blind-cleaning': {
    slug: 'roller-blind-cleaning',
    parentService: 'curtains-cleaning-dubai',
    h1: {
      ru: 'Чистка рулонных штор – без снятия и демонтажа',
      en: 'Roller Blind Cleaning – No Removal Required',
      ar: 'تنظيف الستائر الرول – بدون إزالة',
    },
    title: {
      ru: 'Очистка рулонных штор от пыли и пятен',
      en: 'Roller Blind Dust & Stain Removal',
      ar: 'إزالة الغبار والبقع من الستائر الرول',
    },
    description: {
      ru: 'Чистка рулонных штор без снятия. Удаляем пятна, освежаем цвет. Быстро и аккуратно.',
      en: 'Roller blind cleaning without removal. We remove stains and refresh the color. Fast and careful.',
      ar: 'تنظيف الستائر الرول بدون إزالة. نزيل البقع ونجدد اللون. سريع ودقيق.',
    },
    content: {
      ru: `Рулонные шторы чистим прямо на месте: пылесосом с мягкой щёткой убираем пыль, затем локально выводим пятна и пропитываем антистатиком. Ткань остаётся как новая, а пыль прилипает меньше. Быстро и без лишнего шума.`,
      en: `We clean roller blinds right on-site: vacuum with a soft brush to remove dust, then spot-treat stains and apply antistatic treatment. The fabric looks like new, and dust sticks less. Fast and without unnecessary fuss.`,
      ar: `ننظف الستائر الرول مباشرة في المكان: نزيل الغبار بالمكنسة الكهربائية بفرشاة ناعمة، ثم نزيل البقع موضعيًا ونعالج بمضاد للكهرباء الساكنة. القماش يبقى كالجديد، والغبار يلتصق أقل. سريع وبدون ضجة.`,
    },
    image: '/images/service/shtory-page.webp',
  },

  // === DEEP CLEANING SUB-SERVICES ===
  'deep-cleaning': {
    slug: 'deep-cleaning',
    parentService: 'deep-cleaning-dubai',
    h1: {
      ru: 'Генеральная уборка квартир, вилл и офисов в Дубае',
      en: 'Deep Cleaning of Apartments, Villas & Offices in Dubai',
      ar: 'تنظيف عميق للشقق والفلل والمكاتب في دبي',
    },
    title: {
      ru: 'Генеральная уборка в Дубае – клининг под ключ',
      en: 'Deep Cleaning in Dubai – Turnkey Cleaning Service',
      ar: 'تنظيف عميق في دبي – خدمة تنظيف متكاملة',
    },
    description: {
      ru: 'Профессиональная генеральная уборка в Дубае. Мытье окон, чистка кухни, дезинфекция, уборка после ремонта. Цены от 299 AED.',
      en: 'Professional deep cleaning in Dubai. Window washing, kitchen cleaning, disinfection, post-renovation cleaning. Prices from 299 AED.',
      ar: 'تنظيف عميق احترافي في دبي. غسيل النوافذ، تنظيف المطبخ، التطهير، التنظيف بعد التجديد. الأسعار من 299 درهم.',
    },
    content: {
      ru: `Генеральная уборка – это когда чисто везде, включая плинтусы, решётки вентиляции, верхушки шкафов и под кроватью. Заказывают её обычно перед переездом, после ремонта, перед приездом гостей или раз в сезон.

Что входит в стандартный пакет:
Мытьё полов, стен, дверей, подоконников, радиаторов.
Очистка кухонной техники снаружи (холодильник, духовка, микроволновка) – жир, копоть.
Санузлы: удаление налёта, мытьё кафеля, зеркал, сантехники, дезинфекция.
Вынос мусора, мытьё вёдер, протирка плинтусов и выключателей.
Чистка ковров и мягкой мебели – за доплату или в расширенном пакете.

Цена: от 299 AED за однокомнатную квартиру. Для виллы – от 799 AED. Выезд в день заказа.

Почему выбирают нас:
Работаем бригадой от 2 до 5 человек, убираем быстро.
Используем профессиональные моющие пылесосы Karcher.
Даём гарантию на результат – если после уборки вы нашли грязное место, переделаем бесплатно.`,
      en: `Deep cleaning means clean everywhere – including baseboards, ventilation grilles, tops of cabinets, and under beds. Usually ordered before moving, after renovation, before guests arrive, or once per season.

What's included in the standard package:
Washing floors, walls, doors, window sills, radiators.
Cleaning kitchen appliances from outside (fridge, oven, microwave) – grease, soot.
Bathrooms: removing limescale, washing tiles, mirrors, plumbing, disinfection.
Taking out trash, washing bins, wiping baseboards and light switches.
Carpet and upholstery cleaning – for extra charge or in the extended package.

Price: from 299 AED for a one-bedroom apartment. For a villa – from 799 AED. Same-day service available.

Why choose us:
We work in teams of 2 to 5 people, fast cleaning.
We use professional Karcher washing vacuums.
We guarantee results – if you find a dirty spot after cleaning, we redo it for free.`,
      ar: `التنظيف العميق يعني النظافة في كل مكان – بما في ذلك القوائم، وشبكات التهوية، وأعلى الخزائن، وتحت الأسرة. عادة يُطلب قبل الانتقال، أو بعد التجديد، أو قبل وصول الضيوف، أو مرة كل موسم.

ما يتضمنه الباقة القياسية:
غسيل الأرضيات والجدران والأبواب وعتبات النوافذ والمشعات.
تنظيف أجهزة المطبخ من الخارج (الثلاجة، الفرن، الميكروويف) – الدهون والسخام.
الحمامات: إزالة الترسبات، غسيل البلاط، المرايا، السباكة، التطهير.
إخراج القمامة، غسيل السلال، مسح القوائم والمفاتيح.
تنظيف السجاد والأثاث المنجد – بتكلفة إضافية أو في الباقة الموسعة.

السعر: من 299 درهم لشقة غرفة نوم واحدة. للفيلا – من 799 درهم. خدمة في نفس اليوم.

لماذا تختاروننا:
نعمل في فرق من 2 إلى 5 أشخاص، تنظيف سريع.
نستخدم مكانس كارشر الاحترافية.
نضمن النتائج – إذا وجدتم مكانًا متسخًا بعد التنظيف، نعيده مجانًا.`,
    },
    image: '/images/cleaning/deep-cleaning.webp',
  },

  'post-construction-cleaning': {
    slug: 'post-construction-cleaning',
    parentService: 'deep-cleaning-dubai',
    h1: {
      ru: 'Уборка после ремонта – избавляем от строительной пыли и мусора',
      en: 'Post-Construction Cleaning – Removing Building Dust & Debris',
      ar: 'تنظيف بعد البناء – إزالة غبار ومخلفات البناء',
    },
    title: {
      ru: 'Клининг после ремонта в Дубае – уберём всё за вас',
      en: 'Post-Renovation Cleaning in Dubai – We Clean Everything',
      ar: 'تنظيف بعد التجديد في دبي – ننظف كل شيء',
    },
    description: {
      ru: 'Удаляем строительную пыль, остатки материалов, моем окна и фасады. Восстанавливаем чистоту после ремонта в Дубае.',
      en: 'We remove construction dust, material residues, wash windows and facades. Restoring cleanliness after renovation in Dubai.',
      ar: 'نزيل غبار البناء ومخلفات المواد ونغسل النوافذ والواجهات. نستعيد النظافة بعد التجديد في دبي.',
    },
    content: {
      ru: `После ремонта квартира выглядит как зона боевых действий: цементная пыль лежит везде, на стёклах засохшие брызги краски, на полу куски штукатурки. Обычная уборка не справится. Мы приезжаем с промышленными пылесосами, скребками и специальной химией. Смываем силикон, затирку, клей. Моем окна с обеих сторон. За 1-2 дня превращаем стройку в жилое помещение. Цена – от 500 AED (для студии) до 2000 AED (вилла). При заказе вместе с химчисткой ковров – скидка 20%.`,
      en: `After renovation, the apartment looks like a war zone: cement dust everywhere, dried paint splashes on glass, plaster chunks on the floor. Regular cleaning can't handle it. We arrive with industrial vacuums, scrapers, and special chemicals. We remove silicone, grout, glue. We wash windows on both sides. In 1-2 days, we turn a construction site into a living space. Price – from 500 AED (studio) to 2000 AED (villa). When ordered together with carpet cleaning – 20% discount.`,
      ar: `بعد التجديد، تبدو الشقة كمنطقة حرب: غبار الأسمنت في كل مكان، وبقع الطلاء الجافة على الزجاج، وقطع الجص على الأرض. التنظيف العادي لا يكفي. نصل بمكانس صناعية وكاشطات وكيمياء خاصة. نزيل السيليكون والجص واللاصق. نغسل النوافذ من كلا الجانبين. في يوم أو يومين نحول موقع البناء إلى مساحة معيشة. السعر – من 500 درهم (استوديو) إلى 2000 درهم (فيلا). عند الطلب مع تنظيف السجاد – خصم 20%.`,
    },
    image: '/images/cleaning/deep-cleaning.webp',
  },

  'villa-cleaning': {
    slug: 'villa-cleaning',
    parentService: 'deep-cleaning-dubai',
    h1: {
      ru: 'Уборка вилл в Дубае – полный клининг загородного дома',
      en: 'Villa Cleaning in Dubai – Complete Home Cleaning',
      ar: 'تنظيف الفلل في دبي – تنظيف شامل للمنزل',
    },
    title: {
      ru: 'Клининг вилл – регулярная и генеральная уборка особняков',
      en: 'Villa Cleaning – Regular & Deep Cleaning of Mansions',
      ar: 'تنظيف الفلل – تنظيف منتظم وعميق للقصور',
    },
    description: {
      ru: 'Регулярная и генеральная уборка вилл в Дубае. Мытьё бассейнов, уход за садом, чистка фасадов. Индивидуальный подход.',
      en: 'Regular and deep villa cleaning in Dubai. Pool cleaning, garden care, facade washing. Individual approach.',
      ar: 'تنظيف منتظم وعميق للفلل في دبي. تنظيف المسابح، العناية بالحديقة، غسيل الواجهات. نهج فردي.',
    },
    content: {
      ru: `Вилла – это не просто большая квартира. Здесь есть свой двор, бассейн, барбекю-зона, часто несколько санузлов и лестниц. Мы предлагаем абонемент на регулярную уборку (раз в неделю или две) – цена от 1200 AED в месяц. Генеральная уборка после сезона или перед приёмом гостей – от 1500 AED. Включаем мытьё фасадов, чистку водостоков, обработку садовой мебели. Составляем чек-лист под ваш дом.`,
      en: `A villa is more than just a big apartment. It has its own yard, pool, BBQ area, often multiple bathrooms and staircases. We offer a subscription for regular cleaning (weekly or bi-weekly) – from 1200 AED per month. Deep cleaning after the season or before guests – from 1500 AED. Includes facade washing, gutter cleaning, garden furniture treatment. We create a checklist for your home.`,
      ar: `الفيلا أكثر من مجرد شقة كبيرة. لها فناؤها الخاص، ومسبح، ومنطقة شواء، وغالبًا عدة حمامات وسلالم. نقدم اشتراكًا للتنظيف المنتظم (أسبوعيًا أو كل أسبوعين) – من 1200 درهم شهريًا. التنظيف العميق بعد الموسم أو قبل الضيوف – من 1500 درهم. يشمل غسيل الواجهات، وتنظيف المزاريب، ومعالجة أثاث الحديقة. نعد قائمة مراجعة لمنزلكم.`,
    },
    image: '/images/cleaning/deep-cleaning.webp',
  },

  'office-cleaning': {
    slug: 'office-cleaning',
    parentService: 'deep-cleaning-dubai',
    h1: {
      ru: 'Уборка офисов в Дубае – чистота для бизнеса',
      en: 'Office Cleaning in Dubai – Cleanliness for Business',
      ar: 'تنظيف المكاتب في دبي – نظافة للأعمال',
    },
    title: {
      ru: 'Профессиональный клининг офисов – ежедневно или по графику',
      en: 'Professional Office Cleaning – Daily or Scheduled',
      ar: 'تنظيف مكاتب احترافي – يوميًا أو وفق جدول',
    },
    description: {
      ru: 'Ежедневная и генеральная уборка офисов в Дубае. Уборка после рабочего дня, чистка ковров, мытьё окон. Договор и отчётность.',
      en: 'Daily and deep office cleaning in Dubai. After-hours cleaning, carpet cleaning, window washing. Contract and reporting.',
      ar: 'تنظيف يومي وعميق للمكاتب في دبي. تنظيف بعد ساعات العمل، تنظيف السجاد، غسيل النوافذ. عقد وتقارير.',
    },
    content: {
      ru: `Чистота в офисе влияет на имидж компании и здоровье сотрудников. Мы работаем в нерабочее время – вечером или в выходные. Убираем open-space, кабинеты руководителей, переговорные, кухню и санузлы. Чистим корпоративные ковры, кожаную мебель, стеклянные перегородки. Есть договор, закрывающие документы, страхование. Цена – от 30 AED/час за одного уборщика. Генеральная уборка – от 500 AED.`,
      en: `Office cleanliness affects company image and employee health. We work after hours – evenings or weekends. We clean open spaces, executive offices, meeting rooms, kitchens, and bathrooms. We clean corporate carpets, leather furniture, glass partitions. We offer contracts, closing documents, and insurance. Price – from 30 AED/hour per cleaner. Deep cleaning – from 500 AED.`,
      ar: `نظافة المكتب تؤثر على صورة الشركة وصحة الموظفين. نعمل بعد ساعات العمل – مساءً أو في عطلات نهاية الأسبوع. ننظف المساحات المفتوحة، مكاتب المديرين، غرف الاجتماعات، المطبخ والحمامات. ننظف سجاد الشركات، والأثاث الجلدي، والحواجز الزجاجية. لدينا عقود، ووثائق إغلاق، وتأمين. السعر – من 30 درهم/ساعة لكل عامل نظافة. التنظيف العميق – من 500 درهم.`,
    },
    image: '/images/cleaning/deep-cleaning.webp',
  },

  'window-cleaning': {
    slug: 'window-cleaning',
    parentService: 'deep-cleaning-dubai',
    h1: {
      ru: 'Мойка окон в Дубае – от квартиры до небоскрёба',
      en: 'Window Cleaning in Dubai – From Apartments to Skyscrapers',
      ar: 'تنظيف النوافذ في دبي – من الشقق إلى ناطحات السحاب',
    },
    title: {
      ru: 'Чистка окон на высоте – профессиональное оборудование',
      en: 'High-Rise Window Cleaning – Professional Equipment',
      ar: 'تنظيف النوافذ على ارتفاعات – معدات احترافية',
    },
    description: {
      ru: 'Мойка окон в квартирах, виллах, офисах и небоскребах Дубая. Используем альпинистское снаряжение и телескопические штанги.',
      en: 'Window cleaning in apartments, villas, offices, and skyscrapers in Dubai. We use climbing equipment and telescopic poles.',
      ar: 'تنظيف النوافذ في الشقق والفلل والمكاتب وناطحات السحاب في دبي. نستخدم معدات التسلق والعصي التلسكوبية.',
    },
    content: {
      ru: `В Дубае много панорамных окон, и мыть их самостоятельно не только трудно, но и опасно. Наши мастера имеют допуск к высотным работам. Моем окна снаружи с помощью телескопических штанг до 15 метров или с альпинистским снаряжением – если выше. Используем деминерализованную воду – после неё не остаётся разводов. Цена: от 15 AED за окно (стандартное) до 150 AED за сложное панорамное. При заказе мойки всех окон в квартире – фиксированная стоимость 299 AED.`,
      en: `Dubai has many panoramic windows, and cleaning them yourself is not only difficult but dangerous. Our specialists are certified for high-altitude work. We wash windows from the outside using telescopic poles up to 15 meters or climbing equipment for higher floors. We use demineralized water – it leaves no streaks. Price: from 15 AED per window (standard) to 150 AED for complex panoramic. When ordering all windows in the apartment – fixed price 299 AED.`,
      ar: `دبي بها العديد من النوافذ البانورامية، وتنظيفها بنفسك ليس صعبًا فحسب بل خطيرًا أيضًا. متخصصونا معتمدون للعمل على ارتفاعات. نغسل النوافذ من الخارج باستخدام عصي تلسكوبية حتى 15 مترًا أو معدات التسلق للطوابق العليا. نستخدم ماء منزوع المعادن – لا يترك خطوطًا. السعر: من 15 درهم للنافذة (القياسية) إلى 150 درهم للنوافذ البانورامية المعقدة. عند طلب جميع نوافذ الشقة – سعر ثابت 299 درهم.`,
    },
    image: '/images/cleaning/deep-cleaning.webp',
  },

  'disinfection-services': {
    slug: 'disinfection-services',
    parentService: 'deep-cleaning-dubai',
    h1: {
      ru: 'Дезинфекция помещений в Дубае – защита от вирусов и бактерий',
      en: 'Disinfection Services in Dubai – Protection from Viruses & Bacteria',
      ar: 'خدمات التطهير في دبي – حماية من الفيروسات والبكتيريا',
    },
    title: {
      ru: 'Обработка от коронавируса, гриппа, плесени – сертифицировано',
      en: 'COVID-19, Flu & Mold Disinfection – Certified Treatment',
      ar: 'تطهير من كوفيد-19 والإنفلونزا والعفن – معالجة معتمدة',
    },
    description: {
      ru: 'Дезинфекция всех поверхностей, воздуха и систем вентиляции. Сертифицированные средства. Защита от COVID-19, гриппа, плесени.',
      en: 'Disinfection of all surfaces, air, and ventilation systems. Certified products. Protection from COVID-19, flu, mold.',
      ar: 'تطهير جميع الأسطح والهواء وأنظمة التهوية. منتجات معتمدة. حماية من كوفيد-19 والإنفلونزا والعفن.',
    },
    content: {
      ru: `Профессиональная дезинфекция нужна не только в больницах. Если в доме кто-то переболел, появился запах плесени или вы просто хотите профилактики – закажите обработку. Мы используем сертифицированные в ОАЭ средства (четвертичные аммониевые соединения, безопасные для людей и животных). Распыляем их с помощью генератора холодного тумана – он обрабатывает все поверхности и воздух. Эффект держится до 14 дней. Цена – от 350 AED за однокомнатную квартиру. Обработка кондиционеров – дополнительно.`,
      en: `Professional disinfection isn't just for hospitals. If someone in the house was sick, there's a mold smell, or you simply want prevention – order treatment. We use UAE-certified products (quaternary ammonium compounds, safe for people and pets). We spray them using a cold fog generator – it treats all surfaces and air. The effect lasts up to 14 days. Price – from 350 AED for a one-bedroom apartment. AC treatment – extra.`,
      ar: `التطهير الاحترافي ليس فقط للمستشفيات. إذا مرض أحد في المنزل، أو ظهرت رائحة عفن، أو تريدون الوقاية ببساطة – اطلبوا المعالجة. نستخدم منتجات معتمدة في الإمارات (مركبات الأمونيوم الرباعية، آمنة للناس والحيوانات الأليفة). نرشها باستخدام مولد الضباب البارد – يعالج جميع الأسطح والهواء. التأثير يدوم حتى 14 يومًا. السعر – من 350 درهم لشقة غرفة نوم واحدة. معالجة التكييف – إضافية.`,
    },
    image: '/images/cleaning/deep-cleaning.webp',
  },

  // === MATTRESS SERVICES ===
  'mattress-cleaning': {
    slug: 'mattress-cleaning',
    parentService: 'sofa-cleaning-dubai',
    h1: {
      ru: 'Химчистка матрасов – удаляем пятна, клещей и аллергены',
      en: 'Mattress Cleaning – Removing Stains, Mites & Allergens',
      ar: 'تنظيف المراتب – إزالة البقع والعث والمواد المسببة للحساسية',
    },
    title: {
      ru: 'Чистка матрасов в Дубае – безопасно для астматиков и детей',
      en: 'Mattress Cleaning in Dubai – Safe for Asthmatics & Children',
      ar: 'تنظيف المراتب في دبي – آمن لمرضى الربو والأطفال',
    },
    description: {
      ru: 'Удаляем пятна, запахи, пылевых клещей и аллергены с матрасов. Безопасно для детей и аллергиков. Выезд по Дубаю.',
      en: 'We remove stains, odors, dust mites, and allergens from mattresses. Safe for children and allergy sufferers. Service across Dubai.',
      ar: 'نزيل البقع والروائح وعث الغبار والمواد المسببة للحساسية من المراتب. آمن للأطفال ومرضى الحساسية. خدمة في جميع أنحاء دبي.',
    },
    content: {
      ru: `Матрас – идеальное место для размножения пылевых клещей. Там тепло, влажно от пота, есть частички кожи. Даже если вы стираете постельное бельё раз в неделю, сам матрас остаётся грязным. Мы проводим глубокую чистку: пылесос с HEPA-фильтром высасывает клещей, затем обрабатываем поверхность паром (120°C), который убивает бактерии, и наносим антибактериальный спрей.

Что мы убираем: пятна мочи (детские или от животных), пот, кровь, кофе, вино. После чистки матрас сохнет 3-4 часа. Вы снова можете спать на чистом, без запахов и аллергенов. Цена – от 200 AED за односпальный матрас, от 350 за двуспальный. Ортопедический матрас – от 400 AED.`,
      en: `A mattress is the perfect breeding ground for dust mites. It's warm, moist from sweat, with skin particles. Even if you wash your bedding weekly, the mattress itself stays dirty. We perform deep cleaning: a HEPA-filter vacuum extracts mites, then we treat the surface with steam (120°C) which kills bacteria, and apply an antibacterial spray.

What we remove: urine stains (children's or pet), sweat, blood, coffee, wine. After cleaning, the mattress dries in 3-4 hours. You can sleep on a clean surface again, free from odors and allergens. Price – from 200 AED for a single mattress, from 350 for a double. Orthopedic mattress – from 400 AED.`,
      ar: `المرتبة هي المكان المثالي لتكاثر عث الغبار. دافئة، رطبة من العرق، مع جزيئات الجلد. حتى لو غسلتم الملاءات أسبوعيًا، المرتبة نفسها تبقى متسخة. نقوم بالتنظيف العميق: مكنسة بفلتر HEPA تستخرج العث، ثم نعالج السطح بالبخار (120 درجة مئوية) الذي يقتل البكتيريا، ونرش مضادًا بكتيريًا.

ما نزيله: بقع البول (الأطفال أو الحيوانات الأليفة)، العرق، الدم، القهوة، النبيذ. بعد التنظيف، تجف المرتبة في 3-4 ساعات. يمكنكم النوم على سطح نظيف مرة أخرى، بلا روائح أو مواد مسببة للحساسية. السعر – من 200 درهم للمرتبة الفردية، ومن 350 للمزدوجة. المرتبة الطبية – من 400 درهم.`,
    },
    image: '/images/service/dyvan-page.webp',
  },

  'orthopedic-mattress-cleaning': {
    slug: 'orthopedic-mattress-cleaning',
    parentService: 'sofa-cleaning-dubai',
    h1: {
      ru: 'Чистка ортопедических матрасов – бережно и без ущерба для свойств',
      en: 'Orthopedic Mattress Cleaning – Gentle Without Property Damage',
      ar: 'تنظيف المراتب الطبية – بلطف بدون إتلاف الخصائص',
    },
    title: {
      ru: 'Химчистка ортопедического матраса – сохраняем форму и жёсткость',
      en: 'Orthopedic Mattress Dry Cleaning – Preserving Shape & Firmness',
      ar: 'التنظيف الجاف للمرتبة الطبية – الحفاظ على الشكل والصلابة',
    },
    description: {
      ru: 'Деликатная химчистка ортопедических матрасов без потери формы и свойств. Удаляем пятна и запахи. Закажите сейчас.',
      en: 'Delicate cleaning of orthopedic mattresses without losing shape or properties. We remove stains and odors. Order now.',
      ar: 'تنظيف دقيق للمراتب الطبية بدون فقدان الشكل أو الخصائص. نزيل البقع والروائح. اطلبوا الآن.',
    },
    content: {
      ru: `Ортопедический матрас имеет сложную многослойную структуру. Неправильная чистка может нарушить его поддержку. Мы используем только сухие методы: порошковый абсорбент, который втирается в поверхность, впитывает грязь, а затем удаляется мощным пылесосом. Никакой влаги – наполнитель не деформируется. После чистки матрас остаётся таким же жёстким, как и был. Цена – от 400 AED. Рекомендуем чистить ортопедический матрас раз в 1-2 года.`,
      en: `An orthopedic mattress has a complex multi-layered structure. Improper cleaning can compromise its support. We use only dry methods: powder absorbent that is rubbed into the surface, absorbs dirt, and then removed with a powerful vacuum. No moisture – the filling doesn't deform. After cleaning, the mattress remains just as firm as before. Price – from 400 AED. We recommend cleaning orthopedic mattresses once every 1-2 years.`,
      ar: `المرتبة الطبية لها هيكل معقد متعدد الطبقات. التنظيف الخاطئ يمكن أن يضر بدعمها. نستخدم فقط الطرق الجافة: مسحوق ماص يُفرك في السطح، يمتص الأوساخ، ثم يُزال بمكنسة كهربائية قوية. لا رطوبة – الحشوة لا تتشوه. بعد التنظيف، تبقى المرتبة صلبة كما كانت. السعر – من 400 درهم. نوصي بتنظيف المرتبة الطبية مرة كل سنة أو سنتين.`,
    },
    image: '/images/service/dyvan-page.webp',
  },
};

// Helper to get all sub-service slugs for generateStaticParams
export function getAllSubServiceSlugs(): string[] {
  return Object.keys(subServicesData);
}

// Helper to get sub-services for a parent service
export function getSubServicesForParent(parentSlug: string): SubServicePage[] {
  return Object.values(subServicesData).filter(s => s.parentService === parentSlug);
}
