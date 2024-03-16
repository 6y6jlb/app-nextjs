'use client'
import Threejs from '@/modules/sneaky/sandbox/threejs/Threejs';
import style from "./styles.module.css";

export default async function Page() {

    return (
        <main className={`${style.main} background-face`}>
            <Threejs />
        </main>
    )
}