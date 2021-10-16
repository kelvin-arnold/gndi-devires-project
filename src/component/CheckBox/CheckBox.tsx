// Component generated with util/vox-create-component.js
import React from "react";
import {CheckBoxWrapper, Check} from "./CheckBox.styled";
import {CheckBoxProps} from "./CheckBox.types";
import {UIText} from "./../../ui";

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
	({label, value, checked = false, ...args}, inRef) => {
		// States
		const [isChecked, setChecked] = React.useState<boolean>(checked);
		// Refs
		const ref = React.useRef<HTMLInputElement>(null);
		React.useImperativeHandle(inRef, () => ref.current!, [ref]);
		// Context Here
		// Effects Here
		// Handlers Here
		const handleCheck = (check: boolean) => {
			setChecked(check);
			ref.current?.click();
		};
		return (
			<CheckBoxWrapper onClick={() => handleCheck(!isChecked)}>
				<Check checked={isChecked}>
					<span />
				</Check>
				<UIText>{label}</UIText>
				<input
					type="checkbox"
					value={value}
					defaultChecked={isChecked}
					ref={ref}
					{...args}
					className="hidden"
				/>
			</CheckBoxWrapper>
		);
	},
);

export default CheckBox;
