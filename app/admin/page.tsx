'use client';

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ posts: 0, gallery: 0 });

  useEffect(() => {
    Promise.all([
      fetch('/api/blog').then((r) => r.json()).catch(() => []),
      fetch('/api/gallery').then((r) => r.json()).catch(() => []),
    ]).then(([posts, gallery]) => {
      setStats({
        posts: Array.isArray(posts) ? posts.length : 0,
        gallery: Array.isArray(gallery) ? gallery.length : 0,
      });
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Панель управления</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="w-12 h-12 mb-3 bg-blue-100 rounded-xl flex items-center justify-center"><svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></div>
          <h2 className="text-lg font-semibold text-gray-900">Статьи в блоге</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.posts}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="w-12 h-12 mb-3 bg-green-100 rounded-xl flex items-center justify-center"><svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>
          <h2 className="text-lg font-semibold text-gray-900">Элементов галереи</h2>
          <p className="text-3xl font-bold text-blue-600 mt-2">{stats.gallery}</p>
        </div>
      </div>
    </div>
  );
}
