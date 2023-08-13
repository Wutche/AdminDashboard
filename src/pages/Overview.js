/** @format */

import React, { useEffect, useState } from "react";
import "../styles/overview.css";
import Adminnavbar from "../components/Adminnavbar";
import Adminsidemenu from "../components/Adminsidemenu";
import Card from "../components/Card";
import data from "../components/data";
import Chart from "../components/Barchart";
import plant from "../images/plant-pot.jpg";
import instance from "../config/api";
import Cookies from "js-cookie";
import axios from "axios";

const Overview = () => {
	const [availablePrd, setAvailablePrd] = useState(0)
	const [plantSold, setPlantSold] = useState(0)
	const [accessorySold, setAccessorySold] = useState(0)

	let baseUrl = "http://localhost:8081"
	useEffect( () =>  {
		axios.all([
			 axios.get(`${baseUrl}/api/v1/admin/products-available-count`, {
			headers: {
				Authorization: `Bearer ${Cookies.get("ADMIN_TOKEN")}`
			}}),
			 axios.get(`${baseUrl}/api/v1/admin/products-sold-count/PLANT`, {
			headers: {
				Authorization: `Bearer ${Cookies.get("ADMIN_TOKEN")}`
			}})
		]).then((res1, res2) =>{
			setAvailablePrd(res1.data)
			// setPlantSold(res2.data)
			console.log(res2)
			// setPlantSold(res3.data)
			// console.log(res3)
		} )
	}, [])

	const cardItems = data.map((item) => {
		return <Card key={item.id} {...item} />;
	});
	return (
		<>
			<div className="adminwrp">
				<Adminsidemenu />
				<div className="overview">
					<Adminnavbar />
					<div className="hero">
						<h1>Dashboard</h1>
						<div className="carditems">{cardItems}</div>
						<div className="chartelmnts">
							<div className="chart">
								<Chart />
							</div>
							<div className="accessorieswrp">
								<h1>Top Accessories</h1>
								<p>Sales performance by accessories</p>
								<div className="accessory">
									<div className="accessoryprofile">
										<div className="profileimg">
											<img src={plant} alt="" />
											<p>Plant pot</p>
										</div>
										<div className="price">
											<p>$20,000</p>
										</div>
									</div>
									<div className="accessoryprofile">
										<div className="profileimg">
											<img src={plant} alt="" />
											<p>Plant pot</p>
										</div>
										<div className="price">
											<p>$20,000</p>
										</div>
									</div>
									<div className="accessoryprofile">
										<div className="profileimg">
											<img src={plant} alt="" />
											<p>Plant pot</p>
										</div>
										<div className="price">
											<p>$20,000</p>
										</div>
									</div>
									<div className="accessoryprofile">
										<div className="profileimg">
											<img src={plant} alt="" />
											<p>Plant pot</p>
										</div>
										<div className="price">
											<p>$20,000</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Overview;
