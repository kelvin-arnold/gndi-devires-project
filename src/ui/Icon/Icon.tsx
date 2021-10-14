// Component generated with util/vox-create-component.js
import React from "react";
import {icons} from "../../theme/icon";
import {IconWrapper} from "./Icon.styled";
import {IconProps} from "./Icon.types";

export const Icon: React.VFC<IconProps> = ({
	name,
	size = "sm",
	color = "color-primary",
	...args
}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	const IconSVG = icons[name];
	return (
		<IconWrapper size={size} color={color} {...args}>
			<IconSVG />
		</IconWrapper>
	);
};

export default Icon;
