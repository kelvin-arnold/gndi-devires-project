// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const ChartWrapper = styled.div.attrs({
	className: `relative flex flex-row`,
})`
	& .chart-container {
		${tw`relative`}
		& .titles {
			${tw`absolute flex flex-col inset-0 items-center justify-center`}
			& span {
				line-height: 20px !important;
			}
		}
	}
	& .chart-legends {
		${tw`ml-9 py-2`}
		& > ul {
			${tw`flex flex-col gap-4.5`}
			& > li {
				${tw`flex`}
				& > .box {
					width: 8px;
					height: 30px;
					border-radius: 4px;
					margin-right: 14px;
				}
			}
		}
	}
`;
