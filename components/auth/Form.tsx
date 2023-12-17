'use client'
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent } from 'react';
import style from "./styles.module.css";
import { IAuthForm } from './types';
import FormItem from '../theme/formItem/FormItem';
import { ErrorType } from '@/config/types';

export function Form({ onSubmit, formData, onChange, loading, errors }: IProps) {
    const t = useTranslations("common");

    const fieldHandler = (fieldName: string) => (e: ChangeEvent<HTMLInputElement>) => {
        let value: boolean | string = e.target.value;
        if (fieldName === 'already_register') {
            value = e.target.checked;
        }
        onChange({ ...formData, [fieldName]: value });
    };
    console.log(errors)

    return (
        <form className={style.form} onSubmit={onSubmit}>
            <FormItem invalid={!!errors.find(el => el['already_register'])} notification={errors.find(el => el['already_register'])?.['already_register']}>
                <div className={style.radio}>
                    <label htmlFor="auth">{t('form.label.register-already')}</label>
                    <input
                        disabled={loading}
                        name="already_register"
                        type="checkbox"
                        checked={formData.already_register}
                        onChange={fieldHandler('already_register')}
                    />
                </div>
            </FormItem>

            <FormItem invalid={!!errors.find(el => el['login'])} notification={errors.find(el => el['login'])?.['login']}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.login")}
                    name={"login"}
                    type="text"
                    value={formData.login}
                    onChange={fieldHandler('login')}
                />
            </FormItem>


            <FormItem invalid={!!errors.find(el => el['password'])} notification={errors.find(el => el['password'])?.['password']}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.password")}
                    name={"password"}
                    type="text"
                    value={formData.password}
                    onChange={fieldHandler('password')}
                />
            </FormItem>

            {!formData.already_register && (
                <FormItem invalid={!!errors.find(el => el['password_repeat'])} notification={errors.find(el => el['password_repeat'])?.['password_repeat']}>
                    <input
                        disabled={loading}
                        placeholder={t("form.placeholder.password-repeat")}
                        name={"password_repeat"}
                        type="text"
                        value={formData.password_repeat}
                        onChange={fieldHandler('password_repeat')}
                    />
                </FormItem>

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
    errors: ErrorType[]
}



