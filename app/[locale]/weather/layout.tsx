import RootLayout from '@/modules/common/layouts/RootLayout';
import SneakyLayout from '@/modules/common/layouts/SneakyLayout';
import { LINK_TYPE_ENUM } from '@/config/navigation';


export default async function Layout({
  children, params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  return (
    <RootLayout params={{ locale }}>
      <SneakyLayout params={{ locale, type: LINK_TYPE_ENUM.SNEAKY }}>
        {children}
      </SneakyLayout>
    </RootLayout>
  )
}