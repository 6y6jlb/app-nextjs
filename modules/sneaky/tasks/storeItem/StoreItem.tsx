import { useTranslations } from 'next-intl';
import React from 'react'
import styles from './styles.module.css'

const StoreItem = ({ notCreatedYet: notCreateYet = false, hasTelegramId }: IProps) => {
    const t = useTranslations("common");
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
                    <p className="alert alert-warning">{t('alert.telegram-does-not-exist')}</p>
                    <button className="btn-primary" onClick={(e) => {
                        location.assign('/profile/update')
                    }}>
                        {t('button.update-data')}
                    </button>
                </>}
        </div>
    )
}

export default StoreItem

interface IProps {
    notCreatedYet: boolean,
    hasTelegramId: boolean
}
