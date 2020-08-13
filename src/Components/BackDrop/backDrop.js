import React from "react";
import "./backDrop.css";

function BackDrop(props) {
  return <div className="back-drop" onClick={props.click} />;
}

export default BackDrop;
