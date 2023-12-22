
import Feedback from '../../../components/feedback/Feedback';
import style from "./styles.module.css";

export default async function Page() {


    return (
        <main className={`${style.main} background-face`}>
            <Feedback />
        </main>
    )
}
