// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppReqHealthCardDetail} from "./AppReqHealthCardDetail";

const APPREQHEALTHCARDDETAIL_TEST_ID = "APPREQHEALTHCARDDETAIL_TEST_ID";

describe("AppReqHealthCardDetail component", () => {
	it("should render component", async () => {
		render(<AppReqHealthCardDetail data-testid={APPREQHEALTHCARDDETAIL_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPREQHEALTHCARDDETAIL_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
