/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Adminroot from "./layouts/Adminroot";
import Overview from "./pages/Overview";
import Order from "./pages/Order";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Overview />} />
					<Route path="/order" element={<Order />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
