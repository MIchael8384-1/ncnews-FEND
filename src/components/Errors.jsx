import React from "react";
import { Link } from "@reach/router";
import "./errorHandler.css";

const Errors = () => {
  return (
    <div className="errorHandler">
      <h1> This Page Does Not Exist!</h1>
      <p>Back to Articles</p>
      <Link to="/articles">
        <button className="btn-group">Back</button>
      </Link>
    </div>
  );
};

export default Errors;
