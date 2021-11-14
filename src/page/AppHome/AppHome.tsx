// Component generated with util/vox-create-component.js
import React from "react";
import {AppHomeWrapper} from "./AppHome.styled";
import {AppHomeProps} from "./AppHome.types";

export const AppHome: React.VFC<AppHomeProps> = ({...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<AppHomeWrapper {...args}>
			<span className="text-xl font-medium mb-2">Home</span>
			<span className="mb-4">Home description</span>
		</AppHomeWrapper>
	);
};

export default AppHome;
