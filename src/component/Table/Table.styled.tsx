// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const TableWrapper = styled.div.attrs({
	className: "w-full",
})`
	display: block;
	max-width: 100%;

	table,
	thead,
	tbody,
	tr {
		width: 100%;
		border-spacing: 0;
		border-collapse: separate;
	}

	table th {
		min-width: calc(100vh / 5);
		text-align: left;
	}
`;

export const PaginationWrapper = styled.div.attrs({
	className: "flex justify-center items-center mt-7",
})`
	& button {
		${tw`mx-0.5 px-2`}
		min-width: unset;
		height: 32px;
	}
`;
