// Component generated with util/vox-create-component.js
export enum preset {
	DEFAULT,
	PRIMARY,
	SECONDARY,
	DARK,
	DANGER,
}
export type ButtonProps = {
	// Required
	readonly label: string;
	readonly onClick: () => void;
	// Optional
	readonly preset?: keyof typeof preset;
};
