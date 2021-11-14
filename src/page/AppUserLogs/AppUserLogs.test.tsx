// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppUserLogs} from "./AppUserLogs";

const APPUSERLOGS_TEST_ID = "APPUSERLOGS_TEST_ID";

describe("AppUserLogs component", () => {
	it("should render component", async () => {
		render(<AppUserLogs data-testid={APPUSERLOGS_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPUSERLOGS_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
