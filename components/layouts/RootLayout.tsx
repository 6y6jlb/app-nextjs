import { LOCALES } from '@/messages/index';
import '@/styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PORTFOLIO OF BASALOV ALEXSEY',
  description: 'web developer',
}

export default async function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode
  params: IProps
}) {
  let messages;
  try {
    //@ts-ignore
    messages = (await import(`@/messages/${LOCALES[locale]}.json`)).default;
  } catch (error) {

    notFound();
  }

  return (
    <html lang={process.env.DEFAULT_LANGUAGE}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

interface IProps {
  locale: string;
}
