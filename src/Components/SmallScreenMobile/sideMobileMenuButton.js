import React from "react";
import "./sideMobileMenuButton.css";

function SideMobileMenuButton(props) {
  return (
    <button className="mobile-button" onClick={props.click}>
      <i className="fas fa-bars" />
    </button>
  );
}

export default SideMobileMenuButton;
