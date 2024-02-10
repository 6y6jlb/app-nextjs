import Title from "@/modules/common/theme/title/Title";
import { getMe } from "@/service/me";
import { redirect } from "next/navigation";
import Content from "./content/Content";
import styles from './styles.module.css';

type Props = {}

const Create = async (props: Props) => {

    const user = await getMe();
    if (!user) {
        redirect('/auth')
    }

    return (
        <div className={styles.container}>
            <Title title-key='tasks.create-title' />
            <Content user={user} />
        </div>
    )
}

export default Create