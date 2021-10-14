// Component generated with util/vox-create-component.js
export enum Type {
	ATENTION,
	INFO,
	ERROR,
	SUCCESS,
}

export type AlertProps = {
	readonly title: string;
	// optional
	readonly type?: keyof typeof Type;
	readonly description?: string;
};
