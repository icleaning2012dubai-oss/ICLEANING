'use client';

import { notFound } from 'next/navigation';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import ContactSection from '@/app/components/ContactSection';
import BookingModal from '@/app/components/BookingModal';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { subServicesData, getSubServicesForParent } from '@/app/data/subServicesData';
import { servicesData } from '@/app/services/serviceData';
import { useState } from 'react';
import Link from 'next/link';

// Per-category features, process steps, FAQ — keeps pages unique
const categoryData: Record<string, {
  features: { iconKey: string; title: { ru: string; en: string; ar: string }; desc: { ru: string; en: string; ar: string } }[];
  process: { title: { ru: string; en: string; ar: string }; desc: { ru: string; en: string; ar: string } }[];
  faq: { q: { ru: string; en: string; ar: string }; a: { ru: string; en: string; ar: string } }[];
}> = {
  'sofa-cleaning-dubai': {
    features: [
      { iconKey: 'flask', title: { ru: 'Профессиональная химия', en: 'Professional Chemistry', ar: 'كيمياء مهنية' }, desc: { ru: 'Безопасные гипоаллергенные составы, одобренные для домашнего использования', en: 'Safe hypoallergenic compounds approved for home use', ar: 'مركبات آمنة مضادة للحساسية معتمدة للاستخدام المنزلي' } },
      { iconKey: 'bolt', title: { ru: 'Быстрая сушка', en: 'Fast Drying', ar: 'تجفيف سريع' }, desc: { ru: 'Мощная экстракция — диван высыхает за 3-4 часа', en: 'Powerful extraction — sofa dries in 3-4 hours', ar: 'استخلاص قوي — الأريكة تجف خلال 3-4 ساعات' } },
      { iconKey: 'shield', title: { ru: 'Защитное покрытие', en: 'Protective Coating', ar: 'طلاء واقي' }, desc: { ru: 'По желанию наносим защитный состав от пятен', en: 'Optional stain protection coating applied', ar: 'اختياري طلاء حماية من البقع' } },
      { iconKey: 'home', title: { ru: 'Выезд на дом', en: 'Home Service', ar: 'خدمة منزلية' }, desc: { ru: 'Приезжаем в удобное для вас время, работаем у вас дома', en: 'We come at your convenient time, work at your home', ar: 'نأتي في الوقت المناسب لك، نعمل في منزلك' } },
    ],
    process: [
      { title: { ru: 'Осмотр', en: 'Inspection', ar: 'الفحص' }, desc: { ru: 'Определяем тип ткани, выявляем пятна и загрязнения', en: 'Determine fabric type, identify stains and dirt', ar: 'تحديد نوع القماش، تحديد البقع والأوساخ' } },
      { title: { ru: 'Предварительная обработка', en: 'Pre-treatment', ar: 'المعالجة المسبقة' }, desc: { ru: 'Наносим специальные составы на пятна и проблемные зоны', en: 'Apply special solutions to stains and problem areas', ar: 'تطبيق محاليل خاصة على البقع والمناطق المشكلة' } },
      { title: { ru: 'Глубокая экстракция', en: 'Deep Extraction', ar: 'الاستخلاص العميق' }, desc: { ru: 'Чистим профессиональным оборудованием Karcher', en: 'Clean with professional Karcher equipment', ar: 'التنظيف بمعدات Karcher المهنية' } },
      { title: { ru: 'Контроль качества', en: 'Quality Check', ar: 'فحص الجودة' }, desc: { ru: 'Проверяем результат вместе с вами', en: 'Check results together with you', ar: 'نتحقق من النتائج معك' } },
    ],
    faq: [
      { q: { ru: 'Сколько времени занимает чистка дивана?', en: 'How long does sofa cleaning take?', ar: 'كم يستغرق تنظيف الأريكة؟' }, a: { ru: 'Стандартная чистка 2-3 местного дивана занимает 40-60 минут. Угловой диван — до 1.5 часов.', en: 'Standard cleaning of a 2-3 seat sofa takes 40-60 minutes. Corner sofa — up to 1.5 hours.', ar: 'التنظيف القياسي لأريكة 2-3 مقاعد يستغرق 40-60 دقيقة. أريكة زاوية — حتى 1.5 ساعة.' } },
      { q: { ru: 'Безопасно ли для детей и животных?', en: 'Is it safe for children and pets?', ar: 'هل هو آمن للأطفال والحيوانات الأليفة؟' }, a: { ru: 'Да, мы используем сертифицированные гипоаллергенные средства. После высыхания диван полностью безопасен.', en: 'Yes, we use certified hypoallergenic products. After drying, the sofa is completely safe.', ar: 'نعم، نستخدم منتجات معتمدة مضادة للحساسية. بعد التجفيف، الأريكة آمنة تمامًا.' } },
      { q: { ru: 'Вы удаляете все пятна?', en: 'Do you remove all stains?', ar: 'هل تزيلون جميع البقع؟' }, a: { ru: 'Мы удаляем 95% пятен. Застарелые пятна от краски или чернил могут потребовать дополнительной обработки.', en: 'We remove 95% of stains. Old paint or ink stains may require additional treatment.', ar: 'نزيل 95% من البقع. البقع القديمة من الطلاء أو الحبر قد تتطلب معالجة إضافية.' } },
    ],
  },
  'carpet-cleaning-dubai': {
    features: [
      { iconKey: 'droplet', title: { ru: 'Глубокая экстракция', en: 'Deep Extraction', ar: 'استخلاص عميق' }, desc: { ru: 'Удаляем грязь из глубоких слоёв ковра', en: 'Remove dirt from deep carpet layers', ar: 'إزالة الأوساخ من طبقات السجاد العميقة' } },
      { iconKey: 'leaf', title: { ru: 'Эко-средства', en: 'Eco Products', ar: 'منتجات بيئية' }, desc: { ru: 'pH-нейтральные растворы, безопасные для всех типов волокон', en: 'pH-neutral solutions safe for all fiber types', ar: 'محاليل محايدة الأس الهيدروجيني آمنة لجميع أنواع الألياف' } },
      { iconKey: 'palette', title: { ru: 'Восстановление цвета', en: 'Color Restoration', ar: 'استعادة اللون' }, desc: { ru: 'Возвращаем яркость и насыщенность красок', en: 'Restore brightness and color saturation', ar: 'استعادة السطوع وتشبع اللون' } },
      { iconKey: 'bacteria', title: { ru: 'Антибактериальная обработка', en: 'Antibacterial Treatment', ar: 'معالجة مضادة للبكتيريا' }, desc: { ru: 'Уничтожаем до 99% бактерий и пылевых клещей', en: 'Destroy up to 99% of bacteria and dust mites', ar: 'نقضي على 99% من البكتيريا وعث الغبار' } },
    ],
    process: [
      { title: { ru: 'Тестирование', en: 'Testing', ar: 'الاختبار' }, desc: { ru: 'Проверяем тип волокна и стойкость красителя', en: 'Check fiber type and dye stability', ar: 'نتحقق من نوع الألياف واستقرار الصبغة' } },
      { title: { ru: 'Сухая чистка', en: 'Dry Cleaning', ar: 'التنظيف الجاف' }, desc: { ru: 'Удаляем песок и сухую грязь мощным пылесосом', en: 'Remove sand and dry dirt with a powerful vacuum', ar: 'إزالة الرمل والأوساخ الجافة بمكنسة كهربائية قوية' } },
      { title: { ru: 'Влажная экстракция', en: 'Wet Extraction', ar: 'الاستخلاص الرطب' }, desc: { ru: 'Подаём раствор под давлением и извлекаем грязь', en: 'Apply solution under pressure and extract dirt', ar: 'تطبيق المحلول تحت الضغط واستخراج الأوساخ' } },
      { title: { ru: 'Сушка', en: 'Drying', ar: 'التجفيف' }, desc: { ru: 'Используем турбо-сушку для быстрого результата', en: 'Use turbo drying for quick results', ar: 'نستخدم التجفيف التوربيني لنتائج سريعة' } },
    ],
    faq: [
      { q: { ru: 'Можно ли чистить шёлковый ковёр?', en: 'Can you clean a silk carpet?', ar: 'هل يمكنكم تنظيف سجادة حريرية؟' }, a: { ru: 'Да, у нас есть специальная технология для шёлковых ковров с мягкими pH-нейтральными составами.', en: 'Yes, we have special technology for silk carpets with gentle pH-neutral solutions.', ar: 'نعم، لدينا تقنية خاصة للسجاد الحريري بمحاليل لطيفة محايدة الأس الهيدروجيني.' } },
      { q: { ru: 'Сколько стоит чистка ковра?', en: 'How much does carpet cleaning cost?', ar: 'كم يكلف تنظيف السجاد؟' }, a: { ru: 'Обычный ковёр — от 25 AED за м². Ковры ручной работы — от 99 AED за м².', en: 'Regular carpet — from 25 AED per m². Handmade carpets — from 99 AED per m².', ar: 'السجاد العادي — من 25 درهم للمتر المربع. السجاد اليدوي — من 99 درهم للمتر المربع.' } },
      { q: { ru: 'Как быстро высохнет ковёр?', en: 'How fast will the carpet dry?', ar: 'كم سيستغرق جفاف السجاد؟' }, a: { ru: '2-6 часов в зависимости от толщины и влажности в помещении.', en: '2-6 hours depending on thickness and room humidity.', ar: '2-6 ساعات حسب السمك ورطوبة الغرفة.' } },
    ],
  },
  'curtains-cleaning-dubai': {
    features: [
      { iconKey: 'sparkles', title: { ru: 'Деликатная стирка', en: 'Gentle Wash', ar: 'غسيل لطيف' }, desc: { ru: 'Бережный режим для тонких тканей', en: 'Gentle mode for delicate fabrics', ar: 'وضع لطيف للأقمشة الرقيقة' } },
      { iconKey: 'steam', title: { ru: 'Отпаривание', en: 'Steaming', ar: 'التبخير' }, desc: { ru: 'Профессиональное отпаривание для идеального вида', en: 'Professional steaming for perfect appearance', ar: 'تبخير احترافي لمظهر مثالي' } },
      { iconKey: 'tools', title: { ru: 'Снятие и навеска', en: 'Removal & Hanging', ar: 'الإزالة والتعليق' }, desc: { ru: 'Аккуратно снимем и повесим обратно', en: 'Carefully remove and hang back', ar: 'نزيل بعناية ونعيد التعليق' } },
      { iconKey: 'check', title: { ru: 'Все типы штор', en: 'All Curtain Types', ar: 'جميع أنواع الستائر' }, desc: { ru: 'Работаем со всеми видами: от тюля до blackout', en: 'We work with all types: from tulle to blackout', ar: 'نعمل مع جميع الأنواع: من التول إلى التعتيم' } },
    ],
    process: [
      { title: { ru: 'Снятие', en: 'Removal', ar: 'الإزالة' }, desc: { ru: 'Аккуратно снимаем шторы с карниза', en: 'Carefully remove curtains from the rod', ar: 'نزيل الستائر بعناية من القضيب' } },
      { title: { ru: 'Стирка', en: 'Washing', ar: 'الغسيل' }, desc: { ru: 'Чистим подходящим методом для типа ткани', en: 'Clean using appropriate method for fabric type', ar: 'التنظيف بالطريقة المناسبة لنوع القماش' } },
      { title: { ru: 'Отпаривание', en: 'Steaming', ar: 'التبخير' }, desc: { ru: 'Профессиональная обработка паром', en: 'Professional steam treatment', ar: 'معالجة بخارية احترافية' } },
      { title: { ru: 'Навеска', en: 'Hanging', ar: 'التعليق' }, desc: { ru: 'Вешаем чистые шторы на место', en: 'Hang clean curtains back in place', ar: 'نعلق الستائر النظيفة في مكانها' } },
    ],
    faq: [
      { q: { ru: 'Вы снимаете шторы сами?', en: 'Do you remove curtains yourself?', ar: 'هل تزيلون الستائر بأنفسكم؟' }, a: { ru: 'Да, полный цикл: снятие, чистка, отпаривание, навеска обратно.', en: 'Yes, full cycle: removal, cleaning, steaming, hanging back.', ar: 'نعم، دورة كاملة: الإزالة، التنظيف، التبخير، إعادة التعليق.' } },
      { q: { ru: 'Какие типы штор вы чистите?', en: 'What curtain types do you clean?', ar: 'أي أنواع الستائر تنظفون؟' }, a: { ru: 'Все: тюль, портьеры, blackout, римские, рулонные, жалюзи.', en: 'All: tulle, drapes, blackout, Roman, roller, blinds.', ar: 'الكل: تول، ستائر، تعتيم، روماني، رول، جاليزي.' } },
    ],
  },
  'deep-cleaning-dubai': {
    features: [
      { iconKey: 'building', title: { ru: 'Любые помещения', en: 'Any Premises', ar: 'أي مباني' }, desc: { ru: 'Квартиры, виллы, офисы — убираем всё', en: 'Apartments, villas, offices — we clean everything', ar: 'شقق، فلل، مكاتب — ننظف كل شيء' } },
      { iconKey: 'users', title: { ru: 'Команда профессионалов', en: 'Professional Team', ar: 'فريق محترف' }, desc: { ru: 'Приезжаем бригадой 2-4 человека', en: 'We arrive as a team of 2-4 people', ar: 'نصل كفريق من 2-4 أشخاص' } },
      { iconKey: 'tools', title: { ru: 'Всё оборудование с собой', en: 'All Equipment Included', ar: 'جميع المعدات مشمولة' }, desc: { ru: 'Привозим химию, технику и расходники', en: 'We bring chemicals, equipment and supplies', ar: 'نجلب المواد الكيميائية والمعدات والمستلزمات' } },
      { iconKey: 'clipboard', title: { ru: 'Чек-лист из 50+ пунктов', en: '50+ Point Checklist', ar: 'قائمة فحص من 50+ نقطة' }, desc: { ru: 'Ничего не упустим — контроль по списку', en: 'Nothing missed — checklist control', ar: 'لا شيء يفوتنا — مراقبة بقائمة الفحص' } },
    ],
    process: [
      { title: { ru: 'Оценка', en: 'Assessment', ar: 'التقييم' }, desc: { ru: 'Осматриваем помещение, составляем план', en: 'Inspect premises, create a plan', ar: 'نفحص المبنى، نضع خطة' } },
      { title: { ru: 'Кухня и ванная', en: 'Kitchen & Bathroom', ar: 'المطبخ والحمام' }, desc: { ru: 'Глубокая чистка самых сложных зон', en: 'Deep cleaning of the toughest areas', ar: 'تنظيف عميق لأصعب المناطق' } },
      { title: { ru: 'Комнаты и окна', en: 'Rooms & Windows', ar: 'الغرف والنوافذ' }, desc: { ru: 'Пыль, полы, плинтусы, окна изнутри', en: 'Dust, floors, baseboards, interior windows', ar: 'الغبار، الأرضيات، اللوح، النوافذ من الداخل' } },
      { title: { ru: 'Финальная проверка', en: 'Final Inspection', ar: 'الفحص النهائي' }, desc: { ru: 'Вместе проверяем результат по чек-листу', en: 'Together we check results against checklist', ar: 'معًا نتحقق من النتائج مقابل قائمة الفحص' } },
    ],
    faq: [
      { q: { ru: 'Сколько длится генеральная уборка?', en: 'How long does deep cleaning take?', ar: 'كم يستغرق التنظيف العميق؟' }, a: { ru: 'От 4 часов для студии до 8-10 часов для виллы.', en: 'From 4 hours for a studio to 8-10 hours for a villa.', ar: 'من 4 ساعات للاستوديو إلى 8-10 ساعات للفيلا.' } },
      { q: { ru: 'Что входит в стоимость?', en: 'What\'s included in the price?', ar: 'ما المشمول في السعر؟' }, a: { ru: 'Вся химия и оборудование. Доплата только за сильно загрязнённые объекты.', en: 'All chemicals and equipment. Extra charge only for heavily soiled properties.', ar: 'جميع المواد الكيميائية والمعدات. رسوم إضافية فقط للعقارات شديدة الاتساخ.' } },
    ],
  },
};

function getCategoryForSlug(parentSlug: string): typeof categoryData[string] | null {
  return categoryData[parentSlug] || null;
}

// SVG icon component — maps icon keys to inline SVGs
const iconColors: Record<string, string> = {
  flask: 'bg-violet-100 text-violet-600',
  bolt: 'bg-amber-100 text-amber-600',
  shield: 'bg-emerald-100 text-emerald-600',
  home: 'bg-blue-100 text-blue-600',
  droplet: 'bg-sky-100 text-sky-600',
  leaf: 'bg-green-100 text-green-600',
  palette: 'bg-orange-100 text-orange-600',
  bacteria: 'bg-lime-100 text-lime-600',
  sparkles: 'bg-pink-100 text-pink-600',
  steam: 'bg-red-100 text-red-500',
  tools: 'bg-slate-100 text-slate-600',
  check: 'bg-teal-100 text-teal-600',
  building: 'bg-indigo-100 text-indigo-600',
  users: 'bg-purple-100 text-purple-600',
  clipboard: 'bg-cyan-100 text-cyan-600',
};

function FeatureIcon({ iconKey }: { iconKey: string }) {
  const paths: Record<string, React.ReactNode> = {
    flask: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3h6M10 3v5.172a2 2 0 01-.586 1.414l-4.828 4.828A2 2 0 004 15.828V17a3 3 0 003 3h10a3 3 0 003-3v-1.172a2 2 0 00-.586-1.414l-4.828-4.828A2 2 0 0114 8.172V3" />,
    bolt: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    shield: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    home: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" /></>,
    droplet: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />,
    leaf: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 14c3-1 6.5-1.5 9-3.5" /></>,
    palette: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.7-.8 1.7-1.7 0-.4-.2-.8-.4-1.1-.3-.3-.4-.7-.4-1.1 0-.9.8-1.7 1.7-1.7H16c3.3 0 6-2.7 6-6 0-5.5-4.5-9.6-10-9.6zM6.5 12a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />,
    bacteria: <><circle cx="12" cy="12" r="5" strokeWidth={1.5} /><path strokeLinecap="round" strokeWidth={1.5} d="M12 2v5M12 17v5M2 12h5M17 12h5M4.93 4.93l3.54 3.54M15.54 15.54l3.53 3.53M4.93 19.07l3.54-3.54M15.54 8.46l3.53-3.53" /></>,
    sparkles: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5zM19 2l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5zM19 18l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5z" />,
    steam: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 18V6a2 2 0 012-2h4a2 2 0 012 2v12M4 18h16M6 18v2M18 18v2M8 10h8M12 4v-2" />,
    tools: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" /></>,
    check: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 11.08V12a10 10 0 11-5.93-9.14" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M22 4L12 14.01l-3-3" /></>,
    building: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" /><path strokeWidth={1.5} d="M9 9h1M9 13h1M9 17h1M13 13h1M13 17h1" /></>,
    users: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" strokeWidth={1.5} /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
    clipboard: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" /><rect x="8" y="2" width="8" height="4" rx="1" strokeWidth={1.5} /><path strokeLinecap="round" strokeWidth={1.5} d="M9 12h6M9 16h4" /></>,
  };
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {paths[iconKey] || paths.check}
    </svg>
  );
}

export default function SubServicePageClient({ slug }: { slug: string }) {
  const { language, t, getLocalizedPath } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const page = subServicesData[slug];

  if (!page) {
    notFound();
  }

  const h1 = page.h1[language] || page.h1.ru;
  const content = page.content[language] || page.content.ru;
  const description = page.description[language] || page.description.ru;

  const parentSlug = page.parentService;
  const parentService = servicesData[parentSlug];
  const parentTitle = parentService
    ? t(`serviceDetails.${parentSlug}.title`) || parentService.title
    : '';

  const siblings = getSubServicesForParent(parentSlug).filter(s => s.slug !== slug);
  const catData = getCategoryForSlug(parentSlug);

  const bookBtnText = language === 'ru' ? 'Заказать услугу' : language === 'ar' ? 'اطلب الخدمة' : 'Book Service';
  const pricesBtnText = language === 'ru' ? 'Смотреть цены' : language === 'ar' ? 'عرض الأسعار' : 'View Prices';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none bg-blue-100">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(/images/buble.webp)',
          backgroundRepeat: 'repeat',
          backgroundSize: '100%',
        }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          {/* Hero Section — Full-width with gradient overlay */}
          <section className="relative pt-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1400px] mx-auto">
              <div className="relative min-h-[420px] rounded-3xl overflow-hidden flex items-center shadow-2xl">
                <div className="absolute inset-0 z-0 bg-gray-900">
                  {page.image && (
                    <img
                      src={page.image}
                      alt={h1}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
                </div>

                <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
                  <div className="max-w-3xl">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-white/70 text-sm flex-wrap mb-6">
                      <Link href={getLocalizedPath('/')} className="hover:text-white transition-colors">
                        {t('serviceHero.home')}
                      </Link>
                      <span>→</span>
                      {parentService && (
                        <>
                          <Link
                            href={getLocalizedPath(`/services/${parentSlug}`)}
                            className="hover:text-white transition-colors"
                          >
                            {parentTitle}
                          </Link>
                          <span>→</span>
                        </>
                      )}
                      <span className="text-white font-medium">{h1}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4">
                      {h1}
                    </h1>

                    <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-8">
                      {description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-10 py-4 bg-blue-600 text-white rounded-full font-semibold text-base md:text-lg hover:bg-blue-700 transition-all duration-300 shadow-[0_8px_30px_rgba(59,130,246,0.5)] hover:shadow-[0_8px_40px_rgba(59,130,246,0.6)] hover:scale-105"
                      >
                        {bookBtnText}
                      </button>
                      <Link
                        href={getLocalizedPath('/prices')}
                        className="px-8 py-4 border-2 border-white/40 text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300"
                      >
                        {pricesBtnText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          {catData && catData.features.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-3">
                {language === 'ru' ? 'Почему выбирают нас' : language === 'ar' ? 'لماذا يختاروننا' : 'Why Choose Us'}
              </h2>
              <p className="text-gray-500 text-center mb-10 max-w-xl mx-auto">
                {language === 'ru' ? 'Профессиональный подход и гарантия результата' : language === 'ar' ? 'نهج مهني وضمان النتيجة' : 'Professional approach and guaranteed results'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {catData.features.map((f, i) => (
                  <div key={i} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/50">
                    <div className={`w-12 h-12 rounded-xl ${iconColors[f.iconKey] || 'bg-blue-100 text-blue-600'} flex items-center justify-center mb-4`}>
                      <FeatureIcon iconKey={f.iconKey} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{f.title[language] || f.title.ru}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.desc[language] || f.desc.ru}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Content Section */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 shadow-xl border border-white/50">
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700">
                {content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-5 text-gray-700 leading-relaxed text-base sm:text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Process Steps */}
          {catData && catData.process.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
                {language === 'ru' ? 'Как мы работаем' : language === 'ar' ? 'كيف نعمل' : 'How We Work'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {catData.process.map((step, i) => (
                  <div key={i} className="relative">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg h-full">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                        {i + 1}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{step.title[language] || step.title.ru}</h3>
                      <p className="text-sm text-gray-600">{step.desc[language] || step.desc.ru}</p>
                    </div>
                    {i < catData.process.length - 1 && (
                      <div className="hidden lg:block absolute top-10 -right-3 text-blue-300 text-2xl">→</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA Banner */}
          <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                {language === 'ru' ? 'Готовы заказать?' : language === 'ar' ? 'مستعد للطلب؟' : 'Ready to Order?'}
              </h2>
              <p className="text-blue-100 mb-6 max-w-lg mx-auto">
                {language === 'ru'
                  ? 'Оставьте заявку — мы свяжемся с вами в течение 15 минут'
                  : language === 'ar'
                    ? 'اترك طلبًا — سنتصل بك خلال 15 دقيقة'
                    : 'Leave a request — we\'ll contact you within 15 minutes'}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:scale-105"
                >
                  {bookBtnText}
                </button>
                <a
                  href="https://wa.me/971585828091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 border-2 border-white/50 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.917.918l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.325 0-4.491-.753-6.243-2.033l-.436-.326-2.645.887.887-2.645-.326-.436A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          {catData && catData.faq.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                {language === 'ru' ? 'Частые вопросы' : language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
              </h2>
              <div className="max-w-3xl mx-auto space-y-3">
                {catData.faq.map((item, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:bg-blue-50/50 transition-colors"
                    >
                      <span>{item.q[language] || item.q.ru}</span>
                      <svg
                        className={`w-5 h-5 text-blue-600 transition-transform duration-200 flex-shrink-0 ml-4 ${openFaqIndex === i ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaqIndex === i && (
                      <div className="px-5 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {item.a[language] || item.a.ru}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Sub-Services */}
          {siblings.length > 0 && (
            <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                {language === 'ru' ? 'Похожие услуги' : language === 'ar' ? 'خدمات مشابهة' : 'Related Services'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {siblings.map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={getLocalizedPath(`/${sibling.slug}`)}
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-blue-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                      {sibling.h1[language] || sibling.h1.ru}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {sibling.description[language] || sibling.description.ru}
                    </p>
                    <span className="text-blue-600 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {language === 'ru' ? 'Подробнее' : language === 'ar' ? 'المزيد' : 'Learn more'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <ContactSection />
        </main>
        <Footer />
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
