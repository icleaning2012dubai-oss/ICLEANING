'use client';

import Image from 'next/image';
import { useCart } from '@/app/contexts/CartProvider';
import { useLanguage } from '@/app/contexts/LanguageProvider';

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice, isOpen, closeCart } = useCart();
  const { t } = useLanguage();

  return (
    <>
      {/* Cart Sidebar */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-50 transition-opacity"
            onClick={closeCart}
          />

          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                {t('cart.title') || 'Shopping Cart'}
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <svg
                    className="w-24 h-24 text-gray-300 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <p className="text-gray-500 text-lg">
                    {t('cart.empty') || 'Your cart is empty'}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div
                      key={item.id}
                      className="flex gap-4 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                    >
                      {item.image && (
                        <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                            loading="lazy"
                            quality={80}
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 truncate">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                        {item.description && (
                          <p className="text-xs text-gray-400 mb-2">{item.description}</p>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors"
                            >
                              <span className="text-gray-600">−</span>
                            </button>
                            <span className="font-semibold text-gray-900 w-8 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-full bg-white border border-gray-300 hover:bg-gray-50 flex items-center justify-center transition-colors"
                            >
                              <span className="text-gray-600">+</span>
                            </button>
                          </div>
                          <span className="font-bold text-blue-600">
                            AED {(item.price * item.quantity).toFixed(0)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="flex-shrink-0 p-1 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span className="text-gray-700">{t('cart.total') || 'Total'}:</span>
                  <span className="text-2xl text-blue-600">AED {totalPrice.toFixed(0)}</span>
                </div>
                
                <button
                  onClick={() => {
                    closeCart();
                    window.location.href = '/checkout';
                  }}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg hover:shadow-xl"
                >
                  {t('cart.checkout') || 'Proceed to Checkout'}
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
                >
                  {t('cart.clear') || 'Clear Cart'}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
