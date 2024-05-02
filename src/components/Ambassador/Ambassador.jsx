import React from "react";
import "./Ambassador.css";

const Ambassador = () => {
  return (
    <section className="ambassador-wrapper">
      <div className="ambassador-container">
        <form action="" id="ambassador-form">
          <div className="ambassador-horizontal-container">
            <div className="ambassador-full-name">
              <label
                className="ambassador-name-label"
                for="ambassador-name-field"
              >
                Full Name *
              </label>
              <input
                id="ambassador-name-field"
                name="ambassador-name-field"
                type="text"
                placeholder="Full Name"
              ></input>
            </div>
            <div className="ambassador-phone">
              <label
                className="ambassador-phone-label"
                for="ambassador-phone-field"
              >
                Phone *
              </label>
              <input
                id="ambassador-phone-field"
                name="ambassador-phone-field"
                type="tel"
                placeholder="Phone"
              ></input>
            </div>
          </div>
          <div className="ambassador-email">
            <label
              className="ambassador-email-label"
              for="ambassador-email-field"
            >
              Email *
            </label>
            <input
              id="ambassador-email-field"
              name="ambassador-email-field"
              type="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="ambassador-social-media">
            <label
              className="ambassador-social-media-label"
              for="ambassador-social-media-field"
            >
              Most active social media handle *
            </label>
            <textarea
              id="ambassador-social-media-field"
              name="ambassador-social-media-field"
            ></textarea>
          </div>
          <div className="ambassador-good">
            <label
              className="ambassador-good-label"
              for="ambassador-good-field"
            >
              What makes you a good brand ambassador? *
            </label>
            <textarea
              id="ambassador-good-field"
              name="ambassador-good-field"
            ></textarea>
          </div>
        </form>
        <div className="ambassador-form-message-container">
          <div className="ambassador-form-message">
            Please note: You will receive FREE access to the WOO-PONS app if
            chosen to become an ambassador. You will get 100's of LOCAL deals
            all around Worcester County!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassador;
