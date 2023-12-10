'use client'
import { Repo } from "@/service/types"
import { getImageClass } from "./helpers"
import style from "./styles.module.css"
import { useTranslations } from "next-intl";



export default function ProjectItem({ activeRepoName, project, setActiveRepoName }: IProps) {
	const t = useTranslations("common");
	const activeStyle = activeRepoName === project.name

	return (
		<div onMouseEnter={() => setActiveRepoName(project.name)} className={style.project}>
			<div className={style.imageBlock}>
				<div className={`${style.image} ${activeStyle ? style.active : ''} ${getImageClass(style, project.name)}`} />
				<a href={project.html_url} className={style['button-link']}>
					{t('projects.link-to')}
				</a>
			</div>

			<div className={style.descriptionBlock}>
				<h4 className={style.projectName}>{project.name}</h4>
				<p style={style.description as any}>{project.description}</p>
			</div>
		</div>
	)
}

interface IProps {
	activeRepoName: string,
	setActiveRepoName: (repo_name: string) => void
	project: Repo
}
