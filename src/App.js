/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Adminroot from "./layouts/Adminroot";
import Overview from "./pages/Overview";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Settings from "./pages/Settings";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/overview" element={<Overview />} />
					<Route path="/order" element={<Order />} />
					<Route path="/settings" element={<Settings />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
