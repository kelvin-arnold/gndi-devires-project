// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const BreadCrumbWrapper = styled.div.attrs({
	className: "flex gap-2",
})`
	& .crumb {
		${tw`flex gap-2 items-center `}
		span {
			${tw`cursor-pointer text-gray-light hover:underline`}
		}
		& .dot {
			${tw`bg-primary h-0.5 w-0.5 rounded-full mt-0.5`}
		}
	}
`;
