// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Tooltip} from "./Tooltip";

const TOOLTIP_TEST_ID = "TOOLTIP_TEST_ID";

describe("Tooltip component", () => {
	it("should render component", async () => {
		render(<Tooltip data-testid={TOOLTIP_TEST_ID} description="12345" />);
		const renderComponent = await waitFor(() => screen.getByTestId(TOOLTIP_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
