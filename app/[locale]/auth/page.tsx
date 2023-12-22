'use client'
import Auth from '@/components/auth/Auth';
import style from "./styles.module.css";

export default async function Page() {

    return (
        <main className={`${style.main} background-face`}>
            <Auth />
        </main>
    )
}