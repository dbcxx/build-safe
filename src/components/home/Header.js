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
              "Building risk management tools for Rentals ",
              2000,
              "Building risk management tools for Individuals",
              4000,
              "Building risk management tools for Families",
              6000,
              "Building risk management tools for Businesses",
              6000,
              "Building risk management tools for Schools",
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
          <span className="join">Contact us today </span>
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
