'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useLanguage } from '@/app/contexts/LanguageProvider';

interface BlogPost {
  _id: string;
  slug: string;
  title: { ru: string; en: string; ar: string };
  excerpt: { ru: string; en: string; ar: string };
  content: { ru: string; en: string; ar: string };
  coverImage: string;
  tags: string[];
  published: boolean;
  createdAt: string;
}

export default function BlogArticlePage() {
  const { language, t, getLocalizedPath } = useLanguage();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const lang = language as 'ru' | 'en' | 'ar';

  useEffect(() => {
    // Extract slug from URL
    const pathParts = window.location.pathname.split('/');
    const slug = pathParts[pathParts.length - 1];

    fetch(`/api/blog/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error('Not found');
        return res.json();
      })
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
        <div className="relative z-10">
          <Header />
          <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[800px] mx-auto animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded w-3/4" />
              <div className="h-80 bg-gray-200 rounded-2xl" />
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 relative">
        <div className="relative z-10">
          <Header />
          <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center"><svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('blog.notFound')}</h1>
            <Link
              href={getLocalizedPath('/blog')}
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              {t('blog.backToBlog')}
            </Link>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

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
          <article className="max-w-[800px] mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Link href={getLocalizedPath('/')} className="hover:text-blue-600 transition-colors">
                {t('nav.home')}
              </Link>
              <span>/</span>
              <Link href={getLocalizedPath('/blog')} className="hover:text-blue-600 transition-colors">
                {t('blog.badge')}
              </Link>
              <span>/</span>
              <span className="text-gray-700 font-medium line-clamp-1">
                {post.title[lang] || post.title.en}
              </span>
            </nav>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title[lang] || post.title.en}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500">
              <span>
                {new Date(post.createdAt).toLocaleDateString(
                  lang === 'ru' ? 'ru-RU' : lang === 'ar' ? 'ar-AE' : 'en-US',
                  { year: 'numeric', month: 'long', day: 'numeric' }
                )}
              </span>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Cover Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-lg">
              <Image
                src={post.coverImage}
                alt={post.title[lang] || post.title.en}
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
                priority
              />
            </div>

            {/* Content — rendered as HTML */}
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content[lang] || post.content.en }}
            />

            {/* Back to blog */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link
                href={getLocalizedPath('/blog')}
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {t('blog.backToBlog')}
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </div>
  );
}
