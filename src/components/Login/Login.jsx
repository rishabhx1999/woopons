import React, { Fragment, useEffect, useState } from "react";
import "./Login.css";
import OutsideClickHandler from "react-outside-click-handler";
import { RxCross1 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginBox } from "../../constants/otherActionTypes";
import agent from "../../agent";
import { LOGIN } from "../../constants/actionTypes";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const loginBoxOpenState = useSelector(
    (state) => state.changeLoginBoxOpenState
  );
  const loginError = useSelector((state) => state.common.loginError);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginErr, setLoginErr] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(
      "components Login Login.jsx submitForm login object " +
        JSON.stringify({ email: email, password: password })
    );
    agent.Auth.login({ email: email, password: password }).then((res) => {
      console.log(
        "components Login Login.jsx submitForm login response " +
          JSON.stringify(res)
      );
      dispatch({ type: LOGIN, payload: res });
    });
  };

  const forgotPage = (e) => {
    e.preventDefault();
    dispatch(closeLoginBox());
    navigate("/user/forgotpassword");
  };

  useEffect(() => {
    if (loginError) {
      if (typeof loginError === "string") {
        setLoginErr(loginError);
      } else {
        if ("user" in loginError) {
          setEmailError(loginError.user);
        } else if ("password" in loginError) {
          setPasswordError(loginError.password);
        } else {
          setLoginErr(loginError);
        }
      }

      setTimeout(function () {
        setLoginErr("");
        setEmailError("");
        setPasswordError("");
      }, 5000);
    }
  }, [loginError]);

  return (
    <>
      <section className={`login-background`}></section>
      <section
        className={`login-wrapper ${loginBoxOpenState ? "login-open" : ""}`}
      >
        <OutsideClickHandler
          className="login-outside-click-handler"
          onOutsideClick={() => dispatch(closeLoginBox())}
        >
          <div className="login-container">
            <div className="login-header">
              <RxCross1
                className="login-close-icon"
                size={25}
                onClick={() => dispatch(closeLoginBox())}
              />
            </div>
            <h2 className="login-title">LOGIN</h2>
            {loginErr ? (
              <div className="login-error-message">{loginErr}</div>
            ) : (
              <Fragment />
            )}
            <div className="login-form">
              <form action="">
                <div className="login-email-field">
                  <label for="login-email">E-mail</label>
                  <br />
                  <input
                    id="login-email"
                    name="login-email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  ></input>
                  {emailError ? (
                    <div className="login-email-error-message">
                      {emailError}
                    </div>
                  ) : (
                    <Fragment />
                  )}
                </div>
                <div className="login-password-field">
                  <label for="login-password">Password</label>
                  <br />
                  <input
                    id="login-password"
                    name="login-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  ></input>
                  {passwordError ? (
                    <div className="login-password-error-message">
                      {passwordError}
                    </div>
                  ) : (
                    <Fragment />
                  )}
                  <div className="forgot-password-option" onClick={forgotPage}>
                    Forgot Password?
                  </div>
                  <div
                    className="login-password-field-icon"
                    onClick={(e) => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </div>
                </div>
                <div className="login-button" onClick={submitForm}>
                  <a href="">LOG IN</a>
                </div>
              </form>
            </div>
          </div>
        </OutsideClickHandler>
      </section>
    </>
  );
};

export default Login;
