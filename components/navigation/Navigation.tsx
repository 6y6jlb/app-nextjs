'use client';
import React from "react"
import style from "./Navigation.module.css"
import Link from 'next/link'

import { useTranslations, } from 'next-intl';
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";


const Navigation = () => {
	const t = useTranslations("common");

	return (
		<div className={style.navigation}>
			<Link href="#common">{t('navigation.common')}</Link>
			<Link href="#languages">{t('navigation.languages')}</Link>
			<Link href="#projects">{t('navigation.projects')}</Link>
			<Link href="#contact">{t('navigation.contact')}</Link>
			<LanguageSwitcher/>
		</div>
	)
}

export default Navigation
