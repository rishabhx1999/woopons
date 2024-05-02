import React from "react";
import "./Features.css";
import { IoCheckmark } from "react-icons/io5";

const Features = () => {
  const goToPlanElement = () => {
    const element = document.getElementById("plans-box");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="features-wrapper">
      <div className="features-container">
        <div className="features-image-container">
          <img className="features-image" src="./features.png" alt="" />
        </div>
        <div className="features-description">
          <h3 className="features-title">SLEEK & INTERACTIVE</h3>
          <div className="feature">
            <IoCheckmark className="feature-tick" size={30} />
            <p className="feature-description">
              Our app is a fun and interactive way to enjoy everything that
              Worcester County has to offer.
            </p>
          </div>
          <div className="feature">
            <IoCheckmark className="feature-tick" size={30} />
            <p className="feature-description">
              We've made sure it's super easy to browse through all of the deals
              we have available.
            </p>
          </div>
          <div className="feature">
            <IoCheckmark className="feature-tick" size={30} />
            <p className="feature-description">
              It's easy to navigate between categories and choose the ones
              you’re interested in—fast! You can even keep track of your
              favorites!
            </p>
          </div>
          <div className="button" onClick={goToPlanElement}>
            <div>GET MY FREE TRIAL NOW!</div>
            <div>(WOO FOR WOOPONS)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
