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
	const [filteredProduct, setFilteredProduct] = useState([])
	const [filterParam, setFilterParam] = useState("")

	useEffect(() => {
		instance.get(`/api/v1/user/getAllProducts`, {
			headers: {
				Authorization: `Bearer ${Cookies.get("ADMIN_TOKEN")}`
			}
		}).then((res) => {
			console.log(res.data.content)
			setProduct(res.data.content)
			setFilteredProduct(res.data.content)
		})
		console.log(filteredProduct)
		console.log(product)
	}, [filterParam])

	const handleEdit = (id) => {
		Cookies.set("PRODUCT_ID", id)
	}
	const handleDelete = (id) => {
		Cookies.set("PRODUCT_ID", id)
	}



	const rows = product.map((element) => (
		<tr key={element.productId}>
			<td>{`#${element.productId}`}</td>
			<td>{element.productName}</td>
			<td>
				<Avatar size={26} src={element.image} radius={26} />
			</td>
			<td>{element.lightLevel}</td>
			<td>{element.waterRequirement}</td>
			<td>{element.growthHabit}</td>
			<td>{element.description}</td>
			<td>{element.productPrice}</td>
			<td>{element.quantity}</td>
			<td>{element.category}</td>
			<td>{element.productType}</td>
			<td onClick={() => handleEdit(element.productId)}>
				edit
			</td>
			<td onClick={() => handleDelete(element.productId)}>
				delete
			</td>
		</tr>
	));
	return <>
		<div className="inventorytable">
			<div className="inventoryfilter">
				{/* <select name="Filter" id="filter">
					<option value="filterby"  onClick={() => setFilterParam("")}> Filter BY </option>
					<option value="flowering"  onClick={() => setFilterParam("&filterParam=flowering")}> Flowering </option>
					<option value="non-flowering" onClick={() => setFilterParam("non-flowering")}>non-flowering</option>
					<option value="indoor" onClick={() => setFilterParam("indoor")}>indoor</option>
					<option value="outdoor" onClick={() => setFilterParam("outdoor")}>outdoor</option>
					<option value="succulents" onClick={() => setFilterParam("&filterParam=flowering")}>succulents</option>
				</select> */}
			</div>
			<Table>
				<thead>
					<tr>
						<th>Product Id</th>
						<th>Product Name</th>
						<th>image</th>
						<th>Light Level</th>
						<th>Water Requirements</th>
						<th>Growth Habit</th>
						<th>Description</th>
						<th>Product Price</th>
						<th>Quantity</th>
						<th>Category</th>
						<th>Product Type</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</div>
		</>;
};

export default Inventorytable;
