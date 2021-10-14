// Component generated with util/vox-create-component.js

import {icons} from "../../theme/icon";

export type IconProps = IconStyleProps & {
	name: keyof typeof icons;
};

export type IconStyleProps = {
	color?: string;
	size?: Size;
};

export type Size = "sm" | "md";
