'use client'
import { Errors } from '@/service/error';
import { useTranslations } from 'next-intl';
import { FormEvent } from 'react';
import style from "./styles.module.css";
import FormItem from '@/modules/common/theme/formItem/FormItem';

export default function FeedbackForm({ onSubmit, loading, errors }: IProps) {

    const t = useTranslations("common");

    return (

        <form className={style['feedback-form']} onSubmit={onSubmit}>
            <FormItem invalid={errors.has('name')} notification={errors.get('name')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.name")}
                    name={"name"}
                    type="text"
                />
            </FormItem>

            <FormItem invalid={errors.has('contacts')} notification={errors.get('contacts')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.requisites")}
                    name={"contacts"}
                    type="text"
                />
            </FormItem>

            <FormItem invalid={errors.has('message')} notification={errors.get('message')}>
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
    errors: Errors
    loading: boolean
}




