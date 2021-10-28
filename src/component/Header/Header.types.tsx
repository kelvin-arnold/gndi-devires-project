// Component generated with util/vox-create-component.js
export type ContractItem = {
	label: string;
	link: string;
};
export type ContractGroup = {
	groupLabel: string;
	groupLink: string;
	groupList?: ContractItem[];
};

export type HeaderProps = {
	subHeader?: boolean;
	contractList?: ContractGroup[];
};

export type Notification = {
	title: string;
	status?: string;
	date: string;
};
