// Component generated with util/vox-create-component.js
import React from "react";
import {UIText} from "../../ui";
import {RadioButtonWrapper, Radio, CustomInput, Selected} from "./RadioButton.styled";
import {RadioButtonProps} from "./RadioButton.types";

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
	({label, name, ...args}, ref) => {
		// Context Here
		// States Here
		// Effects Here
		// Handlers Here
		return (
			<RadioButtonWrapper>
				<Radio {...{name, type: "radio"}} {...args} ref={ref} />
				<CustomInput>
					<Selected />
				</CustomInput>
				<UIText>{label}</UIText>
			</RadioButtonWrapper>
		);
	},
);

export default RadioButton;
