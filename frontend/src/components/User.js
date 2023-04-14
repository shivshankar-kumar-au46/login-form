import React, { useState } from "react";
import "./User.css";
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";

const User = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {data, status} = await axios.post("http://localhost:8000/signup",
    {name:name, email:email, password:password})
    // setName("")
    // setEmail("")
    // setPassword("")
    console.log(data)
    if(data.success === false){
      alert("User already exist please login")
      
    } else {
      navigate("/signin")
      alert('user created successfully !')
    }
  };


  return (
    <div className="container">
         <div className="circle">
        Hello Shiv
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
          <Link to={'/signin'}>
        <p style={{color:"white"}}>Already have an account</p>
        </Link>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default User;
