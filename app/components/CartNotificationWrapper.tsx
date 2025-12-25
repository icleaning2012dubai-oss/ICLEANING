'use client';

import { useCart } from '@/app/contexts/CartProvider';
import CartNotification from './CartNotification';

export default function CartNotificationWrapper() {
  const { notification, hideNotification } = useCart();
  
  return (
    <CartNotification
      show={notification.show}
      itemName={notification.itemName}
      onClose={hideNotification}
    />
  );
}
