import React, { Component } from "react";
import CommentCards from "./CommentCards";
import * as api from "./api";

class ArticleComments extends Component {
  state = { comments: [], isLoading: true };
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Loading</p>;

    return comments.map(commentData => {
      return (
        <CommentCards
          key={commentData.comment_id}
          author={commentData.author}
          body={commentData.body}
          created={commentData.created_at}
          votes={commentData.votes}
        />
      );
    });
  }

  getCommentsList = () => {
    api.fetchComments(this.props.article_id).then(commentsData => {
      this.setState({ comments: commentsData, isLoading: false });
    });
  };

  componentDidMount() {
    this.getCommentsList();
  }
}

export default ArticleComments;
