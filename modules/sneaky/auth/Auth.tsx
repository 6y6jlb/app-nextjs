'use client'
import { auth } from '@/service/auth'
import { Errors, getFormErrors } from '@/service/error'
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent } from 'react'
import { toast } from 'react-toastify'
import { AuthForm } from './Form'
import { DEFAULT_AUTH_FORM } from './const'
import styles from './styles.module.css'
import { IAuthForm } from './types'
import { useRouter } from "next/navigation";
import Title from '@/modules/common/theme/title/Title'

export default function Auth() {
  const [form, setForm] = React.useState(DEFAULT_AUTH_FORM as IAuthForm)
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(new Errors())
  const router = useRouter()

  const t = useTranslations("common");
  const locale = useLocale()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true)
    event.preventDefault()

    try {
      await auth({ ...form, locale });
      setForm(DEFAULT_AUTH_FORM)
      toast(t('notification.auth.success'), { hideProgressBar: true, type: 'success' })
    } catch (error: any) {
      if (error.code === 422) {
        setErrors(new Errors(getFormErrors(error.errors)))
      }
      toast(t('notification.auth.error'), { hideProgressBar: true, type: 'error' })
    } finally {
      setLoading(false)
      router.refresh()
      router.push('/profile')
    }
  }

  return (
    <div className={styles.container}>
      <Title title-key={form.already_register ? 'auth.description-login' : 'auth.description-register'} />
      <AuthForm onSubmit={onSubmit} formData={form} onChange={setForm} loading={loading} errors={errors} />
    </div>
  )
}
