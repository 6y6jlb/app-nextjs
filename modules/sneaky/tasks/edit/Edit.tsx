import Title from "@/modules/common/theme/title/Title";
import { getMe } from "@/service/me/me";
import { redirect, useParams } from "next/navigation";
import Content from "./content/Content";
import styles from './styles.module.css';
import { getTasks } from "@/service/task/tasks";

type Props = {
    task_id?: string
}

const Create = async ({ task_id }: Props) => {

    const user = await getMe();
    if (!user) {
        redirect('/auth')
    }

    const task = (await getTasks())?.find(el => el._id === task_id)


    if (!task) {
        redirect('/tasks')
    }

    return (
        <div className={styles.container}>
            <Title title-key='tasks.update-title' />
            <Content task={task} />
        </div>
    )
}

export default Create