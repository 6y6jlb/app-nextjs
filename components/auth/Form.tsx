'use client'
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import style from "./styles.module.css";

export function AuthForm({ onSubmit }: IProps) {
    const t = useTranslations("common");

    return (

        <form className={style.form} onSubmit={onSubmit}>
            <input
                placeholder={"auth"}
                name={"auth"}
                type="radio"
                className={style.item}
            />
            <input

                placeholder={"login"}
                name={"login"}
                type="text"
                className={style.item}
            />
            <input

                placeholder={"password"}
                name={"password"}
                type="text"
                className={style.item}
            />
            <input

                placeholder={"repeat-password"}
                name={"repeat-password"}
                type="text"
                className={style.item}
            />
            <button
                className={style.button}
                disabled={false}
            >
                {t('button.send')}
            </button>
        </form>

    )
}

interface IProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
}



