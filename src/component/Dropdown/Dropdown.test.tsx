// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Dropdown} from "./Dropdown";

const DROPDOWN_TEST_ID = "DROPDOWN_TEST_ID";

describe("Dropdown component", () => {
	it("should render component", async () => {
		render(
			<Dropdown
				data-testid={DROPDOWN_TEST_ID}
				label="Dropdown"
				options={[{label: "First action", action: () => console.log("First action")}]}
			/>,
		);
		const renderComponent = await waitFor(() => screen.getByTestId(DROPDOWN_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
