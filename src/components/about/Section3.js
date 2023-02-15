import React from "react";
import "./section3.css";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import insur from "../../assets/insurance.svg";
import innovate from "../../assets/innovate.svg";
import provide from "../../assets/resources.svg";
import care from "../../assets/care.svg";
import assist from "../../assets/question1.svg";
import connect from "../../assets/connect.svg";
import educate from "../../assets/educate.svg";

const Section3 = () => {
  const options = {
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    items: 1,
  };

  return (
    <section className="testimonial" id="testimonial">
      <div className="container">
        <div className="title">
          <h2 className="wow animate__animated animate__bounceIn animate__fast">
            What you'll love about BuildSure{" "}
          </h2>
          <p className="text">At your best interest</p>
        </div>

        <OwlCarousel options={options}>
          {/* <div className = "row owl-carousel owl-theme wow animate__animated animate__fadeInUp animate__fast"> */}
          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={educate} alt="" />
              {/* {item.items} */}
            </div>
            <p>We Educate</p>
            <p>
              We are committed to ensuring everyone understand their
              obligsations and rights as to providing and occupying safe builds
              for the general public
            </p>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={innovate} alt="" />
            </div>
            <p>We Innovate</p>
            <p>
              We develop custom solutions to the specific requirements of our
              clients and community
            </p>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={connect} alt="" />
            </div>
            <p>We Mediate</p>
            <p>
              We ensure all parties including tenants, landords, insurers and
              the insured have access to fair claims and processes.
            </p>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={assist} alt="" />
            </div>
            <p>We Assist</p>
            <p>
              We have knowledgeable and friendly staff available to answer your
              questions and assist you with any insurance-related needs.
            </p>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-img">
              <img src={care} alt="" />
            </div>
            <p>We Care</p>
            <p>
              We are committed to delivering exceptional customer service,
              ensuring that you have a seamless and stress-free experience with
              your insurance coverage.
            </p>
          </div>
          {/* </div> */}
        </OwlCarousel>
      </div>
    </section>
  );
};

export default Section3;
