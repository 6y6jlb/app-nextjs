import { SANDBOX_LINKS } from '@/config/navigation';
import Title from '@/modules/common/theme/title/Title';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import style from './styles.module.css'

type Props = {}

const Sandbox = (props: Props) => {
    const t = useTranslations("common");
    const mappedLinks = SANDBOX_LINKS.map(el => {
        return (
            <Link
                href={el.path}
                key={el.path}
            >
                {t(el.title)}
            </Link>

        );
    })

    return (
        <div className={style.container}>
            <Title title-key='sandbox.title' />
            <div className={style.linkContainer}>
                {
                    mappedLinks
                }
            </div>
        </div>
    )
}

export default Sandbox;