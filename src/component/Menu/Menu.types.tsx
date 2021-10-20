// Component generated with util/vox-create-component.js
import {icons} from "./../../theme/icon";

export type Link = {
	readonly label: string;
	readonly route: string;
};
export type MenuItem = Link & {
	readonly icon?: keyof typeof icons;
	readonly links?: Link[];
};
export type MenuProps = {
	readonly menu?: MenuItem[];
};
