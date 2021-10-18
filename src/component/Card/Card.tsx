// Component generated with util/vox-create-component.js
import React, {useState} from "react";
import {UIICon, UIText} from "../../ui";
import {CardWrapper, ActionsWrapper, ContentWrapper, IconWrapper} from "./Card.styled";
import {CardProps} from "./Card.types";

export const Card: React.VFC<CardProps> = ({
	onClick: onClickCard,
	type,
	leftIcon,
	title,
	description,
	actions,
	accordionContent,
	...args
}) => {
	// Context Here
	// States Here
	const [openAccordion, setOpenAccordion] = useState<boolean>(false);
	// Effects Here
	// Handlers Here
	const toggleAccordion = () => {
		console.log("");
		setOpenAccordion(!openAccordion);
	};

	return (
		<CardWrapper
			open={openAccordion}
			onClick={type === "LINK" ? () => onClickCard : () => toggleAccordion()}
			{...{type, ...args}}>
			<div className="flex flex-row items-center justify-between">
				{leftIcon && (
					<IconWrapper type={type}>
						<UIICon name={leftIcon} />
					</IconWrapper>
				)}
				<ContentWrapper>
					{title && <UIText preset="HEADLINE_06">{title}</UIText>}
					{description && (
						<UIText preset="BODY_02" color="GREY">
							{description}
						</UIText>
					)}
				</ContentWrapper>

				{actions && (
					<ActionsWrapper>
						{actions.map(({onClick, label, icon}, index) => (
							<div onClick={onClick} key={index}>
								{icon && <UIICon name={icon} />}
								{label && <UIText>{label}</UIText>}
							</div>
						))}
					</ActionsWrapper>
				)}
				{type === "ACCORDION" && <UIICon name={openAccordion ? "chevronUp" : "chevronDown"} />}
			</div>
			{openAccordion && accordionContent && (
				<div className="mt-4 pt-4 border-t border-gray-light border-opacity-60">
					<UIText>{accordionContent}</UIText>
				</div>
			)}
		</CardWrapper>
	);
};

export default Card;
