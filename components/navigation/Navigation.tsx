'use client';
import React from "react"
import style from "./Navigation.module.css"
import Link from 'next/link'
import { useTranslations, } from 'next-intl';
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { LINKKS } from "@/config/navigation";



const Navigation = () => {
	const t = useTranslations("common");

	const links = LINKKS.map(el => {
		return (
			<Link
				className={window.location.hash.includes(el.id) ? style.active : ''}
				href={`#${el.id}`}
				key={el.id}
			>
				{t(el.title)}
			</Link>
		);
	})

	return (
		<div className={style.navigation}>
			{links}
			<LanguageSwitcher />
		</div>
	)
}

export default Navigation
