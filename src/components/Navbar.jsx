import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./AMADERLOGO.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className='logo1' src={logo} alt="" />
      </div>
      <div className="space"></div>
      <ul id="ul-nb">
        <a classname="listitem" href="#"><li>Home</li></a>
        <a classname="listitem" href="#"><li>About Us</li></a>
        <a  classname="listitem"href="#"><li>Community</li></a>
        <a classname="listitem" href="#"><li>Careers</li></a>
      </ul>
    </div>
  )
}
