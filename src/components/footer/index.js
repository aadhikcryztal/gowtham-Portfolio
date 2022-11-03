import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="content">
        <div className="profile-details">
          <p className="user-name">Gowthaman J</p>
          <p className="user-role">UI/UX Engineer</p>
        </div>
        <div className="contact-details">
          <div className="contact">
            <p className="email">gowthamdude93@gmail.com</p>
            <p className="contact">+91 9500840986</p>
          </div>
          <div className="social">
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
