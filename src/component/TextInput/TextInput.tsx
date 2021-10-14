// Component generated with util/vox-create-component.js
import React from "react";
import {TextInputWrapper, Input} from "./TextInput.styled";
import {TextInputProps} from "./TextInput.types";
import {UIText, UIInputBase} from "./../../ui";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	({label, disabled, error, help, placeholder, type = "text", ...args}, ref) => {
		// Context Here
		// States Here
		// Effects Here
		// Handlers Here
		return (
			<TextInputWrapper>
				{label && (
					<div className="mb-0.5">
						<UIText preset="BODY_02" color="GREY">
							{label}
						</UIText>
					</div>
				)}
				<Input {...{placeholder, type, disabled, error}} {...args} ref={ref} />
				{error && (
					<UIText preset="BODY_03" color="DANGER">
						{error}
					</UIText>
				)}
			</TextInputWrapper>
		);
	},
);

export default TextInput;
