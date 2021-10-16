// Component generated with util/vox-create-component.js
import React from "react";
import {icons} from "../../theme/icon";
import {UIICon, UIText} from "../../ui";
import {AlertWrapper} from "./Alert.styled";
import {AlertProps} from "./Alert.types";

const COLORS = {
	ATENTION: "SECONDARY",
	INFO: "BLUE",
	ERROR: "DANGER",
	SUCCESS: "GREEN",
};

const ICONS = {
	ATENTION: "alert",
	INFO: "statusInfo",
	ERROR: "errorFilled",
	SUCCESS: "checkFilled",
};

export const Alert: React.VFC<AlertProps> = ({
	type = "ATENTION",
	title = "",
	description,
	...args
}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<AlertWrapper type={type} {...args}>
			{/* <UIICon name={ICONS[type] as keyof typeof icons} size="md" color={COLORS[type]} /> */}
			<div className="ml-3 flex flex-col">
				<UIText preset="SUBTITLE">{title}</UIText>
				{description && (
					<div className="mt-3">
						<UIText>{description}</UIText>
					</div>
				)}
			</div>
		</AlertWrapper>
	);
};

export default Alert;
