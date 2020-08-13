import React from "react";
import "./resume.css";

import { Row, Col, ProgressBar } from "react-bootstrap";
import ResumeDetail from "./ResumeDetails/resumeDetails";

class ResumePage extends React.Component {
  state = {
    educationFitstOpen: false,
    educationSecondOpen: false,
    educationThirdOpen: false,
    experienceOneOpen: false,
  };
  resumeClickHandler = (name) => {
    switch (name) {
      case "educationOneOpen":
        this.setState({
          educationFirstOpen: !this.state.educationFirstOpen,
        });
        break;
      case "educationSecondOpen":
        this.setState({
          educationSecondOpen: !this.state.educationSecondOpen,
        });
        break;
      case "educationThirdOpen":
        this.setState({
          educationThirdOpen: !this.state.educationThirdOpen,
        });
        break;
      case "experienceOneOpen":
        this.setState({
          experienceOneOpen: !this.state.experienceOneOpen,
        });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <div className="resume-page">
        <Row noGutters className="intro-text ">
          <Col className="intro-column" xs={11} md={6}>
            <div>
              <h2>Hi! I'm Laci</h2>
              <p>
                An enthusiastic professional who is seeking a new challenging
                career after many years of being a Telecommunication Technician.
                I am a hardworking person who strives to achieve the best in all
                areas, and I am always eager to learn new skills and advance in
                my career. As this is a huge career change I have completed a
                training course in Web Development at IT Informal School, and I
                am keen to build upon my knowledge and continue to learn within
                this sector.
              </p>
            </div>
          </Col>
          <Col className="contact-column" xs={11} md={3}>
            <h5 className="contact-me-text">Contact me here!</h5>
            <p>
              Email: <a href="mailto:vasile.n.baksai@gmail.com">laci@email</a>
            </p>
            <div>
              <ul className="social-media-icons">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    rel="noopener noferrer"
                    target="blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/i_miss_my_virginity/"
                    rel="noopener noferrer"
                    target="blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vasile-baksai-3a25364b/"
                    rel="noopener noferrer"
                    target="blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AllienPimp"
                    rel="noopener noferrer"
                    target="blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row noGutters className="education-row">
          <Col className="resume-title-column" xs={11} md={3}>
            <h2>Training and education</h2>
          </Col>
          <Col className="resume-detail-column" xs={11} md={6}>
            <ResumeDetail
              resumeDetailTitle={
                "  The Informal School of IT – Web Development (JavaScript) 03.2020 - 08.2020"
              }
              resumeDetailsText={
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<ul><li> Web Concepts: How the web works, Client-Server architecture, protocols</li>
              <li> HTTP: fundamentals about the protocol: methods, status codes, headers, cookies and sessions</li>
              <li> HTML and CSS: how to build a responsive User Interface with semantic HTML elements</li>
              <li> JavaScript: how to use variables, primitive types, functions,
              hoisting, objects, scope, DOM, AJAX and Promises</li>
              <li> OOP in JavaScript: prototypes, classes and inheritance in JavaScript</li>
              <li> GIT: learned the principles and basic commands</li>
              <li> React JS: how modern JS applications work, React components, props, state, JSX </li></ul>`,
                  }}
                ></div>
              }
              resumeDetailsOpen={this.state.educationFirstOpen}
              onClick={() => this.resumeClickHandler("educationOneOpen")}
            />
            <Row noGutters>
              <Col>
                <ResumeDetail
                  resumeDetailTitle={
                    "The Informal School of IT – Introduction in IT 11.2019 - 02.2020"
                  }
                  resumeDetailsText={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<ul><li> Basics of team roles and responsibilities</li>
                              <li> Computer arhitecture and OS architecture (processes, services, file
                                system, security) Windows vs Linux vs Android vs iOS</li>
                              <li> Application architecture (Presentation, Business and Data Layers;
                                Windows architecture; Server – client architecture)</li>
                              <li> How does information travel through Internet?: WWW (HTTP/S, TCP/IP,
                                DNS), URL and URI, client side vs. Server side processing/rendering,
                                internet security</li>
                              <li> Basic tools: Web browsers (cookies, sessions, extensions/plugins),
                              text editors with syntax highlighting, Chrome Inspector / Firebug /
                              DevTools, Moqups, wireframes</li>
                              <li> Programming basics: pseudocoding and flow charting, data structures
                              and algorithms, number systems and binary logic, IT terminology</li>
                              <li> Basics of: HTML, CSS, Javascript, SQL (basics and database entities,
                                create db and tables using tools, NOSQL)</li>
                              <li>  Basics of software testing: types of testing – manual vs automated
                              testing, what is a bug, test scenarios, test execution </li></ul>`,
                      }}
                    ></div>
                  }
                  resumeDetailsOpen={this.state.educationSecondOpen}
                  onClick={() => this.resumeClickHandler("educationSecondOpen")}
                />
              </Col>
            </Row>
            <Row noGutters>
              <Col>
                <ResumeDetail
                  resumeDetailTitle={
                    " School of photography -Ciorchin- 09.2017 - 02.2019 "
                  }
                  resumeDetailsText={
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<ul><li> Introduction to Photography: using the camera in manual working mode, photocomposition, photo lenses.</li>
                              <li> Night photography: blue hour, photo with long exposure time </li>
                              <li> Photography in the studio: artificial light vs. natural light, principles in artificial light photography, equipment used in studio photography</li>
                              <li> Portait photography: elements of portraiture, composition in portrait photography, lighting schemes with 1,2 or 3 light sources </li>
                              <li> Product photography:principles, composition and lighting schemes for product photography </li>
                              <li> Photography processing: Adobe Photoshop and Adobe Lightroom</li></ul>`,
                      }}
                    ></div>
                  }
                  resumeDetailsOpen={this.state.educationThirdOpen}
                  onClick={() => this.resumeClickHandler("educationThirdOpen")}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row noGutters className="experience-row">
          <Col className="resume-title-column" xs={11} md={3}>
            <h2>Experience</h2>
          </Col>
          <Col className="resume-detail-column" xs={11} md={6}>
            <ResumeDetail
              resumeDetailTitle={
                " Telecommunication Technician - RCS&RDS  S.A. 09.2005 - Present "
              }
              resumeDetailsText={
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<ul><li> Installing, testing, repairing, and maintenance networking systems on a daily basis;</li>
                              <li> Handle the tasks of using latest technology to meet operating standards of network communication systems;</li>
                              <li> Troubleshooting and providing solutions in wide-area connection issues;</li>
                              <li> Providing systems integration support, handled network connection issues, and checked network availability in various environment;</li>
                              <li> Coordinating and supervising of civil construction teams (company teams and subcontractors), electricians, RF equipment;</li>
                              <li> Installing, commissioning, integrating and maintaining the base stations and RF modules such as: Nokia, Huawei, ZTE and Ericsson;</li>
                              <li> Working with 2G, 3G, 4G/LTE, 5G technologies in FDD and TDD </li></ul>`,
                  }}
                ></div>
              }
              resumeDetailsOpen={this.state.experienceOneOpen}
              onClick={() => this.resumeClickHandler("experienceOneOpen")}
            />
          </Col>
        </Row>
        <Row noGutters className="skills-row">
          <Col className="resume-title-column" xs={11} md={3}>
            <h2>Skills</h2>
          </Col>
          <Col className="resume-detail-column" xs={11} md={6}>
            <h5>HTML</h5>
            <ProgressBar
              className="progress-bar-style"
              variant="dark"
              animated
              now={8}
            />
            <h5>CSS</h5>
            <ProgressBar
              className="progress-bar-style"
              variant="dark"
              animated
              now={7}
            />
            <h5>Javascript</h5>
            <ProgressBar
              className="progress-bar-style"
              variant="dark"
              animated
              now={4}
            />
            <h5>React JS</h5>
            <ProgressBar
              className="progress-bar-style"
              variant="dark"
              animated
              now={5}
            />
            <h5>Photography</h5>
            <ProgressBar
              className="progress-bar-style"
              variant="dark"
              animated
              now={75}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
export default ResumePage;
