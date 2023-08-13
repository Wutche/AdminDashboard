/** @format */

import React, { useState, useEffect } from "react";
import { Table, Avatar, Pagination, Group, Box } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import dayjs from "dayjs";
import { RiDeleteBin6Line } from "react-icons/ri";
import inventoryport from "../images/portrait.jpg";

const PAGE_SIZES = [10, 15, 20];
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
		{
			id: 6,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 7,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 7,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 9,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 10,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 11,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 12,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 13,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 14,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 15,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 16,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 17,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 18,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 19,
			Image: inventoryport,
			User: "Fortune",
			email: "fortune@gmail.com",

			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 20,
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

	const [pageSize, setPageSize] = useState(PAGE_SIZES[1]);

	useEffect(() => {
		setPage(1);
	}, [pageSize]);

	const [page, setPage] = useState(1);
	const [records, setRecords] = useState(elements.slice(0, pageSize));

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
