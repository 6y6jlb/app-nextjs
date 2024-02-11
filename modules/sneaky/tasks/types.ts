import { TaskType } from "@/service/task/types";

export type TaskFormType = Omit<TaskType, '_id' | 'queue' | 'last_call' | 'user_id'>