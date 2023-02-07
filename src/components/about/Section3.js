import React from "react";
import './section3.css';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';

const Section3 = () => {

  
  const options ={
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    items: 1
  }

    return (
        <section className = "testimonial" id = "testimonial">
      <div className = "container">
        <div className = "title">
          <h2 className = "wow animate__animated animate__bounceIn animate__fast">What we do </h2>
          <p className = "text">Lorem ipsum dolor sit amet</p>
        </div>

      <OwlCarousel options={options} >
        
      {/* <div className = "row owl-carousel owl-theme wow animate__animated animate__fadeInUp animate__fast"> */}
          <div className = "testimonial-item">
            <div className = "testimonial-img">
              <img src = "./assets/profile-pics.svg" alt = "" />
              {/* {item.items} */}
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            
          </div>

          <div className = "testimonial-item">
            <div className = "testimonial-img">
              <img src = "./assets/profile-pics.svg" alt = "" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            
          </div>

          <div className = "testimonial-item">
            <div className = "testimonial-img">
              <img src = "./assets/profile-pics.svg" alt = "" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            
          </div>

          <div className = "testimonial-item">
            <div className = "testimonial-img">
              <img src = "./assets/profile-pics.svg" alt = "" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            
          </div>
        {/* </div> */}
      </OwlCarousel>
        
      </div>
    </section>
    );
}

export default Section3;