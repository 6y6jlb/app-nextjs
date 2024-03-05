import { API } from "@/config/api";
import { STORAGE_KEYS_ENUM } from "@/config/storage";
import { ENTRY_TYPE_ENUM } from "@/modules/sneaky/auth/const";
import { throwOnError } from "../error/error";
import cookies from "../storage/cookies";
import { AuthForm, AuthResponse, LoginPayload, RegisterPayload } from "./types";


export const auth = async (formData: AuthForm): Promise<AuthResponse> => {

    const url = new URL(formData.already_register ? API.POST.LOGIN : API.POST.REGISTER);

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData.already_register ? getLoginPayload(formData) : getRegisterPayload(formData)),
    })

    await throwOnError(response)

    const { access_token, refresh_token } = await response.json()

    cookies.set(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN, access_token);
    cookies.set(STORAGE_KEYS_ENUM.JWT_REFRESH_TOKEN, refresh_token)

    return { access_token };
}

export const fetchAccessToken = async (): Promise<{ access_token: string } | undefined> => {
    const url = new URL(API.POST.REFRESH_TOKEN);
    const refreshToken = await cookies.get(STORAGE_KEYS_ENUM.JWT_REFRESH_TOKEN)

    if (!refreshToken) {
        return;
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: refreshToken }),
    })

    await throwOnError(response)

    const { access_token } = await response.json()

    cookies.set(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN, access_token);

    return { access_token };
}


export const logout = async (): Promise<void> => {
    const url = new URL(API.DELETE.LOGOUT);
    const token = await cookies.get(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN);

    if (!token) {
        throw new Error('Invalid token')
    }

    const response = await fetch(url, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
    })


    await throwOnError(response)

    cookies.set(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN, null)

    window.location.reload();
}


export const handlerUnautorized = async (response: any, callback: () => Promise<any>) => {
    if (response.status === 401) {
        await fetchAccessToken();
        return callback();
    }
    await throwOnError(response)
}

const getLoginPayload = (formData: AuthForm): LoginPayload => {

    const payload: LoginPayload = {
        password: formData.password,
    };

    if (formData.entry_type === ENTRY_TYPE_ENUM.EMAIL) {
        payload.email = formData.email

    } else if (formData.entry_type === ENTRY_TYPE_ENUM.TELEGRAM) {
        payload.telegram_id = formData.telegram_id
    }
    return payload
}

const getRegisterPayload = (formData: AuthForm): RegisterPayload => {

    const payload: RegisterPayload = {
        password: formData.password,
        password_repeat: formData.password_repeat,
        email: formData.email,
    };

    return payload
}


