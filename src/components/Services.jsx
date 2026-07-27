import React from "react";
import "../styles/Services.css";
import service from "../assets/services.png";
import mobile from "../assets/mobile.png";
import uiImg from "../assets/ui.png";
import cloudImg from "../assets/cloudsolution.png";
import softwareImg from "../assets/web-dev.png";
import consultImg from "../assets/consulting.png"


const Services = () => {
  return (
    <section className="services-section">
      <h1>Our Services</h1>

      <div className="services-container">
        <div className="card">
        
          <img src={service} alt="Web Development" />
  
        </div>

        <div className="card">
          <img src={mobile} alt="Mobile App Development" />
        </div>

        <div className="card">
          <img src={uiImg} alt="UI UX Design" />
        </div>

        <div className="card">
          <img src={cloudImg} alt="Cloud Solutions" />
        </div>

        <div className="card">
          <img src={softwareImg} alt="Software Development" />
        </div>

        <div className="card">
          <img src={consultImg} alt="IT Consulting" />
        </div>
      </div>
    </section>
  );
};

export default Services;