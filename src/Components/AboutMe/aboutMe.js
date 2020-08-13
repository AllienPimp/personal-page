import React from "react";
import "./aboutMe.css";
import image from "../../img/me.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutPage() {
  return (
    <Row className="about-page-row" noGutters>
      <Col className="about-page-column1" xs={11} md={3}>
        <img className="img" src={image} alt="Background" />
        <h3 className="text">VASILE BAKSAI</h3>
      </Col>
      <Col className="about-page-column2" xs={11} md={7}>
        <h3 className="text">ABOUT ME</h3>
        <p className="text">
          An enthusiastic professional who is seeking a new challenging career
          after many years of being a Telecommunication Technician. I am a
          hardworking person who strives to achieve the best in all areas, and I
          am always eager to learn new skills and advance in my career. As this
          is a huge career change I have completed a training course in Web
          Development at IT Informal School, and I am keen to build upon my
          knowledge and continue to learn within this sector.
        </p>
      </Col>
    </Row>
  );
}

export default AboutPage;
