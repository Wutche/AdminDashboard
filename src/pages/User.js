/** @format */

import React from "react";
import Adminsidemenu from "../components/Adminsidemenu";
import Adminnavbar from "../components/Adminnavbar";
import Registereduser from "../components/Registereduser";
import "../styles/user.css";
const User = () => {
	return (
		<div className="adminwrp userwrp">
			<Adminsidemenu />
			<div className="overview">
				<Adminnavbar />
				<div className="userdetails">
					<h1>User</h1>
					<Registereduser />
				</div>
			</div>
		</div>
	);
};

export default User;
