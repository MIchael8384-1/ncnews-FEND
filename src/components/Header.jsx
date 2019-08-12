import React from "react";
import HeaderImage from "../../src/NC_Logo2_header.png";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <img src={HeaderImage} alt="Northcoders Header" className="responsive" />
    </section>
  );
};

export default Header;
