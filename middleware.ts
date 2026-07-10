import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ru', 'ar'];
const defaultLocale = 'en';
// Non-default locales get a URL prefix; default locale (en) lives at the root
const prefixedLocales = locales.filter(l => l !== defaultLocale);

// Only the live production domain may be indexed. Every other host (Vercel
// staging/preview deploys, *.vercel.app, localhost) is served noindex so it
// never competes with or leaks before the real site.
const PRODUCTION_HOSTS = ['icleaning.ae', 'www.icleaning.ae'];

// The only pages allowed in the index are the commercial service landings.
// Everything else (home, about, blog, prices, locations, services, …) is
// served `noindex, follow` on production. Keep this list in sync with the SEO
// landings registry and robots.txt / sitemap.
const COMMERCIAL_SLUGS = new Set([
  'carpet-cleaning',
  'premium-rug-cleaning',
  'carpet-flooring-cleaning',
  'sofa-cleaning',
  'upholstery-cleaning',
  'mattress-cleaning',
  'curtain-cleaning',
  'window-cleaning',
  'central-ac-cleaning',
]);

// A commercial URL is exactly one landing slug, optionally under a /ru or /ar prefix.
function isCommercialPage(pathname: string): boolean {
  const stripped = pathname.replace(/^\/(ru|ar)(?=\/|$)/, '');
  const segments = stripped.split('/').filter(Boolean);
  return segments.length === 1 && COMMERCIAL_SLUGS.has(segments[0]);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/admin') ||
    pathname.includes('.') // files with extensions (favicon.ico, robots.txt, etc.)
  ) {
    const response = NextResponse.next();
    addSecurityHeaders(request, response, pathname);
    return response;
  }

  // If path starts with the default locale prefix (/en/ or exactly /en) →
  // 301 to the unprefixed canonical (English lives at the root).
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    const strippedPath = pathname.replace(new RegExp(`^/${defaultLocale}(?=/|$)`), '') || '/';
    const newUrl = new URL(strippedPath, request.url);
    newUrl.search = request.nextUrl.search;
    const response = NextResponse.redirect(newUrl, 301);
    addSecurityHeaders(request, response, strippedPath);
    return response;
  }

  // Check if the pathname has a non-default locale prefix (/ru/ or /ar/)
  const pathnameHasLocale = prefixedLocales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Non-default locale → pass through, set lang header
    const locale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.headers.set('x-lang', locale);
    addSecurityHeaders(request, response, pathname);
    addCacheHeaders(request, response);
    return response;
  }

  // No locale prefix → this is English (default). Rewrite internally to /en/...
  // so the [lang] route handles it.
  const rewriteUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  rewriteUrl.search = request.nextUrl.search;
  const response = NextResponse.rewrite(rewriteUrl);
  response.headers.set('x-lang', defaultLocale);
  addSecurityHeaders(request, response, pathname);
  addCacheHeaders(request, response);
  return response;
}

function addSecurityHeaders(request: NextRequest, response: NextResponse, pathname: string) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  // Indexing policy.
  const host = (request.headers.get('host') || '').toLowerCase().split(':')[0];
  const isProduction = PRODUCTION_HOSTS.includes(host) || process.env.ALLOW_INDEXING === 'true';
  if (!isProduction) {
    // Non-production hosts: keep the whole thing out of search entirely.
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  } else if (!isCommercialPage(pathname)) {
    // Production: only commercial service landings may be indexed; everything
    // else is crawlable (follow) but excluded from the index.
    response.headers.set('X-Robots-Tag', 'noindex, follow');
  }
}

function addCacheHeaders(request: NextRequest, response: NextResponse) {
  if (request.nextUrl.pathname.startsWith('/images/') ||
      request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|images/|.*\\..*$).*)',
  ],
};
