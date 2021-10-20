// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Modal} from "./Modal";

const MODAL_TEST_ID = "MODAL_TEST_ID";

describe("Modal component", () => {
	it("should render component", async () => {
		render(
			<Modal
				title="Modal test"
				primaryAction={{
					label: "Primary action test",
					onClick: () => {},
				}}
				data-testid={MODAL_TEST_ID}
				showModal
			/>,
		);
		const renderComponent = await waitFor(() => screen.getByTestId(MODAL_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
