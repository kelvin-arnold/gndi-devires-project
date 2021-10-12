// Component generated with util/vox-create-component.js
export enum Preset {
	BODY_SM, // Body 02
	BODY, // Body
	BUTTON_SM, // Button 02
	BUTTON, // Button
	HEADLINE_XS, //  Headline 06
	HEADLINE_SM, //  Headline 05
	HEADLINE, //  Headline 04
	HEADLINE_LG, // Headline 03
	HEADLINE_XL, // Headline 02
	HEADLINE_XXL, // Headline 01,
	SUBTITLE, // Subtitle
}

export enum Color {
	PRIMARY,
	SECONDARY,
	DANGER,
	GREY,
	WHITE,
}

export type TextProps = {
	readonly preset?: keyof typeof Preset;
	readonly color?: keyof typeof Color;
};
