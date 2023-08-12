/** @format */

import React from "react";
import "../styles/login.css";

const Login = () => {
	return (
		<div className="formwrp">
			<form>
				<h1>Admin</h1>
        
				<input type="email" placeholder="Email" />

				<input type="text" placeholder="Password" />

				<button>Sign In</button>
			</form>
		</div>
	);
};

export default Login;
