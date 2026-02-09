import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ru', 'ar'];
const defaultLocale = 'ru';
// Non-default locales get a URL prefix; default locale (ru) lives at the root
const prefixedLocales = locales.filter(l => l !== defaultLocale);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/images/') ||
    pathname.includes('.') // files with extensions (favicon.ico, robots.txt, etc.)
  ) {
    const response = NextResponse.next();
    addSecurityHeaders(response);
    return response;
  }

  // If path starts with /ru/ or is exactly /ru → redirect to unprefixed (avoid duplicate content)
  if (pathname.startsWith(`/${defaultLocale}/`) || pathname === `/${defaultLocale}`) {
    const strippedPath = pathname.replace(/^\/ru\/?/, '/') || '/';
    const newUrl = new URL(strippedPath, request.url);
    newUrl.search = request.nextUrl.search;
    const response = NextResponse.redirect(newUrl, 301);
    addSecurityHeaders(response);
    return response;
  }

  // Check if the pathname has a non-default locale prefix (/en/ or /ar/)
  const pathnameHasLocale = prefixedLocales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Non-default locale → pass through, set lang header
    const locale = pathname.split('/')[1];
    const response = NextResponse.next();
    response.headers.set('x-lang', locale);
    addSecurityHeaders(response);
    addCacheHeaders(request, response);
    return response;
  }

  // No locale prefix → this is Russian (default). Rewrite internally to /ru/... so [lang] route handles it
  const rewriteUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  rewriteUrl.search = request.nextUrl.search;
  const response = NextResponse.rewrite(rewriteUrl);
  response.headers.set('x-lang', defaultLocale);
  addSecurityHeaders(response);
  addCacheHeaders(request, response);
  return response;
}

function addSecurityHeaders(response: NextResponse) {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
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
