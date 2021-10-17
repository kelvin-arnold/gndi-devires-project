// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";
import classnames from "classnames";

type SelectOptionsProps = {
	visible?: boolean;
};
/**
 * Components
 */
export const SelectInputWrapper = styled.div.attrs({
	className: "relative",
})`
	& input {
		${tw`disabled:border-gray-light disabled:border-opacity-60 disabled:bg-white cursor-pointer`};
	}
	& .selected {
		& input {
			${tw`disabled:border-primary disabled:border-opacity-90 disabled:bg-white cursor-pointer`}
		}
	}
`;

export const SelectInputOptions = styled.div.attrs<SelectOptionsProps>(({visible}) => {
	const className = classnames({
		"absolute rounded rounded-lg bg-white w-full shadow-md overflow-hidden z-20": true,
		hidden: !visible,
	});
	return {
		className,
	};
})<SelectOptionsProps>`
	& .search {
		${tw`px-3 pb-1 pt-2 relative`};
		& .icon {
			${tw`absolute right-6 bottom-4`};
			/* right: 0;
			top: 50%; */
		}
	}
	& ul {
		max-height: 300px;
		${tw`overflow-y-scroll`};
		& li {
			${tw`px-3 py-1 hover:bg-citrine cursor-pointer`};
		}
	}
`;

export const FakeInput = styled.input.attrs({
	className: "absolute",
})`
	z-index: -1;
	bottom: 8px;
	:focus {
		outline: none;
		box-shadow: none;
	}
`;
