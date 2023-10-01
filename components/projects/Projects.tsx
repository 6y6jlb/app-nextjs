'use client'
import { useState } from "react"
import { Audio } from "react-loader-spinner"
import ProjectItem from "../projectItem/ProjectItem"
import Title from "../title/Title"
import style from "./styles.module.css"
import { ReposData } from "@/service/types"

export default function Projects({ projects }: IProps) {
	const [activeRepoName, setActiveRepoName] = useState('')


	const mappedProjects = [
		projects &&
		Object.values(projects).filter(el=>!['a3f-group-test', '6y6jlb'].includes(el.name)).map((project: any, index: number) => (
			<ProjectItem key={index} activeRepoName={activeRepoName} setActiveRepoName={setActiveRepoName} project={project} />
		)),
	]


	return (
		<div id={"projects"} className={style.projectsBlock}>
			<div className={`main-container ${style.container}`}>
				<Title title-key='projects.title' />
				{mappedProjects.length ? (
					<div className={style.projects}>{mappedProjects}</div>
				) : (
					<Audio
						height="80"
						width="80"
						color="grey"
						ariaLabel="loading"
					/>
				)}
			</div>
		</div>
	)
}

interface IProps {
	projects: ReposData
}

