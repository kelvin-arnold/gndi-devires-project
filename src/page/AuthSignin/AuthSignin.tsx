// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {CPNDatePicker, CPNTextInput, CPNMenu} from "./../../component";
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
	const COLUMNS = React.useMemo(
		() => [
			// {
			// 	id: 1,
			// 	columns: [
			{
				Header: "N° da carteirinha",
				accessor: "cardNumber",
			},
			{
				Header: "Protocolo",
				accessor: "protocol",
			},
			{
				Header: "Nome completo",
				accessor: "name",
			},
			{
				Header: "Tipo de operação",
				accessor: "operationType",
			},
			{
				Header: "Status",
				accessor: "status",
			},
			// 	],
			// },
		],
		[],
	);

	const DATA = React.useMemo(
		() => [
			{
				cardNumber: "11270300107512160000101",
				protocol: "111",
				name: "Paula da Silva Borges",
				operationType: "changePlan",
				status: "error",
			},
			{
				cardNumber: "00001023123123123121111",
				protocol: "8758876506",
				name: "DA JUNG HA",
				operationType: "changePlan",
				status: "error",
			},
		],
		[],
	);
	// Handlers Here
	const submit = handleSubmit((data) => console.log("data: ", data));
	const login = () =>
		setSession({userName: "devires@user"}, "deviresTokenAccess", "deviresRefreshToken");
	// Component
	return (
		<AuthSigninWrapper {...args}>
			<div className="mb-4">
				<CPNMenu />
			</div>
			<div className="mb-4">
				<CPNDatePicker label="Date picker default" {...register("input1")} />
			</div>
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
