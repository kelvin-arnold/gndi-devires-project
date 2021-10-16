// Component generated with util/vox-create-component.js
import React from "react";
import {TextInputWrapper, InputWrapper, Input, Icon} from "./TextInput.styled";
import {TextInputProps} from "./TextInput.types";
import {UIText, UIICon} from "./../../ui";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	(
		{label, disabled, error, help, placeholder, type = "text", icon, onClick = () => {}, ...args},
		ref,
	) => {
		// Context Here
		// States Here
		// Effects Here
		// Handlers Here
		return (
			<TextInputWrapper data-name="text-input">
				{label && (
					<div className="mb-0.5">
						<UIText preset="BODY_02" color="GREY">
							{label}
						</UIText>
					</div>
				)}
				<InputWrapper onClick={onClick}>
					<Input
						{...{placeholder, type, disabled, error}}
						// onChange={(e) => (onChange ? onChange(e.currentTarget.value) : {})}
						ref={ref}
						{...args}
					/>
					{icon && (
						<Icon>
							<UIICon name={icon} />
						</Icon>
					)}
				</InputWrapper>
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
