'use client'
import Chart from "react-apexcharts"
import { Audio, } from "react-loader-spinner"
import style from "./Languages.module.css"
import chartOptions from "./chart"
import Title from "../title/Title"

export default function Languages() {
	const chartData:[] = []

	return (
		<div id={"languages"} className={style.block}>
			<div className={`main-container ${style.container}`}>
				<Title class="title-black" title-key="language.title" />
				{/* <div className={style.chart}>
					{Object.keys(chartData).length > 0 ? (
						<Audio
						height="80"
						width="80"
						color="grey"
						ariaLabel="loading"
					/>
						// <Chart
						// 	options={{ ...chartOptions, labels: Object.keys(chartData) }}
						// 	series={Object.values(chartData)}
						// 	type="donut"
						// 	width="580"
						// />
					) : (
						<Audio
							height="80"
							width="80"
							color="grey"
							ariaLabel="loading"
						/>
					)}
				</div> */}
			</div>
		</div>
	)
}
