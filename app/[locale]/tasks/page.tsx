'use client'
import Tasks from "@/modules/sneaky/tasks/Tasks";
import style from "./styles.module.css";

export default async function Page() {

    return (
        <main className={`${style.main} background-face`}>
            <Tasks />
        </main>
    )
}