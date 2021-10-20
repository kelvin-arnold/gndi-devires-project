// Component generated with util/create-component.js
import styled from "styled-components";
import classnames from "classnames";
import tw from "twin.macro";

type ModalProps = {
	visible?: boolean;
};

/**
 * Components
 */
export const ModalContainer = styled.div.attrs<ModalProps>(({visible}) => {
	const className = classnames({
		"fixed flex items-center justify-center z-50": true,
	});
	return {
		className,
	};
})<ModalProps>`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;
export const ModalWrapper = styled.div.attrs<ModalProps>(({visible}) => {
	return {
		className: "shadow-md bg-white rounded-lg px-5 py-5 z-40",
	};
})<ModalProps>`
	max-width: 500px;
	& .header {
		height: 30px;
		${tw`flex justify-between items-center`}
		& svg {
			${tw`cursor-pointer`}
		}
	}
	& .body {
		${tw`mb-5 mt-4`}
	}
	& .footer {
		${tw`flex justify-end gap-4`}
	}
`;

export const Overlay = styled.div.attrs({
	className: "fixed z-30 bg-gray bg-opacity-70",
})`
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
`;
