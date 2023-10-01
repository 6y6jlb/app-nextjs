
import style from "./styles.module.css";
import Feedback from '../../../components/feedback/Feedback';

export default async function Page() {

    return (
        <main className={style.main}>
            <Feedback />
        </main>
    )
}
