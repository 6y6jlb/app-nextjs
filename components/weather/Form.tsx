'use client'
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import style from "./styles.module.css";

export function WeatherForm({ onSubmit, loading }: IProps) {
    const t = useTranslations("common");

    return (

        <form className={style.form} onSubmit={onSubmit}>
            <input
                disabled={loading}
                placeholder={t("form.placeholder.city")}
                name={"city"}
                type="text"
                className={style.item}
            />
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
}



