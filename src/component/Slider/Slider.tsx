// Component generated with util/vox-create-component.js
import React from "react";
import {SliderWrapper, SliderItem} from "./Slider.styled";
import {SliderProps} from "./Slider.types";

export const Slider: React.VFC<SliderProps> = ({length, focused, ...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	const createRows = () => {
		const rows = [];
		for (let i = 0; i < length; i++) {
			console.log(i === focused);
			rows.push(<SliderItem focused={i === focused} />);
		}
		return rows;
	};
	return <SliderWrapper {...args}>{createRows()}</SliderWrapper>;
};

export default Slider;
