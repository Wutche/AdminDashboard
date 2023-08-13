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
			category: "flowering",
			Date: "01/12/2023",
			status: "Pending",
		},
		{
			id: 2,
			name: "Sophia",
			productName: "Cactus",
			payment: "$12.33",
			category: "non-flowering",
			Date: "11/10/2023",
			status: "Delivered",
		},
		{
			id: 3,
			name: "Obinna",
			productName: "Cactus",
			payment: "$12.33",
			category: "indoor",
			Date: "10/3/2023",
			status: "Pending",
		},
		{
			id: 4,
			name: "Godrice",
			productName: "Cactus",
			payment: "$12.33",
			category: "outdoor",
			Date: "12/12/2023",
			status: "Cancelled",
		},
		{
			id: 5,
			name: "Henshaw",
			productName: "Cactus",
			payment: "$12.33",
			category: "succulents",
			Date: "05/11/2023",
			status: "Delivered",
		},
	];

	const rows = elements.map((element) => (
		<tr key={element.name}>
			<td>{element.id}</td>
			<td>{element.name}</td>
			<td>{element.productName}</td>
			<td>{element.payment}</td>
			<td>{element.category}</td>
			<td>{element.Date}</td>
			<td>{element.status}</td>
		</tr>
	));

	return (
		<div className="tabledata">
			<Table>
				<thead>
					<tr>
						<th>OrderID</th>
						<th>Users</th>
						<th>Product Name</th>
						<th>Payment</th>
						<th>Category</th>
						<th>Date</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</div>
	);
};

export default TableData;
