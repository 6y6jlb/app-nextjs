import { useTranslations } from 'next-intl';
import React from 'react'
import styles from './styles.module.css'
import moment from 'moment';
import { User } from '@/service/types';

const Properties = ({ user }: IProps) => {

    const t = useTranslations("common");
    return (
        <div className={styles.properties}>
            <div><span>{t('profile.telegram_id')}</span><span>{user.telegram_id}</span></div>
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
