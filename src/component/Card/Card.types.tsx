import {icons} from "../../theme/icon";

// Component generated with util/vox-create-component.js
export type Action = {
	icon?: keyof typeof icons;
	label?: string;
	onClick: (props: any) => void;
};

export type CardProps = {
	readonly leftIcon?: keyof typeof icons;
	readonly title?: string;
	readonly description?: string;
	readonly accordionContent?: string;
	readonly actions?: Action[];
	readonly type?: "LINK" | "LIST" | "ACCORDION";
	readonly onClick?: (props: any) => void;
};
