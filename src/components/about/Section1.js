import React from "react";
import "./section1.css";

const Section1 = () => {
  return (
    <section className="detail" id="about">
      <div className="container">
        <div className="display-title ">
          <h2 className="display-title-h2">
            What you'll love about Build Safe{" "}
          </h2>
        </div>
        <div className="row-1">
         

          <div className="detail-item">
            <span>
              <i className="fas fa-fingerprint"></i>
            </span>
            <h2>SECURITY</h2>
            <div className="line"></div>
            <p className="text">
              We take the security of your personal and financial information
              very seriously. Our app is built with robust security protocols
              and encryption to ensure that your data is protected at all times
            </p>
          </div>

          <div className="detail-item">
            <span>
              <i className="fas fa-umbrella"></i>
            </span>
            <h2>INSURANCE </h2>
            <div className="line"></div>
            <p className="text">
              Your insurance coverage is now just a few taps away with our
              convenient and user-friendly app. Whether you need to get your
              insurance certificate, make or renew your registration, file a
              claim, or simply get information about your coverage, our app
              makes it easy and accessible.
            </p>
          </div>

          <div className="detail-item">
            <span>
              <i className="fas fa-book-open"></i>
            </span>
            <h2>PROTOCOL</h2>
            <div className="line"></div>
            <p className="text">
              We adhere to industry-standard security protocols to ensure that
              all transactions and data transfers are secure and protected. You
              can trust that your information is safe with us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
