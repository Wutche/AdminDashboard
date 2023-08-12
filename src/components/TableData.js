/** @format */

import React from "react";
import { Table, Avatar } from "@mantine/core";

const TableData = () => {
	const elements = [
		{ id: 1, Date: "01/12/2023", payment: "$12.33", name: "Wutche" },
		{ id: 2, Date: "11/10/2023", payment: "$56", name: "Sophia" },
		{ id: 3, Date: "10/3/2023", payment: "$32", name: "Obinna" },
		{ id: 4, Date: "12/12/2023", payment: "$100", name: "Godrice" },
		{ id: 5, Date: "05/11/2023", payment: "$35", name: "Henshaw" },
	];

	const rows = elements.map((element) => (
		<tr key={element.name}>
			<td>{element.id}</td>
			<td>{element.name}</td>
			<td>{element.payment}</td>
			<td>{element.Date}</td>
		</tr>
	));

	return (
		<div className="tabledata">
			<Table>
				<thead>
					<tr>
						<th>OrderID</th>
						<th>Name</th>
						<th>Product Name</th>
						<th>Payment</th>
						<th>Date</th>
						<th>Status</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</div>
	);
};

export default TableData;
