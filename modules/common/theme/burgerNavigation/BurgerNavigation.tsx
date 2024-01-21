'use client'
import { ILink } from "@/config/types"
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { useState } from "react"
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher"
import style from "./styles.module.css"

export default function BurgerNavigation({ links }: IProps) {

	const [isOpen, setIsOpen] = useState(false)
	const t = useTranslations("common");

	let hash = '';

	if (typeof window !== "undefined") {
		hash = window.location.hash
	}


	const mappedLinks = links.map(el => {
		return (
			<Link
				className={hash.includes(el.path) ? 'active' : ''}
				href={el.path}
				key={el.path}
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
				{mappedLinks}
				<LanguageSwitcher />
			</div>
		</div>
	)
}

interface IProps {
	links: ILink[]
}
