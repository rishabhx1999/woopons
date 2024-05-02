import React from "react";
import "./Menu.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = ({isSmallScreen}) => {
  const sideMenuOpenState = useSelector(
    (state) => state.changeSideMenuOpenState
  );
  return (
    <section
      className={`menu-wrapper ${
        sideMenuOpenState && isSmallScreen ? "menu-open" : ""
      }`}
    >
      <div className="menu-container">
        <div className="menu-items flexColCenter">
          <CustomLink to="/ambassador">Ambassador</CustomLink>
          <CustomLink to="/" className="our-plans">
            Our plans
          </CustomLink>
          <CustomLink to="/customer/contactus">Contact us</CustomLink>
        </div>
      </div>
    </section>
  );
};

export default Menu;

const CustomLink = ({ to, children, className, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={`${isActive ? "menu-link-active" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};
