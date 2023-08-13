/** @format */


import Adminnavbar from "../components/Adminnavbar";
import Adminsidemenu from "../components/Adminsidemenu";
import "../styles/inventory.css";
import { NavLink } from "react-router-dom";
import Inventorytable from "../components/Inventorytable";
import instance from "../config/api";
import Cookies from "js-cookie";

const Inventory = () => {
	

	return (
		<div className="adminwrp">
			<Adminsidemenu />
			<div className="overview">
				<Adminnavbar />
				<div className="inventorywrp">
					<div className="pageinfo">
						<h1>Inventory</h1>
						<NavLink to="/addproducts">Add Product</NavLink>
					</div>
					<Inventorytable />
				</div>
			</div>
		</div>
	);
};

export default Inventory;
