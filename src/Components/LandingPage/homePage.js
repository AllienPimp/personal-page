import React from "react";
import background from "../../img/Ghelari 2018-7155.jpg";
import "./homepage.css";
import SideMenu from "./sideMenu";

function HomePage() {
  return (
    <div className="home-page">
      <img src={background} alt="Background" />
      <SideMenu />
    </div>
  );
}

export default HomePage;
