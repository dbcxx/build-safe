import React from "react";
import './contact.css';

const Contact = () => {

    return (
        <>
        <section class = "contact" id = "contact">
        <div class = "container">
          <div class = "title">
            <h2 class = "wow animate__animated animate__bounceIn animate__fast">Contact Us</h2>
            <p class = "text">How to contact us</p>
          </div>
  
          <div class = "row wow animate__animated animate__fadeInUp animate__fast">
            <div class = "contact-left">
              <h2>Social media</h2>
                 <div class = "footer-links">
                    <a href = "https://wa.me/" class = "center">
                      <i class = "fab fa-whatsapp"></i>
                    </a>
                    <a href = "https://t.me/joinchat/" class = "center">
                      <i class = "fab fa-telegram"></i>
                    </a>
                    <a href = "tel:+2340000000000" class = "center">
                      <i class="fas fa-phone-alt"></i>
                    </a>
                     <a href = "www.twitter.com" class = "center">
                      <i class = "fab fa-twitter"></i>
                    </a>
                    
                  </div>
                </div>
               
  
            
          </div>
        </div>
      </section>
      
  
     
      <footer class = "footer center">
        <div class = "container">
          <p class = "text">Copyright &copy; 2023 - BuildSafe</p>
       </div>
      </footer>
      </>
    );

};

export default Contact;