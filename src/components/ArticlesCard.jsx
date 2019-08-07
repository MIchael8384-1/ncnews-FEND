import React from "react";
import { Link } from "@reach/router";
import "./articlesCard.css";

const ArticlesCard = props => {
  return (
    <article className="articleCard">
      <div className="container">
        <h2>{props.author}</h2>
        <Link to={`/articles/${props.id}`}>
          <h3>{props.title}</h3>
        </Link>
        <h3>{props.topic}</h3>
      </div>
    </article>
  );
};

export default ArticlesCard;
