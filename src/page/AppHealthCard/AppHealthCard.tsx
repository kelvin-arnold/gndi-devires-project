// Component generated with util/vox-create-component.js
import React from "react";
import {AppHealthCardWrapper} from "./AppHealthCard.styled";
import {AppHealthCardProps} from "./AppHealthCard.types";

export const AppHealthCard: React.VFC<AppHealthCardProps> = ({...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<AppHealthCardWrapper {...args}>
			<span className="text-xl font-medium mb-2">AppHealthCard</span>
			<span className="mb-4">AppHealthCard description</span>
		</AppHealthCardWrapper>
	);
};

export default AppHealthCard;
