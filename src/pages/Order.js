/** @format */

import React from "react";
import Adminsidemenu from "../components/Adminsidemenu";
import Adminnavbar from "../components/Adminnavbar";
const Order = () => {
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

export default Order;
