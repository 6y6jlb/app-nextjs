'use client';
import React from "react"
import style from "./Navigation.module.css"

import { useTranslations } from 'next-intl';


const Navigation = () => {
	const t = useTranslations("common");

	return (
		<div className={style.navigation}>
			<a className="link" href="#common">{t('navigation.common')}</a>
			<a className="link" href="#languages">{t('navigation.languages')}</a>
			<a className="link" href="#projects">{t('navigation.projects')}</a>
			<a className="link" href="#contact">{t('navigation.contact')}</a>
		</div>
	)
}

export default Navigation
