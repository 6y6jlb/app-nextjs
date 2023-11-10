
import { Notification } from '@/components/notification/Notification';
import Feedback from '../../../components/feedback/Feedback';
import style from "./styles.module.css";

export default async function Page() {


    return (
        <main className={style.main}>
            <Notification/>
            <Feedback />
        </main>
    )
}
