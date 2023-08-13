/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Overview from "./pages/Overview";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Inventory from "./pages/Inventory";
import Settings from "./pages/Settings";
import AddProduct from "./pages/AddProduct";
import User from "./pages/User";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/overview" element={<Overview />} />
					<Route path="/order" element={<Order />} />
					<Route path="/inventory" element={<Inventory />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/addproducts" element={<AddProduct />} />
					<Route path="/user" element={<User />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
