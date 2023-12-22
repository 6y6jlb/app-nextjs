import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ua', 'ru', 'en'],
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
