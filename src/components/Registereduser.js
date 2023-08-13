/** @format */

import React from "react";
import { Table, Avatar, Pagination, Group } from "@mantine/core";
import { RiDeleteBin6Line } from "react-icons/ri";
import inventoryport from "../images/portrait.jpg";
const Registereduser = () => {
	const elements = [
		{
			id: 1,
			Image: inventoryport,
			User: "Wutche",
			email: "wutche@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 2,
			Image: inventoryport,
			User: "Sophia",
			email: "sophia@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 3,
			Image: inventoryport,
			User: "Henshaw",
			email: "henshaw@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 4,
			Image: inventoryport,
			User: "Obinna",
			email: "obinna@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 5,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
	];

	const rows = elements.map((element) => (
		<tr key={element.name}>
			<td>{`${element.id}`}</td>
			<td>
				<Avatar size={26} src={element.Image} radius={26} />
			</td>
			<td>{element.User}</td>

			<td>{element.email}</td>

			<td>
				{" "}
				<element.inventoryDeleteICon
					cursor="pointer"
					size="20px"
					color="rgb(223, 3, 3)"
				/>{" "}
			</td>
		</tr>
	));

	return (
		<div className="rgstrdusrtbl">
			<Pagination.Root total={10}>
				<Table>
					<thead>
						<tr>
							<th>ID</th>
							<th>User</th>
							<th>Image</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>{rows}</tbody>
				</Table>
				<Group spacing={10} position="center" className="pagination">
					<Pagination.First />
					<Pagination.Previous />
					<Pagination.Items />
					<Pagination.Next />
					<Pagination.Last />
				</Group>
			</Pagination.Root>
		</div>
	);
};

export default Registereduser;
