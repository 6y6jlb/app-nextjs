'use client'
import Profile from '@/modules/sneaky/profile/Profile';
import style from "./styles.module.css";

export default async function Page() {

    return (
        <main className={`${style.main} background-face`}>
            <Profile />
        </main>
    )
}