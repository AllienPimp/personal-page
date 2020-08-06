import React, { Component } from "react";
import "./App.css";
import Routing from "./Components/routing";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import SideMenuMobile from "./Components/sideMenuMobile";
import BackDrop from "./Components/backDrop";
import Footer from "./Components/footer";

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
    // let sideMenu;
    let backDrop;
    console.log(this.state);
    if (this.state.sideMenuMobileOpen) {
      // sideMenu = <SideMenuMobile click={this.backDropClickHandler} />;
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
          {/* {sideMenu} */}
          {backDrop}
          <Routing />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
