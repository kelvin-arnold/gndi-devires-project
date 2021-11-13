// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppFilesMovements} from "./AppFilesMovements";

const APPFILESMOVEMENTS_TEST_ID = "APPFILESMOVEMENTS_TEST_ID";

describe("AppFilesMovements component", () => {
	it("should render component", async () => {
		render(<AppFilesMovements data-testid={APPFILESMOVEMENTS_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPFILESMOVEMENTS_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
