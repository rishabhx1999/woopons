import React, { useEffect, useState } from "react";
import "./Plans.css";
import { useSelector, useDispatch } from "react-redux";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import { FETCH_CUSTOMER_PLANS } from "../../constants/actionTypes";
import agent from "../../agent";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);

  const customerPlans = useSelector((state) => state.common.customerPlans);
  const currentUser = useSelector((state) => state.common.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    setPlans(customerPlans);
    console.log("components Plans Plans.jsx" + JSON.stringify(plans));
  }, [customerPlans]);

  useEffect(() => {
    agent.common
      .getCusPlans()
      .then((res) => dispatch({ type: FETCH_CUSTOMER_PLANS, payload: res }));
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.roleId == 3) {
      if (currentUser.email_verified) {
        setNextUrl("/payment/");
      } else {
        setNextUrl("/customer/enterotp/");
      }
    } else {
      setNextUrl("/customer/create/");
    }
  }, [currentUser]);

  return (
    <section className="plans-wrapper" id="plans-box">
      <div className="plans-container">
        <h2 className="plans-title">WOO-PONS MONTHLY PACKAGES</h2>
        <div className="plans">
          <div className="innerWidth">
            {plans && plans.length
              ? plans.map((plan, i) => (
                  <div className="plan">
                    <div className="plan-upper">
                      <h3 className="plan-title">{plan.name}</h3>
                      <div className="plan-renewal">
                        <h4>MONTHLY</h4>
                        <h6>(AFTER FREE TRIAL)</h6>
                      </div>
                      {plan.name ? (
                        <h2 className="plan-woopons">
                          {plan.name === "Silver"
                            ? "ONE WOO-PON PER WEEK"
                            : plan.name === "Gold"
                            ? "UNLIMITED WOO-PONS PER MONTH"
                            : null}
                        </h2>
                      ) : null}
                    </div>
                    <div className="plan-lower">
                      <h3 className="plan-trial">30 DAY FREE TRIAL</h3>
                      <div className="plan-lower-break"></div>
                      <h2 className="plan-pricing">
                        ${plan.price}
                        <span>/Month</span>
                      </h2>
                      <div className="button">
                        <CustomLink to={nextUrl + plan.slug}>
                          FREE TRIAL
                        </CustomLink>
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;

const CustomLink = ({ to, children, className, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={`${isActive ? "header-link-active" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};
