// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {StrongPassword} from "./StrongPassword";

const STRONGPASSWORD_TEST_ID = "STRONGPASSWORD_TEST_ID";

describe("StrongPassword component", () => {
	it("should render component", async () => {
		render(<StrongPassword data-testid={STRONGPASSWORD_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(STRONGPASSWORD_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
