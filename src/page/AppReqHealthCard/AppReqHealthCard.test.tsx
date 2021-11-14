// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppReqHealthCard} from "./AppReqHealthCard";

const APPREQHEALTHCARD_TEST_ID = "APPREQHEALTHCARD_TEST_ID";

describe("AppReqHealthCard component", () => {
	it("should render component", async () => {
		render(<AppReqHealthCard data-testid={APPREQHEALTHCARD_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPREQHEALTHCARD_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
