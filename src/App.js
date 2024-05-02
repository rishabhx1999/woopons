import React, { useEffect, Suspense } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { APP_LOAD, CLEAR_LOGOUT } from "./constants/actionTypes";
import agent from "./agent";
import RouteList from "./RouteList";
import Loader from "./components/Loader/Loader";

const App = () => {
  const appLoaded = useSelector((state) => state.common.appLoaded);
  const redirectTo = useSelector((state) => state.common.redirectTo);
  const currentUser = useSelector((state) => state.common.currentUser);
  const logoutUserRedirectTo = useSelector(
    (state) => state.common.logoutUserRedirectTo
  );
  const logoutRedirectTo = useSelector(
    (state) => state.common.logoutRedirectTo
  );
  const showLoader = useSelector((state) => state.common.showLoader);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && currentUser.roleId && redirectTo) {
      if (currentUser.roleId == "1") {
        navigate("/admin/dashboard");
      } else if (currentUser.roleId == 2) {
        navigate("/business");
      } else {
        navigate("/");
      }
    }
  }, [redirectTo]);

  useEffect(() => {
    if (logoutRedirectTo) {
      dispatch({ type: CLEAR_LOGOUT });
      navigate("/login");
    }
  }, [logoutRedirectTo]);

  useEffect(() => {
    if (logoutUserRedirectTo) {
      if (currentUser && currentUser.roleId == "2") {
        dispatch({ type: CLEAR_LOGOUT });
        navigate("/business");
        setTimeout(function () {
          navigate("/business");
        }, 2000);
      } else {
        dispatch({ type: CLEAR_LOGOUT });
        navigate("/");
      }
    }
  }, [logoutRedirectTo]);

  useEffect(() => {
    let token = null,
      _payload = null;

    if (localStorage.getItem("jwt")) {
      token = localStorage.getItem("jwt");
      agent.setToken(token);
      _payload = agent.Auth.current();
    }

    dispatch({ type: APP_LOAD, _payload, token, skipTracking: true });
  }, []);

  return (
    <div className="App">
      {appLoaded ? (
        <Suspense fallback={null}>
          {showLoader ? <Loader /> : ""}
          <RouteList />
        </Suspense>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default App;
