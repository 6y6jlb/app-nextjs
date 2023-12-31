import { API } from "@/config/api";
import { STORAGE_KEYS_ENUM } from "@/config/storage";
import { throwOnError } from "./error";
import { User } from "./types";
import cookies from "./cookies";

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