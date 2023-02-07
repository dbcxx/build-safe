import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header id="welcome-section">
      <div className="forest" />

      <div className="container">
        <div className="typing">
        <TypeAnimation
          // Same String at the start will only be typed once, initially
          sequence={[
            "Ensure buildings are safe for habiting",
            1000,
            "Ensure buildings are safe for Sex",
            2000,
            "Ensure buildings are safe for Ageing",
            3000,
            "Ensure buildings are safe for Death",
            4000,
          ]}
          speed={20} // Custom Speed from 1-99 - Default Speed: 40
          style={{ }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
        </div>
        
      </div>
    </header>
  );
};

export default Header;
