import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LOCALES } from '../../messages/index';
import '../../styles/globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `PORTFOLIO OF ${process.env.OWNER_FIRST_NAME} ${process.env.OWNER_LAST_NAME}`.toUpperCase(),
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
        <NextIntlClientProvider timeZone='UTC' locale={locale} messages={messages}>
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
