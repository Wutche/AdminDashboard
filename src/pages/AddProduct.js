/** @format */

import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { BsImage } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router";
import Adminsidemenu from "../components/Adminsidemenu";
import "../styles/addproduct.css";

const AddProduct = () => {
	const [product, setProduct] = useState({
		"productName": "J",
		"growthHabit": "",
		"lightLevel": "",
		"waterRequirements": "",
		"quantity": 0,
		"description": "",
		"productType": "",
		"productPrice": 0,
		"categoryName": ""
	})
	const navigate = useNavigate();

	const [previewImage, setPreviewImage] = useState(null);

	const handleImageChange = (event) => {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onloadend = () => {
				setPreviewImage(reader.result);
			};

			reader.readAsDataURL(file);
		} else {
			setPreviewImage(null);
		}
	};

	return (
		<div className="adminwrp addprdrp">
			<Adminsidemenu />
			<div className="overview addproductwrp">
				<div className="pageInfo">
					<IoMdArrowBack onClick={() => navigate("/inventory")} />
					<h2>Add New Product</h2>
				</div>

				<form action="">
					<div className="leftAdd">
						<div className="baseInformation">
							<h2>Base Information</h2>
							<div className="inputWrapper">
								<label htmlFor="">Product Name</label>
								<input type="text" />
							</div>
							<div className="inputWrapper">
								<label htmlFor="">Description</label>
								<textarea name="" id="" cols="30" rows="5"></textarea>
							</div>
						</div>
						<div className="details">
							<h2>Details</h2>
							<div className="inputContainer">
								<div className="inputWrapper">
									<label htmlFor="">Light Level</label>
									<input type="text" />
								</div>
								<div className="inputWrapper">
									<label htmlFor="">Water Requirement</label>
									<input type="text" />
								</div>
							</div>
							<div className="inputContainer">
								<div className="inputWrapper">
									<label htmlFor="">Growth Habit</label>
									<input type="text" />
								</div>
								<div className="inputWrapper">
									<label htmlFor="">Quanity Available</label>
									<input type="text" />
								</div>
							</div>
							<div className="inputContainer">
								<div className="inputWrapper">
									<label htmlFor="">Product Price</label>
									<input type="text" />
								</div>
								<div className="inputWrapper">
									<label htmlFor="">Product Type</label>
									<select name="" id="">
										<option value="PLANT">PLANT</option>
										<option value="ACCESSORIES">ACCESSORIES</option>
									</select>
								</div>
							</div>
						</div>
						<div className="buttonWrapper">
							<button type="submit">Add Product</button>
							<button type="submit">Discard</button>
						</div>
					</div>

					
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
