import { ENTRY_TYPE_ENUM } from "./const";

export interface IAuthForm {
    email: string,
    telegram_id: string,
    password: string,
    password_repeat: string,
    already_register: boolean,
    entry_type: ENTRY_TYPE_ENUM,
}