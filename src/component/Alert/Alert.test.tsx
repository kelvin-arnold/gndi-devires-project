// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Alert} from "./Alert";

const ALERT_TEST_ID = "ALERT_TEST_ID";

describe("Alert component", () => {
	it("should render component", async () => {
		render(<Alert data-testid={ALERT_TEST_ID} title="" />);
		const renderComponent = await waitFor(() => screen.getByTestId(ALERT_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
