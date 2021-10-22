// Component generated with util/vox-create-component.js
import React from "react";
import * as R from "ramda";
import {DatePickerWrapper, FakeInput} from "./DatePicker.styled";
import {DatePickerProps} from "./DatePicker.types";
import ReactDatePicker from "react-date-picker/dist/entry.nostyle";
import {Input, Icon, InputWrapper} from "./../TextInput/TextInput.styled";
import {UIText, UIICon} from "./../../ui";
import moment from "moment";

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
	({label, range = false, ...args}, inRef) => {
		// Refs
		const ref = React.useRef<HTMLInputElement>(null);
		const calendarRef = React.useRef<HTMLInputElement>(null);
		React.useImperativeHandle(inRef, () => ref.current!, [ref]);
		// Context Here
		// States Here
		const [dateValue, setDateValue] = React.useState<any>(new Date());
		const [value, setValue] = React.useState<any>();
		const [isOpen, toggleCalendar] = React.useState(false);
		// Effects Here
		React.useEffect(() => {
			document.body.addEventListener("click", () => {
				toggleCalendar(false);
			});
			return () => {
				document.body.removeEventListener("click", () => toggleCalendar(false));
			};
		}, []);
		// Handlers Here
		const onChange = (v: any) => {
			setDateValue(v);
			if (range) {
				setValue(
					R.map((a: string) => moment(a).format("DD/MM/YYYY").toString(), v)
						.toString()
						.replace(",", " - "),
				);
			} else {
				setValue(moment(v).format("DD/MM/YYYY").toString());
			}
			if (ref.current) ref.current.focus();
		};
		return (
			<DatePickerWrapper onClick={(e) => e.stopPropagation()}>
				{label && (
					<div className="mb-0.5">
						<UIText preset="BODY_02" color="GREY">
							{label}
						</UIText>
					</div>
				)}
				<FakeInput ref={ref} {...args} value={value} />
				<InputWrapper onClick={() => toggleCalendar(!isOpen)}>
					<Input type="text" disabled value={value} placeholder="MM/DD/YYYY" />
					<Icon>
						<UIICon name="calendar" />
					</Icon>
				</InputWrapper>
				<ReactDatePicker
					className="datepicker"
					inputRef={calendarRef}
					{...(() => (isOpen ? {isOpen: true} : {closeCalendar: true}))()}
					{...{
						onChange,
						value: dateValue,
						calendarClassName: "calendar",
						calendarIcon: null,
						clearIcon: null,
						// format: "dd/MM/yyyy",
						prevLabel: <UIICon name="chevronLeft" />,
						prev2Label: <></>,
						nextLabel: <UIICon name="chevronRight" />,
						next2Label: <></>,
						selectRange: range,
						onClickDecade: () => {},
					}}
				/>
			</DatePickerWrapper>
		);
	},
);

export default DatePicker;
