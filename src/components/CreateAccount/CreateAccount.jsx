import React from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <section className="create-account-wrapper">
      <div className="create-account-container">
        <h3 className="create-account-heading">
          CREATE AN ACCOUNT TO START YOUR MEMBERSHIP
        </h3>
        <div className="create-account-full-name">
          <label
            className="create-account-full-name-label"
            for="create-account-full-name-field"
          >
            Full Name
          </label>
          <input
            id="create-account-full-name-field"
            name="create-account-full-name-field"
            type="text"
          ></input>
        </div>
        <div className="create-account-email">
          <label
            className="create-account-email-label"
            for="create-account-email-field"
          >
            Email
          </label>
          <input
            id="create-account-email-field"
            name="create-account-email-field"
            type="email"
          ></input>
        </div>
        <div className="create-account-phone">
          <label
            className="create-account-phone-label"
            for="create-account-phone-field"
          >
            Cell Phone <br />
          </label>
          <div className="create-account-phone-lable-sub-title">
            <span>Please input your number only</span>
          </div>
          <input
            id="create-account-phone-field"
            name="create-account-phone-field"
            type="tel"
          ></input>
        </div>
        <div className="button">Send OTP</div>
      </div>
    </section>
  );
};

export default CreateAccount;
