import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'PORTFOLIO OF BASALOV ALEXSEY',
    description: 'web developer',
}


export default async function Layout({
    children, params: { locale }
}: {
    children: React.ReactNode
    params: { locale: string }
}) {

    return (
        <>
            {children}
        </>
    )
}
