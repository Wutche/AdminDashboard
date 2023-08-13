/** @format */

import React from "react";
import Adminsidemenu from "../components/Adminsidemenu";
import { Avatar } from "@mantine/core";
import { useState } from "react";
import "../styles/settings.css";

const Settings = () => {
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
		<div className="adminwrp settingswrp">
			<Adminsidemenu />
			<div className="overview settingswrp">
				<div className="profile">
					<Avatar color="orange" className="avatar"></Avatar>
					<div className="profileInfo">
						<h2>PlantNest</h2>
						<p>Delivering Plants, Delivering Happiness</p>
					</div>
				</div>

				<div className="companySettings">
					<div className="companyInfo">
						<h2>Profile</h2>
						<p>Edit and save your profile details here</p>
					</div>
					<form action="">
						<div className="inputContainer">
							<div className="inputWrapper">
								<label htmlFor="">First Name:</label>
								<input type="text" />
							</div>
							<div className="inputWrapper">
								<label htmlFor="">Last Name:</label>
								<input type="text" />
							</div>
						</div>
						<div className="inputWrapper">
							<label htmlFor="">Email Address:</label>
							<input type="email" />
						</div>
						{/* <div className="inputWrapper">
							<label htmlFor="">Street Address:</label>
							<input type="email" />
						</div> */}
						<div className="inputContainer">
							<div className="inputWrapper">
								<label htmlFor="">State:</label>
								<select name="" id="">
									<option value=""></option>
								</select>
							</div>
							<div className="inputWrapper">
								<label htmlFor="">Country:</label>
								<select name="" id="">
									<option value=""></option>
								</select>
							</div>
						</div>
						<button type="submit">Submit</button>
					</form>
				</div>

				<div className="companySettings">
					<div className="companyInfo">
						<h2>Profile Picture</h2>
						<p>Edit and save your profile picture here</p>
					</div>

					<form action="">
						<div className="inputWrapper">
							<label htmlFor="">Select Image:</label>
							<input
								type="file"
								accept="image/*"
								onChange={handleImageChange}
							/>
							<div className={previewImage ? "imagePreview" : "hide"}>
								<img src={previewImage} alt="" />
							</div>
						</div>
						<button type="Submit">Submit</button>
					</form>
				</div>

				<div className="companySettings">
					<div className="companyInfo">
						<h2>Password</h2>
						<p>Edit and save your password here</p>
					</div>

					<form action="">
						<div className="inputWrapper">
							<label htmlFor="">Old Password:</label>
							<input type="password" name="" id="" />
						</div>
						<div className="inputWrapper">
							<label htmlFor="">New Password:</label>
							<input type="password" name="" id="" />
						</div>
						<div className="inputWrapper">
							<label htmlFor="">Confirm Password:</label>
							<input type="password" name="" id="" />
						</div>
						<button type="Submit">Submit</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Settings;
