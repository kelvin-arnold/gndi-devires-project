// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";
/**
 * Components
 */
export const SelectInputWrapper = styled.div.attrs({
	className: "relative",
})`
	& input {
		${tw`disabled:border-gray-light disabled:border-opacity-60 disabled:bg-white cursor-pointer`};
	}
`;

export const SelectInputOptions = styled.div.attrs({
	className: "absolute rounded rounded-lg bg-white w-full shadow-md overflow-hidden",
})`
	& .search {
		${tw`px-3 pb-1 pt-2`};
	}
	& ul {
		max-height: 300px;
		${tw`overflow-y-scroll`};
		& li {
			${tw`px-3 py-1 hover:bg-citrine cursor-pointer`};
		}
	}
`;

export const FakeInput = styled.input.attrs({
	className: "absolute",
})`
	z-index: -1;
	bottom: 8px;
	:focus {
		outline: none;
		box-shadow: none;
	}
`;
