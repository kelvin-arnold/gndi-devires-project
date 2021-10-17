// Component generated with util/vox-create-component.js
export type Option = {
	readonly id: any;
	readonly label: any;
	readonly value: any;
	readonly visible?: boolean;
};

export type SelectInputProps = {
	readonly label?: string;
	readonly error?: string;
	readonly help?: string;
	readonly placeholder?: string;
	readonly disabled?: boolean;
	readonly type?: "SIMPLE" | "MULTICHECK";
	readonly options?: Option[];
};
