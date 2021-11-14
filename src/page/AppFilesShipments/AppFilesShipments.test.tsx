// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppFilesShipments} from "./AppFilesShipments";

const APPFILESSHIPMENTS_TEST_ID = "APPFILESSHIPMENTS_TEST_ID";

describe("AppFilesShipments component", () => {
	it("should render component", async () => {
		render(<AppFilesShipments data-testid={APPFILESSHIPMENTS_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPFILESSHIPMENTS_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
