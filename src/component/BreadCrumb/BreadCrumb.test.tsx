// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {BreadCrumb} from "./BreadCrumb";

const BREADCRUMB_TEST_ID = "BREADCRUMB_TEST_ID";

describe("BreadCrumb component", () => {
	it("should render component", async () => {
		render(<BreadCrumb data-testid={BREADCRUMB_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(BREADCRUMB_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
