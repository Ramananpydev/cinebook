import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>
            CineBook <span>Ticket</span>
          </h1>
        </div>

        <div className="footer-links">
          <p>Terms & Conditions</p>
          <p >Privacy Policy</p>
          <p>Contact Us</p>
          <p>List your events</p>
        </div>

        <div className="footer-qr">
          <img src="./qr.png" alt="QR" />
          <p>Scan to download the app</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          By accessing this page, you confirm that you have read, understood, and
          agreed to our Terms of Service, Cookie Policy, Privacy Policy, and
          Content Guidelines. All rights reserved.
        </p>

        <div className="social-icons">
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
