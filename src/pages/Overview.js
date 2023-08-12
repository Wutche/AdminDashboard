/** @format */

import React from "react";
import "../styles/overview.css";
import Adminnavbar from "../components/Adminnavbar";
import Adminsidemenu from "../components/Adminsidemenu";
import Card from "../components/Card";
import data from "../components/data";
import Chart from "../components/Barchart";
import plant from "../images/plant-pot.jpg";

const Overview = () => {
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
									<div className="profile">
										<div className="profileimg">
											<img src={plant} alt="" />
											<p>Plant pot</p>
										</div>
										<div className="price">
											<p>$20,000</p>
										</div>
									</div>
									<div className="profile">
										<div className="profileimg">
											<img src={plant} alt="" />
											<p>Plant pot</p>
										</div>
										<div className="price">
											<p>$20,000</p>
										</div>
									</div>
									<div className="profile">
										<div className="profileimg">
											<img src={plant} alt="" />
											<p>Plant pot</p>
										</div>
										<div className="price">
											<p>$20,000</p>
										</div>
									</div>
									<div className="profile">
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
