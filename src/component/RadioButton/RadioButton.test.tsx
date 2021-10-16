// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {RadioButton} from "./RadioButton";

const RADIOBUTTON_TEST_ID = "RADIOBUTTON_TEST_ID";

describe("RadioButton component", () => {
	it("should render component", async () => {
		render(<RadioButton label="test" name="test" value="test" data-testid={RADIOBUTTON_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(RADIOBUTTON_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
