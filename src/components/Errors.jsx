import React from "react";
import { Link } from "@reach/router";
import "./errorHandler.css";

const Errors = props => {
  return (
    <div className="errorHandler">
      <h1>{props.message.toUpperCase()}</h1>
      <h2>ERROR CODE: {props.status}</h2>
      <p>Back to Articles</p>
      <Link to="/articles">
        <button className="btn-group">Back</button>
      </Link>
    </div>
  );
};

export default Errors;
