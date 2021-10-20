// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Header} from "./Header";

const HEADER_TEST_ID = "HEADER_TEST_ID";

describe("Header component", () => {
	it("should render component", async () => {
		render(<Header data-testid={HEADER_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(HEADER_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
