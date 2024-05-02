import React from "react";
import "./AboutWoopons.css";
import { IoCheckmark } from "react-icons/io5";

const AboutWoopons = () => {
  return (
    <section className="about-woopons-wrapper">
      <div className="about-woopons-container">
        <h2 className="about-woopons-partnership">
          EXCLUSIVE PARTNERSHIP WITH LOCAL BUSINESSES
        </h2>
        <div className="about-woopons">
          <div className="about-woopons-image">
            <img src="./about.png" alt="" />
          </div>
          <div className="about-woopons-description">
            <h3 className="title">What are WOO-PONS?</h3>
            <div className="para">
              <IoCheckmark className="tick" size={30} />
              <p className="">
                We have partnered with Worcester County business owners to offer
                EXCLUSIVE deals, discounts, and incentives that you can't find
                anywhere else.
              </p>
            </div>
            <div className="para">
              <IoCheckmark className="tick" size={30} />
              <p className="">
                From restaurants to entertainment to shopping, spas and more,
                our app is your ticket to savings at hundreds of local
                businesses in Worcester County—and it's growing every single
                day.
              </p>
            </div>
            <div className="para">
              <IoCheckmark className="tick" size={30} />
              <p className="">
                So with these coupons in hand, you'll be able to enjoy
                everything from 10%-50% off an order at your favorite
                restaurant, or a BOGO special to 50% off a massage from your
                favorite masseuse. Or a percentage off Home Services - who
                doesn't need a plumber, electrician or roofer they can get a
                special discount from..But that's only the beginning.
              </p>
            </div>
          </div>
        </div>
        <div className="about-woopons-outdated">
          <div className="description">
            <h3 className="title">NO MORE OUTDATED COUPONS</h3>
            <h4 className="sub-title">We're all about keeping things fresh.</h4>
            <p>
              We understand how frustrating it can be to get a coupon for
              something that doesn't exist anymore. That's why our app is always
              updated with the latest from your favorite local businesses.
            </p>
          </div>
          <div className="image">
            <img src="./no-outdated-coupons.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWoopons;
