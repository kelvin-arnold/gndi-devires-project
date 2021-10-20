// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {CPNLoadingOverlay, CPNModal} from "./../../component";
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
	const [modal, setModal] = React.useState(false);
	// Effects Here
	// Handlers Here
	const submit = handleSubmit((data) => console.log("data: ", data));
	const login = () =>
		setSession({userName: "devires@user"}, "deviresTokenAccess", "deviresRefreshToken");
	// Component
	return (
		<AuthSigninWrapper {...args}>
			<CPNModal
				title="Modal title"
				description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected."
				primaryAction={{
					label: "Primary action",
					onClick: () => {},
				}}
				secondaryAction={{
					label: "Secondary action",
					onClick: () => {},
				}}
				showModal={modal}
				onModalClose={() => setModal(false)}
			/>
			<div className="mt-4 w-full">
				<UIButton onClick={() => setModal(true)} label="Demo" />
			</div>
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
