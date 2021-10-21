// Component generated with util/vox-create-component.js
import React from "react";
import {CPNTextInput} from "..";
import {UIICon, UIText} from "../../ui";
import {
	HeaderTopIconWrapper,
	HeaderTopWrapper,
	HeaderWrapper,
	HeaderBodyWrapper,
} from "./Header.styled";
import {HeaderProps} from "./Header.types";
import NotificationNav from "./NotificationNav";
import UserNav from "./UserNav";

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
					<NotificationNav />
					<UserNav />
				</div>
			</HeaderBodyWrapper>
		</HeaderWrapper>
	);
};

export default Header;
