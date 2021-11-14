// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AuthForgotPassword} from "./AuthForgotPassword";

const AUTHFORGOTPASSWORD_TEST_ID = "AUTHFORGOTPASSWORD_TEST_ID";

describe("AuthForgotPassword component", () => {
	it("should render component", async () => {
		render(<AuthForgotPassword data-testid={AUTHFORGOTPASSWORD_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(AUTHFORGOTPASSWORD_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
