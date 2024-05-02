import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";
import Ambassador from "./components/Ambassador/Ambassador";
import ContactUs from "./components/ContactUs/ContactUs";
import Chat from "./components/Chat/Chat";
import OutsideClickHandler from "react-outside-click-handler";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import TermsAndConditions from "./components/TermsAndConditions/TermsAndConditions";
import CookiePolicy from "./components/CookiePolicy/CookiePolicy";
import { Route, Routes } from "react-router-dom";
import { closeSideMenu } from "./actions/actionsIndex";
import { useDispatch, useSelector } from "react-redux";

const RouteList = () => {
  const loginBoxOpenState = useSelector(
    (state) => state.changeLoginBoxOpenState
  );

  const sideMenuOpenState = useSelector(
    (state) => state.changeSideMenuOpenState
  );

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width:991px)").matches
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:991px)");
    const handleChange = (e) => {
      setIsSmallScreen(e.matches);
    };
    mediaQuery.addListener(handleChange);
    setIsSmallScreen(mediaQuery.matches);
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return (
    <div>
      <Header />
      <OutsideClickHandler
        onOutsideClick={() => {
          dispatch(closeSideMenu());
        }}
      >
        <Menu isSmallScreen={isSmallScreen} />
      </OutsideClickHandler>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ambassador" element={<Ambassador />} />
        <Route path="/customer/contactus" element={<ContactUs />} />
        <Route path="/customer/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/customer/terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route
          path="/customer/create/silver-plan"
          element={<CreateAccount />}
        />
        <Route path="/customer/create/gold-plan" element={<CreateAccount />} />
      </Routes>
      <Footer />
      {loginBoxOpenState ? <Login /> : <section></section>}
      <Chat />
    </div>
  );
};

export default RouteList;
