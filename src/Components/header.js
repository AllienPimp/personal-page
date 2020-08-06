import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./header.css";
import logo from "../img/5th logo.jpg";
import SideMobileMenuButton from "./sideMobileMenuButton";

function Header(props) {
  return (
    <div className="header">
      <div className="side-mobile-menu-button">
        <SideMobileMenuButton click={props.sideMenuMobileClickHandler} />
      </div>
      <div className="home-image">
        <Link className="header-link" to="/">
          <img src={logo} />
        </Link>
      </div>

      <div className="empty" />
      <div className="nav-link">
        <ul>
          <Link className="header-link" to="/aboutme">
            <li> About Me</li>
          </Link>
          <Link className="header-link" to="/projects">
            <li> Projects</li>
          </Link>
          <Link className="header-link" to="/resume">
            <li> Resume</li>
          </Link>
          <Link className="header-link" to="/contact">
            <li> Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
