import React from "react";
import './section2.css';
import home1 from '../../assets/home1.jpeg';
import home2 from '../../assets/home-2.jpg';

const Section2 = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="heading">
          <h2 className="section-heading">about us</h2>
          <p className="sub-heading">
          BuildSure Limited is an insurance technology SPV and is the primary developer and promoter of the BuildSure 
project and its technologies.
BuildSure is a subsidiary of Baye Capital, a venture studio with a track record of building and implementing 
large scale national technology infrastructure that form the building blocks of smart cities. BuildSure has a 
sister company implementing a 10 year project between the Federal Road Safety Commission, State Traffic 
enforcement agencies and the Nigerian Insurers Association to ensure adequate vehicle insurance penetration 
and develop the official risk rating system of the industry. </p>
        </div>
        <div className="row-container">
          <div className="row">
            <div className="img-col">
              <img
                
                alt=""
                src={home1}
              />
            </div>
            <div className="text-col">
              <h3>
                Our
                <br />
                Mission
              </h3>
              <p>
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
          <div className="row">
            <div className="text-col">
              <h3>
                Our
                <br />
                Vision
              </h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className="img-col n-margin">
              <img
                alt=""
                src={home2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section2;
