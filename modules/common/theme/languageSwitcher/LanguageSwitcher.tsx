'use client';
import { LANGUAGE_OPTIONS } from "@/config/language";
import { useLocale } from 'next-intl';
import style from "./styles.module.css"
import { ChangeEvent, ReactNode, useCallback, useMemo } from "react";

const LanguageSwitcher = () => {
	const locale = useLocale()

	const onLanguageChange = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			if (location.pathname.includes(locale)) {
				location.assign(location.pathname.replace(locale, e.currentTarget.value))
			} else {
				console.warn('Incorrect locale: ' + locale)
			}

		}, [locale])

	const options: ReactNode = useMemo(() => LANGUAGE_OPTIONS.map((language, i) => {
		const isDisabled = language.code === locale
		return (
			<option
				disabled={isDisabled}
				key={i}
				value={language.code}
				className={`${style.option} ${isDisabled ? 'active' : ''}`}
			>
				{language.name}
			</option>
		)
	}), [locale])

	return (
		<select
			value={locale}
			onChange={onLanguageChange}
			className={style.select}
		>
			{options}
		</select>
	)
}

export default LanguageSwitcher
