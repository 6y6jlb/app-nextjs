import { API } from "@/config/api";
import { AuthForm } from "./types";
import { throwOnError } from "./error";

export const auth = async (formData: AuthForm): Promise<any> => {

    const url = new URL(formData.already_register ? API.POST.LOGIN : API.POST.REGISTER);

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            login: formData.login,
            password: formData.password,
            password_repeat: formData.password_repeat
        }),
    })

    await throwOnError(response)

    return await response.json();
}
