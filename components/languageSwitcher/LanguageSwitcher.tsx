'use client';
import { LANGUAGE_OPTIONS } from "@/config/language";
import { Dropdown } from "flowbite-react";
import { useLocale } from 'next-intl';
import Link from 'next/link';

const LanguageSwitcher = () => {
	const locale = useLocale()

	const options = LANGUAGE_OPTIONS.filter(el => el.code !== locale).map((language, i) => {
		return (
			<Dropdown.Item key={language.code} className="text-xl">
				<Link href={`/${language.code}`} locale={false}>
					{language.name}
				</Link>
			</Dropdown.Item>

		)
	})

	return (
		<Dropdown inline color="none" label={LANGUAGE_OPTIONS.find(el=>el.code === locale)?.name} className="px-4 rounded-lg">
			{options}
		</Dropdown>
	)
}

export default LanguageSwitcher
