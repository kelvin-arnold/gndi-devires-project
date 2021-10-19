// Component generated with util/vox-create-component.js
import React from "react";
import {UIICon, UIText} from "../../ui";
import {StrongPasswordWrapper, Stepper, StrengthLine} from "./StrongPassword.styled";
import {StrongPasswordProps} from "./StrongPassword.types";

export const StrongPassword: React.VFC<StrongPasswordProps> = ({
	conditions,
	strength = "NONE",
	...args
}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<StrongPasswordWrapper {...args}>
			<Stepper>
				<StrengthLine strength={strength} />
			</Stepper>
			<div className="flex flex-row mt-2">
				{conditions?.map(({label, valid}) => (
					<div className="flex flex-row items-center mr-4" key={label}>
						<div className="mr-1">
							<UIICon
								name={valid ? "check" : "times"}
								color={valid ? "GREEN" : "LIGHTGREY"}
								size="xs"
							/>
						</div>
						<UIText preset="BODY_03" color={valid ? "GREEN" : "GREY"}>
							{label}
						</UIText>
					</div>
				))}
			</div>
		</StrongPasswordWrapper>
	);
};

export default StrongPassword;
