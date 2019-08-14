import React from "react";
import VoteOnComments from "./VoteOnComments";
import "./commentCards.css";

const CommentCards = props => {
  return (
    <article className="commentCard">
      <div className="container">
        <h3>Author:{props.author}</h3>
        <p>{props.body}</p>
        <VoteOnComments comment_id={props.comment_id} votes={props.votes} />
        <br />
        {props.user === props.author && (
          <button className="btn-group" onClick={props.deleteComment}>
            DELETE
          </button>
        )}
      </div>
    </article>
  );
};

export default CommentCards;
