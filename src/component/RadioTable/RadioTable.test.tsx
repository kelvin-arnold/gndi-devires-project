// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {RadioTable} from "./RadioTable";

const RADIOTABLE_TEST_ID = "RADIOTABLE_TEST_ID";

describe("RadioTable component", () => {
	it("should render component", async () => {
		render(<RadioTable data-testid={RADIOTABLE_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(RADIOTABLE_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
