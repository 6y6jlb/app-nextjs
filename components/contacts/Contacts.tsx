'use client'
import { useState } from "react"
import Title from "../theme/title/Title"
import { contacts } from "./const"
import style from "./styles.module.css"
import { useTranslations } from "next-intl"


export default function Footer({ master }: IProps) {
	const [active, setActive] = useState(null as any)
	const t = useTranslations("common");
	const mappedContacts = contacts.map((c, index) => {
		return (
			<div
				key={index}
				onMouseEnter={() => setActive(c.link)}
				className={active === c.link ? style.active + " " + style.second : style.second}
			>
				<a title={c.title} href={c.link}>
					{c.item}
				</a>
			</div>
		)
	})
	return (
		<div id='contact' className={`main-container ${style.container}`}>
			<Title title-key='contacts.title' />
			<button className="btn-primary" onClick={(e) => {
				location.assign('/feedback' + e.currentTarget.value)
			}}>{t('button.contact-us')}</button>
			<div className={style.master}>{master}</div>
			<div className={style.insideContainer}>{mappedContacts}</div>
		</div>
	)
}



interface IProps {
	master: string
}
