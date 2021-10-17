// Component generated with util/create-component.js
import classnames from "classnames";
import styled from "styled-components";
import {RadioTableWrapperProps} from "./RadioTable.types";

/**
 * Components
 */

export const RadioTableWrapper = styled.div.attrs<RadioTableWrapperProps>(({even}) => {
	const className = classnames({
		"w-full text-gray-dark px-3 py-2": true,
		"bg-gray-lightest": !even,
	});
	return {
		className,
	};
})<RadioTableWrapperProps>``;
