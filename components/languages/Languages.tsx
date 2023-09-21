'use client'
import Chart from "react-apexcharts"
import { Audio, } from "react-loader-spinner"
import style from "./styles.module.css"
import chartOptions from "./chart"
import Title from "../title/Title"
import { getChartData } from '../../service/chart';
import { useEffect, useState } from "react"
import { takeLanguages } from "@/service/lang"

export default function Languages() {
	const [chartData, setChartData] = useState([]);


	useEffect(() => {
		fetch('/api/projects')
		  .then((response) => response.json())
		  .then((result) => {
			setChartData(getChartData(takeLanguages(result.data)));
		  })
		  .catch((error) => {
			console.error('Error fetching data:', error);
		  });
	  }, []);
 
	

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
