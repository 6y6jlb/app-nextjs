'use client'
import { Errors, getFormErrors } from '@/service/error'
import { IWeather } from '@/service/types'
import { getWeather } from '@/service/weather'
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent } from 'react'
import { toast } from 'react-toastify'
import { WeatherForm } from './Form'
import styles from './styles.module.css'
import Forecast from './forecast/Forecast'
import Title from '@/modules/common/theme/title/Title'

export default function Weather() {
  const [forecasts, setForecasts] = React.useState([] as IWeather[])
  const [loading, setLoading] = React.useState(false)
  const [errors, setErrors] = React.useState(new Errors())

  const t = useTranslations("common");
  const locale = useLocale()

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true)
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      const newForecast = await getWeather({ city: formData.get('city'), }, locale);
      setForecasts([newForecast, ...forecasts])
      toast(t('notification.weather.success'), { hideProgressBar: true, type: 'success' })
    } catch (error: any) {
      if (error.code === 422) {
        setErrors(new Errors(getFormErrors(error.errors)))
      }
      toast(t('notification.weather.error'), { hideProgressBar: true, type: 'error' })
    } finally {
      setTimeout(() => setLoading(false), 1000)
    }
  }

  const mappedForecasts = React.useMemo(() => forecasts.map((item, index) => {
    return <Forecast forecast={item} key={index} />
  }), [forecasts]);


  return (
    <div className={styles.container}>
      <Title title-key={'weather.title'} />
      <p>{t('weather.description')}</p>
      <WeatherForm onSubmit={onSubmit} loading={loading} errors={errors} />
      <div className={styles.forecasts}>
        {mappedForecasts}
      </div>
    </div>
  )
}
