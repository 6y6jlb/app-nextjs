'use client'
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent } from 'react';
import style from "./styles.module.css";
import { IAuthForm } from './types';

export function Form({ onSubmit, formData, onChange, loading }: IProps) {
    const t = useTranslations("common");

    const fieldHandler = (fieldName: string) => (e: ChangeEvent<HTMLInputElement>) => {
        let value: boolean | string = e.target.value;
        if (fieldName === 'already_register') {
            value = e.target.checked;
        }
        onChange({ ...formData, [fieldName]: value });
    };
    return (

        <form className={style.form} onSubmit={onSubmit}>
            <div className={style.radio}>
                <label htmlFor="auth">{t('form.label.register-already')}</label>
                <input
                    disabled={loading}
                    name="already_register"
                    type="checkbox"
                    checked={formData.already_register}
                    onChange={fieldHandler('already_register')}
                    className={style.item}
                />
            </div>
            <input
                disabled={loading}
                placeholder={t("form.placeholder.login")}
                name={"login"}
                type="text"
                value={formData.login}
                onChange={fieldHandler('login')}
                className={style.item}
            />
            <input
                disabled={loading}
                placeholder={t("form.placeholder.password")}
                name={"password"}
                type="text"
                value={formData.password}
                onChange={fieldHandler('password')}
                className={style.item}
            />
            {formData.already_register && (
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.password-repeat")}
                    name={"password_repeat"}
                    type="text"
                    value={formData.password_repeat}
                    onChange={fieldHandler('password_repeat')}
                    className={style.item}
                />
            )}
            <button
                className="btn-secondary"
                disabled={loading}
            >
                {t('button.send')}
            </button>
        </form>

    )
}

interface IProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    onChange: React.Dispatch<React.SetStateAction<IAuthForm>>
    formData: IAuthForm
    loading: boolean
}



