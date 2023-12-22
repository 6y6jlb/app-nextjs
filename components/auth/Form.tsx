'use client'
import { Errors } from '@/service/error';
import { useTranslations } from 'next-intl';
import React, { ChangeEvent, FormEvent, ReactNode } from 'react';
import FormItem from '../theme/formItem/FormItem';
import { ENTRY_TYPE_ENUM } from './const';
import style from "./styles.module.css";
import { IAuthForm } from './types';

export function AuthForm({ onSubmit, formData, onChange, loading, errors }: IProps) {
    const t = useTranslations("common");

    const fieldHandler = React.useCallback((fieldName: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value: boolean | string = e.target.value;
        if (fieldName === 'already_register' && e.target.type === 'checkbox') {
            //@ts-ignore
            value = e.target.checked;
        }
        onChange({ ...formData, [fieldName]: value });
    }, [formData]);

    const options: ReactNode = React.useMemo(() => Object.values(ENTRY_TYPE_ENUM).map((entryType, i) => {
        return (
            <option
                key={i}
                value={entryType}
            >
                {t('form.label.enter-by')} {t(`enums.entry_type.${entryType}`)}
            </option>
        )
    }), [])


    return (
        <form className={style.form} onSubmit={onSubmit}>
            <FormItem invalid={errors.has('already_register')} notification={errors.get('already_register')}>
                <div className={style.radio}>
                    <label htmlFor="already_register">{t('form.label.register-already')}</label>
                    <input
                        disabled={loading}
                        name="already_register"
                        id="already_register"
                        type="checkbox"
                        checked={formData.already_register}
                        onChange={fieldHandler('already_register')}
                    />
                </div>
            </FormItem>

            {formData.already_register && (

                <FormItem invalid={!!errors.has('entry_type')} notification={errors.get('entry_type')}>
                    <select
                        value={formData.entry_type}
                        onChange={fieldHandler('entry_type')}
                        className={style.select}
                    >
                        {options}
                    </select>
                </FormItem>

            )}


            {(!formData.already_register || formData.entry_type === ENTRY_TYPE_ENUM.TELEGRAM) && (
                <FormItem invalid={!!errors.has('telegram_id')} notification={errors.get('telegram_id')}>
                    <input
                        disabled={loading}
                        placeholder={t("form.placeholder.telegram_id")}
                        name={"telegram_id"}
                        type="text"
                        value={formData.telegram_id}
                        onChange={fieldHandler('telegram_id')}
                    />
                </FormItem>
            )}

            {(!formData.already_register || formData.entry_type === ENTRY_TYPE_ENUM.EMAIL) && (
                <FormItem invalid={!!errors.has('email')} notification={errors.get('email')}>
                    <input
                        disabled={loading}
                        placeholder={t("form.placeholder.email")}
                        name={"email"}
                        type="text"
                        value={formData.email}
                        onChange={fieldHandler('email')}
                    />
                </FormItem>
            )}

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



