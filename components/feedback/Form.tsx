'use client'
import { ErrorType } from '@/config/types';
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import FormItem from '../theme/formItem/FormItem';
import style from "./styles.module.css";

export default function FeedbackForm({ onSubmit, loading, errors }: IProps) {

    const t = useTranslations("common");

    return (

        <form className={style['feedback-form']} onSubmit={onSubmit}>
            <FormItem invalid={!!errors.find(el => el['name'])} notification={errors.find(el => el['name'])?.['name']}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.name")}
                    name={"name"}
                    type="text"
                />
            </FormItem>

            <FormItem invalid={!!errors.find(el => el['contacts'])} notification={errors.find(el => el['contacts'])?.['contacts']}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.requisites")}
                    name={"contacts"}
                    type="text"
                />
            </FormItem>

            <FormItem invalid={!!errors.find(el => el['message'])} notification={errors.find(el => el['message'])?.['message']}>
                <textarea
                    disabled={loading}
                    placeholder={t("form.placeholder.message")}
                    name={"message"}
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
    errors: ErrorType[]
    loading: boolean
}




