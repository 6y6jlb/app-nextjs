'use client'
import { ErrorType } from '@/config/types';
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import FormItem from '../theme/formItem/FormItem';
import style from "./styles.module.css";

export function WeatherForm({ onSubmit, loading, errors }: IProps) {
    const t = useTranslations("common");

    return (

        <form className={style.form} onSubmit={onSubmit}>

            <FormItem invalid={!!errors.find(el => el['city'])} notification={errors.find(el => el['city'])?.['city']}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.city")}
                    name={"city"}
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
    errors: ErrorType[]
}



