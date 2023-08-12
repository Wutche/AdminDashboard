/** @format */

import React from "react";
import potrait from "../images/portrait.jpg";
const Adminnavbar = () => {
	return (
		<nav>
			<div className="searchbar">
				<input type="text" placeholder="Search" />
			</div>
			<div className="navaccounts">
				<div className="img">
					<img src={potrait} alt="potrait-man" />
				</div>
				<div className="accountname">
					<h1>John Doe</h1>
					<p>Super Admin</p>
				</div>
			</div>
		</nav>
	);
};

export default Adminnavbar;
