// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AuthFirstAccess} from "./AuthFirstAccess";

const AUTHFIRSTACCESS_TEST_ID = "AUTHFIRSTACCESS_TEST_ID";

describe("AuthFirstAccess component", () => {
	it("should render component", async () => {
		render(<AuthFirstAccess data-testid={AUTHFIRSTACCESS_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(AUTHFIRSTACCESS_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
