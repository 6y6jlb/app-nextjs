import { User } from '@/service/me/types';
import moment from 'moment';
import { useTranslations } from 'next-intl';
import { useCallback } from 'react';
import styles from './styles.module.css';

const Properties = ({ user }: IProps) => {

    const t = useTranslations("common");

    const toTelegram = useCallback(() => {
        window.open('https://t.me/Leshka_tg_bot', '_blank')
    }, [])

    return (
        <div className={styles.properties}>
            {
                !user.telegram_id
                    ? <div><span>{t('profile.telegram_id')}</span><span>{user.telegram_id}</span></div>
                    : <div><span>{t('profile.telegram_id_empty')}</span><button onClick={toTelegram}>{t('button.add')}</button></div>
            }
            <div><span>{t('profile.name')}</span><span>{user.name}</span></div>
            <div><span>{t('profile.email')}</span><span>{user.email}</span></div>
            <div><span>{t('profile.currency')}</span><span>{user.currency}</span></div>
            <div><span>{t('profile.locale')}</span><span>{user.locale}</span></div>
            <div><span>{t('profile.created_at')}</span><span>{moment(user.created_at).format('MMMM Do YYYY')}</span></div>
        </div>
    )
}

export default Properties

interface IProps {
    user: User
}
