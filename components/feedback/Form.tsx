'use client'
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import style from "./styles.module.css";

export default function FeedbackForm() {
    const t = useTranslations("common");
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const response = await fetch('/api/feedback', {
            method: 'POST',
            body: JSON.stringify({
                contacts: formData.get('contacts'),
                name: formData.get('name'),
                message: formData.get('message')
            }),
        })

        // Handle response if necessary
        const data = await response.json()
        // ...
    }
    return (

        <form className={style['feedback-form']} onSubmit={onSubmit}>
            <input

                placeholder={"contacts/email/phone"}
                name={"contacts"}
                type="text"
                className={style.item}
            />
            <input
                placeholder={"name"}
                name={"name"}
                type="text"
                className={style.item}
            />
            <textarea
                name={"message"}
                placeholder={"message"}
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



