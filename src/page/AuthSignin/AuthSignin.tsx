// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {CPNSelectInput, CPNTextInput} from "./../../component";
import {UIButton} from "./../../ui";
import {AuthContext} from "./../../context/AuthContext";
import {useForm} from "react-hook-form";
import {string, SchemaOf, object} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

type AuthFormData = {
	input1: string;
	input2: string;
};

export const AuthSignin: React.VFC<AuthSigninProps> = ({...args}) => {
	// Context Here
	const {setSession} = React.useContext(AuthContext);
	// Validations
	const AuthFormValidation: SchemaOf<AuthFormData> = object().shape({
		input1: string().required("1"),
		input2: string().required("2"),
	});
	// Form
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm<AuthFormData>({
		// resolver: yupResolver(AuthFormValidation),
		mode: "onSubmit",
	});
	// States Here
	// Effects Here
	// Handlers Here
	const submit = handleSubmit((data) => console.log("data: ", data));
	const login = () =>
		setSession({userName: "devires@user"}, "deviresTokenAccess", "deviresRefreshToken");
	// Component
	return (
		<AuthSigninWrapper {...args}>
			<div className="mt-4 w-full">
				<CPNTextInput label="Select" placeholder="Selecione" {...register("input1")} />
			</div>
			<div className="mt-4 w-full">
				<CPNSelectInput label="Select" placeholder="Selecione" {...register("input2")} />
			</div>
			<div className="mt-6  w-full">
				<UIButton label="Sign in" onClick={submit} />
			</div>
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
