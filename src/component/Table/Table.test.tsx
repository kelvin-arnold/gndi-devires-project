// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Table} from "./Table";

const TABLE_TEST_ID = "TABLE_TEST_ID";

const COLUMNS = [
	{
		Header: "N° da carteirinha",
		accessor: "cardNumber",
	},
	{
		Header: "Protocolo",
		accessor: "protocol",
	},
	{
		Header: "Nome completo",
		accessor: "name",
	},
	{
		Header: "Tipo de operação",
		accessor: "operationType",
	},
	{
		Header: "Status",
		accessor: "status",
	},
];
const DATA = [
	{
		cardNumber: "11270300107512160000101",
		protocol: "111",
		name: "Paula da Silva Borges",
		operationType: "changePlan",
		status: "error",
	},
	{
		cardNumber: "00001023123123123121111",
		protocol: "8758876506",
		name: "DA JUNG HA",
		operationType: "changePlan",
		status: "error",
	},
];

describe("Table component", () => {
	it("should render component", async () => {
		render(<Table columns={COLUMNS} data={DATA} data-testid={TABLE_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(TABLE_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
