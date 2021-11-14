// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppUploadFiles} from "./AppUploadFiles";

const APPUPLOADFILES_TEST_ID = "APPUPLOADFILES_TEST_ID";

describe("AppUploadFiles component", () => {
	it("should render component", async () => {
		render(<AppUploadFiles data-testid={APPUPLOADFILES_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPUPLOADFILES_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
