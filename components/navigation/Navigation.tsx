'use client'
import React, { useState } from "react"
import Link from 'next/link'
import { useTranslations, } from 'next-intl';
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { LINKS } from "@/config/navigation";
import style from "./styles.module.css"



export default function Navigation() {

	const t = useTranslations("common");
	let hash = '';

	if (typeof window !== "undefined") {
		hash = window.location.hash
	}


	const links = LINKS.map(el => {
		return (
			<Link
				className={hash.includes(el.id) ? 'active' : ''}
				href={`/#${el.id}`}
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
};
