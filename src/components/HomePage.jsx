import React from "react";
import "./homePage.css";
import HomePageLogo from "../../src/NC_Logo_homepage.png";

const HomePage = () => {
  return (
    <div className="homePage">
      <h2>Welcome To NC Portal</h2>
      <p>PLEASE SELECT FROM THE ABOVE OPTIONS</p>
      <img src={HomePageLogo} alt="NC logo" className="responsiveLogo" />
    </div>
  );
};

export default HomePage;
