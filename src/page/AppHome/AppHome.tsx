// Component generated with util/vox-create-component.js
import React from "react";
import {AppHomeWrapper} from "./AppHome.styled";
import {AppHomeProps} from "./AppHome.types";
import {CPNChart, CPNDropdown} from "./../../component";

// TODO: remove mocks
const CHART_001 = {
	title: "",
	subtitle: "",
	labels: ["50 Total de SECAD", "50 Total de SECAD 2"],
	values: [50, 50],
};

const CHART_002 = {
	title: "80",
	subtitle: "Total",
	labels: ["180 Registros recebidos", "100 Registros aceitos", "80 Registros rejeitados"],
	values: [180, 100, 80],
};

export const AppHome: React.VFC<AppHomeProps> = ({...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<AppHomeWrapper {...args}>
			<div className="charts">
				<div className="card">
					<div className="card-header">
						<CPNDropdown
							label="Escolher SECAD"
							options={[{label: "Escolher SECAD", action: () => alert("Action")}]}
						/>
					</div>
					<div className="card-body">
						<CPNChart
							title={CHART_001.title}
							subtitle={CHART_001.subtitle}
							labels={CHART_001.labels}
							values={CHART_001.values}
						/>
					</div>
				</div>
				<div className="card">
					<div className="card-header">
						<CPNDropdown
							label="ID Arquivo de retorno"
							options={[{label: "ID Arquivo de retorno", action: () => alert("Action")}]}
						/>
					</div>
					<div className="card-body">
						<CPNChart
							title={CHART_002.title}
							subtitle={CHART_002.subtitle}
							labels={CHART_002.labels}
							values={CHART_002.values}
						/>
					</div>
				</div>
			</div>
		</AppHomeWrapper>
	);
};

export default AppHome;
