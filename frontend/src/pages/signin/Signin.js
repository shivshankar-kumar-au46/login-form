import React, { useState } from "react";
import "./Signin.css";
import HomePage from "../homePage/HomePage";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const User = () => {
  const navigate = useNavigate();
  //   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:8000/login", {
      email: email,
      password: password,
    });
    const { success, token } = data.data;
    const tokens = token;
    // Set the token in cookies
    Cookies.set("userToken", tokens);

    // To get the token from cookies, you can use:
    const tokenfromcookie = Cookies.get("userToken");

    console.log(tokens);

    if (success === true && tokenfromcookie) {
      navigate("/home");
      alert("Login successfully");
    } else {
      navigate("/login");
      alert("User not found please register first");
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            value={password}
            placeholder="enter your password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Link to={"/signup"}>
            <a style={{ color: "white" }}>Don't have an account</a>
          </Link>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default User;
