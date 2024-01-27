'use client'
import FormItem from '@/modules/common/theme/formItem/FormItem';
import { Errors } from '@/service/error';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent } from 'react';
import { ProfileFormType } from '../../types';
import style from "./styles.module.css";
import React from 'react';

export function Form({ onSubmit, loading, errors, formData, onChange }: IProps) {
    const t = useTranslations("common");

    const fieldHandler = React.useCallback((fieldName: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChange({ ...formData, [fieldName]: e.target.value });
    }, [formData]);

    return (

        <form className={style.form} onSubmit={onSubmit} aria-disabled={loading}>
            <FormItem invalid={errors.has('email')} notification={errors.get('email')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.email")}
                    name={"email"}
                    type="text"
                    value={formData.email}
                    onChange={fieldHandler('email')}
                />
            </FormItem>
            <FormItem invalid={errors.has('telegram_id')} notification={errors.get('telegram_id')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.telegram_id")}
                    name={"telegram_id"}
                    type="text"
                    value={formData.telegram_id}
                    onChange={fieldHandler('telegram_id')}
                />
            </FormItem>
            <FormItem invalid={errors.has('name')} notification={errors.get('name')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.name")}
                    name={"name"}
                    type="text"
                    value={formData.name}
                    onChange={fieldHandler('name')}
                />
            </FormItem>
            <FormItem invalid={errors.has('currency')} notification={errors.get('currency')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.currency")}
                    name={"currency"}
                    type="text"
                    value={formData.currency}
                    onChange={fieldHandler('currency')}
                />
            </FormItem>
            <FormItem invalid={errors.has('locale')} notification={errors.get('locale')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.language")}
                    name={"locale"}
                    type="text"
                    value={formData.locale}
                    onChange={fieldHandler('locale')}
                />
            </FormItem>
            {/* <FormItem invalid={errors.has('timezone')} notification={errors.get('timezone')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.timezone")}
                    name={"timezone"}
                    type="text"
                    value={formData.timezone}
                    onChange={fieldHandler('timezone')}
                />
            </FormItem> */}
            <FormItem invalid={errors.has('password')} notification={errors.get('password')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.password")}
                    name={"password"}
                    type="text"
                    onChange={fieldHandler('password')}
                />
            </FormItem>
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
    loading: boolean
    errors: Errors
    onChange: React.Dispatch<React.SetStateAction<ProfileFormType>>
    formData: ProfileFormType
}



