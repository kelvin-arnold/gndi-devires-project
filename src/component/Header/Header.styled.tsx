// Component generated with util/create-component.js
import classNames from "classnames";
import styled from "styled-components";

/**
 * Components
 */
export const HeaderWrapper = styled.div.attrs({className: "bg-white w-full"})``;

export const HeaderTopWrapper = styled.div.attrs({
	className: "flex flex-row justify-end items-center pr-3",
})<{onClick?: (props?: any) => void}>``;

export const HeaderTopIconWrapper = styled.div.attrs<{end?: boolean}>(({end}) => {
	const className = classNames({
		"px-3 border-r border-gray-light h-6.5 flex items-center cursor-pointer": true,
		"border-opacity-20": !end,
		"border-opacity-0": end,
	});
	return {
		className,
	};
})<{end?: boolean}>``;

export const HeaderBodyWrapper = styled.div.attrs({
	className:
		"w-full border-t border-b border-gray-light border-opacity-20 h-9 flex flex-row items-center justify-between px-7",
})``;
