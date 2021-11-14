// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const AppHomeWrapper = styled.div.attrs({
	className: "flex flex-col flex-1 items-start w-full",
})`
	& .charts {
		${tw`flex flex-row gap-4 w-full`}
		& .card {
			${tw`bg-white rounded-lg w-1/2 px-1 pb-0.5 drop-shadow-sm`}
			&-header {
				${tw`px-4 py-2 flex justify-end`}
			}
			&-body {
				${tw`px-4 pb-4 pt-2`}
			}
		}
	}
`;
