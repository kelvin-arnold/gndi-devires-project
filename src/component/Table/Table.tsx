// Component generated with util/vox-create-component.js
import React from "react";
import {TableWrapper, PaginationWrapper} from "./Table.styled";
import {TableProps} from "./Table.types";
import {useTable, useSortBy, usePagination} from "react-table";
import {UIButton, UIICon, UIText} from "../../ui";
import uniqid from "uniqid";

export const Table: React.VFC<TableProps> = ({columns, data, ...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		// page related props
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		state: {pageIndex, pageSize},
	} = useTable(
		{
			columns,
			data,
			initialState: {pageIndex: 0},
		},
		useSortBy,
		usePagination,
	);
	console.log(pageSize);
	const firstPageRows = rows.slice(0, 20);

	const getPageOptions = () => {
		if (pageCount > 3 && pageIndex < pageCount - 3) {
			return (
				<>
					<UIButton label={`${pageIndex}`} onClick={() => {}} />
					<UIButton label={`${pageIndex + 1}`} onClick={() => {}} />
					<UIButton label={`${pageIndex + 2}`} onClick={() => {}} />
				</>
			);
		} else if (pageCount <= 3) {
			const pages = [];
			for (let i = 0; i < pageCount; i++) {
				pages.push(<UIButton label={`${i + 1}`} onClick={() => {}} />);
			}
			return pages;
		} else if (pageCount > 3 && pageIndex > pageCount - 3) {
			return (
				<>
					<UIButton label={`${pageCount - 2}`} onClick={() => {}} />
					<UIButton label={`${pageCount - 1}`} onClick={() => {}} />
					<UIButton label={`${pageCount}`} onClick={() => {}} />
				</>
			);
		}
	};

	return (
		<TableWrapper {...args}>
			<table className="rounded-t-lg bg-gray-dark" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => {
						const {key, ...restHeaderGroupProps} = headerGroup.getHeaderGroupProps();
						return (
							<tr key={key} {...restHeaderGroupProps}>
								{headerGroup.headers.map((column) => {
									const {key: columnKey, ...restColumn} = column.getHeaderProps(
										column.getSortByToggleProps(),
									);
									return (
										// Add the sorting props to control sorting. For this example
										// we can add them into the header props
										<th
											key={columnKey}
											className="relative px-2 py-2 text-white prose prose-sm font-bold"
											{...restColumn}>
											{column.render("Header")}
											{/* Add a sort direction indicator */}
											<span className="absolute ml-0.5 pt-0.5">
												<UIICon name="order" color="PRIMARY" />
											</span>
										</th>
									);
								})}
							</tr>
						);
					})}
				</thead>
				<tbody className="bg-white" {...getTableBodyProps()}>
					{firstPageRows.map((row, i) => {
						prepareRow(row);
						const {key: rowKey, ...restRowProps} = row.getRowProps();
						return (
							<tr key={rowKey} className="hover:bg-secondary-lightest" {...restRowProps}>
								{row.cells.map((cell) => {
									const {key: cellKey, ...restCellProps} = cell.getCellProps();
									return (
										<td
											key={cellKey}
											className="px-2 py-4 prose prose-sm border-b border-gray-light border-opacity-20"
											{...restCellProps}>
											{cell.render("Cell")}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<PaginationWrapper>
				<UIButton
					disabled={!canPreviousPage}
					onClick={() => gotoPage(0)}
					preset="LINK"
					label=""
					icon="chevronLeft"
				/>
				<UIButton
					disabled={!canPreviousPage}
					onClick={() => previousPage()}
					preset="LINK"
					label="Anterior"
				/>
				{getPageOptions()}
				<UIButton
					disabled={!canNextPage}
					onClick={() => nextPage()}
					preset="LINK"
					label="Próxima"
				/>
				<UIButton
					disabled={!canNextPage}
					onClick={() => gotoPage(pageCount - 1)}
					preset="LINK"
					label=""
					icon="chevronRight"
				/>
				{/* <select
					value={pageSize}
					onChange={(e) => {
						setPageSize(Number(e.target.value));
					}}>
					{[10, 20, 30, 40, 50].map((pageSize) => (
						<option key={pageSize} value={pageSize}>
							Show {pageSize}
						</option>
					))}
				</select> */}
			</PaginationWrapper>
		</TableWrapper>
	);
};

export default Table;
