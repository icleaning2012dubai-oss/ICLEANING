'use client';

import { useLanguage } from '@/app/contexts/LanguageProvider';

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
