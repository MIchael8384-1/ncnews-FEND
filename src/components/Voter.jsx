import React from "react";
import * as api from "./api";

class Voter extends React.Component {
  state = {
    voteChange: 0
  };
  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;

    return (
      <>
        <button
          className="btn-vote"
          onClick={() => this.vote(1)}
          disabled={voteChange >= 1}
        >
          LIKE
        </button>
        <h3>Votes:{votes + voteChange}</h3>
        <button
          className="btn-vote"
          onClick={() => this.vote(-1)}
          disabled={voteChange <= -1}
        >
          DISLIKE
        </button>
      </>
    );
  }
  vote = inc_votes => {
    const { article_id } = this.props;
    api.patchArticleVotes(article_id, inc_votes);
    this.setState(currentState => {
      return { voteChange: currentState.voteChange + inc_votes };
    });
  };
}

export default Voter;
