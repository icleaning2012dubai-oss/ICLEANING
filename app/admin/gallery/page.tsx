'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface GalleryItem {
  _id: string;
  title: { ru: string; en: string; ar: string };
  beforeImage: string;
  afterImage: string;
  service: string;
  published: boolean;
  order: number;
  createdAt: string;
}

export default function AdminGalleryList() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = () => {
    setLoading(true);
    fetch('/api/gallery')
      .then((r) => r.json())
      .then((data) => {
        setItems(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Удалить этот элемент?')) return;
    await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
    fetchItems();
  };

  const togglePublish = async (item: GalleryItem) => {
    await fetch(`/api/gallery/${item._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !item.published }),
    });
    fetchItems();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-gray-700">До / После</h2>
        <Link
          href="/admin/gallery/new"
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          + Новый элемент
        </Link>
      </div>

      {loading ? (
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl p-4 h-48" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl">
          <p className="text-gray-500 text-lg">Нет элементов галереи</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item._id} className="bg-white rounded-xl shadow overflow-hidden">
              <div className="flex">
                <div className="relative w-1/2 aspect-[4/3]">
                  <Image src={item.beforeImage} alt="Before" fill className="object-cover" sizes="200px" />
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-black/70 text-white text-[10px] rounded">
                    До
                  </span>
                </div>
                <div className="relative w-1/2 aspect-[4/3]">
                  <Image src={item.afterImage} alt="After" fill className="object-cover" sizes="200px" />
                  <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-black/70 text-white text-[10px] rounded">
                    После
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title.ru || item.title.en}</h3>
                  <span className="text-xs text-gray-400">{item.service}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => togglePublish(item)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.published ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {item.published ? 'Опубликовано' : 'Черновик'}
                  </button>
                  <Link
                    href={`/admin/gallery/${item._id}`}
                    className="text-blue-600 hover:text-blue-800 text-xs font-medium"
                  >
                    Редакт.
                  </Link>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-600 hover:text-red-800 text-xs font-medium"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
