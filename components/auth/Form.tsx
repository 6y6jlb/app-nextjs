'use client'
import { Errors } from '@/service/error';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent } from 'react';
import FormItem from '../theme/formItem/FormItem';
import style from "./styles.module.css";
import { IAuthForm } from './types';

export function Form({ onSubmit, formData, onChange, loading, errors }: IProps) {
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
            <FormItem invalid={errors.has('already_register')} notification={errors.get('already_register')}>
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

            <FormItem invalid={!!errors.has('login')} notification={errors.get('login')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.login")}
                    name={"login"}
                    type="text"
                    value={formData.login}
                    onChange={fieldHandler('login')}
                />
            </FormItem>


            <FormItem invalid={!!errors.has('password')} notification={errors.get('password')}>
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
                <FormItem invalid={!!errors.has('password_repeat')} notification={errors.get('password_repeat')}>
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
    errors: Errors
}



