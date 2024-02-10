'use client'
import Create from "@/modules/sneaky/tasks/create/Create";
import style from "./styles.module.css";

export default async function Page() {

    return (
        <main className={`${style.main} background-face`}>
            <Create />
        </main>
    )
}