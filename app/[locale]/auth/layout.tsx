import { LINK_TYPE_ENUM } from '@/config/navigation';
import SneakyLayout from '@/components/layouts/SneakyLayout';


export default async function Layout({
  children, params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  return (
    <SneakyLayout params={{ locale, type: LINK_TYPE_ENUM.SNEAKY_PUBLIC }}>
      {children}
    </SneakyLayout>
  )
}
