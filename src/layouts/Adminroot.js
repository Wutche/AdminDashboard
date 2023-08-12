/** @format */

import React from "react";
import { Outlet } from "react-router";
const Adminroot = () => {
	return (
		<div>
			{/* <Adminnavbar /> */}

			<Outlet />
			{/* <Adminsidemenu /> */}
		</div>
	);
};

export default Adminroot;
