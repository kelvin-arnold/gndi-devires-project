// Component generated with util/create-component.js
import styled from "styled-components";
import classnames from "classnames";

type InputProps = {
	readonly error?: any;
};

/**
 * Components
 */
export const TextInputWrapper = styled.div.attrs({
	className: `flex flex-col`,
})``;

export const Input = styled.input.attrs<InputProps>(({error}) => {
	const className = classnames({
		"w-full text-gray-dark rounded px-3 border rounded-lg border-gray-light border-opacity-60 focus:border-primary disabled:border-gray-lightest disabled:bg-gray-lightest placeholder-gray-light prose":
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
