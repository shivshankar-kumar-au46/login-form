import React, { useState } from "react";
import "./User.css";
import axios from 'axios';
import {BsFillBrightnessHighFill} from 'react-icons/bs'
import {Link, useNavigate} from "react-router-dom";

const User = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {data, status} = await axios.post("https://registration-form-hi2o.onrender.com/signup",
    {name:name, email:email, password:password})
    // setName("")
    // setEmail("")
    // setPassword("")
    console.log(data)
    if(data.success === false){
      alert("User already exist please login")
      
    } else {
      navigate("/login")
      alert('user created successfully !')
    }
  };


  return (
    <div className="container">
         <div className="circle">
        <BsFillBrightnessHighFill />
      </div>
      <div className="inner-container">
        <div className="heading">
          <h1>Signup Form</h1>
        </div>
        <form onSubmit={handleSubmit} className="form-div">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            placeholder="enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
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
          <Link to={'/login'}>
        <a className="have-an-acc" >Already have an account</a>
        </Link>
          <button type="submit">Singup</button>
        </form>
      </div>
    </div>
  );
};

export default User;
