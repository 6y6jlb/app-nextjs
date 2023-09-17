import style from './styles.module.css'
import Title from '../title/Title';
import { useTranslations } from 'next-intl';

const RemoteJob = () => {
    const t = useTranslations('common');
    return (

        <div className={style.remoteJobBlock}>
            <div className={`main-container ${style.container}`}>
                <Title title-key="remote.title" />
                <div className={style.insideWrapper}>
                    <p className={style.description}>{t('remote.agree')}</p>
                </div>
            </div>
        </div>
    )
}
export default RemoteJob;