'use client'
import { Errors, getFormErrors } from '@/service//error/error'
import { storeTask, updateTask } from '@/service/task/tasks'
import { TaskType } from '@/service/task/types'
import { useTranslations } from 'next-intl'
import React, { FormEvent, useEffect } from 'react'
import { toast } from 'react-toastify'
import { DEFAULT_TASK_FORM } from '../../const'
import { Form } from '../../partials/form/Form'
import { StoreTaskFormType, UpdateTaskFormType } from '../../types'
import styles from './styles.module.css'
import { useParams, useRouter } from 'next/navigation'



const Content = ({ task }: Props) => {
    const [loading, setLoading] = React.useState(false)
    const [errors, setErrors] = React.useState(new Errors())
    const [form, setForm] = React.useState<UpdateTaskFormType>({} as UpdateTaskFormType)
    const t = useTranslations("common");
    const router = useRouter()
    const { task_id } = useParams();

    useEffect(() => {
        setForm({
            task_id: task._id,
            call_at: task.call_at,
            is_regular: task.is_regular,
            tz: task.tz,
            options: task.options.map(el => ({ event_type: el.event_type, param: el.param }))
        })
        console.log(task)
    }, [])

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        setLoading(true)
        event.preventDefault()

        try {
            await updateTask({ ...form, task_id });
            toast(t('notification.task-update.success'), { hideProgressBar: true, type: 'success' })
            setTimeout(() => router.push('/tasks'), 2000)
        } catch (error: any) {
            if (error.code === 422) {
                setErrors(new Errors(getFormErrors(error.errors)))
            }
            toast(t('notification.task-update.error'), { hideProgressBar: true, type: 'error' })
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