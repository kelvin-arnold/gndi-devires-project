// Component generated with util/vox-create-component.js
import React, {useState} from "react";
import {UIICon, UIText} from "../../ui";
import {CardWrapper, IconWrapper} from "./Card.styled";
import {CardProps} from "./Card.types";

export const Card: React.VFC<CardProps> = ({
	onClick: onClickCard,
	type,
	leftIcon,
	title,
	titleColor,
	description,
	actions,
	accordionContent,
	descriptionLink,
	...args
}) => {
	// Context Here
	// States Here
	const [openAccordion, setOpenAccordion] = useState<boolean>(false);
	// Effects Here
	// Handlers Here
	const toggleAccordion = () => {
		setOpenAccordion(!openAccordion);
	};

	return (
		<CardWrapper
			open={openAccordion}
			onClick={type === "ACCORDION" ? toggleAccordion : onClickCard}
			{...{type, ...args}}>
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center">
					{leftIcon && leftIcon.name && (
						<IconWrapper type={type}>
							<UIICon name={leftIcon.name} size="md" color={leftIcon.color} />
						</IconWrapper>
					)}
					<div className="flex flex-col items-start">
						{title && (
							<UIText preset="HEADLINE_06" color={titleColor}>
								{title}
							</UIText>
						)}
						{description && (
							<UIText preset="BODY_02" color="GREY">
								{description}
							</UIText>
						)}
						{descriptionLink && descriptionLink.label && (
							<div className="cursor-pointer">
								<UIText onClick={descriptionLink.onClick}>{descriptionLink.label}</UIText>
							</div>
						)}
					</div>
				</div>
				{actions && (
					<div className="flex flex-row items-center">
						{actions.map(({onClick, label, icon}, index) => {
							return (
								<div className="ml-4 cursor-pointer" key={index}>
									{icon && <UIICon onClick={onClick} name={icon} />}
									{label && (
										<UIText onClick={onClick} color="PRIMARY" preset="BUTTON">
											{label}
										</UIText>
									)}
								</div>
							);
						})}
					</div>
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
