// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {CPNStepper} from "./../../component";
import {Step} from "./../../component/Stepper/Stepper.types";
import {UIButton} from "./../../ui";
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

const STEPS: Step[] = [
	{
		id: uniqid(),
		label: "1",
		done: true,
	},
	{
		id: uniqid(),
		label: "2",
	},
	{
		id: uniqid(),
		label: "3",
	},
	{
		id: uniqid(),
		label: "4",
	},
	{
		id: uniqid(),
		label: "5",
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
				<CPNStepper
					steppes={STEPS}
					allStepsDone={(steps) => console.log("allStepsDone: ", steps)}
				/>
			</div>
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
