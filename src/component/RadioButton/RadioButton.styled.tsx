// Component generated with util/create-component.js

import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const RadioButtonWrapper = styled.div.attrs({
	className: `flex flex-row items-center cursor-pointer select-none relative`,
})`
	input[type="radio"]:checked + .radio-button .selected {
		${tw`bg-primary`};
	}
`;

export const Selected = styled.div.attrs({
	className: `rounded-full w-2 h-2 selected`,
})``;

export const CustomInput = styled.div.attrs({
	className:
		"radio-button border border-gray-light border-opacity-60 w-4 h-4 rounded-full mr-2 flex justify-center items-center select-none cursor-pointer",
})``;

export const Radio = styled.input.attrs({
	className: "w-full h-4 opacity-0 absolute cursor-pointer",
})``;
