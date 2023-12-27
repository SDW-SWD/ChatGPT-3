import React from 'react';
import './navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className= "gpt3__navbar">
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
                <img src={logo}alt="logo"/>
            </div>
            <div className="gpt3__navbar-links_container">
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is a GTP3?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#fetures">Case Study</a></p>
                <p><a href="#block">Library</a></p>
            </div>
        </div>
        <div className="gtp3__navbar-sign">
            <p>SignIn</p>
            <button type="button">SignUp</button>
        </div>
    </div>
  )
}

export default Navbar
