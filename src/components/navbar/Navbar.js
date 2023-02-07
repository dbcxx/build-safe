import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (

<nav className="navigation">
    
      <a href="/" className="brand-name">
        BuildSafe
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>
            
          </li>
          <li>
          {/* <NavLink to="/about">About</NavLink> */}
          <a href="#about"> About </a> 
          </li>
          <li>
          {/* <NavLink to="#contact">Contact</NavLink> */}
          <a href="#contact"> Contact Us </a>            
          </li>
        </ul>
      </div>
    </nav>




    // <nav className="navbar">
    //   <div className="container">
    //     <div className="logo">
    //     <img src={Brand} alt="brand_logo" />
    //     </div>

    //   </div>
    //   <div className="nav-elements">
    //     <ul>
    //       <li>
    //         <NavLink to="/">Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/about">About</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to="/contact">Contact</NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;




