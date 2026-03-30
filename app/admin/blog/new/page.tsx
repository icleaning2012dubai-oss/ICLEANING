'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageUploader from '@/app/admin/components/ImageUploader';

export default function AdminBlogNew() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    slug: '',
    title: { ru: '', en: '', ar: '' },
    excerpt: { ru: '', en: '', ar: '' },
    content: { ru: '', en: '', ar: '' },
    coverImage: '',
    tags: { ru: '', en: '', ar: '' },
    published: false,
  });

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
      const ruTags = form.tags.ru.split(',').map((t) => t.trim()).filter(Boolean);
      const enTags = form.tags.en.split(',').map((t) => t.trim()).filter(Boolean);
      const arTags = form.tags.ar.split(',').map((t) => t.trim()).filter(Boolean);
      const maxLen = Math.max(ruTags.length, enTags.length, arTags.length);
      const tags = Array.from({ length: maxLen }, (_, i) => ({
        ru: ruTags[i] || '',
        en: enTags[i] || '',
        ar: arTags[i] || '',
      }));
      const body = {
        ...form,
        tags,
      };
      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        router.push('/admin/blog');
      } else {
        const err = await res.json();
        alert(err.error || 'Ошибка при сохранении');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Новая статья</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => handleChange('slug', e.target.value)}
            placeholder="cleaning-tips-dubai"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Titles */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Заголовок</h2>
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

        {/* Excerpts */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Краткое описание</h2>
          {(['ru', 'en', 'ar'] as const).map((lang) => (
            <div key={lang}>
              <label className="block text-sm font-medium text-gray-500 mb-1">{lang.toUpperCase()}</label>
              <textarea
                value={form.excerpt[lang]}
                onChange={(e) => handleChange('excerpt', e.target.value, lang)}
                required={lang !== 'ar'}
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Контент (HTML)</h2>
          {(['ru', 'en', 'ar'] as const).map((lang) => (
            <div key={lang}>
              <label className="block text-sm font-medium text-gray-500 mb-1">{lang.toUpperCase()}</label>
              <textarea
                value={form.content[lang]}
                onChange={(e) => handleChange('content', e.target.value, lang)}
                required={lang !== 'ar'}
                rows={8}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none font-mono text-sm"
              />
            </div>
          ))}
        </div>

        {/* Cover Image */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Обложка</h2>
          <ImageUploader
            value={form.coverImage}
            onChange={(url) => setForm((prev) => ({ ...prev, coverImage: url }))}
            folder="icleaning/blog"
          />
        </div>

        {/* Tags */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900">Теги (через запятую)</h2>
          {(['ru', 'en', 'ar'] as const).map((lng) => (
            <div key={lng}>
              <label className="block text-sm font-medium text-gray-500 mb-1">{lng.toUpperCase()}</label>
              <input
                type="text"
                value={form.tags[lng]}
                onChange={(e) => handleChange('tags', e.target.value, lng)}
                placeholder={lng === 'ru' ? 'уборка, советы, Дубай' : lng === 'en' ? 'cleaning, tips, Dubai' : 'تنظيف, نصائح, دبي'}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
            </div>
          ))}
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
            Опубликовать сразу
          </label>
        </div>

        {/* Submit */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {saving ? 'Сохраняю...' : 'Создать статью'}
          </button>
          <button
            type="button"
            onClick={() => router.push('/admin/blog')}
            className="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}
