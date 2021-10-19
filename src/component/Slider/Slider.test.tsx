// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Slider} from "./Slider";

const SLIDER_TEST_ID = "SLIDER_TEST_ID";

describe("Slider component", () => {
	it("should render component", async () => {
		render(<Slider length={6} data-testid={SLIDER_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(SLIDER_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
