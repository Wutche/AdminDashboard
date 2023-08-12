/** @format */

import React from "react";
import "../styles/overview.css";
import Adminnavbar from "../components/Adminnavbar";
import Adminsidemenu from "../components/Adminsidemenu";
const Overview = () => {
	return (
		<>
			<div className="adminwrp">
				<Adminsidemenu />
				<div className="overview">
					<Adminnavbar />
				</div>
			</div>
		</>
	);
};

export default Overview;
