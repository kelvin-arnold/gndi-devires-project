// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {DatePicker} from "./DatePicker";

const DATEPICKER_TEST_ID = "DATEPICKER_TEST_ID";

describe("DatePicker component", () => {
	it("should render component", async () => {
		render(<DatePicker data-testid={DATEPICKER_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(DATEPICKER_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
