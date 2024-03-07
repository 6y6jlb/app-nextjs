import { TaskType } from "@/service/task/types";

export type StoreTaskFormType = Omit<TaskType, '_id' | 'queue' | 'last_call' | 'user_id'>
export type UpdateTaskFormType = Omit<TaskType, '_id' | 'queue' | 'last_call' | 'user_id'> & {
    task_id: string
}