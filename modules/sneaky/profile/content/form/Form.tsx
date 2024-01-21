'use client'
import { Errors } from '@/service/error';
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import style from "./styles.module.css";
import FormItem from '@/modules/common/theme/formItem/FormItem';

export function Form({ onSubmit, loading, errors }: IProps) {
    const t = useTranslations("common");

    return (

        <form className={style.form} onSubmit={onSubmit}>
            <FormItem invalid={errors.has('email')} notification={errors.get('email')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.email")}
                    name={"email"}
                    type="text"
                />
            </FormItem>
            <FormItem invalid={errors.has('telegram_id')} notification={errors.get('telegram_id')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.telegram_id")}
                    name={"telegram_id"}
                    type="text"
                />
            </FormItem>
            <FormItem invalid={errors.has('name')} notification={errors.get('name')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.name")}
                    name={"name"}
                    type="text"
                />
            </FormItem>
            <FormItem invalid={errors.has('currency')} notification={errors.get('currency')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.currency")}
                    name={"currency"}
                    type="text"
                />
            </FormItem>
            <FormItem invalid={errors.has('laguage')} notification={errors.get('laguage')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.laguage")}
                    name={"laguage"}
                    type="text"
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
}



