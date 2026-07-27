import React from "react";
import "../styles/ContactUs.css";
import contactImg from '../assets/contact-form-img.png'; // Replace with your image

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* Left Side Form */}
        <div className="contact-form">

          <h1>Connect with us by filling below details</h1>

          <form>

            <div className="input-group">
              <label>Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="input-group">
              <label>Your Email</label>
              <input
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className="input-group">
              <label>Your Mobile</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
              />
            </div>

            <div className="input-group">
              <label>Your Message</label>
              <textarea
                rows="6"
                placeholder="Enter your Message"
              ></textarea>
            </div>

            <button type="submit">Send Message</button>

          </form>

        </div>

        {/* Right Side Image */}

        <div className="contact-image">
          <img src={contactImg} alt="Contact Us" />
          {/* <img src="" alt="Contact Us" /> */}
        </div>

      </div>
    </section>
  );
};

export default ContactUs;