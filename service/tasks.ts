import { API } from "@/config/api";
import { STORAGE_KEYS_ENUM } from "@/config/storage";
import { throwOnError } from "./error";
import cookies from "./cookies";
import { Task } from "./types";

export const getTasks = async (): Promise<Task[] | undefined> => {

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