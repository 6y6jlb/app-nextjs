'use client'
import { useTranslations } from 'next-intl';

interface ITitle {
    'title-key': string;
    class: string | undefined
}

const Title = (props: ITitle) => {
    const t = useTranslations("common");

    return (
       <div className={props.class}>
         <h4>{t(props['title-key'])}</h4>
       </div>
    )
}
export default Title;