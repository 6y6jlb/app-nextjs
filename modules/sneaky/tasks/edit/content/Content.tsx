'use client'
import { Errors, getFormErrors } from '@/service//error/error'
import { storeTask } from '@/service/task/tasks'
import { TaskType } from '@/service/task/types'
import { useTranslations } from 'next-intl'
import React, { FormEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import { DEFAULT_TASK_FORM } from '../../const'
import { Form } from '../../partials/form/Form'
import { TaskFormType } from '../../types'
import styles from './styles.module.css'



const Content = ({ task }: Props) => {
    const [loading, setLoading] = React.useState(false)
    const [errors, setErrors] = React.useState(new Errors())
    const [form, setForm] = React.useState<TaskFormType>(DEFAULT_TASK_FORM)
    const t = useTranslations("common");

    useEffect(() => {
        setForm(task)
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
    task: TaskType
}