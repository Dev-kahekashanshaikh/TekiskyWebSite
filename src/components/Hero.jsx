import React from "react";
import "../styles/Hero.css";
import Btn  from "./Btn";
// import logo from "";
import heroImage from "../assets/hero2.png"; 
// Replace with your img

const Hero = () => {
  return (
    <section className="hero-content">
      <div className="content">
        <h1>Tekisky Private Limited</h1>
        <br/>
        <p>
          Elevate your business with Tekisky Pvt Ltd's bespoke software
          solutions. Experience the transformative power of our innovative
          technology and dedicated support. Partner with us to unlock new
          heights of success and thrive in the dynamic digital landscape.
        </p>

        <p>
          Explore our range of services designed to meet your specific needs,
          including custom software development, web and mobile app solutions,
          cloud services, and expert IT consulting.
        </p>
    
      <br></br>
      <Btn></Btn>
      </div>

      <div className="content-img">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;