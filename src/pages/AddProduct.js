/** @format */

import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { BsImage } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router";
import Adminsidemenu from "../components/Adminsidemenu";
import "../styles/addproduct.css";
import instance from "../config/api";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const AddProduct = () => {
	const [product, setProduct] = useState({
		"productName": "",
		"growthHabit": "",
		"lightLevel": "",
		"waterRequirements": "",
		"quantity": 0,
		"description": "",
		"productType": "",
		"productPrice": 0,
		"categoryName": ""
	})
	const [status, setStatus] = useState(true)
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault()
		setStatus(false)

		instance.post("/api/v1/admin/create-product", {product}, {
			headers: {
				Authorization: `Bearer ${Cookies.get("ADMIN_TOKEN")}`
			}
		})
		.then((res) => {
            console.log(res)
            if(res.status === 401){
                setStatus(true)
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "User does not exist"
                  });
            }else{
                setStatus(true)
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
				setProduct({
					"productName": "",
					"growthHabit": "",
					"lightLevel": "",
					"waterRequirements": "",
					"quantity": 0,
					"description": "",
					"productType": "",
					"productPrice": 0,
					"categoryName": ""
				})
            }
        }).catch(error => {
            console.log(error) 
            setStatus(true)
        })


	}

	const handleDiscard = (e) => {
		e.preventDefault()
		setProduct({
			"productName": "",
			"growthHabit": "",
			"lightLevel": "",
			"waterRequirements": "",
			"quantity": 0,
			"description": "",
			"productType": "",
			"productPrice": 0,
			"categoryName": ""
		})
	}

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
								<input type="text" value={product.productName} onChange={(e) => setProduct({...product, productName: e.target.value})}/>
							</div>
							<div className="inputWrapper">
								<label htmlFor="">Category Name</label>
								<input name="" id=""  value={product.categoryName}  onChange={(e) => setProduct({...product, categoryName: e.target.value})}/>
							</div>
							<div className="inputWrapper">
								<label htmlFor="">Description</label>
								<textarea name="" id="" cols="30" rows="5" value={product.description}  onChange={(e) => setProduct({...product, description: e.target.value})}></textarea>
							</div>
						</div>
						<div className="details">
							<h2>Details</h2>
							<div className="inputContainer">
								<div className="inputWrapper">
									<label htmlFor="">Light Level</label>
									<input type="text" value={product.lightLevel}  onChange={(e) => setProduct({...product, lightLevel: e.target.value})}/>
								</div>
								<div className="inputWrapper">
									<label htmlFor="">Water Requirement</label>
									<input type="text" value={product.waterRequirements}  onChange={(e) => setProduct({...product, waterRequirements: e.target.value})}/>
								</div>
							</div>
							<div className="inputContainer">
								<div className="inputWrapper">
									<label htmlFor="">Growth Habit</label>
									<input type="text" value={product.growthHabit} onChange={(e) => setProduct({...product, growthHabit: e.target.value})}/>
								</div>
								<div className="inputWrapper">
									<label htmlFor="">Quanity Available</label>
									<input type="number" value={product.quantity} onChange={(e) => setProduct({...product, quantity: e.target.value})}/>
								</div>
							</div>
							<div className="inputContainer">
								<div className="inputWrapper">
									<label htmlFor="">Product Price</label>
									<input type="number" value={product.productPrice}  onChange={(e) => setProduct({...product, productPrice: e.target.value})}/>
								</div>
								<div className="inputWrapper">
									<label htmlFor="">Product Type</label>
									<select name="" id="" value={product.productType} onChange={(e) => setProduct({...product, productType: e.target.value})}>
										<option value="PLANT">PLANT</option>
										<option value="ACCESSORIES">ACCESSORIES</option>
									</select>
								</div>
							</div>
						</div>
						<div className="buttonWrapper">
							<button type="submit" onClick={handleSubmit}>{status ? "Add Product" : "Please wait"}</button>
							<button type="submit" onClick={handleDiscard}>Discard</button>
						</div>
					</div>

					
				</form>
			</div>
		</div>
	);
};

export default AddProduct;
