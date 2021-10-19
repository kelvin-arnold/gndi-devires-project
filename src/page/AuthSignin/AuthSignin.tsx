// Component generated with util/vox-create-component.js
import React, {useEffect, useState} from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {CPNLoadingOverlay, CPNBreadCrumb, CPNTextInput, CPNStrongPassword} from "./../../component";
import {Step} from "./../../component/Stepper/Stepper.types";
import {UIButton} from "./../../ui";
import {AuthContext} from "./../../context/AuthContext";
import {useForm} from "react-hook-form";
import {string, SchemaOf, object} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import uniqid from "uniqid";
import {Condition, Strength} from "../../component/StrongPassword/StrongPassword.types";

type AuthFormData = {
	password: string;
	input2: string;
	input3: string;
};

const CONDITIONS = [
	{
		name: "minLength",
		label: "8 caracteres",
		valid: false,
	},
	{
		name: "letter",
		label: "Letra",
		valid: false,
	},
	{
		name: "number",
		label: "Número",
		valid: false,
	},
	{name: "special", label: "Caractere especial", valid: false},
];

export const AuthSignin: React.VFC<AuthSigninProps> = ({...args}) => {
	// Context Here
	const {setSession} = React.useContext(AuthContext);
	// Validations
	const AuthFormValidation: SchemaOf<AuthFormData> = object().shape({
		password: string().required("campo obrigatório"),
		input2: string().required("2"),
		input3: string().required("3"),
	});
	// Form
	const {
		register,
		handleSubmit,
		formState: {errors},
		watch,
	} = useForm<AuthFormData>({
		resolver: yupResolver(AuthFormValidation),
		mode: "onSubmit",
	});
	const watchPassword = watch("password");
	// States Here
	const [passwordContitions, setPasswordConditions] = useState<Condition[]>(CONDITIONS);
	const [strength, setStrength] = useState<keyof typeof Strength>("NONE");
	// Effects Here
	useEffect(() => {
		if (watchPassword?.length > 0) {
			const newConditions = passwordContitions.map((condition) => {
				const {name} = condition;
				switch (name) {
					case "letter":
						return {...condition, valid: /\w/i.test(watchPassword)};
					case "minLength":
						return {...condition, valid: watchPassword.length > 8};
					case "number":
						return {...condition, valid: /\d/.test(watchPassword)};
					case "special":
						return {...condition, valid: /\W/.test(watchPassword)};
					default:
						return {...condition};
				}
			});
			setPasswordConditions(newConditions);
		}
	}, [watchPassword]);

	useEffect(() => {
		let newStrength = 0;
		passwordContitions.map((condition) =>
			condition.valid ? (newStrength = newStrength + 1) : null,
		);
		if (newStrength === 1) {
			setStrength("WEAK");
		} else if (newStrength === 4) {
			setStrength("STRONG");
		} else if (newStrength === 0) {
			setStrength("NONE");
		} else {
			setStrength("MEDIUM");
		}
	}, [passwordContitions]);
	// Handlers Here
	const submit = handleSubmit((data) => console.log("data: ", data));
	const login = () =>
		setSession({userName: "devires@user"}, "deviresTokenAccess", "deviresRefreshToken");
	// Component
	console.log(errors);
	return (
		<AuthSigninWrapper {...args}>
			<div className="mt-4 w-full">
				<CPNTextInput label="password" {...register("password")} error={errors.password?.message} />
			</div>
			<div className="mt-4 w-full">
				<CPNStrongPassword conditions={passwordContitions} strength={strength} />
			</div>
			<div className="mt-4 w-full">
				<UIButton onClick={submit} label="Signin" />
			</div>
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
