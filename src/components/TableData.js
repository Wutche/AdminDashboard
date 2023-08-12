/** @format */

import React from "react";
import { Table, Avatar } from "@mantine/core";

const TableData = () => {
	const elements = [
		{
			id: 1,
			name: "Wutche",
			productName: "Cactus",
			payment: "$12.33",
			Date: "01/12/2023",
		},
		{
			id: 2,
			name: "Sophia",
			productName: "Cactus",
			payment: "$12.33",
			Date: "11/10/2023",
		},
		{
			id: 3,
			name: "Obinna",
			productName: "Cactus",
			payment: "$12.33",
			Date: "10/3/2023",
		},
		{
			id: 4,
			name: "Godrice",
			productName: "Cactus",
			payment: "$12.33",
			Date: "12/12/2023",
		},
		{
			id: 5,
			name: "Henshaw",
			productName: "Cactus",
			payment: "$12.33",
			Date: "05/11/2023",
		},
	];

	const rows = elements.map((element) => (
		<tr key={element.name}>
			<td>{element.id}</td>
			<td>{element.name}</td>
			<td>{element.productName}</td>
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
