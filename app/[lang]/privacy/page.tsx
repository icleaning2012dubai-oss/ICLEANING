'use client';

import { useLanguage } from '@/app/contexts/LanguageProvider';

// ===== SEO METADATA - ДЛЯ СЕОШНИКА =====
// TODO: Добавить metadata для Privacy Policy
// Рекомендуемые значения:
// title: 'Privacy Policy - iCleaning Dubai'
// description: 'Privacy policy for iCleaning Dubai cleaning services. Learn how we protect your personal data and information.'
// robots: 'noindex, follow' (опционально - если не хотите индексировать эту страницу)
// ===== КОНЕЦ SEO METADATA =====

export default function PrivacyPage() {
  const { t } = useLanguage();
  
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
          {t('privacy.title')}
        </h1>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 space-y-8">
          <section>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('privacy.intro')}
            </p>
          </section>

          <section>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('privacy.usage')}
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('privacy.title') === 'Privacy Policy' ? 'Information Collection and Use' : 
               t('privacy.title') === 'Политика конфиденциальности' ? 'Сбор и использование информации' :
               'جمع المعلومات واستخدامها'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {t('privacy.title') === 'Privacy Policy' ? 
                'When using our Site and our social media pages, we may request you to provide us with certain personally identifiable information that can be used to contact or identify you. Personal Information may include, but is not limited to, your name, phone number, and email address (Personal Information).' :
               t('privacy.title') === 'Политика конфиденциальности' ?
                'При использовании нашего Сайта и наших страниц в социальных сетях мы можем попросить вас предоставить нам определенную личную информацию, которая может быть использована для связи с вами или идентификации вас. Личная информация может включать, помимо прочего, ваше имя, номер телефона и адрес электронной почты (Личная информация).' :
                'عند استخدام موقعنا وصفحاتنا على وسائل التواصل الاجتماعي، قد نطلب منك تزويدنا بمعلومات تعريف شخصية معينة يمكن استخدامها للاتصال بك أو تحديد هويتك. قد تتضمن المعلومات الشخصية، على سبيل المثال لا الحصر، اسمك ورقم هاتفك وعنوان بريدك الإلكتروني (المعلومات الشخصية).'}
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('privacy.title') === 'Privacy Policy' ? 'Marketing Communications and WhatsApp' :
               t('privacy.title') === 'Политика конфиденциальности' ? 'Маркетинговые сообщения и WhatsApp' :
               'الرسائل التسويقية وواتساب'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('privacy.title') === 'Privacy Policy' ?
                'GOLDEN SMART I CLEANING LAUNDRY SERVICES L.L.C has the right to send the User notifications about new products and services, special offers, booking confirmations, and various events via WhatsApp, SMS, email, and other communication channels.' :
               t('privacy.title') === 'Политика конфиденциальности' ?
                'Компания GOLDEN SMART I CLEANING LAUNDRY SERVICES L.L.C имеет право отправлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях, подтверждениях бронирования и различных событиях через WhatsApp, SMS, электронную почту и другие каналы связи.' :
                'تحق لشركة GOLDEN SMART I CLEANING LAUNDRY SERVICES L.L.C إرسال إشعارات للمستخدم حول المنتجات والخدمات الجديدة والعروض الخاصة وتأكيدات الحجز والأحداث المختلفة عبر واتساب والرسائل القصيرة والبريد الإلكتروني وقنوات الاتصال الأخرى.'}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('privacy.title') === 'Privacy Policy' ?
                'The User may opt out of receiving such messages at any time by sending a request to customer@icleaning.ae with the subject line "Unsubscribe", or by replying "STOP" to any WhatsApp message received.' :
               t('privacy.title') === 'Политика конфиденциальности' ?
                'Пользователь может в любое время отказаться от получения таких сообщений, направив запрос на адрес электронной почты customer@icleaning.ae с пометкой «Отказ от уведомлений», или написав слово "STOP" в ответ на любое полученное сообщение WhatsApp.' :
                'يمكن للمستخدم إلغاء الاشتراك في تلقي هذه الرسائل في أي وقت عن طريق إرسال طلب إلى customer@icleaning.ae بعنوان "إلغاء الاشتراك"، أو بالرد بكلمة "STOP" على أي رسالة واتساب مستلمة.'}
            </p>
          </section>

          <section className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Log Data</h2>
            <p className="text-gray-700 leading-relaxed">
              {t('privacy.title') === 'Privacy Policy' ?
                'Like many site operators, we collect information that your browser sends whenever you visit our Site (Log Data). This Log Data may include information such as your computers Internet Protocol (IP) address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.' :
               t('privacy.title') === 'Политика конфиденциальности' ?
                'Как и многие операторы сайтов, мы собираем информацию, отправляемую вашим браузером всякий раз, когда вы посещаете наш Сайт (Данные журнала). Эти данные журнала могут включать такую информацию, как адрес интернет-протокола вашего компьютера (IP), тип браузера, версию браузера, страницы нашего сайта, которые вы посещаете, время и дату вашего посещения, время, проведенное на этих страницах, и другую статистику.' :
                'مثل العديد من مشغلي المواقع، نقوم بجمع المعلومات التي يرسلها متصفحك كلما قمت بزيارة موقعنا (بيانات السجل). قد تتضمن بيانات السجل هذه معلومات مثل عنوان بروتوكول الإنترنت (IP) الخاص بجهاز الكمبيوتر الخاص بك، ونوع المتصفح، وإصدار المتصفح، والصفحات التي تزورها من موقعنا، ووقت وتاريخ زيارتك، والوقت الذي تقضيه في تلك الصفحات، وإحصائيات أخرى.'}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
