import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import VideoIntro from "../VideoIntro/VideoIntro";
import AboutWoopons from "../AboutWoopons/AboutWoopons";
import Features from "../Features/Features";
import BusinessSupport from "../BusinessSupport/BusinessSupport";
import Plans from "../Plans/Plans";
import FreeTrial from "../FreeTrial/FreeTrial";
import FAQs from "../FAQs/FAQs";
import { useDispatch, useSelector } from "react-redux";
import { CUSTOMER_LOGIN_TOKEN } from "../../constants/actionTypes";
import agent from "../../agent";
import { useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();
  const redirectToAccount = useSelector(
    (state) => state.common.redirectToAccount
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToElement = (elm) => {
    const element = document.getElementById(elm);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    if (currentParams && currentParams.element) {
      goToElement(currentParams.element);
    }
    if (currentParams && currentParams.access_token) {
      let formData = { token: currentParams.access_token };
      dispatch({
        type: CUSTOMER_LOGIN_TOKEN,
        payload: agent.customer.getCusFromToken(formData),
      });
    }
  }, [searchParams]);

  useEffect(() => {
    if (redirectToAccount) {
      navigate("/user/myaccount");
    }
  }, [redirectToAccount]);

  return (
    <section className="home-wrapper">
      <div className="home-container">
        <Banner />
        <VideoIntro />
        <AboutWoopons />
        <Features />
        <BusinessSupport />
        <Plans />
        <FreeTrial />
        <FAQs />
      </div>
    </section>
  );
};

export default Home;
