'use client'
import Sandbox from '@/modules/sneaky/sandbox/Sandbox';
import style from "./styles.module.css";

export default async function Page() {

    return (
        <main className={`${style.main} background-face`}>
            <Sandbox />
        </main>
    )
}