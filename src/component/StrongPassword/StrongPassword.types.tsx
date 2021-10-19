// Component generated with util/vox-create-component.js
export type Condition = {
	label: string;
	valid: boolean;
	name?: string;
};

export type StrongPasswordProps = {
	conditions: Condition[];
	strength?: keyof typeof Strength;
};

export enum Strength {
	NONE,
	WEAK,
	MEDIUM,
	STRONG,
}
