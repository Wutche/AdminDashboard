/** @format */

import React from "react";
import Adminsidemenu from "../components/Adminsidemenu";
import Adminnavbar from "../components/Adminnavbar";
import TableData from "../components/TableData";
const Order = () => {
	return (
		<>
			<div className="adminwrp">
				<Adminsidemenu />
				<div className="overview">
					<Adminnavbar />
				</div>
				<div className="ordertable">
					<TableData />
				</div>
			</div>
		</>
	);
};

export default Order;
