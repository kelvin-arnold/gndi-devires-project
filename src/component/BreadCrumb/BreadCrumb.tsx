// Component generated with util/vox-create-component.js
import React from "react";
import {BreadCrumbWrapper} from "./BreadCrumb.styled";
import {BreadCrumbProps} from "./BreadCrumb.types";
import {UIText} from "./../../ui";
import uniqid from "uniqid";

export const BreadCrumb: React.VFC<BreadCrumbProps> = ({crumbs = [], ...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	const navigate = (route: string) => {
		console.log("navigate: ", route);
	};
	return (
		<BreadCrumbWrapper {...args}>
			{crumbs.map((crumb, i) => (
				<div className="crumb" key={uniqid()}>
					<div onClick={() => navigate(crumb.route)}>
						<UIText preset="BODY_03" color="INHERIT">
							{crumb.label}
						</UIText>
					</div>
					{i < crumbs.length - 1 && <p className="dot" />}
				</div>
			))}
		</BreadCrumbWrapper>
	);
};

export default BreadCrumb;
