// Component generated with util/vox-create-component.js
import React from "react";
import {CPNTextInput} from "..";
import {UIBadge, UIICon, UIText} from "../../ui";
import {
	HeaderTopIconWrapper,
	HeaderTopWrapper,
	HeaderWrapper,
	HeaderBodyWrapper,
} from "./Header.styled";
import {HeaderProps} from "./Header.types";

export const Header: React.VFC<HeaderProps> = ({...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<HeaderWrapper {...args}>
			<HeaderTopWrapper>
				<HeaderTopIconWrapper>
					<UIICon name="invertColors" color="LIGHTGREY" size="xs" />
				</HeaderTopIconWrapper>
				<HeaderTopIconWrapper>
					<UIText color="LIGHTGREY">A-</UIText>
				</HeaderTopIconWrapper>
				<HeaderTopIconWrapper>
					<UIText color="LIGHTGREY">A+</UIText>
				</HeaderTopIconWrapper>
				<HeaderTopIconWrapper>
					<UIICon name="hearingDisabled" color="LIGHTGREY" size="xs" />
				</HeaderTopIconWrapper>
				<HeaderTopIconWrapper end>
					<UIICon name="libras" color="LIGHTGREY" size="xs" />
				</HeaderTopIconWrapper>
			</HeaderTopWrapper>
			<HeaderBodyWrapper>
				<div className="w-1/3">
					<CPNTextInput placeholder="O que você está procurando?" icon="search" />
				</div>
				<div className="flex flex-row items-center">
					<div className="relative mr-8.5">
						<div className="absolute -top-2 -right-2">
							<UIBadge size="SMALL" color="PRIMARY">
								3
							</UIBadge>
						</div>
						<UIICon name="notification" size="xs" color="LIGHTGREY" />
					</div>
					<div className="flex flex-row items-center">
						<UIICon name="user" size="xs" color="LIGHTGREY" />
						<div className="ml-2 mr-1">
							<UIText color="LIGHTGREY">Olá, Camila</UIText>
						</div>
						<UIICon name="chevronDown" size="xs" />
					</div>
				</div>
			</HeaderBodyWrapper>
		</HeaderWrapper>
	);
};

export default Header;
