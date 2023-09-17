'use client'
import { useEffect, useState } from "react"
import Title from "../title/Title"
import style from "./styles.module.css"
import { Audio } from "react-loader-spinner"
import ProjectItem from "../projectItem/ProjectItem"

const Projects = () => {
	const [active, setActive] = useState(false)
	const projects = {} as any

	// useEffect(() => {
	// 	projects.fetch()
	// }, [])

	const onFocusChange = (active: boolean) => {
		setActive(active)
	}

	const mappedProjects = [
		projects.data &&
		projects.data.map((project: any, index: number) => (
			<ProjectItem key={index} active={active} setActive={onFocusChange} project={project} />
		)),
	]

	return (
		<div id={"projects"} className={style.projectsBlock}>
			<div className={`main-container ${style.container}`}>
				<Title title-key='projects.title' />
				{projects.loaded ? (
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

export default Projects
