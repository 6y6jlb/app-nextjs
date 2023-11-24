'use client'
import { IWeather } from '@/service/types'
import { getWeather } from '@/service/weather'
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent } from 'react'
import { toast } from 'react-toastify'
import { AuthForm } from './Form'
import styles from './styles.module.css'

export default function Auth() {
  const [forecasts, setForecasts] = React.useState([] as IWeather[])

  const t = useTranslations("common");
  const locale = useLocale()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      const newForecast = await getWeather({ city: formData.get('city'), }, locale);
      setForecasts([newForecast, ...forecasts])
      toast(t('notification.weather.success'), { hideProgressBar: true, type: 'success' })
    } catch (error: any) {
      console.log(error)
      toast(t('notification.weather.error'), { hideProgressBar: true, type: 'error' })
    }
  }

  return (
    <div className={styles.container}>
      <p>{t('weather.description')}</p>
      <AuthForm onSubmit={onSubmit} />
    </div>
  )
}
