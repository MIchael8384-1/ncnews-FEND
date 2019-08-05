import React from "react";
import { Link } from "@reach/router";
import "./articleCard.css";

const ArticleCard = props => {
  return (
    <article className="articleCard">
      <div className="container">
        <h2>{props.author}</h2>
        <Link to={`${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
        <h3>{props.topic}</h3>
        <button>Comments</button>
      </div>
    </article>
  );
};

export default ArticleCard;
