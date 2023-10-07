'use client'
import { LINKKS } from "@/config/navigation"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslations } from "next-intl"
import { useState } from "react"
import style from "./styles.module.css"
import Link from "next/link"
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher"

export default function BurgerNavigation () {

	const [isOpen, setIsOpen] = useState(false)
	const t = useTranslations("common");
	
	let hash = '';

	if (typeof window !== "undefined") {
		hash = window.location.hash
	 }


	const links = LINKKS.map(el => {
		return (
			<Link
				className={hash.includes(el.id) ? 'active' : ''}
				href={`#${el.id}`}
				key={el.id}
			>
				{t(el.title)}
			</Link>
		);
	})

	return (
		<div className={style.burgerNavigation}>
			<div onClick={() => setIsOpen(!isOpen)} className={style.burgerButton}>
				<FontAwesomeIcon style={{ fontSize: "28px", color: isOpen ? "grey" : "white" }} icon={faBars} />
			</div>
			<div className={isOpen ? style.burgerNavItems : `${style.burgerNavItems} ${style.hide}`}>
				{links}
				<LanguageSwitcher/>
			</div>
		</div>
	)
}
