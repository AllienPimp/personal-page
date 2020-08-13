import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./Components/routing";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header/header";
import SideMenuMobile from "./Components/SmallScreenMobile/sideMenuMobile";
import BackDrop from "./Components/BackDrop/backDrop";
import Footer from "./Components/Footer/footer";

class App extends Component {
  state = {
    sideMenuMobileOpen: false,
  };
  sideMenuMobileTogleClickHandler = () => {
    this.setState((prevState) => {
      return { sideMenuMobileOpen: !prevState.sideMenuMobileOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideMenuMobileOpen: false });
  };

  render() {
    let backDrop;
    console.log(this.state);
    if (this.state.sideMenuMobileOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <Router>
        <>
          <Header
            sideMenuMobileClickHandler={this.sideMenuMobileTogleClickHandler}
          />
          <SideMenuMobile
            show={this.state.sideMenuMobileOpen}
            click={this.sideMenuMobileTogleClickHandler}
          />
          {backDrop}
          <Routing />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
