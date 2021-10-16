// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

type CheckProps = {
	readonly checked: boolean;
};

/**
 * Components
 */
export const CheckBoxWrapper = styled.div.attrs({
	className: `flex flex-row items-center select-none cursor-pointer`,
})``;

export const Check = styled.div.attrs({
	className: `rounded rounded-sm border border-gray-light border-opacity-60 w-3.5 h-3.5 mr-2 flex justify-center items-center`,
})<CheckProps>`
	& span {
		${({checked}) => (checked ? tw`rounded rounded-sm w-2 h-2 bg-primary` : tw`hidden`)}
	}
`;

export const Radio = styled.input.attrs({
	className: "w-full h-4 opacity-0 absolute cursor-pointer",
})``;
