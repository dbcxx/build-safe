import React from "react";
import "./header.css";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header id="welcome-section">
      <div className="header-container conttt">
        <div className="typing">
          <TypeAnimation
            // Same String at the start will only be typed once, initially
            sequence={[
              "Ensure buildings are safe for Individuals ",
              2000,
              "Ensure buildings are safe for Businesses",
              4000,
              "Ensure buildings are safe for Families",
              6000,
              "Ensure buildings are safe for Rentals",
              4000,
            ]}
            speed={20} // Custom Speed from 1-99 - Default Speed: 40
            style={{}}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </div>
        
      </div>
      <div className="conttt1">
      <div className=" text-p">
          Get our app today and enjoy the peace of mind that comes with knowing
          you have the insurance coverage you need right at your fingertips.
        </div>
        <div className="button-call">
          <span className="join">Join Us Today </span>
          {/* <Button1 variant={"signup"}>Signup Now</Button1> */}
          <button type="button" className="btn-login">
            Get Started{" "}
          </button>
          {/* <button type = "button" className = "btn-signup">Signup </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
