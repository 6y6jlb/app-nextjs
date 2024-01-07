import { TEMPERATURE_SIGN } from '@/config/weather';
import { IWeather } from '@/service/types'
import React from 'react'
import styles from './styles.module.css'
import { useTranslations } from 'next-intl';

export default function Forecast({forecast}: IProps) {
    const t = useTranslations("common");
    
    const sign = TEMPERATURE_SIGN[forecast.units];

    return (
        <div key={String(forecast.dt)} className={styles.forecast}>
            <p><span>{t('weather.place')}:</span> <span>{forecast.name} </span></p>
            <p><span>{t('weather.temperature')}:</span> <span>{String(forecast.main.temp)} {sign}</span></p>
            <p><span>{t('weather.feels-like')}:</span> <span>{String(forecast.main.feels_like)} {sign}</span></p>
            <p><span>{t('weather.humidity')}:</span> <span>{String(forecast.main.humidity)} </span></p>
        </div>
    )
}


interface IProps {
    forecast: IWeather
}
