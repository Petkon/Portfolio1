import "./AboutContentStyle.css";


import React from 'react'
import { Link } from "react-router-dom";
import pro5 from "../assets/project5.png";
import pro6 from "../assets/project6.png";
const AboutContent = () => {
  return  <div className="about">
    <div className="left">
        <h1>Who Am I ?</h1>
        <p>I'm a react front-end Developer.I create responsive secure websites for my clients.</p>
        <Link to="/Contact" className="btn">CONTACT</Link>
        
        

    </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pro5} className="img" alt="tv" />
                </div>
                <div className="img-stack bottom">
                    <img src={pro6} className="img" alt="tv" />
                </div>

            </div>
        </div>
  </div>
}

export default AboutContent
