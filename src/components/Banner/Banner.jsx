import React from "react";
import "./Banner.css";

const Banner = () => {
  const goToPlanElement = () => {
    const element = document.getElementById("plans-box");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="banner-wrapper">
      <div className="banner-container innerWidth">
        <h2 className="banner-title-part1">
          "THE MOST ELECTRIFYING WAY TO DISCOVER THE BEST DEALS THROUGHOUT"
        </h2>
        <div className="banner-title-part2">
          <h2 className="banner-title-place">WORCESTER COUNTY</h2>
          <div className="banner-title-palm">
            <h2 className="palm-large-screen">FROM THE PALM</h2>
            <h2 className="palm-large-screen">OF YOUR HANDS"</h2>
            <h2 className="palm-small-screen">FROM THE PALM OF YOUR HANDS"</h2>
          </div>
        </div>
        <div className="banner-mobile-app">
          <div className="banner-mobile-app-about">
            <h4 className="title">
              Do you remember the days of cutting coupons?
            </h4>
            <p className="old-coupons">
              Or what about those old coupon books from the
              <br />
              schools..They provided BOGO deals & special offers
              <br />
              to us to go to their restaurant
              <br />
              or business. (Those were the days)
            </p>
            <p className="mobile-app-intro">
              But what if there was something more
              <br />
              modern <span>(like a mobile app)</span> that provided you
              <br />
              the BEST DEALS in Worcester County and ONLY
              <br />
              Worcester County..
            </p>
            <div className="border"></div>
          </div>
          <div className="banner-mobile-app-image">
            <img src="./mobile-app.png" alt="" />
          </div>
        </div>
        <div className="banner-signup">
          <h2 className="banner-signup-title">INTRODUCING WOO-PONS!</h2>
          <div className="button" onClick={goToPlanElement}>
            <div>SIGN UP FOR YOUR FREE 30 DAY TRIAL</div>
            <div>( limited spot available )</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
