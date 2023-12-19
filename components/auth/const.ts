export enum ENTRY_TYPE_ENUM {
    TELEGRAM = 'telegram_id',
    EMAIL = 'email',
}

export const DEFAULT_AUTH_FORM = {
    email: '',
    telegram_id: '',
    entry_type: ENTRY_TYPE_ENUM.EMAIL,
    password: '',
    password_repeat: '',
    already_register: false,
};

