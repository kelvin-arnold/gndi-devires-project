// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Table} from "./Table";

const TABLE_TEST_ID = "TABLE_TEST_ID";

describe("Table component", () => {
	it("should render component", async () => {
		render(<Table data-testid={TABLE_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(TABLE_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
