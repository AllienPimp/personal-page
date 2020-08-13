import React from "react";
import { Link } from "react-router-dom";
import "./sideMenu.css";

function SideMenu() {
  return (
    <div className="side-menu">
      <ul>
        <Link className="side-menu-link" to="/aboutme">
          <div>
            <button className="btn">
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">About me</span>
            </button>
          </div>
        </Link>
        <Link className="side-menu-link" to="/projects">
          <div>
            <button className="btn">
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Projects</span>
            </button>
          </div>
        </Link>
        <Link className="side-menu-link" to="/resume">
          <div>
            <button className="btn">
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Resume</span>
            </button>
          </div>
        </Link>
        <Link className="side-menu-link" to="/contact">
          <div>
            <button className="btn">
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Contact</span>
            </button>
          </div>
        </Link>
      </ul>
    </div>
  );
}

export default SideMenu;
