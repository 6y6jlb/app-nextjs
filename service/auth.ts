import { API } from "@/config/api";
import { AuthForm } from "./types";

export const auth = async (formData: AuthForm): Promise<any> => {

    const url = new URL(formData.already_register ? API.POST.LOGIN : API.POST.REGISTER);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                login: formData.login,
                password: formData.password,
                password_repeat: formData.password_repeat
            }),
        })
        const json = await response.json();

        if (!response.ok) {
            throw new Error(json.message);
        }
        return json
    } catch (error: any) {
        throw new Error(error.message);
    }

}
