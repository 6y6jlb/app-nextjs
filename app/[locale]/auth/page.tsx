'use client'
import Auth from '@/modules/sneaky/auth/Auth';
import style from "./styles.module.css";

export default async function Page() {

    return (
        <main className={`${style.main} background-face`}>
            <Auth />
        </main>
    )
}