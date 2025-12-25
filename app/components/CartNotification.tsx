'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageProvider';

interface CartNotificationProps {
  show: boolean;
  itemName: string;
  onClose: () => void;
}

export default function CartNotification({ show, itemName, onClose }: CartNotificationProps) {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setIsLeaving(false);
      
      const timer = setTimeout(() => {
        setIsLeaving(true);
        setTimeout(() => {
          setIsVisible(false);
          onClose();
        }, 300);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-[100] ${isLeaving ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 min-w-[340px] max-w-[400px]">
        <div className="flex items-start gap-4">
          {/* Success icon */}
          <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-scaleIn">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-1">
              {t('cart.added') || 'Added to cart'}
            </p>
            <p className="text-gray-900 font-medium text-base leading-snug">
              {itemName}
            </p>
          </div>
          
          {/* Cart icon with badge */}
          <div className="flex-shrink-0 relative">
            <div className="w-11 h-11 bg-blue-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">1</span>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-green-500 rounded-full animate-shrinkWidth"></div>
        </div>
        
        {/* Close button */}
        <button
          onClick={() => {
            setIsLeaving(true);
            setTimeout(() => {
              setIsVisible(false);
              onClose();
            }, 300);
          }}
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
