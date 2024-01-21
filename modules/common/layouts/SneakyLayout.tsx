import Footer from '@/modules/common/theme/footer/Footer';
import Header from '@/modules/common/theme/header/Header';
import { LINK_TYPE_ENUM } from '@/config/navigation';
import { LOCALES } from '@/messages/index';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ToastContainer } from 'react-toastify';

export default async function SneakyLayout({
  children, params: { locale, type }
}: IProps) {
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
  children: React.ReactNode,
  params: {
    locale: string;
    type: LINK_TYPE_ENUM;
  };
}