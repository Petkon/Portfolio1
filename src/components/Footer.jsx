import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color:"#fff" ,marginRight: "2rem"}}/>
            <div>
              <p>1111 Geo Milev.Venera 3 </p>
              <p>Sofia.</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff" ,marginRight: "2rem"}}/>
            +359 888 2533 12</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff" ,marginRight: "2rem"}}/>
            PetkoNikolov782@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company </h4>
          <p>This is me Petko Nikolov. Intern in a big company.
          I enjoy discussing new projects and writing code
          </p>
          <div className="social">
            <div className="social-icons">
              <FaFacebook size={30} style={{color:"#fff" ,marginRight: "1rem"}}/>
              <FaGithub size={30} style={{color:"#fff" ,marginRight: "1rem"}}/>
              <FaInstagram size={30} style={{color:"#fff" ,marginRight: "1rem"}}/>
            </div>
            <div className="social-text">
              <p>Follow us on social media!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
