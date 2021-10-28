// Component generated with util/create-component.js
import classNames from "classnames";
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const HeaderWrapper = styled.div.attrs({className: "w-full"})``;

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
		"w-full bg-white border-t border-b border-gray-light border-opacity-20 h-9 flex flex-row items-center justify-between px-7",
})``;

export const NotificationIconWrapper = styled.div.attrs({
	className: "relative mr-7.5 cursor-pointer relative h-9 w-7 flex items-center justify-center",
})`
	&:hover .tooltip {
		opacity: 1;
		z-index: 999;
		pointer-events: auto;
	}
`;

export const Tooltipwrapper = styled.div.attrs({
	className:
		"tooltip bg-white absolute rounded-lg border border-gray-light border-opacity-60 shadow-lg opacity-0 cursor-default text-gray-light -right-5 top-8 mt-2 pointer-events-none",
})`
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

export const UserNavWrapper = styled.div.attrs({
	className: "flex flex-row items-center relative h-9",
})`
	&:hover .tooltip {
		opacity: 1;
		z-index: 999;
		pointer-events: auto;
	}
`;

export const UserNavItem = styled.div.attrs({
	className: "mb-2 cursor-pointer px-5",
})`
	& {
		width: 240px;
	}

	& * {
		text-decoration: none;
	}
`;

export const SubHeaderWrapper = styled.div.attrs({
	className: "px-7 py-7 border-b border-gray-light border-opacity-20 flex justify-between",
})``;

export const ContractMenu = styled.div.attrs({
	className: "flex items-center relative cursor-pointer",
})`
	&:hover .contract_list {
		opacity: 1;
	}
`;

export const ContractWrapper = styled.div.attrs({
	className:
		"absolute right-0 bg-white p-2 rounded border border-gray-light border-opacity-60 shadow contract_list opacity-0",
})`
	top: 72px;

	& * {
		text-decoration: none;
	}
`;
