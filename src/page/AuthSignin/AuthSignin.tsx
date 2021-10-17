// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {CPNSelectInput, CPNTextInput, CPNCheckBox} from "./../../component";
import {Option} from "./../../component/SelectInput/SelectInput.types";
import {UIButton, UIBadge} from "./../../ui";
import {AuthContext} from "./../../context/AuthContext";
import {useForm} from "react-hook-form";
import {string, SchemaOf, object} from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import uniqid from "uniqid";

type AuthFormData = {
	input1: string;
	input2: string;
	input3: string;
};

const OPTIONS: Option[] = [
	{
		id: uniqid(),
		label: "option 1",
		value: 1,
	},
	{
		id: uniqid(),
		label: "option 2",
		value: 2,
	},
	{
		id: uniqid(),
		label: "option 3",
		value: 3,
	},
	{
		id: uniqid(),
		label: "option 4",
		value: 4,
	},
	{
		id: uniqid(),
		label: "option 5",
		value: 5,
	},
	{
		id: uniqid(),
		label: "option 6",
		value: 6,
	},
	{
		id: uniqid(),
		label: "option 7",
		value: 7,
	},
	{
		id: uniqid(),
		label: "option 8",
		value: 8,
	},
	{
		id: uniqid(),
		label: "option 9",
		value: 9,
	},
	{
		id: uniqid(),
		label: "option 10",
		value: 10,
	},
	{
		id: uniqid(),
		label: "option 11",
		value: 11,
	},
];

export const AuthSignin: React.VFC<AuthSigninProps> = ({...args}) => {
	// Context Here
	const {setSession} = React.useContext(AuthContext);
	// Validations
	// const AuthFormValidation: SchemaOf<AuthFormData> = object().shape({
	// 	input1: string().required("1"),
	// 	input2: string().required("2"),
	// 	input3: string().required("3"),
	// });
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
				<CPNSelectInput
					label="Select"
					placeholder="Selecione"
					options={OPTIONS}
					{...register("input2")}
				/>
			</div>
			<div className="mt-4 w-full">
				<CPNSelectInput
					label="Multi check"
					placeholder="Multi check placeholder"
					options={OPTIONS}
					type="MULTICHECK"
					{...register("input3")}
				/>
			</div>
			<div className="mt-6  w-full">
				<UIButton label="Sign in" onClick={submit} />
			</div>
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
