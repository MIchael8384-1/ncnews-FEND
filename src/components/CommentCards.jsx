import React from "react";

const CommentCards = props => {
  return (
    <article className="commentCard">
      <div className="container">
        <h3>>{props.author}</h3>
        <p>{props.body}</p>
      </div>
    </article>
  );
};

export default CommentCards;
