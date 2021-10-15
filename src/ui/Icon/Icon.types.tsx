// Component generated with util/vox-create-component.js

import {icons} from "../../theme/icon";

export enum Color {
	PRIMARY,
	SECONDARY,
	DANGER,
	GREY,
	WHITE,
	DARK,
	INHERIT,
	BLUE,
	GREEN,
}

export type Size = "sm" | "md";

export type IconProps = IconStyleProps & {
	name: keyof typeof icons;
};

export type IconStyleProps = {
	color?: keyof typeof Color;
	size?: Size;
};
