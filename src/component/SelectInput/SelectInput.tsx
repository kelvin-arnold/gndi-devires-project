// Component generated with util/vox-create-component.js
import React from "react";
import * as R from "ramda";
import {SelectInputWrapper, SelectInputOptions, FakeInput} from "./SelectInput.styled";
import {SelectInputProps, Option} from "./SelectInput.types";
import {Input} from "./../TextInput/TextInput.styled";
import {CPNTextInput, CPNCheckBox} from "./../";
import {UIText, UIICon} from "./../../ui";

export const SelectInput = React.forwardRef<HTMLInputElement, SelectInputProps>(
	({options = [], label, placeholder, disabled, type = "SIMPLE", error, ...args}, inRef) => {
		// Refs
		const ref = React.useRef<HTMLInputElement>(null);
		React.useImperativeHandle(inRef, () => ref.current!, [ref]);
		// Context Here
		// States Here
		const [showOptions, setOptions] = React.useState<boolean>(false);
		const [selectValue, setSelectValue] = React.useState<Option>({
			id: "",
			value: "",
			label: "",
			visible: false,
		});
		const [multiValue, setMultiValue] = React.useState<string[]>([]);
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
		const toggleOptions = () => {
			setOptions(!showOptions);
			setVisibleOptions(options);
		};
		const selectOption = (opt: Option) => {
			setSelectValue(opt);
			if (ref.current) ref.current.focus();
		};
		const onSearch = (val: any) => {
			setVisibleOptions(
				R.trim(val)
					? options.map((opt) => ({
							...opt,
							visible: R.indexOf(R.toUpper(val), R.toUpper(opt.label)) === -1,
							// tslint:disable-next-line:indent
					  }))
					: options,
			);
		};
		const addOption = (e: any) => {
			const exists = R.indexOf(e, multiValue);
			if (exists === -1) {
				setMultiValue([...multiValue, e]);
			} else {
				setMultiValue([...R.remove(exists, 1, multiValue)]);
			}
			if (ref.current) ref.current.focus();
		};
		return (
			<SelectInputWrapper
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<FakeInput ref={ref} {...args} value={selectValue.value || multiValue} />
				<div
					className={`w-full ${
						(!!selectValue.value || !R.isEmpty(multiValue)) && showOptions ? "selected" : ""
					}`}
					onClick={toggleOptions}>
					<CPNTextInput
						{...{label, placeholder, error}}
						disabled
						icon="chevronDown"
						badge={multiValue.length}
						value={
							selectValue.label ||
							options
								.find((o) => o.value.toString() === multiValue[0])
								?.label.concat(multiValue.length > 1 ? " ..." : "") ||
							""
						}
					/>
				</div>
				<SelectInputOptions visible={showOptions}>
					{options.length > 10 && showOptions && (
						<div className="search">
							<Input onChange={(e) => onSearch(e.currentTarget.value)} autoFocus />
							<UIICon color="PRIMARY" name="search" size="sm" />
						</div>
					)}
					<ul>
						{visibleOptions.map((opt) => {
							return type === "SIMPLE" ? (
								<li key={opt.id} onClick={() => selectOption(opt)}>
									<UIText>{opt.label}</UIText>
								</li>
							) : (
								<li key={opt.id} className={opt.visible ? "hidden" : ""}>
									<CPNCheckBox value={opt.value} label={opt.label} onChangeCapture={addOption} />
								</li>
							);
						})}
					</ul>
				</SelectInputOptions>
			</SelectInputWrapper>
		);
	},
);

export default SelectInput;
