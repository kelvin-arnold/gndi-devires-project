// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppBeneficiaryDetail} from "./AppBeneficiaryDetail";

const APPBENEFICIARYDETAIL_TEST_ID = "APPBENEFICIARYDETAIL_TEST_ID";

describe("AppBeneficiaryDetail component", () => {
	it("should render component", async () => {
		render(<AppBeneficiaryDetail data-testid={APPBENEFICIARYDETAIL_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPBENEFICIARYDETAIL_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
