// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppExtractionReport} from "./AppExtractionReport";

const APPEXTRACTIONREPORT_TEST_ID = "APPEXTRACTIONREPORT_TEST_ID";

describe("AppExtractionReport component", () => {
	it("should render component", async () => {
		render(<AppExtractionReport data-testid={APPEXTRACTIONREPORT_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPEXTRACTIONREPORT_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
