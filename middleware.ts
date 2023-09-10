import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
    locales: ['en-US', 'ru-RU', 'uk_UA', 'ua', 'ru', 'en'],
    defaultLocale: 'en-US',
});
 
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};