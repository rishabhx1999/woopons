import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us-wrapper">
      <div className="contact-us-container">
        <div className="contact-us-heading-container">
          <p className="contact-us-heading">
            Please fill out this form and someone will reach out to you within
            24-48 hours.
          </p>
        </div>
        <form action="" id="contact-us-form">
          <div className="contact-us-first-name">
            <label
              className="contact-us-first-name-label"
              for="contact-us-first-name-field"
            >
              First Name *
            </label>
            <input
              id="contact-us-first-name-field"
              name="contact-us-first-name-field"
              type="text"
              placeholder="First Name"
            ></input>
          </div>
          <div className="contact-us-last-name">
            <label
              className="contact-us-last-name-label"
              for="contact-us-last-name-field"
            >
              Last Name *
            </label>
            <input
              id="contact-us-last-name-field"
              name="contact-us-last-name-field"
              type="text"
              placeholder="Last Name"
            ></input>
          </div>
          <div className="contact-us-email">
            <label
              className="contact-us-email-label"
              for="contact-us-email-field"
            >
              Email *
            </label>
            <input
              id="contact-us-email-field"
              name="contact-us-email-field"
              type="email"
              placeholder="Email"
            ></input>
          </div>
          <div className="contact-us-phone">
            <label
              className="contact-us-phone-label"
              for="contact-us-phone-field"
            >
              Phone *
            </label>
            <input
              id="contact-us-phone-field"
              name="contact-us-phone-field"
              type="tel"
              placeholder="Phone"
            ></input>
          </div>
          <div className="contact-us-message">
            <label
              className="contact-us-message-label"
              for="contact-us-message-field"
            >
              Message/More Information *
            </label>
            <input
              id="contact-us-message-field"
              name="contact-us-message-field"
              type="text"
              placeholder="Enter any additional notes or more information"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
