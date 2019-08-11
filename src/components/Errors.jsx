import React from "react";
import { Link } from "@reach/router";

const Errors = () => {
  return (
    <div>
      <h1> This Page Does Not Exist!</h1>
      <Link to="/">
        <button className="btn-group">return to homepage</button>
      </Link>
    </div>
  );
};

export default Errors;
