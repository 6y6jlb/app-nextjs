'use client';
import { LANGUAGE_OPTIONS } from "@/config/language";
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Dropdown } from "flowbite-react";
import styles from "./LanguageSwitcher.module.css"

const LanguageSwitcher = () => {
	const locale = useLocale()

	const options = LANGUAGE_OPTIONS.filter(el => el.code !== locale).map((language, i) => {
		return (
			<Dropdown.Item key={language.code} className="option">
				<Link href={`/${language.code}`} locale={false}>
					{language.name}
				</Link>
			</Dropdown.Item>

		)
	})

	return (
		<Dropdown color="none" label={LANGUAGE_OPTIONS.find(el=>el.code === locale)?.name} className="">
			{options}
		</Dropdown>
	)
}

export default LanguageSwitcher
