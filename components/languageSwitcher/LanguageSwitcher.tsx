'use client';
import { LANGUAGE_OPTIONS } from "@/config/language";
import { Dropdown } from "flowbite-react";
import { useLocale } from 'next-intl';
import Link from 'next/link';

const LanguageSwitcher = () => {
	const locale = useLocale()

	const options = LANGUAGE_OPTIONS.filter(el => el.code !== locale).map((language, i) => {
		return (
			// @ts-ignore
			<Dropdown.Item key={language.code} as={Link} href={`/${language.code}`} locale={false} className="text-xl text-white-main focus:bg-transparent hover:bg-transparent" >
				{language.name}
			</Dropdown.Item>

		)
	})

	return (
		<Dropdown color="none" label={<button className="link">{LANGUAGE_OPTIONS.find(el=>el.code === locale)?.name}</button>} className="px-4 rounded-lg bg-white/30">
			{options}
		</Dropdown>
	)
}

export default LanguageSwitcher
