import { API } from "@/config/api";
import { STORAGE_KEYS_ENUM } from "@/config/storage";
import { cookies } from 'next/headers';
import { throwOnError } from "./error";

export const getMe = async (): Promise<any> => {

    try {
        const token = cookies().get(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN)

        if (!token) {
            throw new Error('Invalid token')
            return
        }

        const response = await fetch(API.GET.USERS, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token?.value}` },
        })

        await throwOnError(response)

        const user = await response.json()
        if (!user._id || Array.isArray(user)) {
            throw new Error('Customer is undefined')
        }

        return user;

    } catch (error) {
        console.warn(error)
    }


}