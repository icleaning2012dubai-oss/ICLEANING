'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const CATEGORIES = [
  { value: 'cleaning', label: 'Уборка' },
  { value: 'carpet',   label: 'Ковры' },
  { value: 'sofa',     label: 'Диваны' },
  { value: 'curtains', label: 'Шторы' },
  { value: 'ac',       label: 'Кондиционеры' },
  { value: 'other',    label: 'Другое' },
];

interface Photo {
  _id: string;
  url: string;
  alt: string;
  category: string;
  published: boolean;
  order: number;
  source: string;
  createdAt: string;
}

export default function AdminGalleryPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [filterCat, setFilterCat] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ alt: '', category: 'cleaning', url: '', order: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchPhotos = (cat = filterCat) => {
    setLoading(true);
    const url = cat ? `/api/gallery-photos?category=${cat}` : '/api/gallery-photos';
    fetch(url)
      .then((r) => r.json())
      .then((data) => { setPhotos(Array.isArray(data) ? data : (data.photos ?? [])); setLoading(false); })
      .catch(() => setLoading(false));
  };

  useEffect(() => { fetchPhotos(); }, [filterCat]);  // eslint-disable-line

  // ── Upload file to Cloudinary via existing /api/upload ──
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('folder', 'icleaning/photos');
      const res  = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json();
      setForm((prev) => ({ ...prev, url: data.url }));
    } catch {
      alert('Ошибка загрузки');
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  // ── Save new photo ──
  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.url) { alert('Сначала загрузите фото'); return; }
    await fetch('/api/gallery-photos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, published: true, source: 'upload' }),
    });
    setShowForm(false);
    setForm({ alt: '', category: 'cleaning', url: '', order: 0 });
    fetchPhotos();
  };

  // ── Toggle published ──
  const togglePublish = async (photo: Photo) => {
    await fetch(`/api/gallery-photos/${photo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !photo.published }),
    });
    fetchPhotos();
  };

  // ── Delete ──
  const handleDelete = async (id: string) => {
    if (!confirm('Удалить фото? Оно также будет удалено из Cloudinary.')) return;
    await fetch(`/api/gallery-photos/${id}`, { method: 'DELETE' });
    fetchPhotos();
  };

  // ── Update category inline ──
  const updateCategory = async (photo: Photo, category: string) => {
    await fetch(`/api/gallery-photos/${photo._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category }),
    });
    fetchPhotos();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Фотогалерея</h2>
          <p className="text-sm text-gray-500 mt-1">{photos.length} фото</p>
        </div>
        <button
          onClick={() => setShowForm((v) => !v)}
          className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          {showForm ? '✕ Отмена' : '+ Добавить фото'}
        </button>
      </div>

      {/* Add photo form */}
      {showForm && (
        <form
          onSubmit={handleSave}
          className="bg-white border border-blue-100 rounded-2xl p-6 mb-8 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Новое фото</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Uploader */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">Загрузить файл</label>
              <input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              <button
                type="button"
                onClick={() => inputRef.current?.click()}
                disabled={uploading}
                className="w-full px-4 py-2.5 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl text-sm text-gray-600 hover:border-blue-400 hover:bg-blue-50 transition-colors disabled:opacity-50"
              >
                {uploading ? '⏳ Загрузка...' : '📁 Выбрать файл'}
              </button>
              {form.url && (
                <div className="relative mt-3 aspect-video rounded-lg overflow-hidden">
                  <Image src={form.url} alt="preview" fill className="object-cover" sizes="300px" />
                </div>
              )}
            </div>

            {/* Or URL */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Или вставьте URL</label>
                <input
                  type="text"
                  value={form.url}
                  onChange={(e) => setForm((p) => ({ ...p, url: e.target.value }))}
                  placeholder="https://res.cloudinary.com/..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Описание / Alt</label>
                <input
                  type="text"
                  value={form.alt}
                  onChange={(e) => setForm((p) => ({ ...p, alt: e.target.value }))}
                  placeholder="Чистка ковра..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Категория</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Порядок</label>
                <input
                  type="number"
                  value={form.order}
                  onChange={(e) => setForm((p) => ({ ...p, order: Number(e.target.value) }))}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-5">
            <button
              type="submit"
              disabled={!form.url || uploading}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              Сохранить
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Отмена
            </button>
          </div>
        </form>
      )}

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[{ value: '', label: 'Все' }, ...CATEGORIES].map((c) => (
          <button
            key={c.value}
            onClick={() => setFilterCat(c.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filterCat === c.value
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-200 text-gray-600 hover:bg-blue-50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Photos grid */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="aspect-square rounded-xl bg-gray-200 animate-pulse" />
          ))}
        </div>
      ) : photos.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl">
          <p className="text-gray-400 text-lg">Нет фотографий</p>
          <p className="text-gray-400 text-sm mt-1">Нажмите «Добавить фото» или запустите импорт с Google Drive</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {photos.map((photo) => (
            <div key={photo._id} className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative aspect-square">
                <Image
                  src={photo.url}
                  alt={photo.alt || 'Gallery photo'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                {!photo.published && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">Скрыто</span>
                  </div>
                )}
                {/* Hover actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                  <button
                    onClick={() => togglePublish(photo)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      photo.published
                        ? 'bg-yellow-400 text-yellow-900'
                        : 'bg-green-400 text-green-900'
                    }`}
                  >
                    {photo.published ? 'Скрыть' : 'Показать'}
                  </button>
                  <button
                    onClick={() => handleDelete(photo._id)}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-red-500 text-white hover:bg-red-600"
                  >
                    Удалить
                  </button>
                </div>
              </div>

              {/* Category badge + selector */}
              <div className="p-2">
                <select
                  value={photo.category}
                  onChange={(e) => updateCategory(photo, e.target.value)}
                  className="w-full text-xs px-2 py-1 border border-gray-200 rounded-lg bg-gray-50 focus:border-blue-400 outline-none"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
                {photo.alt && (
                  <p className="text-xs text-gray-400 mt-1 truncate">{photo.alt}</p>
                )}
                {photo.source === 'gdrive' && (
                  <span className="inline-block mt-1 text-[10px] text-blue-500 font-medium">Google Drive</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
