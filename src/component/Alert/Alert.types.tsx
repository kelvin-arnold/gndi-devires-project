// Component generated with util/vox-create-component.js
export enum Type {
	ATENTION,
	INFO,
	ERROR,
	SUCCESS,
}

export type AlertProps = {
	readonly title: string;
	readonly type: keyof typeof Type;
	// optional
	readonly description?: string;
};
