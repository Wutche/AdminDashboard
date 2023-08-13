/** @format */

import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { BsImage } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router";
import Adminsidemenu from "../components/Adminsidemenu";
import "../styles/product.css"

const AddProduct = () => {
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
		<div className="adminwrp">
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
								<label htmlFor="">Title</label>
								<input type="text" />
							</div>
							<div className="inputWrapper">
								<label htmlFor="">Image</label>
								<input
									type="file"
									accept="image/*"
									onChange={handleImageChange}
								/>
							</div>
							<div className="inputWrapper">
								<label htmlFor="">Description</label>
								<textarea name="" id="" cols="30" rows="5"></textarea>
							</div>
						</div>
						<div className="details">
							<h2>Details</h2>
							<div className="inputWrapper">
								<label htmlFor="">Category</label>
								<input type="text" />
							</div>
							<div className="inputContainer">
								<div className="inputWrapper">
									<label htmlFor="">Price</label>
									<input type="text" />
								</div>
								<div className="inputWrapper">
									<label htmlFor="">Size: </label>
									<select name="" id="">
										<option value=""></option>
										<option value="S">S</option>
										<option value="M">M</option>
										<option value="L">L</option>
										<option value="XL">XL</option>
										<option value="XXL">XXL</option>
									</select>
								</div>
							</div>
							<div className="inputContainer">
								<div className="inputWrapper">
									<label htmlFor="">Brand</label>
									<input type="text" />
								</div>
								<div className="inputWrapper">
									<label htmlFor="">Color</label>
									<input type="text" name="" id="" />
								</div>
							</div>
						</div>
						<div className="buttonWrapper">
							<button type="submit">Add Product</button>
							<button type="submit">Discard</button>
						</div>
					</div>

					<div className="rightAdd">
						<div className="imageWrap">
							<h2>Image Preview</h2>
							<div className="image">
								{previewImage ? <img src={previewImage} alt="" /> : <BsImage />}
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
