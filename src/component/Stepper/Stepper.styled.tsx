// Component generated with util/create-component.js
import styled from "styled-components";
import classnames from "classnames";
import tw from "twin.macro";

type StepProp = {
	readonly current?: boolean;
	readonly done?: boolean;
};
/**
 * Components
 */
export const StepperWrapper = styled.div.attrs({
	className: "flex gap-4",
})`
	& .step {
		${tw`flex flex-row gap-4 items-center`}
		& .bar {
			${tw`h-0.5 w-8 bg-gray-light bg-opacity-60 rounded-full`}
		}
	}
`;

export const StepItem = styled.div.attrs<StepProp>(({current, done}) => {
	const className = classnames({
		"flex h-8 w-8 items-center justify-center rounded-full cursor-pointer": true,
		"border border-gray-disabled": !current && !done,
		"border border-primary": current || done,
		"bg-primary": done,
	});
	return {
		className,
	};
})<StepProp>`
	& span {
		${({current}) => (current ? tw`` : tw`text-gray text-opacity-40`)}
	}
`;
