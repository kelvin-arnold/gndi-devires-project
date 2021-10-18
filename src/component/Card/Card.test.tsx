// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Card} from "./Card";

const CARD_TEST_ID = "CARD_TEST_ID";

describe("Card component", () => {
	it("should render component", async () => {
		render(<Card data-testid={CARD_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(CARD_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
