'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import { useCart } from '@/app/contexts/CartProvider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { t } = useLanguage();
  const { clearCart } = useCart();
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      router.push('/');
      return;
    }

    // Получаем данные о сессии
    fetch(`/api/checkout-session?session_id=${sessionId}`)
      .then(res => res.json())
      .then(data => {
        setSessionData(data);
        setLoading(false);
        // Очищаем корзину после успешной оплаты
        clearCart();
      })
      .catch(err => {
        console.error('Failed to fetch session:', err);
        setLoading(false);
      });
  }, [searchParams, router, clearCart]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 -z-10">
          <div className="absolute inset-0 opacity-30">
            <Image src="/images/buble.webp" alt="Background" fill className="object-cover" />
          </div>
        </div>
        <div className="pt-32 pb-20 px-4 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">{t('checkout.loading')}</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 -z-10">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/buble.webp" alt="Background" fill className="object-cover" />
        </div>
      </div>

      <div className="pt-32 pb-20 px-4 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl text-center">
            {/* Success Icon */}
            <div className="relative mx-auto mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl animate-in zoom-in duration-500">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="absolute inset-0 w-24 h-24 mx-auto bg-green-200 rounded-full animate-ping opacity-20"></div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('checkout.successTitle')}
            </h1>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {t('checkout.successMessage')}
            </p>

            {/* Payment Details */}
            {sessionData && sessionData.status === 'paid' && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8">
                <div className="space-y-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-semibold">{t('checkout.paymentStatus')}:</span>
                    <span className="text-green-600 font-bold">{t('checkout.paid')}</span>
                  </div>
                  {sessionData.customerEmail && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-semibold">{t('checkout.email')}:</span>
                      <span className="text-gray-900">{sessionData.customerEmail}</span>
                    </div>
                  )}
                  {sessionData.amountTotal && (
                    <div className="flex justify-between items-center pt-3 border-t border-green-200">
                      <span className="text-gray-700 font-semibold">{t('checkout.total')}:</span>
                      <span className="text-blue-600 font-bold text-xl">
                        {(sessionData.amountTotal / 100).toFixed(2)} د.إ
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Info Message */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8">
              <div className="flex gap-3 items-start">
                <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-700 text-left">
                  {t('checkout.confirmationEmail')}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push('/')}
                className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                {t('checkout.backToHome')}
              </button>
              <button
                onClick={() => router.push('/#services')}
                className="flex-1 py-4 bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
              >
                {t('checkout.goToServices')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
