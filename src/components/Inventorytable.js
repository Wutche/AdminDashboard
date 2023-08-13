/** @format */
import React from "react";
import { useEffect, useState } from "react";
import { Table, Avatar } from "@mantine/core";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import inventoryport from "../images/portrait.jpg";
import Cookies from "js-cookie";
import instance from "../config/api";

const Inventorytable = () => {
	const [product, setProduct] = useState([])

	useEffect(() => {
		instance.get(`/api/v1/user/getAllProducts`, {
			headers: {
				Authorization: `Bearer ${Cookies.get("ADMIN_TOKEN")}`
			}
		}).then((res) => {
			console.log(res.data.content)
			setProduct(res.data.content)
		})

		console.log(product)
	}, [])

	const handleEdit = (id) => {
		Cookies.set("PRODUCT_ID", id)
	}
	const handleDelete = (id) => {
		Cookies.set("PRODUCT_ID", id)
	}
	const rows = product.map((element) => (
		<tr key={element.name}>
			<td>{`#${element.productId}`}</td>
			<td>{element.productName}</td>
			<td>
				<Avatar size={26} src={element.image} radius={26} />
			</td>
			<td>{element.lightLevel}</td>
			<td>{element.waterRequirement}</td>
			<td>{element.growthHabit}</td>
			<td>{element.description}</td>
			<td>{element.Availability}</td>
			<td>{element.quantity}</td>
			<td>{element.categoryName}</td>
			<td onClick={() => handleEdit(element.productId)}>
				<element.inventoryEditICon
					cursor="pointer"
					size="20px"
					color="rgb(11, 102, 11, 1)"
				/>
			</td>
			<td onClick={() => handleDelete(element.productId)}>
				{" "}
				<element.inventoryDeleteICon
					cursor="pointer"
					size="20px"
					color="rgb(223, 3, 3)"
				/>{" "}
			</td>
		</tr>
	));
	return <>
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
		</>;
};

export default Inventorytable;
