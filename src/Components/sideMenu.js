import React from "react";
import { Link } from "react-router-dom";
import "./sideMenu.css";

function SideMenu() {
  return (
    <div className="side-menu">
      <ul>
        <Link className="side-menu-link" to="/aboutme">
          {/* <li> About Me</li> */}
          <div>
            <button class="btn">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">About me</span>
            </button>
          </div>
        </Link>
        <Link className="side-menu-link" to="/projects">
          {/* <li> Projects</li> */}
          <div>
            <button class="btn">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Projects</span>
            </button>
          </div>
        </Link>
        <Link className="side-menu-link" to="/resume">
          {/* <li> Resume</li> */}
          <div>
            <button class="btn">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Resume</span>
            </button>
          </div>
        </Link>
        <Link className="side-menu-link" to="/contact">
          {/* <li> Contact</li> */}
          <div>
            <button class="btn">
              <span class="circle">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Contact</span>
            </button>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default SideMenu;
