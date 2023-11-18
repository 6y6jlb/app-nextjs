
import Weather from '@/components/weather/Weather';
import style from "./styles.module.css";

export default async function Page() {

    return (
        <main className={style.main}>
            <Weather />
        </main>
    )
}
