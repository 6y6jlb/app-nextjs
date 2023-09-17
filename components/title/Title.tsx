import { useTranslations } from 'next-intl';
import styles from "./styles.module.css"

interface ITitle {
    'title-key': string;
}

const Title = (props: ITitle) => {
    const t = useTranslations("common");

    return (
       <div className={`${styles.title} dynamic-title-color`}>
         <h4>{t(props['title-key'])}</h4>
       </div>
    )
}
export default Title;