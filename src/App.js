/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Adminroot from "./layouts/Adminroot";
import Overview from "./pages/Overview";
function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Overview />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
