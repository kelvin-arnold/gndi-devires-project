// Component generated with util/vox-create-component.js
import * as R from "ramda";
import React from "react";
import ChartJS from "react-chartjs-2";
import {ChartWrapper} from "./Chart.styled";
import {ChartProps} from "./Chart.types";
import {UIText} from "./../../ui";

const CHART_COLORS = ["#0B7EB5", "#EC130F", "#F49E00"];
const ERROR_MESSAGE = "Porfavor, insira dados pra visualizar o gráfico";

export const Chart: React.VFC<ChartProps> = ({labels, values, title, subtitle, ...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	if (!labels || !values || R.isEmpty(labels) || R.isEmpty(values)) {
		return <span>{ERROR_MESSAGE}</span>;
	}
	return (
		<ChartWrapper {...args}>
			<div className="chart-container">
				<ChartJS
					type="doughnut"
					height="152"
					width="152"
					title="80"
					options={{
						cutout: 55,
						maintainAspectRatio: false,
						plugins: {
							legend: {
								display: false,
							},
						},
					}}
					data={{
						labels,
						datasets: [
							{
								data: values,
								backgroundColor: CHART_COLORS,
								borderWidth: 0,
							},
						],
					}}
				/>
				<div className="titles">
					<UIText preset="HEADLINE">{title}</UIText>
					<UIText>{subtitle}</UIText>
				</div>
			</div>
			<div className="chart-legends">
				<ul>
					{labels.map((label: string, k) => (
						<li key={k}>
							<span className="box" style={{backgroundColor: `${CHART_COLORS[k]}`}} />
							<UIText>{label}</UIText>
						</li>
					))}
				</ul>
			</div>
		</ChartWrapper>
	);
};

export default Chart;
