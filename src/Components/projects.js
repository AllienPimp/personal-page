import React from "react";
import "./projects.css";
import Carousel from "react-bootstrap/Carousel";
// import Card from "react-bootstrap/Card";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img00 from "../img/img00.jpg";
import img01 from "../img/img01.jpg";
import img02 from "../img/img02.jpg";
import img03 from "../img/img03.jpg";
import img04 from "../img/img04.jpg";
import img05 from "../img/img05.jpg";
import img06 from "../img/img06.jpg";
import img07 from "../img/img07.jpg";
import img08 from "../img/img08.jpg";
import img09 from "../img/img09.jpg";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img className="carousel-image" src={img00} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img01} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img02} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img03} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img04} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img05} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img06} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img07} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img08} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={img09} alt="First slide" />
        </Carousel.Item>
      </Carousel>

      <h2>Some of my projects</h2>

      {/* <div className="d-flex justify-content-around card-container"> */}
      <Row
        className="d-flex justify-content-around container-fluid card-container"
        noGutters
      >
        <Col xs={10} md={3}>
          <Card className=" card-element">
            <Card.Img variant="top" src={img00} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                href="https://www.google.com"
                target="_blank"
                variant="dark"
              >
                Open page
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} md={3}>
          <Card className="card-element">
            <Card.Img variant="top" src={img01} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                className="text-center"
                href="https://www.google.com"
                target="_blank"
                variant="dark"
              >
                Open page
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} md={3}>
          <Card className="card-element">
            <Card.Img variant="top" src={img03} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                href="https://www.google.com"
                target="_blank"
                variant="dark"
              >
                Open page
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* </div> */}
    </div>
  );
}

export default ProjectsPage;
