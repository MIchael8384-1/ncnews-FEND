import React from "react";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <h2>Welcome To NC Portal</h2>
      <p>PLEASE SELECT FROM THE ABOVE OPTIONS</p>
      <img
        src="../src/images/NC_Logo_Intro.png"
        alt="NC logo"
        className="responsive"
      />
    </div>
  );
};

export default HomePage;
