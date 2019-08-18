import React from "react";
import { Link } from "@reach/router";
import "./articlesCard.css";

const ArticlesCard = props => {
  return (
    <article className="articleCard">
      <div className="container">
        <h1>{props.author}</h1>
        <Link to={`/articles/${props.id}`}>
          <h3>{props.title.toUpperCase()}</h3>
        </Link>
        <h3>{props.topic}</h3>
        <p>{props.created_at}</p>
        <p>Votes: {props.votes}</p>
        <p>Comments: {props.comment_count}</p>
      </div>
    </article>
  );
};

export default ArticlesCard;
