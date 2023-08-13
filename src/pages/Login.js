/** @format */
import { useState } from 'react';
import { useNavigate } from 'react-router';
import React from "react";
import Cookies from 'js-cookie';
import "../styles/login.css";
import Swal from 'sweetalert2';
import instance from '../config/api';

const Login = () => {
	
    const [status, setStatus] = useState(true)
    const navigate = useNavigate()
	
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

	const handleSubmit	 = (e) => {
        e.preventDefault();
        setStatus(false)

        instance.post("/api/v1/auth/login", {
            usernameOrEmail: email, // Assuming you're using email for login
            password
        })
        .then((res) => {
            console.log(res)
            if(res.status === 401){
                setStatus(true)
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: "User does not exist"
                  });
            }else{
                setStatus(true)
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
				// if()
                Cookies.set("ADMIN_TOKEN", res.data)
				// getRole()
                  setTimeout(() => {
                      navigate("/overview");
                  }, 1500)
            }
        }).catch(error => {
            console.log(error) 
            setStatus(true)
        })
    }
	

	return (
		<div className="formwrp">
			<div className="overlay">
			<form >
				<h1>Admin</h1>
        
				<input type="email" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)}/>

				<input type="text" placeholder="Password" value={password}
                                onChange={(e) => setPassword(e.target.value)}/>

				<button onClick={handleSubmit} disabled={!status ? true : false}>{status ? "Log in" : "Please wait..."}</button>
			</form>
			</div>
		</div>
	);
};

export default Login;
