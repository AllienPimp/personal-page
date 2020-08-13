import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import SideMobileMenuButton from "../SmallScreenMobile/sideMobileMenuButton";

function Header(props) {
  return (
    <div className="header">
      <div className="side-mobile-menu-button">
        <SideMobileMenuButton click={props.sideMenuMobileClickHandler} />
      </div>
      <div className="home-image">
        <NavLink
          className="header-link"
          exact
          to="/"
          activeClassName="selected"
        >
          <p>Home Page</p>
        </NavLink>
      </div>
      <div className="empty" />
      <div className="nav-link">
        <ul>
          <NavLink
            className="header-link"
            exact
            to="/aboutme"
            activeClassName="selected"
          >
            <li> About Me</li>
          </NavLink>
          <NavLink
            className="header-link"
            exact
            to="/projects"
            activeClassName="selected"
          >
            <li> Projects</li>
          </NavLink>
          <NavLink
            className="header-link"
            exact
            to="/resume"
            activeClassName="selected"
          >
            <li> Resume</li>
          </NavLink>
          <NavLink
            className="header-link"
            exact
            to="/contact"
            activeClassName="selected"
          >
            <li> Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
