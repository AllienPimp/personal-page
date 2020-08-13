import React from "react";
import "./projects.css";
import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img00 from "../../img/img00.jpg";
import img01 from "../../img/img01.jpg";
import img02 from "../../img/img02.jpg";
import img03 from "../../img/img03.jpg";
import img04 from "../../img/img04.jpg";
import img05 from "../../img/img05.jpg";
import img06 from "../../img/img06.jpg";
import img07 from "../../img/img07.jpg";
import img08 from "../../img/img08.jpg";
import img09 from "../../img/img09.jpg";
import imgProj01 from "../../img/Project/project1.JPG";
import imgProj02 from "../../img/Project/the_slalom_game.jpg";
import imgProj03 from "../../img/Project/project_Clock.JPG";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <h2>Some of my photo projects</h2>
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
      <h2>Some of my IT projects</h2>
      <Row
        className="d-flex justify-content-around container-fluid card-container"
        noGutters
      >
        <Col xs={10} md={3}>
          <Card className="card-element">
            <Card.Img variant="top" src={imgProj03} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className="text-link">
                <a
                  href="https://allienpimp.github.io/JS-clock-App/"
                  target="blank"
                >
                  Go to live App
                </a>
              </Card.Text>
              <Button
                href="https://github.com/AllienPimp/JS-clock-App"
                target="_blank"
                variant="dark"
              >
                GitHub Code
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} md={3}>
          <Card className="card-element">
            <Card.Img variant="top" src={imgProj01} />
            <Card.Body>
              <Card.Title>Comments JS App</Card.Title>
              <Card.Text className="text-link">
                <a
                  href="https://allienpimp.github.io/Comments-JS-App/"
                  target="blank"
                >
                  Go to live App
                </a>
              </Card.Text>
              <Button
                href="https://github.com/AllienPimp/Comments-JS-App"
                target="_blank"
                variant="dark"
              >
                GitHub Code
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={10} md={3}>
          <Card className="card-element">
            <Card.Img variant="top" src={imgProj02} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text className="text-link">
                <a
                  href="https://allienpimp.github.io/The-slalom-game/"
                  target="blank"
                >
                  Go to live App
                </a>
              </Card.Text>
              <Button
                className="text-center"
                href="https://github.com/AllienPimp/The-slalom-game"
                target="_blank"
                variant="dark"
              >
                GitHub Code
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProjectsPage;
