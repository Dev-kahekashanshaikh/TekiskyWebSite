import React from "react";
import "../styles/Offering.css";
import solution from "../assets/solution-Rz8rBtod.svg"; // Replace with your image
import team from "../assets/team-EYlcZZq3.svg"; // Replace with your image
import customerSatisfaction from "../assets/customer-C4wNQ7S8.svg"; // Replace with your image

const Offerings = () => {
  return (
    <section className="offerings">

      <h1 className="offer-heading">Offerings</h1>

      <div className="offer-container">

        <div className="offer-image">
          <img src={solution} alt="Innovative Solutions" />
        </div>

        <div className="offer-content">

          <h2>Innovative Solutions</h2>

          <p>
            We provide cutting-edge solutions to modernize your business
            processes. Our innovative approaches ensure that your business
            stays ahead of the curve. From AI-driven automation to scalable
            cloud solutions, we cater to diverse industry needs. Whether you
            require digital transformation, cybersecurity enhancements, or
            advanced analytics, our solutions are designed to optimize
            efficiency and drive growth.
          </p>

        </div>

      </div>
        <div className="offer-container">

        

        <div className="offer-content">

          <h2>Expert Team</h2>

          <p>
           Our team of experts is dedicated to delivering top-quality services. With years of experience in the industry, we ensure that every project is executed to perfection. We specialize in software development, IT consulting, and project management. Our collaborative approach and deep technical expertise enable us to tackle complex challenges and deliver sustainable solutions.
          </p>

        </div>
        <div className="offer-image">
          <img src={team} alt="Innovative Solutions" />
        </div>

      </div>
<div className="offer-container">

        <div className="offer-image">
          <img src={customerSatisfaction} alt="Innovative Solutions" />
        </div>

        <div className="offer-content">

          <h2>Customer Satisfaction</h2>

          <p>
            We prioritize customer satisfaction with our tailored solutions. Our dedicated support team ensures that your needs are met promptly and efficiently. We offer 24/7 customer support, training, and ongoing maintenance to ensure smooth operations. Our proactive approach to customer service ensures that we anticipate and address your needs effectively, fostering long-term partnerships.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Offerings;