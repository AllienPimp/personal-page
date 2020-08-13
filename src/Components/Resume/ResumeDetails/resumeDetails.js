import React from "react";
import "./resumeDetails.css";

function ResumeDetail(props) {
  let resumeDetailsClass = "resume-detail-text ";
  if (props.resumeDetailsOpen) {
    resumeDetailsClass = "open";
  }
  return (
    <div className="resume-detail-container">
      <div className="resume-detail-title" onClick={props.onClick}>
        <h5>{props.resumeDetailTitle}</h5>
      </div>

      <div className={resumeDetailsClass}>{props.resumeDetailsText}</div>
    </div>
  );
}

export default ResumeDetail;
