// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Chart} from "./Chart";

const CHART_TEST_ID = "CHART_TEST_ID";

describe("Chart component", () => {
	it("should render component", async () => {
		render(<Chart data-testid={CHART_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(CHART_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
