import React from "react";
// import * as api from "./api";

const Voter = ({ article_id, votes }) => {
  const vote = increment => {
    // api.patchArticleVotes(article_id, increment);
    console.log(increment);
  };

  return (
    <>
      <button onClick={() => vote(1)}>LIKE</button>
      <p>Votes:{votes}</p>
      <button onClick={() => vote(-1)}>DISLIKE</button>
    </>
  );
};

export default Voter;
