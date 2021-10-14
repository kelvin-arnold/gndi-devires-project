// Component generated with util/vox-create-component.js
import React from "react";
import {UIICon, UIText} from "..";
import {ButtonWrapper} from "./Button.styled";
import {ButtonProps} from "./Button.types";

export const Button: React.VFC<ButtonProps> = ({
	label,
	onClick,
	preset = "DEFAULT",
	icon,
	...args
}) => {
	return (
		<ButtonWrapper {...{onClick, bp: preset}} {...args}>
			{icon && (
				<div className="mr-0.5">
					<UIICon name={icon} />
				</div>
			)}
			<span className="label">{label || "Button"}</span>
		</ButtonWrapper>
	);
};

export default Button;
