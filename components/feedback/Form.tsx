'use client'
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import style from "./styles.module.css";
import { sendNotification } from '@/service/notification';
import React from 'react';
import { toast } from 'react-toastify';

export default function FeedbackForm() {
    const t = useTranslations("common");


    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)


        try {
            const response = await sendNotification({
                contacts: formData.get('contacts'),
                name: formData.get('name'),
                message: formData.get('message')

            })


            toast(response.message, { hideProgressBar: true, type: 'success' })

        } catch (error: any) {
            console.log(error)
            toast(error.message, { hideProgressBar: true, type: 'error' })
        }

    }
    return (

        <form className={style['feedback-form']} onSubmit={onSubmit}>
            <input

                placeholder={t("form.placeholder.requisites")}
                name={"contacts"}
                type="text"
                className={style.item}
            />
            <input
                placeholder={t("form.placeholder.name")}
                name={"name"}
                type="text"
                className={style.item}
            />
            <textarea
                placeholder={t("form.placeholder.message")}
                name={"message"}
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



