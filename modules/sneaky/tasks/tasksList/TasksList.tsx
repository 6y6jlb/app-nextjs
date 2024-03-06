'use client'
import { Errors, getFormErrors } from '@/service/error/error'
import { deleteTask } from '@/service/task/tasks'
import { TaskType } from '@/service/task/types'
import { useTranslations } from 'next-intl'
import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import TaskItem from '../taskItem/TaskItem'
import styles from './styles.module.css'
import { useRouter } from 'next/navigation'



const TasksList = ({ tasks }: IProps) => {
    const [loading, setLoading] = useState(false)
    const [removedTaskIds, setRemovedTaskIds] = useState<string[]>([])
    const router = useRouter();

    const t = useTranslations("common");

    if (!(tasks && tasks.length)) {
        return (
            <div>
                <p className={styles.emptyList}>{t('tasks.empty')}</p>
            </div>
        )
    }

    const removeTask = useCallback(async (task_id: string) => {
        setLoading(true)
        try {
            await deleteTask({ task_id });
            setRemovedTaskIds([...removedTaskIds, task_id])
            toast(t('notification.task-delete.success'), { hideProgressBar: true, type: 'success' })
        } catch (error: any) {
            if (error.code === 422) {
                setErrors(new Errors(getFormErrors(error.errors)))
            }
            toast(t('notification.task-delete.error'), { hideProgressBar: true, type: 'error' })
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [])

    const editTask = useCallback(async (task_id: string) => {
        router.push(`/tasks/${task_id}/edit`)
    }, [])

    const mappedTasks = React.useMemo(() => {
        return tasks
            .filter(t => !removedTaskIds.includes(t._id))
            .map((task) => {
                return (
                    <TaskItem key={task._id} task={task} onRemove={() => removeTask(task._id)} onEdit={() => editTask(task._id)} />
                )
            })
    }, [tasks, removedTaskIds])

    return (
        <div className={styles.list}>{mappedTasks}</div>
    )
}

export default TasksList


interface IProps {
    tasks: TaskType[] | undefined
}

function setErrors(arg0: any) {
    throw new Error('Function not implemented.')
}
