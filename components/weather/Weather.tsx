'use client'
import { IWeather } from '@/service/types'
import { getWeather } from '@/service/weather'
import { useLocale, useTranslations } from 'next-intl'
import React, { FormEvent } from 'react'
import { toast } from 'react-toastify'
import Forecast from '../forecast/Forecast'
import { WeatherForm } from './Form'
import styles from './styles.module.css'

export default function Weather () {
  const [forecasts, setForecasts] = React.useState([] as IWeather[])
  const [loading, setLoading] = React.useState(false)

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
      console.log(error)
      toast(t('notification.weather.error'), { hideProgressBar: true, type: 'error' })
    } finally {
      setTimeout(()=>setLoading(false), 1000)
    }
  }

  const mappedForecasts = React.useMemo(() => forecasts.map((item, index) => {
    return <Forecast forecast={item} key={index}/>
  }), [forecasts]);


  return (
    <div className={styles.container}>
      <p>{t('weather.description')}</p>
      <WeatherForm onSubmit={onSubmit} loading={loading}/>
      <div className={styles.forecasts}>
        {mappedForecasts}
      </div>
    </div>
  )
}
