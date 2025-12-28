'use client';

import { useLanguage } from '@/app/contexts/LanguageProvider';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-90 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6" suppressHydrationWarning>{t('hero.getQuoteTitle')}</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" suppressHydrationWarning>{t('hero.nameLabel')}</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder={t('hero.namePlaceholder')}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" suppressHydrationWarning>{t('hero.phoneLabel')}</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="+971"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" suppressHydrationWarning>{t('hero.serviceLabel')}</label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
              <option value="" suppressHydrationWarning>{t('hero.selectService')}</option>
              <option value="carpet-cleaning" suppressHydrationWarning>{t('services.carpet')}</option>
              <option value="sofa-mattresses" suppressHydrationWarning>{t('services.sofa')}</option>
              <option value="curtains-blinds" suppressHydrationWarning>{t('services.curtains')}</option>
              <option value="air-conditioner" suppressHydrationWarning>{t('services.aircon')}</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            suppressHydrationWarning
          >
            {t('hero.submitButton')}
          </button>
        </form>
      </div>
    </div>
  );
}
