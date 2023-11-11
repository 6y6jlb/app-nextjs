'use client'
import { TakeLanguages } from "@/service/lang"
import { Audio, } from "react-loader-spinner"
import { getChartData } from '../../service/chart'
import Title from "../title/Title"
import chartOptions from "./chart"
import style from "./styles.module.css"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function Languages({languages}: IProps) {
 
	const chartData = getChartData(languages)

	return (
		<div id={"languages"} className={style.block}>
			<div className={`main-container ${style.container}`}>
				<Title title-key="language.title" />
				<div className={style.chart}>
					{!Object.keys(chartData).length ? (
						<Audio
						height="80"
						width="80"
						color="grey"
						ariaLabel="loading"
					/>
					) : (
						<Chart
							options={{ ...chartOptions, labels: Object.keys(chartData) } as any}
							series={Object.values(chartData) as any}
							type="donut"
							width="580"
						/>
					)}
				</div>
			</div>
		</div>
	)
}

interface IProps {
	languages: TakeLanguages
}
