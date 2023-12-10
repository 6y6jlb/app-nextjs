'use client'
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import style from "./styles.module.css";

export default function FeedbackForm({ onSubmit, loading }: IProps) {

    const t = useTranslations("common");

    return (

        <form className={style['feedback-form']} onSubmit={onSubmit}>
            <input
                disabled={loading}
                placeholder={t("form.placeholder.requisites")}
                name={"contacts"}
                type="text"
                className={style.item}
            />
            <input
                disabled={loading}
                placeholder={t("form.placeholder.name")}
                name={"name"}
                type="text"
                className={style.item}
            />
            <textarea
                disabled={loading}
                placeholder={t("form.placeholder.message")}
                name={"message"}
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




