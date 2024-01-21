import '@/styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children, params: { locale }
}: {
  children: React.ReactNode
  params: IProps
}) {

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
