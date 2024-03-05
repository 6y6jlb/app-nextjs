import { useTranslations } from 'next-intl';
import React, { useCallback } from 'react'
import styles from './styles.module.css'

const StoreButton = ({ notCreatedYet: notCreateYet = false, hasTelegramId, userId }: IProps) => {
    const t = useTranslations("common");

    const toTelegram = useCallback(() => {
        window.open('https://t.me/Leshka_tg_bot?start=' + userId, '_blank')
    }, [])

    return (
        <div className={styles.container}>
            <p>{t('tasks.create-description')}</p>
            <button disabled={!hasTelegramId} className="btn-primary" onClick={(e) => {
                location.assign('/tasks/create')
            }}>
                {t(notCreateYet ? 'button.task-create-first' : 'button.task-create-another')}
            </button>
            {
                !hasTelegramId && <>
                    <div className="alert alert-warning">
                        <p>{t('alert.telegram-does-not-exist')}</p>
                        <button className={styles.addTelegram} onClick={toTelegram}>{t('button.add')}</button>
                    </div>
                    <button className="btn-primary" onClick={(e) => {
                        location.assign('/profile/update')
                    }}>
                        {t('button.update-data')}
                    </button>
                </>}
        </div>
    )
}

export default StoreButton

interface IProps {
    notCreatedYet: boolean,
    hasTelegramId: boolean
    userId: string
}
