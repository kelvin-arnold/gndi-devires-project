// Component generated with util/vox-create-component.js
import React from "react";
import uniqid from "uniqid";
import {UIText} from "../../ui";
import RadioButton from "../RadioButton/RadioButton";
import {RadioTableWrapper} from "./RadioTable.styled";
import {RadioTableProps, Option} from "./RadioTable.types";

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

export const RadioTable = React.forwardRef<HTMLInputElement, RadioTableProps>(
	({title, name, options = OPTIONS, ...args}, ref) => {
		// Context Here
		// States Here
		// Effects Here
		// Handlers Here
		return (
			<div {...args}>
				<UIText preset="BODY_02" color="GREY">
					{title}
				</UIText>
				{options.map((option, index) => (
					<RadioTableWrapper even={index % 2 === 0} key={option.id}>
						<RadioButton {...{...option, name}} ref={ref} />
					</RadioTableWrapper>
				))}
			</div>
		);
	},
);
export default RadioTable;
