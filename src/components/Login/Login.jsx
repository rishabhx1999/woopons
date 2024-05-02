import React from "react";
import "./Login.css";
import OutsideClickHandler from "react-outside-click-handler";
import { RxCross1 } from "react-icons/rx";
import { BsEyeSlash } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { closeLoginBox } from "../../actions/actionsIndex";

const Login = () => {
  const loginBoxOpenState = useSelector(
    (state) => state.changeLoginBoxOpenState
  );
  const dispatch = useDispatch();
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
            <div className="login-form">
              <form action="">
                <div className="login-email-field">
                  <label for="login-email">E-mail</label>
                  <br />
                  <input
                    id="login-email"
                    name="login-email"
                    type="text"
                    required
                  ></input>
                </div>
                <div className="login-password-field">
                  <label for="login-password">Password</label>
                  <br />
                  <input
                    id="login-password"
                    name="login-password"
                    type="password"
                    required
                  ></input>
                  <div className="forgot-password-option">Forgot Password?</div>
                </div>
                <div className="login-button">
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
