import React, { Component } from "react";
import CommentCards from "./CommentCards";
import * as api from "./api";
import CommentAdder from "./CommentAdder";

class ArticleComments extends Component {
  state = { comments: [], isLoading: true };
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Loading</p>;

    return (
      <div>
        <CommentAdder addItem={this.addItem} />
        {comments.map(commentData => {
          return (
            <CommentCards
              key={commentData.comment_id}
              author={commentData.author}
              body={commentData.body}
              created={commentData.created_at}
              votes={commentData.votes}
            />
          );
        })}
      </div>
    );
  }

  deleteComment = () => {
    const { comments } = this.state;
    api.deleteCommentById(comments.comment_id);
  };

  addItem = newItem => {
    console.log(this.props);
    api.postItem(this.props.article_id, newItem).then(newComment => {
      this.setState(previousState => {
        console.log(newComment);
        return { comments: [newComment, ...previousState.comments] };
      });
    });
  };

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
