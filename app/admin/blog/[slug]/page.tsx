'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImageUploader from '@/app/admin/components/ImageUploader';

export default function AdminBlogEdit() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    slug: '',
    title: { ru: '', en: '', ar: '' },
    excerpt: { ru: '', en: '', ar: '' },
    content: { ru: '', en: '', ar: '' },
    coverImage: '',
    tags: '',
    published: false,
  });

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((r) => r.json())
      .then((data) => {
        setForm({
          slug: data.slug,
          title: data.title || { ru: '', en: '', ar: '' },
          excerpt: data.excerpt || { ru: '', en: '', ar: '' },
          content: data.content || { ru: '', en: '', ar: '' },
          coverImage: data.coverImage || '',
          tags: (data.tags || []).join(', '),
          published: data.published || false,
        });
        setLoading(false);
      })
      .catch(() => {
        alert('Статья не найдена');
        router.push('/admin/blog');
      });
  }, [slug, router]);

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
      };
      const res = await fetch(`/api/blog/${slug}`, {
        method: 'PUT',
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

  if (loading) {
    return (
      <div className="animate-pulse space-y-6 max-w-4xl">
        <div className="h-8 bg-gray-200 rounded w-1/3" />
        <div className="h-12 bg-gray-200 rounded" />
        <div className="h-12 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Редактирование статьи</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => handleChange('slug', e.target.value)}
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Теги (через запятую)</label>
          <input
            type="text"
            value={form.tags}
            onChange={(e) => handleChange('tags', e.target.value)}
            placeholder="cleaning, tips, dubai"
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
