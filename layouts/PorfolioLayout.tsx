import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { LINK_TYPE_ENUM } from '@/config/navigation';
import { LOCALES } from '@/messages/index';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

export default async function PortfolioLayout({
  children, params: { locale, type }
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
    <NextIntlClientProvider timeZone='UTC' locale={locale} messages={messages}>
      <ToastContainer />
      <Header linkType={type} />
      {children}
      <Footer />
    </NextIntlClientProvider>
  )
}

interface IProps {
  locale: string;
  type: LINK_TYPE_ENUM;
}
