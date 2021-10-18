// Component generated with util/vox-create-component.js
export type Step = {
	readonly id?: string;
	readonly label?: string;
	readonly current?: boolean;
	readonly done?: boolean;
};
export type StepperProps = {
	readonly steppes: Step[];
	readonly allStepsDone?: (steps?: Step[]) => void;
};
