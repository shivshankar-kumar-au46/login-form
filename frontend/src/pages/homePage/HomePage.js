import React, { useState,useEffect } from 'react'
import "./HomePage.css";
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
    const [userData, setUserData] = useState([])

    const token = Cookies.get('userToken')

    useEffect( ()=>{
       if(!token){
        navigate('/login')
       }
    },[])

  return (
    
    <div className='home-container'>
      <Navbar />
      <div className="inner-body">
<h1>Welcome to Home page</h1>
      </div>
      
     </div>
  )
}

export default HomePage
