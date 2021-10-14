// Component generated with util/create-component.js
import classNames from "classnames";
import styled from "styled-components";
import {AlertProps, Type} from "./Alert.types";

/**
 * Components
 */
export const AlertWrapper = styled.div.attrs<AlertProps>(({type}) => {
	const className = classNames({
		"rounded-lg px-5 py-4 flex flex-row w-full": true,
		"bg-secondary-lightest": type === "ATENTION",
		"bg-red-lightest": type === "ERROR",
		"bg-blue-lightest": type === "INFO",
		"bg-green-lightest": type === "SUCCESS",
	});
	return {
		className,
	};
})<{type: keyof typeof Type}>``;
