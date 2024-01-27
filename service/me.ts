import { API } from "@/config/api";
import { STORAGE_KEYS_ENUM } from "@/config/storage";
import { ProfileFormType } from "@/modules/sneaky/profile/types";
import cookies from "./cookies";
import { throwOnError } from "./error";
import { User } from "./types";

export const getMe = async (): Promise<User | undefined> => {

    try {

        const token = await cookies.get(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN);

        if (!token) {
            throw new Error('Invalid token')
        }

        const response = await fetch(API.GET.ME, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        })

        await throwOnError(response)

        const user = await response.json()

        if (!user._id || Array.isArray(user)) {
            throw new Error('Customer is undefined')
        }

        return user;

    } catch (error: any) {
        console.warn(error.message || error)
    }
}

export const updateMe = async (formData: ProfileFormType): Promise<User | undefined> => {

    const token = await cookies.get(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN);

    if (!token) {
        throw new Error('Invalid token')
    }

    const response = await fetch(API.PUT.ME, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(formData)
    })

    await throwOnError(response)

    const user = await response.json()

    if (!user._id || Array.isArray(user)) {
        throw new Error('Customer is undefined')
    }

    return user;
}