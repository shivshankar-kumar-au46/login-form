import React, { useState,useEffect } from 'react'
import "./HomePage.css";
import Navbar from '../../components/navbar/Navbar';
import axios from 'axios';

const HomePage = () => {
    const [userData, setUserData] = useState([])

    // useEffect(async ()=>{
    //     const {data} = await axios.get("http://localhost:8000/getUser");
    //     console.log(data.allUser)
    //     // setUserData(data)
    // },[])

  return (
    
    <div className='home-container'>
      <Navbar />
      hello from home page
     </div>
  )
}

export default HomePage
