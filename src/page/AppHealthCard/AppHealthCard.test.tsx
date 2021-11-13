// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppHealthCard} from "./AppHealthCard";

const APPHEALTHCARD_TEST_ID = "APPHEALTHCARD_TEST_ID";

describe("AppHealthCard component", () => {
	it("should render component", async () => {
		render(<AppHealthCard data-testid={APPHEALTHCARD_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPHEALTHCARD_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
