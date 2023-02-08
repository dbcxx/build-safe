import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <div class="container-1">
          <div className="contact-first">
          <div class="title">
              <h2 class="mob-align wow animate__animated animate__bounceIn animate__fast">
                Quick Links 
              </h2>
            </div>
            <div className="contact-first-links">
              <ul className="first-space">
                <li>
                  <a href="/">About us </a>
                </li>
                <li>
                  <a href="/">Career </a>
                </li>
                <li>
                  <a href="/">Policy </a>
                </li>
                <li>
                  <a href="/">location </a>
                </li>
                <li>
                  <a href="/">Login </a>
                </li>
                <li>
                  <a href="/">Create Account </a>
                </li>
              </ul>
            </div>
          </div>


          <div className="contact-middle">
          <div class="title">
              <h2 class=" mob-align  wow animate__animated animate__bounceIn animate__fast">
                Features
              </h2>
              
            </div>
            <div className="contact-first-links">
              <ul className="first-space">
                <li>
                  <a href="/">Agencies </a>
                </li>
                <li>
                  <a href="/">Experts </a>
                </li>
                <li>
                  <a href="/">Investor Relations </a>
                </li>
                <li>
                  <a href="/">Terms of Service  </a>
                </li>
                {/* <li>
                  <a href="/">Login </a>
                </li>
                <li>
                  <a href="/">Create Account </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="contact-last">
            <div class="title">
              <h2 class="  wow animate__animated animate__bounceIn animate__fast">
                Contact Us
              </h2>
              
            </div>
            <div class=" wow animate__animated animate__fadeInUp animate__fast">
              <div class="contact-left">
                
                <div class="footer-links">
                  <a href="https://wa.me/" class="center">
                    <i class="fab fa-whatsapp"></i>
                    
                  </a>
                  <a href="https://t.me/joinchat/" class="center">
                    <i class="fab fa-telegram"></i>
                  </a>
                  <a href="tel:+2340000000000" class="center">
                    <i class="fas fa-phone-alt"></i>
                  </a>
                  <a href="www.twitter.com" class="center">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer center">
        <div class="container">
          <p class="text">Copyright &copy; 2023 All rights reserved || BuildSafe</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
