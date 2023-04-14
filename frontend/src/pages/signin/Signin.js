import React, { useState } from "react";
import "./Signin.css";
import HomePage from "../homePage/HomePage";
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";

const User = () => {
    const navigate = useNavigate();
//   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {data, status} = await axios.post("https://registration-form-hi2o.onrender.com/signin",
    {email:email, password:password})
    // setName("")
    // setEmail("")
    // setPassword("")
    console.log(data)

    if(data.status === 'success') {
        console.log(data);
        navigate("/home");
        // return true;
        alert('Login successfully')
    } else {
        alert("User not found please register first")
    }

  };


  return (
    <div className="container">
         <div className="circle">
         <BsFillBrightnessHighFill />
      </div>
      <div className="inner-container">
        <div className="heading">
          <h1>Signin Form</h1>
        </div>
        <form onSubmit={handleSubmit} className="form-div">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            placeholder="enter your email"
            required
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={password}
            placeholder="enter your password"
            required
            onChange={(e) => {setPassword(e.target.value)}}
          />
          <Link to={'/signup'}>
        <a style={{color:"white"}}>Don't have an account</a>
        </Link>
          <button type="submit">Login</button>
        </form>
        
      </div>
    </div>
  );
};

export default User;
