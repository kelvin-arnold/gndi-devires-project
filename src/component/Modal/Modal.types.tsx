// Component generated with util/vox-create-component.js
export type Action = {
	readonly label: string;
	readonly onClick: () => void;
};
export type ModalProps = {
	readonly title: string;
	readonly description?: string;
	readonly primaryAction: Action;
	readonly secondaryAction?: Action;
	readonly showModal?: boolean;
	readonly onModalClose?: () => void;
};
