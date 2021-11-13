// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppBeneficiary} from "./AppBeneficiary";

const APPBENEFICIARY_TEST_ID = "APPBENEFICIARY_TEST_ID";

describe("AppBeneficiary component", () => {
	it("should render component", async () => {
		render(<AppBeneficiary data-testid={APPBENEFICIARY_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPBENEFICIARY_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
