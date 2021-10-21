// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

type ItemProps = {
	readonly selected?: boolean;
};

/**
 * Components
 */
export const MenuWrapper = styled.div.attrs<ItemProps>({
	className: "h-full bg-gray px-3 pt-7",
})<ItemProps>`
	width: 250px;
	& .logo {
		${tw`flex items-center justify-center mb-5`}
	}
`;

export const MenuItemWrapper = styled.div.attrs<ItemProps>({
	className: "",
})<ItemProps>`
	& > .item {
		${({selected}) => (selected ? tw`bg-gray-light` : "")}
		${tw`flex rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-light mb-0.5`}
		& > span {
			${tw`ml-1`}
			line-height: 1.3rem;
		}
	}
	& > .drop {
		/* ${({selected}) => (selected ? tw`visible` : "invisible")} */
		${tw`py-1`}
	}
`;

export const SubMenuItemWrapper = styled.div.attrs<ItemProps>({
	className: "flex items-center px-3 cursor-pointer rounded-lg",
})<ItemProps>`
	height: 33px;
	span {
		${({selected}) => (selected ? tw`text-secondary underline` : "")}
		${tw`hover:underline hover:text-secondary`}
	}
`;
