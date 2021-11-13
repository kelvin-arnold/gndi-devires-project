// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppHealthCardDetail} from "./AppHealthCardDetail";

const APPHEALTHCARDDETAIL_TEST_ID = "APPHEALTHCARDDETAIL_TEST_ID";

describe("AppHealthCardDetail component", () => {
	it("should render component", async () => {
		render(<AppHealthCardDetail data-testid={APPHEALTHCARDDETAIL_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPHEALTHCARDDETAIL_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
