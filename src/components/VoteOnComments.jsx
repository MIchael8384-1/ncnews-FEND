import React, { Component } from "react";
import * as api from "./api";
import "./votes.css";
class VoteOnComments extends Component {
  state = {
    voteChangeComment: 0
  };
  render() {
    const { voteChangeComment } = this.state;
    const { votes } = this.props;
    return (
      <div className="commentVotes">
        <button
          className="btn-vote"
          onClick={() => this.commentVote(1)}
          disabled={voteChangeComment >= 1}
        >
          LIKE
        </button>
        <p>Votes:{votes + voteChangeComment}</p>
        <button
          className="btn-vote"
          onClick={() => this.commentVote(-1)}
          disabled={voteChangeComment <= -1}
        >
          DISLIKE
        </button>
      </div>
    );
  }
  commentVote = inc_votes => {
    const { comment_id } = this.props;
    api.patchCommentVotes(comment_id, inc_votes);
    this.setState(currentState => {
      return {
        voteChangeComment: currentState.voteChangeComment + inc_votes
      };
    });
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.voteChangeComment !== this.state.voteChangeComment) {
  //     this.patchCommentVotes();
  //   }
  // }
}

export default VoteOnComments;
