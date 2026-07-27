import React from "react";
import "../styles/Footer.css";
// import logo from "../assets/logo.png"; // Replace with your logo

const Footer = () => {
  return (
    <footer className="footer">

      {/* Logo Section */}
      <div className="footer-logo">
     <div className="logo">
        <img src="../src/assets/logo.png" alt="Logo" className=''></img>
        
      </div>
        {/* <img src={logo} alt="Tekisky Logo" /> */}
        {/* <img src="" alt="Tekisky Logo" /> */}
      </div>

      {/* Useful Links */}
      <div className="footer-column">
        <h2>Useful Links</h2>

        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Courses</a></li>
        </ul>
      </div>

      {/* Support */}
      <div className="footer-column">
        <h2>Support & Help</h2>

        <ul>
          <li><a href="/">Contact Us</a></li>
          <li><a href="mailto:hr@tekisky.com">Mail Us</a></li>
          <li><a href="/">Login</a></li>
        </ul>
      </div>

      {/* Contact Details */}
      <div className="footer-column">
        <h2>Need Any Help?</h2>

        <ul>
          <li>📧 hr@tekisky.com</li>
          <li>📞 +91 8625817334</li>
          <li>📞 +91 9890796149</li>
        </ul>
      </div>
        {/* Google Map */}

        <div className="footer-map">
          <iframe
            title="Tekisky Location"
            src="https://www.google.com/maps?q=Tekisky%20Pvt%20Ltd%20Nanded&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
    </footer>
  );
};

export default Footer;