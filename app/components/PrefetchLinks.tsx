'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PREFETCH_ROUTES = [
  '/services/carpet-cleaning-dubai',
  '/services/sofa-cleaning-dubai',
  '/services/curtains-cleaning-dubai',
  '/services/ac-cleaning-dubai',
  '/about',
  '/contact',
  '/checkout',
];

export default function PrefetchLinks() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch routes when idle
    if ('requestIdleCallback' in window) {
      const prefetchRoutes = () => {
        PREFETCH_ROUTES.forEach(route => {
          router.prefetch(route);
        });
      };

      const idleCallbackId = requestIdleCallback(prefetchRoutes, {
        timeout: 2000,
      });

      return () => {
        cancelIdleCallback(idleCallbackId);
      };
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      const timer = setTimeout(() => {
        PREFETCH_ROUTES.forEach(route => {
          router.prefetch(route);
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [router]);

  return null;
}
