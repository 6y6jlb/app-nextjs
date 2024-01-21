import { useTranslations } from 'next-intl';
import React from 'react'
import styles from './styles.module.css'

const StoreItemButton = ({ notCreatedYet: notCreateYet = false, hasTelegramId }: Props) => {
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
                !hasTelegramId && <p className="alert alert-warning">{t('alert.telegram-does-not-exist')}</p>
            }
        </div>
    )
}

export default StoreItemButton

type Props = {
    notCreatedYet: boolean,
    hasTelegramId: boolean
}
