// Component generated with util/create-component.js
import classnames from "classnames";
import styled from "styled-components";
import {Strength} from "./StrongPassword.types";

/**
 * Components
 */
export const StrongPasswordWrapper = styled.div``;

export const Stepper = styled.div.attrs({
	className: "h-0.75 bg-gray-light bg-opacity-10 relative",
})``;

export const StrengthLine = styled.div.attrs<{strength: keyof typeof Strength}>(({strength}) => {
	const className = classnames({
		"h-0.75": true,
		"bg-red w-4/12": strength === "WEAK",
		"bg-secondary w-8/12": strength === "MEDIUM",
		"bg-green w-full": strength === "STRONG",
	});
	return {
		className,
	};
})<{strength: keyof typeof Strength}>``;
