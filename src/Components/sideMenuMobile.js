import React from "react";
import { Link } from "react-router-dom";
import "./sideMenuMobile.css";

function SideMenuMobile(props) {
  let mobileMenuClass = "side-menu-mobile";

  if (props.show) {
    mobileMenuClass = "side-menu-mobile open";
  }

  return (
    <nav className={mobileMenuClass} onClick={props.click}>
      <ul>
        <li>
          <Link className="side-menu-mobile-link" to="/aboutme">
            {/* <li> About Me</li> */}
            <i className="fas fa-info" /> <span>About me</span>
          </Link>
        </li>
        <li>
          <Link className="side-menu-mobile-link" to="/projects">
            {/* <li> Projects</li> */}
            <i className="fas fa-code" /> <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link className="side-menu-mobile-link" to="/resume">
            {/* <li> Resume</li> */}
            <i className="far fa-address-card"></i> <span>Resume</span>
          </Link>
        </li>
        <li>
          <Link className="side-menu-mobile-link" to="/contact">
            {/* <li> Contact</li> */}
            <i className="fas fa-id-badge" /> <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideMenuMobile;
