import React from "react";
import { Switch, Route } from "react-router-dom";
import ContactPage from "./contact";
import ResumePage from "./resume";
import ProjectsPage from "./projects";
import AboutPage from "./aboutMe";
import HomePage from "./homePage";

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
