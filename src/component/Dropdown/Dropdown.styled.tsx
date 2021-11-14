// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const DropdownWrapper = styled.div.attrs({
	className: "relative",
})``;

export const DropdownLabel = styled.div.attrs({
	className: "flex flex-row items-center relative h-6.5 cursor-pointer",
})``;

export const TooltipWrapper = styled.div.attrs({
	className:
		"tooltip bg-white absolute rounded-lg border border-gray-light border-opacity-60 shadow-lg cursor-default text-gray-light -right-6 top-6 mt-2 pointer-events-none",
})`
	z-index: 999;
	pointer-events: auto;
	&:before {
		content: "";
		display: block;
		position: absolute;
		right: 24px;
		width: 0;
		height: 0;
		border: 10px solid transparent;
		bottom: 100%;
		border-bottom-color: #5b5b5f;
		${tw`border-opacity-60`}
	}

	&:after {
		content: "";
		position: absolute;
		right: 25px;
		border-width: 9px;
		border-style: solid;
		border-color: transparent;
		bottom: 100%;
		border-bottom-color: white;
	}
`;

export const Item = styled.div.attrs({
	className: "cursor-pointer px-5 py-0.5",
})`
	&:hover {
		span {
			${tw`text-primary`}
		}
	}
	& {
		width: 240px;
	}

	& * {
		text-decoration: none;
	}
`;
