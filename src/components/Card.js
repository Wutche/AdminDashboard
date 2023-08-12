/** @format */

import React from "react";
// import { HiShoppingCart } from "react-icons/hi";
const Card = (props) => {
	return (
		<div className="card">
			<span>
				<props.icon size={"20px"} color="white" className="icon" />
			</span>
			<h1 className="price">{props.total}</h1>
			<p>{props.title}</p>
		</div>
	);
};

export default Card;
