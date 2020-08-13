import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactPage from "../Components/Contact/contact";
import ResumePage from "../Components/Resume/resume";
import ProjectsPage from "../Components/Projects/projects";
import AboutPage from "../Components/AboutMe/aboutMe";
import HomePage from "../Components/LandingPage/homePage";

function Routing() {
  return (
    <main>
      <Switch>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/resume">
          <ResumePage />
        </Route>
        <Route exact path="/projects">
          <ProjectsPage />
        </Route>
        <Route exact path="/aboutme">
          <AboutPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </main>
  );
}

export default Routing;
