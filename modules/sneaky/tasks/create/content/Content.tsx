'use client'
import { Errors, getFormErrors } from '@/service//error/error'
import { User } from '@/service/me/types'
import { useTranslations } from 'next-intl'
import React, { FormEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import { DEFAULT_TASK_FORM } from '../../const'
import { Form } from '../../partials/form/Form'
import { StoreTaskFormType } from '../../types'
import styles from './styles.module.css'
import { storeTask } from '@/service/task/tasks'



const Content = ({ user }: Props) => {
    const [loading, setLoading] = React.useState(false)
    const [errors, setErrors] = React.useState(new Errors())
    const [form, setForm] = React.useState<StoreTaskFormType>(DEFAULT_TASK_FORM)
    const t = useTranslations("common");

    useEffect(() => {
        setForm({
            ...DEFAULT_TASK_FORM,
            tz: user.tz || 'Asia/Tbilisi',
        })
    }, [])

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        setLoading(true)
        event.preventDefault()

        try {
            await storeTask(form);
            toast(t('notification.task-create.success'), { hideProgressBar: true, type: 'success' })
            setTimeout(() => location.assign('/tasks'), 2000)
        } catch (error: any) {
            if (error.code === 422) {
                setErrors(new Errors(getFormErrors(error.errors)))
            }
            toast(t('notification.task-create.error'), { hideProgressBar: true, type: 'error' })
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }

    return (
        <div className={styles.content}>
            <Form errors={errors} formData={form} loading={loading} onChange={setForm} onSubmit={onSubmit} />
        </div>
    )
}

export default Content

type Props = {
    user: User
}