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
        <div key={String(item.dt)} className="list-item">
            <p> {t('weather.place')}: {item.name} </p>
            <p> {t('weather.temperature')}: {String(item.main.temp)} {sign}</p>
            <p> {t('weather.feels-like')}: {String(item.main.feels_like)} {sign}</p>
            <p> {t('weather.humidity')}: {String(item.main.humidity)} </p>
        </div>
    )
}), [forecasts]);


  return (
    <div className={styles.container}>
      <WeatherForm onSubmit={onSubmit} />
      <div className={styles.forecasts}>
      {mappedForecasts}
      </div>
    </div>
  )
}



export default Weather