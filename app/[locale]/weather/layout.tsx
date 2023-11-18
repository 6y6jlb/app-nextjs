import { LINK_TYPE_ENUM } from '@/config/navigation';
import RootLayout from '@/layouts/RootLayout';



export default async function Layout({
  children, params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  return (
    <RootLayout params={{ locale, type: LINK_TYPE_ENUM.SNEAKY }}>
      {children}
    </RootLayout>
  )
}
