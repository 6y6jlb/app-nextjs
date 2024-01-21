'use client'
import { ILink } from "@/config/types";
import { useTranslations, } from 'next-intl';
import Link from 'next/link';
import style from "./styles.module.css";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";



export default function Navigation({ links }: IProps) {

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
		<div className={style.navigation}>
			{mappedLinks}
			<LanguageSwitcher />
		</div>
	)
};

interface IProps {
	links: ILink[]
}
