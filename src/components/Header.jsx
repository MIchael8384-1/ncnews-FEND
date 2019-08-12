import React from "react";
import HeaderImage from "../../src/NC_Logo2_header.png";

const Header = () => {
  return (
    <section className="header">
      <img src={HeaderImage} alt="Northcoders Header" class="responsive" />
    </section>
  );
};

export default Header;
