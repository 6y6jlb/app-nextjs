'use client'
import { auth } from '@/service/auth'
import { Errors } from '@/service/error'
import useFormErrors from '@/service/hooks/useFormErrors'
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent } from 'react'
import { toast } from 'react-toastify'
import { Form } from './Form'
import { DEFAULT_AUTH_FORM } from './const'
import styles from './styles.module.css'
import { IAuthForm } from './types'

export default function Auth() {
  const [form, setForm] = React.useState(DEFAULT_AUTH_FORM as IAuthForm)
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(new Errors())

  const t = useTranslations("common");
  const locale = useLocale()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true)
    event.preventDefault()

    try {
      const result = await auth({ ...form, locale });
      setForm(DEFAULT_AUTH_FORM)
      toast(t('notification.auth.success'), { hideProgressBar: true, type: 'success' })
    } catch (error: any) {
      if (error.code === 422) {
        const temp = useFormErrors(error.errors);
        setErrors(new Errors(useFormErrors(error.errors)))
      }
      toast(t('notification.auth.error'), { hideProgressBar: true, type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <p>{t(form.already_register ? 'auth.description-login' : 'auth.description-register')}</p>
      <Form onSubmit={onSubmit} formData={form} onChange={setForm} loading={loading} errors={errors} />
    </div>
  )
}
