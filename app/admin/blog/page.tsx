'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  slug: string;
  title: { ru: string; en: string; ar: string };
  published: boolean;
  createdAt: string;
}

export default function AdminBlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = () => {
    setLoading(true);
    fetch('/api/blog')
      .then((r) => r.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (slug: string) => {
    if (!confirm('Удалить эту статью?')) return;
    await fetch(`/api/blog/${slug}`, { method: 'DELETE' });
    fetchPosts();
  };

  const togglePublish = async (post: BlogPost) => {
    await fetch(`/api/blog/${post.slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !post.published }),
    });
    fetchPosts();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Блог</h1>
        <Link
          href="/admin/blog/new"
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          + Новая статья
        </Link>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 h-20" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl">
          <p className="text-gray-500 text-lg">Нет статей</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Заголовок</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Slug</th>
                <th className="text-center px-6 py-3 text-sm font-medium text-gray-500">Статус</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-gray-500">Дата</th>
                <th className="text-right px-6 py-3 text-sm font-medium text-gray-500">Действия</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {posts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{post.title.ru || post.title.en}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{post.slug}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => togglePublish(post)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.published
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {post.published ? 'Опубликовано' : 'Черновик'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(post.createdAt).toLocaleDateString('ru-RU')}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <Link
                      href={`/admin/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Редакт.
                    </Link>
                    <button
                      onClick={() => handleDelete(post.slug)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
