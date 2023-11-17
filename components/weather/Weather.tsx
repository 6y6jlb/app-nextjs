'use client'
import React, { FormEvent } from 'react'
import { WeatherForm } from './Form'
import styles from './styles.module.css'
import { getWeather } from '@/service/weather'
import { useLocale, useTranslations } from 'next-intl';
import { toast } from 'react-toastify'
import { IWeather } from '@/service/types'
import { TEMPERATURE_SIGN } from '@/config/weather'

const Weather = () => {
  const [forecasts, setForecasts] = React.useState([] as IWeather[])

  const locale = useLocale()
  const t = useTranslations("common");

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

  const mappedForecasts = React.useMemo(() => forecasts.map(item => {
    const sign = TEMPERATURE_SIGN[item.units];
    return (
      <div key={String(item.dt)} className={styles.forecast}>
        <p><span>{t('weather.place')}:</span> <span>{item.name} </span></p>
        <p><span>{t('weather.temperature')}:</span> <span>{String(item.main.temp)} {sign}</span></p>
        <p><span>{t('weather.feels-like')}:</span> <span>{String(item.main.feels_like)} {sign}</span></p>
        <p><span>{t('weather.humidity')}:</span> <span>{String(item.main.humidity)} </span></p>
      </div>
    )
  }), [forecasts]);


  return (
    <div className={styles.container}>
      <p>{t('weather.description')}</p>
      <WeatherForm onSubmit={onSubmit} />
      <div className={styles.forecasts}>
        {mappedForecasts}
      </div>
    </div>
  )
}



export default Weather