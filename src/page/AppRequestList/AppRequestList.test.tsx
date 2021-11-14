// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppRequestList} from "./AppRequestList";

const APPREQUESTLIST_TEST_ID = "APPREQUESTLIST_TEST_ID";

describe("AppRequestList component", () => {
	it("should render component", async () => {
		render(<AppRequestList data-testid={APPREQUESTLIST_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPREQUESTLIST_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
