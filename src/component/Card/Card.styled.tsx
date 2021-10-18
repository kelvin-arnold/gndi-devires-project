// Component generated with util/create-component.js
import classnames from "classnames";
import styled from "styled-components";
import {CardProps} from "./Card.types";

/**
 * Components
 */
export const CardWrapper = styled.div.attrs<CardProps & {open?: boolean}>(({type, open}) => {
	const className = classnames({
		"bg-white rounded-lg px-5": true,
		"border border-gray-light border-opacity-60 py-5 max-w-md cursor-pointer text-primary":
			type === "LINK",
		"py-5 w-full cursor-pointer text-black": type === "ACCORDION",
		"border border-gray-light border-opacity-60 ": type === "ACCORDION" && !open,
		"border border-primary border-opacity-100": type === "ACCORDION" && open,
	});
	return {
		className,
	};
})<CardProps & {open?: boolean}>``;

export const ActionsWrapper = styled.div.attrs({
	className: `flex flex-row items-center `,
})``;

export const ContentWrapper = styled.div.attrs({
	className: `flex flex-col`,
})``;

export const IconWrapper = styled.div.attrs<CardProps>(({type}) => {
	const className = classnames({
		"mr-5": true,
		"mr-4": type === "LIST",
	});
	return {
		className,
	};
})<CardProps>``;
