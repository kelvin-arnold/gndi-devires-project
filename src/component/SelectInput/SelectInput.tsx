// Component generated with util/vox-create-component.js
import React from "react";
import * as R from "ramda";
import {SelectInputWrapper, SelectInputOptions, FakeInput} from "./SelectInput.styled";
import {SelectInputProps, Option} from "./SelectInput.types";
import {Input} from "./../TextInput/TextInput.styled";
import {CPNTextInput} from "./../";
import {UIText} from "./../../ui";
import uniqid from "uniqid";

// Mock
const OPTIONS: Option[] = [
	{
		id: uniqid(),
		label: "option 1",
		value: 1,
	},
	{
		id: uniqid(),
		label: "option 2",
		value: 2,
	},
	{
		id: uniqid(),
		label: "option 3",
		value: 3,
	},
	{
		id: uniqid(),
		label: "option 4",
		value: 4,
	},
	{
		id: uniqid(),
		label: "option 5",
		value: 5,
	},
	{
		id: uniqid(),
		label: "option 6",
		value: 6,
	},
];

export const SelectInput = React.forwardRef<HTMLInputElement, SelectInputProps>(
	({options = OPTIONS, label, placeholder, disabled, error, ...args}, inRef) => {
		// Refs
		const ref = React.useRef<HTMLInputElement>(null);
		React.useImperativeHandle(inRef, () => ref.current!, [ref]);
		// Context Here
		// States Here
		const [showOptions, setOptions] = React.useState<boolean>(false);
		const [selectValue, setSelectValue] = React.useState<Option>({id: "", value: "", label: ""});
		const [visibleOptions, setVisibleOptions] = React.useState<Option[]>(options);
		// Effects Here
		React.useEffect(() => {
			document.body.addEventListener("click", () => {
				setOptions(false);
			});
			return () => {
				document.body.removeEventListener("click", () => setOptions(false));
			};
		}, []);
		// Handlers Here
		const toggleOptions = () => setOptions(!showOptions);
		const selectOption = (opt: Option) => {
			setSelectValue(opt);
			if (ref.current) {
				ref.current.focus();
				ref.current.setAttribute("value", opt.value);
			}
			setVisibleOptions(options);
			toggleOptions();
		};
		const onSearch = (val: any) => {
			setVisibleOptions(
				R.trim(val)
					? [...options.filter((opt) => R.indexOf(R.toUpper(val), R.toUpper(opt.label)) !== -1)]
					: options,
			);
		};
		return (
			<SelectInputWrapper
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<FakeInput ref={ref} {...args} />
				<div className="w-full" onClick={toggleOptions}>
					<CPNTextInput
						{...{label, placeholder}}
						disabled
						icon="chevronDown"
						value={selectValue.label}
					/>
				</div>
				{showOptions && (
					<SelectInputOptions>
						<div className="search">
							<Input onChange={(e) => onSearch(e.currentTarget.value)} autoFocus />
						</div>
						<ul>
							{visibleOptions.map((opt) => (
								<li key={opt.id} onClick={() => selectOption(opt)}>
									<UIText>{opt.label}</UIText>
								</li>
							))}
						</ul>
					</SelectInputOptions>
				)}
			</SelectInputWrapper>
		);
	},
);

export default SelectInput;
