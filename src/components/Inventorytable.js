/** @format */

import React from "react";
import { Table, Avatar } from "@mantine/core";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const Inventorytable = () => {
	const elements = [
		{
			id: 1342,
			productName: "Cactus",
			Image: "",
			payment: "$12.33",
			category: "flowering",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
			Date: "01/12/2023",
			Availability: "Out of Stock",
			inventoryEditICon: AiOutlineEdit,
			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 1542,
			productName: "Cactus",
			Image: "",
			payment: "$12.33",
			category: "non-flowering",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
			Date: "11/10/2023",
			Availability: "In Stock",
			inventoryEditICon: AiOutlineEdit,
			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 4345,
			productName: "Cactus",
			image: "",
			payment: "$12.33",
			category: "indoor",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
			Date: "10/3/2023",
			Availability: "Out Of stock",
			inventoryEditICon: AiOutlineEdit,
			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 3162,
			productName: "Cactus",
			image: "",
			payment: "$12.33",
			category: "outdoor",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
			Date: "12/12/2023",
			Availability: "In Stock",
			inventoryEditICon: AiOutlineEdit,
			inventoryDeleteICon: RiDeleteBin6Line,
		},
		{
			id: 3810,
			productName: "Cactus",
			image: "",
			payment: "$12.33",
			category: "succulents",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing el",
			Date: "05/11/2023",
			Availability: "In Stock",
			inventoryEditICon: AiOutlineEdit,
			inventoryDeleteICon: RiDeleteBin6Line,
		},
	];

	const rows = elements.map((element) => (
		<tr key={element.name}>
			<td>{`#${element.id}`}</td>
			<td>{element.productName}</td>
			<td>{element.image}</td>
			<td>{element.payment}</td>
			<td>{element.category}</td>
			<td>{element.Date}</td>
			<td>{element.description}</td>
			<td>{element.Availability}</td>
			<td>
				<element.inventoryEditICon
					cursor="pointer"
					size="20px"
					color="rgb(11, 102, 11, 1)"
				/>
			</td>
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
		<div className="inventorytable">
			<div className="inventoryfilter">
				<select name="Filter" id="filter">
					<option value="filterby"> Filter BY </option>
					<option value="flowering"> Flowering </option>
					<option value="non-flowering">non-flowering</option>
					<option value="indoor">indoor</option>
					<option value="outdoor">outdoor</option>
					<option value="succulents">succulents</option>
				</select>
			</div>
			<Table>
				<thead>
					<tr>
						<th>OrderID</th>
						<th>Product Name</th>
						<th>Image</th>
						<th>Price</th>
						<th>Category</th>
						<th>Date</th>
						<th>Description</th>
						<th>Availability</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</div>
	);
};

export default Inventorytable;
