import React from "react";
import "./aboutMe.css";
import image from "../img/me.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutPage() {
  return (
    <div className="about-page-container">
      <Row className="about-page-row" noGutters>
        <Col className="about-page-column1" xs={12} md={4}>
          <img className="img" src={image} />
          <h3 className="text">Ana are mere!</h3>
        </Col>
        <Col className="about-page-column2" sx={12} md={8}>
          <h1 className="text">Some cool text about me!</h1>
          <p className="text">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
            massa egestas mollis varius; dignissim elementum. Mollis tincidunt
            mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
            parturient habitant pharetra rutrum gravida porttitor eros feugiat.
            Mollis elit sodales taciti duis praesent id. Consequat urna vitae
            morbi nunc congue.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutPage;
