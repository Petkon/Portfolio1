import "./HeroImgStyles.css";

import React from 'react'
import Introimg from "../assets/intro-bg.png"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">  
      <img className="intro-img" alt="intro" src={Introimg}/> 
 </div> 
 <div className="content">
 <p>HI,I'M A FREELANCER</p>
 <h1>React Developer.</h1> 
 <div>
    <Link to="/Project" className="btn">Projects</Link>
    <Link to="/Contact" className="btn btn-light">Contacts</Link>

    </div> 
 </div>   
 </div>
  )
}

export default HeroImg
