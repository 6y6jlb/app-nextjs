import { ENTRY_TYPE_ENUM } from "@/components/auth/const";
import { API } from "@/config/api";
import { STORAGE_KEYS_ENUM } from "@/config/storage";
import { throwOnError } from "./error";
import { AuthForm, AuthResponse, LoginPayload, RegisterPayload } from "./types";
import cookies from "./cookies";


export const auth = async (formData: AuthForm): Promise<AuthResponse> => {

    const url = new URL(formData.already_register ? API.POST.LOGIN : API.POST.REGISTER);


    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData.already_register ? getLoginPayload(formData) : getRegisterPayload(formData)),
    })

    await throwOnError(response)

    const { access_token } = await response.json()

    cookies.set(STORAGE_KEYS_ENUM.JWT_ACCESS_TOKEN, access_token)

    return { access_token };
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
        telegram_id: formData.telegram_id
    };

    return payload
}


