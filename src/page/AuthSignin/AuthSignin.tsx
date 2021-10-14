// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {UIButton} from "./../../ui";
import {CPNTextInput} from "./../../component";
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
			<div className="flex flex-col gap-y-4 w-full">
				<div className="flex flex-row gap-6 w-full ">
					<div className="flex-1 w-full">
						<CPNTextInput label="Text input" placeholder="Some placeholder" />
					</div>
					<div className="flex-1 w-full">
						<CPNTextInput label="Text input" placeholder="Some placeholder" />
					</div>
				</div>
				<div className="flex flex-row gap-6 w-full ">
					<div className="flex-1 w-full">
						<CPNTextInput label="Text input" placeholder="Some placeholder" error="Some error" />
					</div>
					<div className="flex-1 w-full">
						<CPNTextInput label="Text input" placeholder="Some placeholder" error="Some error" />
					</div>
				</div>
				<div className="flex flex-row gap-6 w-full ">
					<div className="flex-1 w-full">
						<CPNTextInput label="Text input" placeholder="Some placeholder" disabled />
					</div>
					<div className="flex-1 w-full">
						<CPNTextInput label="Text input" placeholder="Some placeholder" disabled />
					</div>
				</div>
				<div className="flex flex-row gap-6 w-full ">
					<div className="flex-1 w-full">
						<CPNTextInput label="Text input" />
					</div>
					<div className="flex-1 w-full">
						<CPNTextInput label="Text input" />
					</div>
				</div>
			</div>
			<div className="mt-6">
				<UIButton label="Sign in" onClick={login} />
			</div>
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
