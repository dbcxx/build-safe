import React from "react";
import "./section1.css";

const Section1 = () => {
  return (
    <section className="detail" id="about">
      <div className="container">
        <div className="display-title ">
          <h2 className="display-title-h2">What you'll love about Build Safe </h2>
        </div>
        <div className="row-1">
          <div className="detail-item">
            <span>
              <i className="fas fa-tablet-alt"></i>
            </span>
            <h2>INSURANCE </h2>
            <div className="line"></div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

          <div className="detail-item">
            <span>
              <i className="far fa-check-square"></i>
            </span>
            <h2>SECURITY</h2>
            <div className="line"></div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum{" "}
            </p>
          </div>

          <div className="detail-item">
            <span>
              <i className="far fa-bell"></i>
            </span>
            <h2>PROTOCOL</h2>
            <div className="line"></div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
