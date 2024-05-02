import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Chat.css";

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <section className="chat-wrapper">
      <div className="chat-container">
        {isOpen ? (
          <div className="chat-box-wrapper">
            <div className="chat-box-container">
              <div className="chat-box-main">
                <div className="chat-header">Have a question?</div>
                <div className="chat-message-box">
                  <div className="chat-company-message">
                    Enter your question below and a representative will get
                    right back to you.
                  </div>
                  <div className="chat-form">
                    <form id="chat-customer-form">
                      <div className="chat-customer-name">
                        <input
                          id="customer-name"
                          name="name"
                          type="text"
                          required
                        ></input>
                        <div className="chat-form-field-bottom"></div>
                        <span>Name</span>
                      </div>
                      <div className="chat-customer-phone">
                        <PhoneInput
                          id="customer-phone"
                          name="phone"
                          country={"us"}
                          value={phoneNumber}
                          onChange={handleChange}
                          inputProps={{ required: true }}
                          className={"chat-phone-field"}
                          dropdownStyle={{ border: "none !important" }}
                          placeholder=""
                        ></PhoneInput>
                        <div className="chat-form-field-bottom"></div>
                        {/* <span>Mobile Phone</span> */}
                      </div>
                      <div className="chat-customer-message">
                        <textarea
                          id="customer-message"
                          name="message"
                          rows="2"
                          required
                        ></textarea>
                        <div className="chat-form-field-bottom"></div>
                        <span>Message</span>
                      </div>
                    </form>
                    <div className="chat-form-send">
                      <div className="chat-form-rates-message">
                        By submitting you agree to receive SMS or e-mails for
                        the provided channel. Rates may be applied.
                      </div>
                      <div className="button">
                        <a href="">Send</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-representative">
                <img
                  src="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div
          className={`chat-icon ${isOpen ? "chat-icon-active" : ""}`}
          onClick={toggleChat}
        >
          {isOpen ? (
            <img className="cross" src="./cross.svg" alt="" />
          ) : (
            <img className="chat" src="./chat.svg" alt="" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Chat;
