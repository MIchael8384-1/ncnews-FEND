import React from "react";

const CommentCards = props => {
  return (
    <article className="commentCard">
      <div className="container">
        <h3>Author:{props.author}</h3>
        <p>{props.body}</p>
        <p>Votes:{props.votes}</p>
        <button onClick={props.deleteComment}>Delete</button>
      </div>
    </article>
  );
};

export default CommentCards;
