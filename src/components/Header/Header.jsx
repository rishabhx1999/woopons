import React from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleSideMenu, openLoginBox } from "../../actions/actionsIndex";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <section className="header-wrapper">
      <div className="header-container flexCenter innerWidth">
        <CustomLink to="/">
          <img className="header-logo" src="./logo.png" alt="" />
        </CustomLink>
        <div className="header-right flexCenter">
          <div className="header-menu flexCenter">
            <CustomLink to="/ambassador">Ambassador</CustomLink>
            <CustomLink to="/" className="our-plans">
              Our plans
            </CustomLink>
            <CustomLink to="/customer/contactus">Contact us</CustomLink>
          </div>
          <div
            className="button"
            onClick={() => {
              dispatch(openLoginBox());
            }}
          >
            SIGN IN
          </div>
          <div
            className="menu-icon"
            onClick={(e) => {
              e.stopPropagation();
              dispatch(toggleSideMenu());
            }}
          >
            <RxHamburgerMenu size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

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
