import { API } from "@/config/api";
import { getAccessToken } from "./auth";
import { throwOnError } from "./error";

export const getMe = async (): Promise<any> => {

    const token = getAccessToken();

    if (token === null) {
        throw new Error('Invalid token')
    }

    const url = new URL(API.GET.USERS);


    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    })

    await throwOnError(response)

    const users = await response.json()

    if (!Array.isArray(users) || users.length > 1) {
        throw new Error('Customer is undefined')
    }

    return users[0];
}