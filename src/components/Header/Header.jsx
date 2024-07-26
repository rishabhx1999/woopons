import React, { Fragment, useEffect, useState } from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useResolvedPath, useMatch, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSideMenu,
  openLoginBox,
  toggleUserMainOptionsBox,
  closeLoginBox,
} from "../../constants/otherActionTypes";
import { MdArrowDropDown } from "react-icons/md";
import { LOGOUT_USER } from "../../constants/actionTypes";
import avtarPic from "../../assets/user.png";
import { createImageFromInitials, getBackgroundColor } from "../utils";

const Header = () => {
  const currentUser = useSelector((state) => state.common.currentUser);
  const userMainOptionsBoxOpenState = useSelector(
    (state) => state.toggleUserMainOptionsBoxOpenState
  );
  const loginBoxOpenState = useSelector(
    (state) => state.changeLoginBoxOpenState
  );

  const [profilePic, setProfilePic] = useState(avtarPic);
  const [userName, setUserName] = useState("");
  const [showWoopon, setShowWoopon] = useState(false);
  const [mainLink, setMainLink] = useState("/");

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser && currentUser.email) {
      setUserName(currentUser.name);
      // const _dashboard_link = "/"+prefix[currentUser.roleId]+'/dashboard';
      // setdashboardlink(_dashboard_link);
      if (currentUser.avatar) {
        setProfilePic(currentUser.avatar);
      } else {
        setProfilePic(
          createImageFromInitials(200, currentUser.name, getBackgroundColor())
        );
      }

      if (currentUser.roleId == 2 && currentUser.status == 1) {
        setShowWoopon(true);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser && currentUser.roleId) {
      if (currentUser.roleId != 1) {
        dispatch(closeLoginBox());
      }
    }
    // if (currentUser && currentUser.roleId) {
    //   if (currentUser.roleId == 2) {
    //     setheaderMenus(TOP_HEADER_BUSINESS);
    //     setMainLink("/business");
    //   } else {
    //     setheaderMenus(TOP_HEADER);
    //     setMainLink("/");
    //   }
    // }
  }, [currentUser]);

  return (
    <section className="header-wrapper">
      <div className="header-container flexCenter innerWidth">
        <CustomLink to={mainLink}>
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
          {currentUser && currentUser.roleId != 1 ? (
            currentUser.email ? (
              <>
                <div
                  className="header-user"
                  onClick={() => dispatch(toggleUserMainOptionsBox())}
                >
                  <img
                    src={profilePic}
                    alt=""
                    className="header-user-profile-pic"
                  />
                  <div className="header-user-name">{userName}</div>
                  <MdArrowDropDown className="header-user-icon" size={15} />
                </div>
                {userMainOptionsBoxOpenState ? (
                  <ul className="header-user-dropdown">
                    <li className="header-user-dropdown-item">My Account</li>
                    <div className="header-user-dropdown-divider"></div>
                    {showWoopon ? (
                      <>
                        <li className="header-user-dropdown-item">
                          My Woopons
                        </li>
                        <div className="header-user-dropdown-divider"></div>
                      </>
                    ) : null}
                    <li className="header-user-dropdown-item">
                      Change/Forgot Password
                    </li>
                    <div className="header-user-dropdown-divider"></div>
                    <li
                      className="header-user-dropdown-item"
                      onClick={() => {
                        dispatch({ type: LOGOUT_USER });
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                ) : (
                  <Fragment />
                )}
              </>
            ) : (
              <Fragment />
            )
          ) : (
            <div
              className="button"
              onClick={() => {
                dispatch(openLoginBox());
              }}
            >
              SIGN IN
            </div>
          )}
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
