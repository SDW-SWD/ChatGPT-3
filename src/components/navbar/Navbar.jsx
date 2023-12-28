import React ,{useState} from 'react';
import './navbar.css';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'

const Navbar = () => {

    const [toggleMenu , setToggleMenu] = useState(false);
    const Menu =()=>(
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is a GTP3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#fetures">Case Study</a></p>
            <p><a href="#block">Library</a></p>
        </>
    )

  return (
    <div className= "gpt3__navbar">
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
                <img src={logo}alt="logo"/>
            </div>
            <div className="gpt3__navbar-links_container">
              <Menu />
            </div>
        </div>
        <div className="gtp3__navbar-sign">
            <p>SignIn</p>
            <button type="button">SignUp</button>
        </div>
        <div className="gpt3__navbar-menu">
            {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={()=> setToggleMenu(true)}/>
            }
            {toggleMenu && (
                <div className="gpt3__navbar-menu_container scale-up-center" >
                    <div className="gtp3__navbar-menu_container-links"></div>
                    <Menu/>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar
