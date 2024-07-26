import React, { useState } from "react";
import "./FAQs.css";
import { IoMdArrowDropdown } from "react-icons/io";

const FAQs = () => {
  const [answer1Display, setAnswer1Display] = useState("block");
  const [answer2Display, setAnswer2Display] = useState("none");
  const [answer3Display, setAnswer3Display] = useState("none");
  const [answer4Display, setAnswer4Display] = useState("none");

  const handleQuestion1Dropdown = () => {
    setAnswer1Display(answer1Display === "none" ? "block" : "none");
    setAnswer2Display("none");
    setAnswer3Display("none");
    setAnswer4Display("none");
  };
  const handleQuestion2Dropdown = () => {
    setAnswer2Display(answer2Display === "none" ? "block" : "none");
    setAnswer1Display("none");
    setAnswer3Display("none");
    setAnswer4Display("none");
  };
  const handleQuestion3Dropdown = () => {
    setAnswer3Display(answer3Display === "none" ? "block" : "none");
    setAnswer1Display("none");
    setAnswer2Display("none");
    setAnswer4Display("none");
  };
  const handleQuestion4Dropdown = () => {
    setAnswer4Display(answer4Display === "none" ? "block" : "none");
    setAnswer1Display("none");
    setAnswer2Display("none");
    setAnswer3Display("none");
  };

  return (
    <section className="faqs-wrapper">
      <div className="faqs-container innerWidth">
        <h2 className="faqs-title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faqs">
          <div className="faq-container">
            <div className="faq">
              <div className="faq-description">
                How many times can I use my Woo-Pon?
              </div>
              <IoMdArrowDropdown
                className="faq-dropdown-icon"
                size={30}
                onClick={handleQuestion1Dropdown}
              />
            </div>
            <div className="answer" style={{ display: answer1Display }}>
              Woo-Pon usage is set by the business owners. Some allow 1x usage
              while others allow unlimited time usage. However, you can only use
              that specific Woo-Pon once per day.
            </div>
          </div>
          <div className="faq-break"></div>
          <div className="faq-container">
            <div className="faq">
              <div className="faq-description">
                Can I share my Woo-Pon account with my friends & family?
              </div>
              <IoMdArrowDropdown
                className="faq-dropdown-icon"
                size={30}
                onClick={handleQuestion2Dropdown}
              />
            </div>
            <div className="answer" style={{ display: answer2Display }}>
              Please do not share your user name & password with anyone. Your
              account is specific to your mobile phone ID. If the application
              detects a shared account with a different log in device, it will
              log both accounts out & lock your account. We try to keep the cost
              affordable for everyone & while we do not offer a family plan yet,
              it is in the works.
            </div>
          </div>
          <div className="faq-break"></div>
          <div className="faq-container">
            <div className="faq">
              <div className="faq-description">
                What is the main difference between you & Groupon?
              </div>
              <IoMdArrowDropdown
                className="faq-dropdown-icon"
                // size={30}
                onClick={handleQuestion3Dropdown}
              />
            </div>
            <div className="answer" style={{ display: answer3Display }}>
              We have many differences. While Groupon serves a much larger area,
              we are specific to Worcester County, MA. A more notable difference
              would be, with our platform, you don't have to purchase deals, you
              just search the available Woo-Pons and can redeem at your favorite
              local businesses. You pay a small monthly fee to use our platform,
              which allows us to keep the lights on & continuously scout out the
              best deals in Worcester County.
            </div>
          </div>
          <div className="faq-break"></div>
          <div className="faq-container">
            <div className="faq">
              <div className="faq-description">
                What is your favorite dessert?
              </div>
              <IoMdArrowDropdown
                className="faq-dropdown-icon"
                size={30}
                onClick={handleQuestion4Dropdown}
              />
            </div>
            <div className="answer" style={{ display: answer4Display }}>
              Kind of a strange question, but in any case, we are huge fans of
              the wonderful Italian dessert called Tiramisu.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
