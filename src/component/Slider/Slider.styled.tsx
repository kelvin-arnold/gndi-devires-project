// Component generated with util/create-component.js
import classNames from "classnames";
import styled from "styled-components";

/**
 * Components
 */
export const SliderWrapper = styled.div.attrs({className: "flex flex-row"})``;

export const SliderItem = styled.div.attrs<{focused: boolean}>(({focused}) => {
	const className = classNames({
		"h-1.5 rounded-full mr-3": true,
		"bg-gray-light bg-opacity-50 w-1.5": !focused,
		"bg-primary w-5": focused,
	});
	return {
		className,
	};
})<{focused: boolean}>``;
