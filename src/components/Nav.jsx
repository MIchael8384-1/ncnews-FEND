import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="mainNavigation">
      <Link to="/">
        <button className="btn-group">HOME </button>
      </Link>

      <Link to="/topics">
        <button className="btn-group">TOPICS</button>
      </Link>
    </nav>
  );
};

export default Nav;
