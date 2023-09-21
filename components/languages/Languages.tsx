import Chart from "react-apexcharts"
import { Audio, } from "react-loader-spinner"
import style from "./styles.module.css"
import chartOptions from "./chart"
import Title from "../title/Title"
import { ApexOptions } from "apexcharts"

export default function Languages() {
	const chartData:[] = []

	return (
		<div id={"languages"} className={style.block}>
			<div className={`main-container ${style.container}`}>
				<Title title-key="language.title" />
				<div className={style.chart}>
					{Object.keys(chartData).length > 0 ? (
						<Audio
						height="80"
						width="80"
						color="grey"
						ariaLabel="loading"
					/>
					) : (
						<Chart
							options={{ ...chartOptions, labels: Object.keys(chartData) } as any}
							series={Object.values(chartData)}
							type="donut"
							width="580"
						/>
					)}
				</div>
			</div>
		</div>
	)
}
