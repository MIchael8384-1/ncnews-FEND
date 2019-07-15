import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav className="mainNavigation">
      <button className="btn-group">
        <Link to="/">HOME</Link>
      </button>
      <button className="btn-group">
        <Link to="/topics">TOPICS</Link>
      </button>
    </nav>
  );
};

export default Nav;
