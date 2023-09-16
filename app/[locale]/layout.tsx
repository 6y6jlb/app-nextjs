import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { LOCALES } from '../../messages/index';
import Header from '@/components/header/Header';
import "@fortawesome/fontawesome-svg-core/styles.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "PORTFOLIO OF " + process.env.OWNER_FIRST_NAME?.toUpperCase() + ' ' + process.env.OWNER_LAST_NAME?.toUpperCase(),
  description: 'web developer',
}

export default async function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages;
  try {
    //@ts-ignore
    messages = (await import(`../../messages/${LOCALES[locale]}.json`)).default;
  } catch (error) {

    notFound();
  }
  return (
    <html lang={process.env.DEFAULT_LANGUAGE}>
      <body className={`${inter.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
