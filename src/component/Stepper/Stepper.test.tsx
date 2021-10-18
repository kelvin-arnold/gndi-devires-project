// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Stepper} from "./Stepper";

const STEPPER_TEST_ID = "STEPPER_TEST_ID";

describe("Stepper component", () => {
	it("should render component", async () => {
		render(<Stepper data-testid={STEPPER_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(STEPPER_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
