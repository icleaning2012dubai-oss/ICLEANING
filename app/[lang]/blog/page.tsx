'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useLanguage } from '@/app/contexts/LanguageProvider';

interface BlogPost {
  _id: string;
  slug: string;
  title: { ru: string; en: string; ar: string };
  excerpt: { ru: string; en: string; ar: string };
  coverImage: string;
  tags: string[];
  published: boolean;
  createdAt: string;
}

export default function BlogPage() {
  const { language, t, getLocalizedPath } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blog?published=true')
      .then((res) => res.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const lang = language as 'ru' | 'en' | 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/buble.webp)',
            backgroundRepeat: 'repeat',
            backgroundSize: '100%',
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            {/* Title */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                {t('blog.badge')}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t('blog.title')}
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                {t('blog.subtitle')}
              </p>
            </div>

            {/* Posts Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                    <div className="h-52 bg-gray-200" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : posts.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-2xl flex items-center justify-center"><svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></div>
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  {t('blog.noPosts')}
                </h2>
                <p className="text-gray-500">{t('blog.noPostsDescription')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={getLocalizedPath(`/blog/${post.slug}`)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={post.coverImage}
                        alt={post.title[lang] || post.title.en}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title[lang] || post.title.en}
                      </h2>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt[lang] || post.excerpt.en}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-400">
                          {new Date(post.createdAt).toLocaleDateString(
                            lang === 'ru' ? 'ru-RU' : lang === 'ar' ? 'ar-AE' : 'en-US',
                            { year: 'numeric', month: 'long', day: 'numeric' }
                          )}
                        </span>
                        <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          {t('blog.readMore')}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
