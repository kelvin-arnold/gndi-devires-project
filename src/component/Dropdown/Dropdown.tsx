// Component generated with util/vox-create-component.js
import * as R from "ramda";
import React from "react";
import {DropdownWrapper, DropdownLabel, TooltipWrapper, Item} from "./Dropdown.styled";
import {DropdownProps} from "./Dropdown.types";
import {UIICon, UIText} from "../../ui";
import uniqid from "uniqid";

export const Dropdown: React.VFC<DropdownProps> = ({label, options, foot, ...args}) => {
	// Context Here
	// States Here
	const [show, setShow] = React.useState(false);
	// Effects Here
	// Effects Here
	React.useEffect(() => {
		document.body.addEventListener("click", () => {
			setShow(false);
		});
		return () => {
			document.body.removeEventListener("click", () => setShow(false));
		};
	}, []);
	// Handlers Here
	const actionClick = (action: () => void = () => {}) => {
		setShow(false);
		action();
	};
	if (!label || (!options && R.isEmpty(options))) {
		return null;
	}
	return (
		<DropdownWrapper {...args}>
			<DropdownLabel
				onClick={(e) => {
					e.stopPropagation();
					setShow(!show);
				}}>
				<div className="ml-2 mr-1">
					<UIText color="LIGHTGREY">{label}</UIText>
				</div>
				<UIICon name="chevronDown" size="xs" color="PRIMARY" />
			</DropdownLabel>
			{show && (
				<TooltipWrapper>
					<div className="py-1 flex flex-col">
						{options.map((opt) => (
							<Item key={uniqid()}>
								<UIText onClick={() => actionClick(opt.action)}>{opt.label}</UIText>
							</Item>
						))}
						{foot && !R.isEmpty(foot) && (
							<div className="border-t border-gray-light border-opacity-20 px-5 py-1 mt-1">
								{foot.map((foo) => (
									<UIText preset="BODY_03" color="LIGHTGREY" key={uniqid()}>
										{foo.label}
									</UIText>
								))}
							</div>
						)}
					</div>
				</TooltipWrapper>
			)}
		</DropdownWrapper>
	);
};

export default Dropdown;
