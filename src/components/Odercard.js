/** @format */

import React from "react";
const Odercard = (props) => {
	return (
		<div className="ordercard">
			<div
				className="ordericons"
				style={{ backgroundColor: props.backgroundColor }}>
				<span>
					<props.ordericons size={"2rem"} color={props.color} />
				</span>
			</div>
			<div className="crditem">
				<h1>{props.number}</h1>
				<p>{props.title}</p>
			</div>
		</div>
	);
};

export default Odercard;
