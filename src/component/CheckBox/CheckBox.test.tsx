// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {CheckBox} from "./CheckBox";

const CHECKBOX_TEST_ID = "CHECKBOX_TEST_ID";

describe("CheckBox component", () => {
	it("should render component", async () => {
		render(<CheckBox label="checkbox" value="test" data-testid={CHECKBOX_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(CHECKBOX_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
