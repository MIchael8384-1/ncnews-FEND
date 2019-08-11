import React from "react";
import VoteOnComments from "./VoteOnComments";

const CommentCards = props => {
  return (
    <article className="commentCard">
      <div className="container">
        <h3>Author:{props.author}</h3>
        <p>{props.body}</p>
        <VoteOnComments comment_id={props.comment_id} votes={props.votes} />
        <button onClick={props.deleteComment}>Delete</button>
      </div>
    </article>
  );
};

export default CommentCards;
