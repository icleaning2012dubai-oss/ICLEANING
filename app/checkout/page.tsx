'use client';

import { useState } from 'react';
import { useCart } from '@/app/contexts/CartProvider';
import { useLanguage } from '@/app/contexts/LanguageProvider';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
    paymentMethod: 'cash'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Order submitted:', { ...formData, items, totalPrice });

    clearCart();
    alert('Заказ успешно оформлен! Мы свяжемся с вами в течение 1-2 дней.');
    router.push('/');
  };

  if (items.length === 0) {
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
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Корзина пуста</h1>
              <p className="text-gray-600 mb-8 text-lg">Добавьте товары в корзину, чтобы оформить заказ</p>
              <button onClick={() => router.push('/#services')} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Перейти к услугам
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
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Оформление заказа</h1>
                </div>
                <p className="text-gray-600 text-lg">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">1</div>
                  <h2 className="text-2xl font-bold text-gray-900">Детали оплаты</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Имя <span className="text-red-500">*</span></label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="Иван" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Фамилия <span className="text-red-500">*</span></label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="Петров" />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">Адрес <span className="text-red-500">*</span></label>
                  <input type="text" name="address" value={formData.address} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="Номер дома и название улицы" />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">Телефон <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="+971 50 123 4567" />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">Email <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all" placeholder="example@email.com" />
                </div>

                <div className="mt-6">
                  <label className="block text-gray-700 font-semibold mb-2">Примечание к заказу (необязательно)</label>
                  <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none" placeholder="Примечания к заказу, например, указания по доставке." />
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">3</div>
                  <h2 className="text-2xl font-bold text-gray-900">Платёжная информация</h2>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl cursor-pointer hover:bg-white hover:shadow-md transition-all duration-200 border-2 border-transparent hover:border-blue-200">
                    <input type="radio" name="paymentMethod" value="cash" checked={formData.paymentMethod === 'cash'} onChange={handleInputChange} className="mt-1" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">Оплата при доставке</div>
                      <p className="text-sm text-gray-600 mt-1">Оплата наличными при доставке заказа.</p>
                    </div>
                  </label>

                  <label className="flex items-start gap-4 p-5 bg-white/80 backdrop-blur-sm rounded-2xl cursor-pointer hover:bg-white hover:shadow-md transition-all duration-200 border-2 border-transparent hover:border-blue-200">
                    <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleInputChange} className="mt-1" />
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 flex items-center gap-2">
                        Кредитная/дебетовая карта
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                    </div>
                  </label>
                </div>

                <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <p className="text-sm text-gray-700">Ваши персональные данные будут использоваться для обработки ваших заказов, упрощения вашего взаимодействия с сайтом и для прочих целей, описанных в документе <a href="#" className="text-blue-600 hover:underline font-medium">политика конфиденциальности</a>.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl sticky top-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">2</div>
                  <h2 className="text-2xl font-bold text-gray-900">Ваш заказ</h2>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm font-semibold text-gray-700 pb-3 border-b-2 border-gray-200">
                    <span>ТОВАР</span>
                    <span>ИТОГО</span>
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
                        <p className="text-xs text-gray-600">Кол-во: {item.quantity}</p>
                      </div>
                      <div className="text-blue-600 font-bold whitespace-nowrap">{(item.price * item.quantity).toFixed(2)} د.إ</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Итого</span>
                    <span className="text-blue-600 font-semibold">{totalPrice.toFixed(2)} د.إ</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t-2 border-gray-300">
                    <span>Итого</span>
                    <span className="text-blue-600">{totalPrice.toFixed(2)} د.إ</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-400 p-5 rounded-r-2xl mb-6 shadow-sm">
                  <div className="flex gap-3">
                    <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-sm text-gray-700 font-medium">После оформления заказа мы свяжемся с Вами в течении 1-2 дней.</p>
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                  {isSubmitting ? 'Оформление...' : 'Оформить заказ'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}
