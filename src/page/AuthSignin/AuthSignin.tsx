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
					<UIButton label="click" onClick={() => alert("click!")} />
					<UIButton disabled label="click" onClick={() => alert("click!")} />
					<UIButton icon="addCircle" label="click" onClick={() => alert("click!")} />
					<UIButton disabled icon="addCircle" label="click" onClick={() => alert("click!")} />
					<UIButton
						icon="addCircle"
						preset="SECONDARY"
						label="click"
						onClick={() => alert("click!")}
					/>
					<UIButton
						disabled
						icon="addCircle"
						preset="SECONDARY"
						label="click"
						onClick={() => alert("click!")}
					/>
					<UIButton preset="LINK" label="click" onClick={() => alert("click!")} />
					<UIButton disabled preset="LINK" label="click" onClick={() => alert("click!")} />
					<UIButton icon="addCircle" preset="LINK" label="click" onClick={() => alert("click!")} />
					<UIButton
						disabled
						icon="addCircle"
						preset="LINK"
						label="click"
						onClick={() => alert("click!")}
					/>
					<UIButton label="click" preset="DANGER" onClick={() => alert("click!")} />
					<UIButton label="click" preset="DARK" onClick={() => alert("click!")} />
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
