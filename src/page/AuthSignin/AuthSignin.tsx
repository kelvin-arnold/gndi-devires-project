// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {UIButton, UIText} from "./../../ui";
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
					<UIText preset="BODY_02">Tipografia body 02</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="BODY">Tipografia body</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="BUTTON_02">Tipografia button 02</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="BUTTON">Tipografia button 02</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="SUBTITLE">Tipografia Subtitle</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="HEADLINE_06">Tipografia Headline 06</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="HEADLINE_05">Tipografia Headline 05</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="HEADLINE">Tipografia Headline 04</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="HEADLINE_03">Tipografia Headline 03</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="HEADLINE_02">Tipografia Headline 02</UIText>
				</div>
				<div className="mb-1">
					<UIText preset="HEADLINE_01">Tipografia Headline 01</UIText>
				</div>
			</div>
			<UIButton label="Sign in" onClick={login} />
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
