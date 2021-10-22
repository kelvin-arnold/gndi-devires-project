// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const DatePickerWrapper = styled.div.attrs({
	className: "relative",
})`
	& input {
		${tw`disabled:border-gray-light disabled:border-opacity-60 disabled:bg-white cursor-pointer select-none`};
	}
	& .datepicker {
		${tw`z-50 mt-2 relative`}
		&.react-date-picker__wrapper,
		.react-date-picker__inputGroup {
			${tw`hidden`}
		}
		&::after {
			content: "";
			${tw`w-2 h-2 bg-white absolute left-5 border-l border-t border-gray-light border-opacity-10`}
			transform: rotate(45deg);
			top: -6px;
		}
	}
	& .calendar {
		${tw`rounded rounded-lg bg-white w-full shadow-md overflow-hidden z-20 pb-2 border border-gray-light border-opacity-10`}
		width: 280px;
		min-height: 302px;
		& .react-calendar__navigation {
			${tw`border-b border-gray-light border-opacity-20 text-gray`}
			height: 44px;
			& .react-calendar__navigation__next-button {
				${tw`mr-4`}
			}
			& .react-calendar__navigation__prev-button {
				${tw`ml-4`}
			}
		}
		& .react-calendar__month-view__weekdays {
			${tw`pt-3 pb-4 text-center text-gray-light`}
			font-size: 14px;
			abbr[title] {
				text-decoration: none;
			}
		}
		& .react-calendar__month-view__days {
			& > button {
				font-size: 14px;
				${tw`w-5.5 h-5.5 mb-1.5 relative`}
			}
		}
		& .react-calendar__tile--range {
			${tw`bg-secondary bg-opacity-20`}
		}
		& .react-calendar__tile--rangeEnd {
			${tw`bg-primary text-white rounded-r-full`}
		}
		& .react-calendar__tile--rangeStart {
			${tw`bg-primary text-white rounded-l-full`}
		}
		& .react-calendar__month-view__days__day--neighboringMonth {
			${tw`text-gray text-opacity-40`}
		}
		// Years
		& .react-calendar__year-view__months,
		.react-calendar__decade-view__years {
			${tw`my-5 mx-2`}
			& .react-calendar__year-view__months__month, .react-calendar__decade-view__years__year {
				${tw`my-2 text-gray relative rounded-full px-1 hover:bg-gray-light hover:bg-opacity-10`}
			}
		}
		& .react-calendar__century-view__decades {
			& .react-calendar__century-view__decades__decade {
			}
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
