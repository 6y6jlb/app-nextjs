'use client'
import { Errors, getFormErrors } from '@/service/error'
import { User, UserForm } from '@/service/types'
import { useTranslations } from 'next-intl'
import React, { FormEvent, useCallback, useState } from 'react'
import { Form } from './form/Form'
import Properties from './properties/Properties'
import { getWeather } from '@/service/weather'
import { locale } from 'moment'
import { toast } from 'react-toastify'
import { updateMe } from '@/service/me'


const Content = ({ user }: Props) => {
    const [beignEdit, setBeignEdit] = useState(false)
    const [loading, setLoading] = React.useState(false)
    const [errors, setErrors] = React.useState(new Errors())
    const t = useTranslations("common");

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        setLoading(true)
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        try {
            const updatedUser = await updateMe(formData as any);
            toast(t('notification.update-profile.success'), { hideProgressBar: true, type: 'success' })
        } catch (error: any) {
            if (error.code === 422) {
                setErrors(new Errors(getFormErrors(error.errors)))
            }
            toast(t('notification.update-profile.error'), { hideProgressBar: true, type: 'error' })
        } finally {
            setTimeout(() => setLoading(false), 1000)
            setBeignEdit(false)
        }
    }

    return (
        <>
            {beignEdit
                ? <Form errors={errors} loading={loading} onSubmit={onSubmit} />
                : <Properties user={user} />
            }
            <button
                className="btn-secondary"
                onClick={() => setBeignEdit(!beignEdit)}
            >
                {t(beignEdit ? 'button.cancel' : 'button.edit')}
            </button>
        </>
    )
}

export default Content

type Props = {
    user: User
}