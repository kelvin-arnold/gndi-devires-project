// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {CPNMenu} from "./../../component";
import {AuthContext} from "./../../context/AuthContext";
import {useForm} from "react-hook-form";

type AuthFormData = {
	input1: string;
	input2: string;
	input3: string;
};

export const AuthSignin: React.VFC<AuthSigninProps> = ({...args}) => {
	// Context Here
	const {setSession} = React.useContext(AuthContext);
	// Validations
	// Form
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<AuthFormData>({
		mode: "onSubmit",
	});
	// States Here
	const [modal, setModal] = React.useState(false);
	// Effects Here
	// Handlers Here
	const submit = handleSubmit((data) => console.log("data: ", data));
	const login = () =>
		setSession({userName: "devires@user"}, "deviresTokenAccess", "deviresRefreshToken");
	// Component
	return (
		<AuthSigninWrapper {...args}>
			<CPNMenu />
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
