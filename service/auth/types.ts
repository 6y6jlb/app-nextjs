import { IAuthForm as IAuthFormClient } from '@/modules/sneaky/auth/types';


export type AuthForm = IAuthFormClient & {
    locale: string
}

export type RegisterPayload = Omit<AuthForm, 'locale' | 'already_register' | 'entry_type' | 'telegram_id'> & {
    email?: string,
}

export type LoginPayload = Pick<AuthForm, 'password'> & {
    email?: string,
    telegram_id?: string
}

export type AuthResponse = {
    access_token: string
}

