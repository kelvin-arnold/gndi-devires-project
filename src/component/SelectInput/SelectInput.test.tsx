// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {SelectInput} from "./SelectInput";

const SELECTINPUT_TEST_ID = "SELECTINPUT_TEST_ID";

describe("SelectInput component", () => {
	it("should render component", async () => {
		render(<SelectInput data-testid={SELECTINPUT_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(SELECTINPUT_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
