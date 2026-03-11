'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImageUploader from '@/app/admin/components/ImageUploader';

const SERVICES = [
  { value: 'carpet', label: 'Ковры' },
  { value: 'sofa', label: 'Диваны' },
  { value: 'curtains', label: 'Шторы' },
  { value: 'ac', label: 'Кондиционеры' },
  { value: 'mattress', label: 'Матрасы' },
  { value: 'general', label: 'Общая уборка' },
];

export default function AdminGalleryEdit() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    title: { ru: '', en: '', ar: '' },
    description: { ru: '', en: '', ar: '' },
    beforeImage: '',
    afterImage: '',
    service: 'carpet',
    tags: '',
    published: false,
    order: 0,
  });

  useEffect(() => {
    fetch(`/api/gallery/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setForm({
          title: data.title || { ru: '', en: '', ar: '' },
          description: data.description || { ru: '', en: '', ar: '' },
          beforeImage: data.beforeImage || '',
          afterImage: data.afterImage || '',
          service: data.service || 'carpet',
          tags: (data.tags || []).join(', '),
          published: data.published || false,
          order: data.order || 0,
        });
        setLoading(false);
      })
      .catch(() => {
        alert('Элемент не найден');
        router.push('/admin/gallery');
      });
  }, [id, router]);

  const handleChange = (field: string, value: string, lang?: string) => {
    if (lang) {
      setForm((prev) => ({
        ...prev,
        [field]: { ...(prev as any)[field], [lang]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const body = {
        ...form,
        tags: form.tags
          .split(',')
          .map((t) => t.trim())
          .filter(Boolean),
        order: Number(form.order),
      };
      const res = await fetch(`/api/gallery/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        router.push('/admin/gallery');
      } else {
        const err = await res.json();
        alert(err.error || 'Ошибка при сохранении');
      }
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse space-y-6 max-w-4xl">
        <div className="h-8 bg-gray-200 rounded w-1/3" />
        <div className="h-12 bg-gray-200 rounded" />
        <div className="h-48 bg-gray-200 rounded" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Редактирование элемента</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Titles */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Название</h2>
          {(['ru', 'en', 'ar'] as const).map((lang) => (
            <div key={lang}>
              <label className="block text-sm font-medium text-gray-500 mb-1">{lang.toUpperCase()}</label>
              <input
                type="text"
                value={form.title[lang]}
                onChange={(e) => handleChange('title', e.target.value, lang)}
                required={lang !== 'ar'}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>
          ))}
        </div>

        {/* Descriptions */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Описание</h2>
          {(['ru', 'en', 'ar'] as const).map((lang) => (
            <div key={lang}>
              <label className="block text-sm font-medium text-gray-500 mb-1">{lang.toUpperCase()}</label>
              <textarea
                value={form.description[lang]}
                onChange={(e) => handleChange('description', e.target.value, lang)}
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
              />
            </div>
          ))}
        </div>

        {/* Before Image */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Фото ДО</h2>
          <ImageUploader
            value={form.beforeImage}
            onChange={(url) => setForm((prev) => ({ ...prev, beforeImage: url }))}
            folder="icleaning/gallery"
          />
        </div>

        {/* After Image */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Фото ПОСЛЕ</h2>
          <ImageUploader
            value={form.afterImage}
            onChange={(url) => setForm((prev) => ({ ...prev, afterImage: url }))}
            folder="icleaning/gallery"
          />
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Категория</label>
          <select
            value={form.service}
            onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            {SERVICES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>

        {/* Order */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Порядок</label>
          <input
            type="number"
            value={form.order}
            onChange={(e) => setForm((prev) => ({ ...prev, order: Number(e.target.value) }))}
            className="w-32 px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Теги (через запятую)</label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => handleChange('tags', e.target.value)}
            placeholder="carpet, deep cleaning"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Published */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="published"
            checked={form.published}
            onChange={(e) => setForm((prev) => ({ ...prev, published: e.target.checked }))}
            className="w-4 h-4 text-blue-600 rounded"
          />
          <label htmlFor="published" className="text-sm font-medium text-gray-700">
            Опубликовано
          </label>
        </div>

        {/* Submit */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {saving ? 'Сохраняю...' : 'Сохранить'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/gallery')}
            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}
