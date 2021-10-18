import {icons} from "../../theme/icon";
import {Color} from "../../ui/Icon/Icon.types";

// Component generated with util/vox-create-component.js
export type Action = {
	icon?: keyof typeof icons;
	label?: string;
	onClick: (props?: any) => void;
};

export type CardProps = {
	readonly leftIcon?: {
		name?: keyof typeof icons;
		color?: keyof typeof Color;
	};
	readonly title?: string;
	readonly description?: string;
	readonly descriptionLink?: {
		label?: string;
		onClick: (props?: any) => void;
	};
	readonly accordionContent?: string;
	readonly actions?: Action[];
	readonly type?: "LINK" | "LIST" | "ACCORDION";
	readonly onClick?: (props?: any) => void;
};
