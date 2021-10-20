// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Menu} from "./Menu";

const MENU_TEST_ID = "MENU_TEST_ID";

describe("Menu component", () => {
	it("should render component", async () => {
		render(<Menu data-testid={MENU_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(MENU_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
