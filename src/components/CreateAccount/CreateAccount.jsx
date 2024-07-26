import React, { Fragment, useRef, useState } from "react";
import "./CreateAccount.css";
import { useParams } from "react-router-dom/dist";
import {
  validate as FormValidate,
  ListErrorMessages,
} from "../../constants/Validations";
import { useDispatch } from "react-redux";
import { CREATE_CUSTOMER } from "../../constants/actionTypes";
import agent from "../../agent";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [errorText, setErrorText] = useState("");
  const [errors, setErrors] = useState({});

  let params = useParams();

  const dispatch = useDispatch();

  const submitBtn = (e) => {
    e.preventDefault();
    let checkValidate = FormValidate({
      email: { value: email, email: true, required: true },
      phone: { value: phone, required: true, numbers: true },
      name: { value: name, required: true },
    });

    console.log(
      "components CreateAccount CreateAccount.jsx" +
        JSON.stringify(checkValidate.errors)
    );

    if (!checkValidate.status) {
      setErrors(null);
      submitHandle();
    } else {
      let values = ListErrorMessages(checkValidate.errors);
      setErrors(values);
    }
  };

  const submitHandle = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    console.log(
      "components CreateAccount CreateAccount.jsx submitHandle formData"
    );
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    agent.common.customercreate(formData).then((res) => {
      console.log(
        "components CreateAccount CreateAccount.jsx submitHandle customercreate response" +
          JSON.stringify(res)
      );
      dispatch({ type: CREATE_CUSTOMER, payload: res });
    });
  };

  return (
    <section className="create-account-wrapper">
      <div className="create-account-container">
        <h3 className="create-account-heading">
          CREATE AN ACCOUNT TO START YOUR MEMBERSHIP
        </h3>
        <div className="create-account-success-message">
          success message place
        </div>
        {errorText ? (
          <div className="create-account-error-message">{errorText}</div>
        ) : (
          <Fragment />
        )}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {errors && errors.name ? (
            <div className="create-account-full-name-error-message">
              {errors.name}
            </div>
          ) : (
            <Fragment />
          )}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {errors && errors.email ? (
            <div className="create-account-email-error-message">
              {errors.email}
            </div>
          ) : (
            <Fragment />
          )}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          {errors && errors.phone ? (
            <div className="create-account-phone-error-message">
              {errors.phone}
            </div>
          ) : (
            <Fragment />
          )}
        </div>
        <div className="button" onClick={submitBtn}>
          Send OTP
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
