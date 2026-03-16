'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminGalleryLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    { label: 'До / После', href: '/admin/gallery' },
    { label: 'Фотогалерея', href: '/admin/gallery/photos' },
  ];

  const isActive = (href: string) => {
    if (href === '/admin/gallery') return pathname === '/admin/gallery';
    return pathname.startsWith(href);
  };

  return (
    <div>
      {/* Page header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Галерея</h1>
      </div>

      {/* Tab switcher */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-8 w-fit">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive(tab.href)
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      {/* Page content */}
      {children}
    </div>
  );
}
