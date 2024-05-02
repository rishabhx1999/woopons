import React from "react";
import "./BusinessSupport.css";

const BusinessSupport = () => {
  return (
    <section className="business-support-wrapper">
      <div className="business-support-container innerWidth">
        <div className="business-support-description">
          <p>
            WOO-PONS Is A Great Way For You To Support Local Businesses — While
            Also Saving Money During The Rising Inflation period.
          </p>
          <p>
            By Using This App, You’re Helping Your Favorite Local Businesses
            Stay In Business And Enjoy The Best Of Worcester County’s Unique
            Offerings.
          </p>
        </div>
        <div className="business-support-image-container">
          <img
            className="business-support-image"
            src="./business-support.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessSupport;
