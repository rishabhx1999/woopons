import React from "react";
import "./Footer.css";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer-container innerWidth">
        <div className="footer-left">
          © Copyright 2023. Woo-Pons. All rights reserved.
        </div>
        <div className="footer-right">
          <CustomLink className="footer-link" to="/customer/privacy-policy">
            Privacy Policy
          </CustomLink>
          <CustomLink
            className="footer-link"
            to="/customer/terms-and-conditions"
          >
            Terms & Conditions
          </CustomLink>
          <CustomLink className="footer-link" to="/cookie-policy">
            Cookies Policy
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default Footer;

const CustomLink = ({ to, children, className, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link to={to} {...props} className={className} onClick={scrollToTop}>
      {children}
    </Link>
  );
};
