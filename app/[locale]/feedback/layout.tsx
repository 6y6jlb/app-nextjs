import { LINK_TYPE_ENUM } from '@/config/navigation';
import PortfolioLayout from '@/modules/common/layouts/PorfolioLayout';
import RootLayout from '@/modules/common/layouts/RootLayout';


export default async function Layout({
  children, params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {

  return (
    <RootLayout params={{ locale }}>
      <PortfolioLayout params={{ locale, type: LINK_TYPE_ENUM.MAIN }}>
        {children}
      </PortfolioLayout>
    </RootLayout>
  )
}
