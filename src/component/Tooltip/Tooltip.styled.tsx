// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";
import {TooltipStyleProps} from "./Tooltip.types";

/**
 * Components
 */
export const TooltipWrapper = styled.div.attrs({className: "relative w-4 cursor-pointer"})`
	&:hover {
		* {
			opacity: 1;
		}
	}
`;

export const Content = styled.div.attrs<TooltipStyleProps>({
	className:
		"bg-white absolute rounded-lg border border-gray-light border-opacity-60 p-3 shadow-lg z-50 opacity-0 cursor-default",
})<TooltipStyleProps>`
	& {
		width: 284px;
		left: ${({py}) => (py === "RIGHT" ? "auto" : "-50px")};
		right: ${({py}) => (py === "RIGHT" ? "-50px" : "auto")};
		top: ${({px}) => (px === "DOWN" ? "40px" : "auto")};
		bottom: ${({px}) => (px === "DOWN" ? "auto" : "40px")};
	}

	&:before {
		content: "";
		display: block;
		position: absolute;
		left: ${({py}) => (py === "RIGHT" ? "auto" : "50px")};
		right: ${({py}) => (py === "RIGHT" ? "50px" : "auto")};
		width: 0;
		height: 0;
		border: 10px solid transparent;
		top: ${({px}) => (px === "DOWN" ? "auto" : "100%")};
		bottom: ${({px}) => (px === "DOWN" ? "100%" : "auto")};
		border-top-color: ${({px}) => (px === "DOWN" ? "transparent" : "#5b5b5f")};
		border-bottom-color: ${({px}) => (px === "DOWN" ? "#5b5b5f" : "transparent")};
		${tw`border-opacity-60`}
	}

	&:after {
		content: "";
		position: absolute;
		left: ${({py}) => (py === "RIGHT" ? "auto" : "51px")};
		right: ${({py}) => (py === "RIGHT" ? "51px" : "auto")};
		border-width: 9px;
		border-style: solid;
		border-color: transparent;
		top: ${({px}) => (px === "DOWN" ? "auto" : "100%")};
		bottom: ${({px}) => (px === "DOWN" ? "100%" : "auto")};
		border-top-color: ${({px}) => (px === "DOWN" ? "transparent" : "white")};
		border-bottom-color: ${({px}) => (px === "DOWN" ? "white" : "transparent")};
	}
`;
