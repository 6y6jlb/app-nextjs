'use client'
import { PATH_TYPE_ENUM } from "@/config/navigation";
import { ILink } from "@/config/types";
import { useTranslations, } from 'next-intl';
import Link from 'next/link';
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import style from "./styles.module.css";



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
				href={el.type === PATH_TYPE_ENUM.ID ? `/#${el.path}` : el.path}
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
