'use client';
import { LANGUAGE_OPTIONS } from "@/config/language";
import { useLocale } from 'next-intl';
import style from "./styles.module.css"
import { ReactNode } from "react";

const LanguageSwitcher = () => {
	const locale = useLocale()

	const options: ReactNode = LANGUAGE_OPTIONS.map((language, i) => {
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
	})

	return (
		<select
			value={locale}
			onChange={(e) => console.log(e)}
			className={style.select}
		>
			{options}
		</select>
	)
}

export default LanguageSwitcher
