'use client'
import Edit from "@/modules/sneaky/tasks/edit/Edit";
import style from "./styles.module.css";
import { useParams } from "next/navigation";

export default async function Page() {
    const { task_id } = useParams()

    return (
        <main className={`${style.main} background-face`}>
            <Edit task_id={task_id as string} />
        </main>
    )
}