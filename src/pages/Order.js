/** @format */

import React from "react";
import Adminsidemenu from "../components/Adminsidemenu";
import Adminnavbar from "../components/Adminnavbar";
import TableData from "../components/TableData";
import Odercard from "../components/Odercard";
import "../styles/order.css";
import orderData from "../components/OrdcrdData";
const Order = () => {
	const orderItems = orderData.map((item) => {
		return <Odercard key={item.id} {...item} />;
	});
	return (
		<>
			<div className="adminwrp">
				<Adminsidemenu />
				<div className="overview">
					<Adminnavbar />

					<div className="orderhero">
						<h1>Live Order</h1>
						<div className="ordercardwrp">
							{orderItems}
						</div>
						<div className="ordertable">
							<TableData />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Order;
