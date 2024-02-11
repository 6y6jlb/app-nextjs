import { API } from "@/config/api";
import { STORAGE_KEYS_ENUM } from "@/config/storage";
import cookies from "../storage/cookies";
import { throwOnError } from "../error/error";
import { TaskType } from "./types";

export const getTasks = async (): Promise<TaskType[] | undefined> => {

    try {
        const token = await cookies.get(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN);

        if (!token) {
            throw new Error('Invalid token')
        }

        const response = await fetch(API.GET.TASKS, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })

        await throwOnError(response)

        return await response.json()


    } catch (error: any) {
        console.warn(error.message || error)
    }

}

export const storeTask = async (payload: any): Promise<TaskType[] | undefined> => {

    const token = await cookies.get(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN);

    if (!token) {
        throw new Error('Invalid token')
    }

    const response = await fetch(API.POST.TASKS, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
    })

    await throwOnError(response)

    return await response.json()

}

export const updateTask = async (payload: any): Promise<void> => {

    const token = await cookies.get(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN);

    if (!token) {
        throw new Error('Invalid token')
    }

    const response = await fetch(API.PUT.TASKS, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
    })

    await throwOnError(response)

    return await response.json()

}

export const deleteTask = async (payload: { task_id: string }): Promise<void> => {

    const token = await cookies.get(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN);

    if (!token) {
        throw new Error('Invalid token')
    }

    const response = await fetch(`${API.DELETE.TASKS}?task_id=${payload.task_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
    })

    await throwOnError(response)

    return await response.json()

}