import React from "react";
import "./FreeTrial.css";

const FreeTrial = () => {
  const goToPlanElement = () => {
    const element = document.getElementById("plans-box");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="free-trial-wrapper">
      <div className="free-trial-container">
        <h4 className="free-trial-title">
          Get Started With A 30 DAY FREE TRIAL,
        </h4>
        <h4 className="free-trial-sub-title">“No Strings Attached”</h4>
        <div className="button" onClick={goToPlanElement}>
          <div>GET 30 DAYS FREE NOW!</div>
          <div>(FREE FREE)</div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
