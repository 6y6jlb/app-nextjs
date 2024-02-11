'use client'
import FormItem from '@/modules/common/theme/formItem/FormItem';
import { Errors } from '@/service/error/error';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import style from "./styles.module.css";
import React from 'react';
import tz from '@/config/tz.json'
import moment from 'moment';
import { DEFAULT_OPTION } from '../../const';
import { EVENT_ENUM } from '@/config/event';

export function Form({ onSubmit, loading, errors, formData, onChange }: IProps) {
    const t = useTranslations("common");
    const [option, setOption] = useState(DEFAULT_OPTION)

    const fieldHandler = React.useCallback((fieldName: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let value: boolean | string = e.target.value;
        if (fieldName === 'is_regular' && e.target.type === 'checkbox') {
            //@ts-ignore
            value = e.target.checked;
        }
        onChange({ ...formData, [fieldName]: value });
    }, [formData]);

    const timezones = useMemo(() => (tz as []).map((el: any) => {
        return el.utc.map((zone: any, index: number) => {
            const utc = el.text.split(' ')[0];
            return (
                <option key={index + el.abbr} className="option" value={zone}>
                    {utc}&nbsp;{zone}
                </option>
            )
        })

    }), [])

    const events = useMemo(() => Object.entries(EVENT_ENUM).map(([key, value], index) => {
        return (
            <option key={index + value} className="option" value={value}>
                {value}
            </option>
        )

    }), [])

    const selectedOptions = useMemo(() => formData.options?.map((el: any, index: number) => {
        return (
            <div key={index + el.param}>
                {el.event_type}:{el.param}
                <button
                    onClick={(e) => onChange({ ...formData, options: formData.options.filter((opt: any) => `${opt.event_type}${opt.param}` !== `${el.event_type}${el.param}`) })}
                >
                    x
                </button>
            </div>
        );
    }), [formData.options])

    return (
        <form className={style.form} onSubmit={onSubmit} aria-disabled={loading}>
            <FormItem invalid={errors.has('call_at')} notification={errors.get('call_at')}>
                <input
                    disabled={loading}
                    placeholder={t("form.placeholder.call-at")}
                    name={"call_at"}
                    type="text"
                    value={formData.call_at}
                    onChange={fieldHandler('call_at')}
                />
            </FormItem>
            <FormItem invalid={errors.has('is_regular')} notification={errors.get('is_regular')}>
                <div className={style.radio}>
                    <label htmlFor="is_regular">{t('form.label.is-regular')}</label>
                    <input
                        disabled={loading}
                        name="is_regular"
                        id="is_regular"
                        type="checkbox"
                        checked={formData.already_register}
                        onChange={fieldHandler('is_regular')}
                    />
                </div>
            </FormItem>
            <FormItem invalid={errors.has('tz')} notification={errors.get('tz')}>
                <select
                    className={style.select}
                    disabled={loading}
                    placeholder={t("form.placeholder.timezone")}
                    name={"tz"}
                    value={formData.tz}
                    onChange={fieldHandler('tz')}
                >
                    {timezones}
                </select>
            </FormItem>
            <div className={style.options}>
                <p>{t("tasks.current-events")}</p>
                <div className={style.selectedOptions}>{selectedOptions}</div>
                <FormItem invalid={errors.has('event_type')} notification={errors.get('event_type')}>
                    <select
                        className={style.select}
                        disabled={loading}
                        placeholder={t("form.placeholder.event-type")}
                        name={"event_type"}
                        value={option.event_type}
                        onChange={(e) => setOption({ ...option, event_type: e.target.value })}
                    >
                        {events}
                    </select>
                </FormItem>
                <FormItem invalid={errors.has('param')} notification={errors.get('param')}>
                    <input
                        disabled={loading}
                        name="param"
                        id="param"
                        type="text"
                        value={option.param}
                        onChange={(e) => setOption({ ...option, param: e.target.value })}
                    />
                </FormItem>
                <button
                    className='btn-secondary'
                    onClick={(e) => {
                        e.preventDefault();
                        onChange({ ...formData, options: [...formData.options, option] })
                    }}
                >
                    {t('button.option-add')}
                </button>
            </div>

            <button
                className="btn-secondary"
                disabled={loading}
            >
                {t('button.send')}
            </button>
        </form>

    )
}

interface IProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    loading: boolean
    errors: Errors
    onChange: React.Dispatch<React.SetStateAction<any>>
    formData: any
}



