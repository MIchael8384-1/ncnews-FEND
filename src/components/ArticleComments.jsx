import React, { Component } from "react";
import CommentCards from "./CommentCards";
import * as api from "./api";
import CommentAdder from "./CommentAdder";

class ArticleComments extends Component {
  state = { comments: [], isLoading: true };
  render() {
    console.log(this.props);
    const { comments, isLoading } = this.state;

    if (isLoading) return <p>Loading..</p>;

    return (
      <div>
        <CommentAdder addItem={this.addItem} user={this.props.user} />
        {comments.map(commentData => {
          return (
            <CommentCards
              key={commentData.comment_id}
              comment_id={commentData.comment_id}
              author={commentData.author}
              body={commentData.body}
              created={commentData.created_at}
              votes={commentData.votes}
              user={this.props.user}
              deleteComment={() => this.deleteComment(commentData)}
            />
          );
        })}
      </div>
    );
  }

  deleteComment = commentToDelete => {
    console.log(commentToDelete);
    api.deleteCommentById(commentToDelete.comment_id);
    this.setState(previousState => ({
      comments: previousState.comments.filter(
        comment => comment.comment_id !== commentToDelete.comment_id
      )
    }));
  };

  addItem = newItem => {
    api.postItem(this.props.article_id, newItem).then(newComment => {
      this.setState(previousState => {
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
