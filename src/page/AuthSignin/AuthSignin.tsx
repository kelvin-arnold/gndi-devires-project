// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {UIButton, UIBadge, UIICon, UIText} from "./../../ui";
import {AuthContext} from "./../../context/AuthContext";

export const AuthSignin: React.VFC<AuthSigninProps> = ({...args}) => {
	// Context Here
	const {setSession} = React.useContext(AuthContext);
	// States Here
	// Effects Here
	// Handlers Here
	const login = () =>
		setSession({userName: "devires@user"}, "deviresTokenAccess", "deviresRefreshToken");
	return (
		<AuthSigninWrapper {...args}>
			<div className="mb-4">
				<div className="mb-1">
					<UIBadge color="GRAY" size="SMALL">
						1
					</UIBadge>
					<UIText preset="BODY_02">Tipografia body 02</UIText>
					<UIICon name="addCircle" size="sm" />
					<UIICon name="addCircle" size="md" />
					<UIICon name="addCircle" size="md" color="SECONDARY" />
					<UIICon name="addCircle" size="md" color="WHITE" />
					<UIICon name="addCircle" size="md" color="DANGER" />
					<UIICon name="addCircle" size="md" color="GREY" />
					<UIICon name="addCircle" size="md" color="DARK" />
					<UIICon name="statusInfo" size="md" color="SECONDARY" />
					<UIICon name="alert" size="md" color="BLUE" />
					<UIICon name="checkFilled" size="md" color="GREEN" />
					<UIICon name="errorFilled" size="md" color="DANGER" />
					<UIICon name="order" />
				</div>
				<div className="mb-1">
					<UIBadge color="DANGER" size="NORMAL">
						10
					</UIBadge>
				</div>
				<div className="mb-1">
					<UIBadge color="GRAY" size="MEDIUM">
						Badge 1
					</UIBadge>
				</div>
			</div>
			<UIButton label="Sign in" onClick={login} />
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
