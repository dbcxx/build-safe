import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import './navbar.css'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (

<nav className="navigation">
    
      <a href="/" className="brand-name">
        <span className="build">Build</span>Sure
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
          <Link to= "/"> Home</Link>

          {/* <a href="/"> Home </a>  */}
            
          </li>
          <li>
          <Link to="#about">About</Link>
          {/* <a href="#about"> About </a>  */}
          </li>
          <li>
          <Link to="#contact">Contact</Link>
          {/* <a href="#contact"> Contact Us </a>             */}
          </li>
          <li>
            <button type="button" className="nav-login">SignUp</button>
          </li>
        </ul>
      </div>
    </nav>


  );
};

export default Navbar;




