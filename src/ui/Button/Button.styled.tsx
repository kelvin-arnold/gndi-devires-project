// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";
import {preset} from "./Button.types";
import classNames from "classnames";

type ButtonProps = {
	bp: keyof typeof preset;
};
/**
 * Components
 */
export const ButtonWrapper = styled.button.attrs<ButtonProps>(({bp}) => {
	const className = classNames({
		"py-2 px-4 rounded": true,
		"bg-primary hover:bg-primary-light": bp === "DEFAULT",
		"bg-red hover:bg-red-light": bp === "DANGER",
	});
	return {
		className,
	};
})<{bp: keyof typeof preset}>`
	& .label {
		${tw`text-white`}
	}
`;
