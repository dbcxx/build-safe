import React from "react";
import "./section1.css";

const Section1 = () => {
  return (
    <section className="detail" id="about">
      <div className="container-sec1">
        <div className="display-title ">
          <h2 className="display-title-h2">What we do </h2>
        </div>
        <div className="row-1">
          <div className="detail-item">
            <span>
              <i className="far fa-building"></i>
            </span>
            <h2>ENTERPRISE SOLUTION</h2>
            <div className="line"></div>
            <p className="text">
              We provide technology to building regulations administrative and
              enforcement agencies as well as large corporates to ensure
              continuous compliance with all legal requirements
            </p>
          </div>

          <div className="detail-item">
            <span>
              <i className="fas fa-file-invoice-dollar"></i>
            </span>
            <h2>CAUTION FEE MANAGEMENT</h2>
            <div className="line"></div>
            <p className="text">
              We hold caution deposits on behalf of landlord and tenants to
              ensure an independent assessment and disbursement of fees due at
              expiration of tenancies.
            </p>
          </div>

          <div className="detail-item">
            <span>
              <i className="fas fa-exclamation-circle"></i>
            </span>
            <h2>RISK RATING</h2>
            <div className="line"></div>
            <p className="text">
              We provide risk rating for buildings useful to insurance companies
              and other parties for the purpose of risk management.
            </p>
          </div>
        </div>
      </div>
      <div className="row-cta">
        <div className="container row-cta-center">
          <h3>
            Is your building Insured as required by law? Confirm or get your
            building insurance here!
          </h3>
          <br />
          <button type="button" className="btn-login">
            Sign up as a landlord/tenant{" "}
          </button>
          <br />
          <p>Request a risk rating assessment</p>
        </div>
      </div>
    </section>
  );
};

export default Section1;
