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