'use client'
import { Errors, getFormErrors } from '@/service/error/error'
import { updateMe } from '@/service/me/me'
import { User } from '@/service/me/types'
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { DEFAULT_PROFILE_FORM } from '../const'
import { ProfileFormType } from '../types'
import { Form } from './form/Form'
import Properties from './properties/Properties'
import styles from "./styles.module.css"


const Content = ({ user }: IProps) => {
    const [beignEdit, setBeignEdit] = useState(false)
    const [loading, setLoading] = React.useState(false)
    const [errors, setErrors] = React.useState(new Errors())
    const [form, setForm] = React.useState(DEFAULT_PROFILE_FORM as ProfileFormType)
    const t = useTranslations("common");

    useEffect(() => {
        setForm({
            ...DEFAULT_PROFILE_FORM,
            currency: `${user.currency}`,
            email: `${user.email}`,
            name: `${user.name || user.email}`,
            locale: `${user.locale || useLocale()}`,
            // timezone: `${user.tz || ''}`,
        })
    }, [])

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        setLoading(true)
        event.preventDefault()

        try {
            await updateMe(form);
            toast(t('notification.profile-update.success'), { hideProgressBar: true, type: 'success' })
            setBeignEdit(false)
        } catch (error: any) {
            if (error.code === 422) {
                setErrors(new Errors(getFormErrors(error.errors)))
            }
            toast(t('notification.profile-update.error'), { hideProgressBar: true, type: 'error' })
        } finally {
            setTimeout(() => setLoading(false), 1000)
        }
    }

    return (
        <div className={styles.content}>
            {
                beignEdit
                    ? <Form errors={errors} loading={loading} onSubmit={onSubmit} formData={form} onChange={setForm} />
                    : <Properties user={user} />
            }
            <button
                className="btn-secondary"
                onClick={() => setBeignEdit(!beignEdit)}
            >
                {t(beignEdit ? 'button.cancel' : 'button.edit')}
            </button>
        </div>
    )
}

export default Content

interface IProps {
    user: User
}