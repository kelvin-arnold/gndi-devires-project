// Component generated with util/vox-create-component.js
import React from "react";
import {TooltipWrapper, Content} from "./Tooltip.styled";
import {TooltipProps, TooltipStyleProps} from "./Tooltip.types";
import {UIICon} from "../../ui";

export const Tooltip: React.VFC<TooltipProps & TooltipStyleProps> = ({
	description,
	px = "UP",
	py = "LEFT",
	...args
}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<TooltipWrapper {...args}>
			<Content {...{px, py}}>{description}</Content>
			<UIICon name="info" color="PRIMARY" />
		</TooltipWrapper>
	);
};

export default Tooltip;
