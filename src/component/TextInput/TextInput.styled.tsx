// Component generated with util/create-component.js
import styled from "styled-components";
import classnames from "classnames";

type InputProps = {
	readonly error?: any;
	readonly icon?: any;
};

/**
 * Components
 */
export const TextInputWrapper = styled.div.attrs({
	className: `flex flex-col`,
})`
	/* & svg * {
		fill: currentColor;
	} */
`;

export const Icon = styled.div.attrs({
	className: `absolute transform -translate-y-1 -translate-x-2`,
})`
	right: 0;
	top: 50%;
`;

export const InputWrapper = styled.div.attrs({className: `relative`})``;

export const Input = styled.input.attrs<InputProps>(({error}) => {
	const className = classnames({
		"w-full text-gray-dark rounded px-3 border rounded-lg border-gray-light border-opacity-60 focus:border-primary disabled:border-gray-lightest disabled:bg-gray-lightest placeholder-gray-light":
			true,
		"border-red": error,
	});
	return {
		className,
	};
})<InputProps>`
	height: 44px;
	&:focus {
		outline: none;
		box-shadow: none;
	}
`;
