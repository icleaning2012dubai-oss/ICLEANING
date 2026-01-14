'use client';

import { useState } from 'react';
import { useCart } from '@/app/contexts/CartProvider';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    notes: '',
    paymentMethod: 'card'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Stripe оплата (единственный вариант)
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          customerInfo: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            notes: formData.notes,
          },
        }),
      });

      const { sessionId, url, error } = await response.json();

      if (error) {
        console.error('Stripe error:', error);
        alert(t('checkout.paymentError') || 'Payment error occurred. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Перенаправление на Stripe Checkout
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert(t('checkout.submitError') || 'An error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    router.push('/');
  };

  if (items.length === 0 && !showSuccessModal) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 -z-10">
          <div className="absolute inset-0 opacity-30">
            <Image src="/images/buble.webp" alt="Background" fill className="object-cover" />
          </div>
        </div>
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('checkout.emptyTitle')}</h1>
              <p className="text-gray-600 mb-8 text-lg">{t('checkout.emptyDescription')}</p>
              <button onClick={() => router.push('/#services')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                {t('checkout.goToServices')}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Header/>
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 -z-10">
        <div className="absolute inset-0 opacity-30">
          <Image src="/images/buble.webp" alt="Background" fill className="object-cover" />
        </div>
      </div>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-12">
            <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{t('checkout.pageTitle')}</h1>
                </div>
                <p className="text-gray-600 text-lg">{t('checkout.pageSubtitle')}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">1</div>
                  <h2 className="text-2xl font-bold text-gray-900">{t('checkout.section1Title')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">{t('checkout.firstName')} <span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 placeholder:text-gray-500" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">{t('checkout.lastName')} <span className="text-red-500">*</span></label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 placeholder:text-gray-500" placeholder="Doe" />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">{t('checkout.address')} <span className="text-red-500">*</span></label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 placeholder:text-gray-500" placeholder={t('checkout.addressPlaceholder')} />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">{t('checkout.phone')} <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 placeholder:text-gray-500" placeholder="+971 50 123 4567" />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">{t('checkout.email')} <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-gray-900 placeholder:text-gray-500" placeholder="example@email.com" />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">{t('checkout.notes')}</label>
                  <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none text-gray-900 placeholder:text-gray-500" placeholder={t('checkout.notesPlaceholder')} />
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">3</div>
                  <h2 className="text-2xl font-bold text-gray-900">{t('checkout.section3Title')}</h2>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-blue-500 bg-blue-50/50">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 flex items-center gap-2">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        {t('checkout.paymentCardTitle')}
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Secure payment via Stripe. All major credit and debit cards accepted.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <svg className="w-10 h-6" viewBox="0 0 48 32" fill="none">
                          <rect width="48" height="32" rx="4" fill="#252525"/>
                          <circle cx="18" cy="16" r="8" fill="#EB001B"/>
                          <circle cx="30" cy="16" r="8" fill="#F79E1B"/>
                          <path d="M24 9.6a9.6 9.6 0 000 12.8 9.6 9.6 0 000-12.8z" fill="#FF5F00"/>
                        </svg>
                        <svg className="w-10 h-6" viewBox="0 0 48 32" fill="none">
                          <rect width="48" height="32" rx="4" fill="#0066B2"/>
                          <rect x="8" y="12" width="32" height="8" fill="white"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <p className="text-sm text-gray-700">{t('checkout.privacyText')} <a href="#" className="text-blue-600 hover:underline font-medium">{t('checkout.privacyLink')}</a>.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl sticky top-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">2</div>
                  <h2 className="text-2xl font-bold text-gray-900">{t('checkout.section2Title')}</h2>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm font-semibold text-gray-700 pb-3 border-b-2 border-gray-200">
                    <span>{t('checkout.productLabel')}</span>
                    <span>{t('checkout.totalLabel')}</span>
                  </div>

                  {items.map((item) => (
                    <div key={item.id} className="flex items-start gap-3 pb-4 border-b border-gray-200">
                      {item.image && (
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                        <p className="text-xs text-gray-600">{t('checkout.quantityLabel')}: {item.quantity}</p>
                      </div>
                      <div className="text-blue-600 font-bold whitespace-nowrap">{(item.price * item.quantity).toFixed(2)} د.إ</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>{t('checkout.subtotal')}</span>
                    <span className="text-blue-600 font-semibold">{totalPrice.toFixed(2)} د.إ</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t-2 border-gray-300">
                    <span>{t('checkout.total')}</span>
                    <span className="text-blue-600">{totalPrice.toFixed(2)} د.إ</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-5 rounded-r-2xl mb-6 shadow-sm">
                  <div className="flex gap-3">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-sm text-gray-700 font-medium">{t('checkout.infoMessage')}</p>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                  {isSubmitting ? t('checkout.submitting') : t('checkout.submitButton')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full shadow-2xl transform transition-all animate-in zoom-in-95 duration-300">
            <div className="text-center">
              {/* Success Icon with animation */}
              <div className="relative mx-auto mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-xl animate-in zoom-in duration-500">
                  <svg className="w-12 h-12 text-white animate-in zoom-in duration-700 delay-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {/* Decorative circles */}
                <div className="absolute inset-0 w-24 h-24 mx-auto bg-green-200 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Message */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('checkout.successTitle')}
              </h3>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                {t('checkout.successMessage')}
              </p>

              {/* OK Button */}
              <button
                onClick={handleCloseModal}
                className="w-full py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer/>
    </>
  );
}
