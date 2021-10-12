// Component generated with util/create-component.js
import styled from "styled-components";
import classnames from "classnames";
import {Preset, Color} from "./Text.types";

type TextProps = {
	preset: keyof typeof Preset;
	color: keyof typeof Color;
};
/**
 * Components
 */
export const TextWrapper = styled.span.attrs<TextProps>(({preset, color}) => {
	const className = classnames({
		prose: preset === "BODY", // 16px
		"prose prose-sm": preset === "BODY_02", // 14px
		"prose font-bold": preset === "BUTTON" || preset === "SUBTITLE", // 16px
		"prose prose-sm font-bold": preset === "BUTTON_02", // 14px
		"prose prose-4xl font-bold": preset === "HEADLINE_01", // 60px
		"prose prose-3xl font-bold": preset === "HEADLINE_02", // 48px
		"prose prose-2xl font-bold": preset === "HEADLINE_03", // 36px
		"prose prose-xl font-bold": preset === "HEADLINE", // 24px
		"prose prose-2lg font-bold": preset === "HEADLINE_05", // 20px
		"prose prose-lg font-bold": preset === "HEADLINE_06", // 18px
		"text-primary": color === "PRIMARY",
		"text-secondary": color === "SECONDARY",
		"text-white": color === "WHITE",
		"text-red": color === "DANGER",
		"text-gray": color === "GREY",
		"text-gray-dark": color === "DARK",
	});
	return {
		className,
	};
})<TextProps>``;
