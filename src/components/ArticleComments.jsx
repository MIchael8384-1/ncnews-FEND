import React, { Component } from "react";
import CommentCards from "./CommentCards";
import * as api from "./api";
import CommentAdder from "./CommentAdder";
import Errors from "./Errors";

class ArticleComments extends Component {
  state = { comments: [], error: null, isLoading: true };
  render() {
    const { comments, isLoading, error } = this.state;

    if (error) {
      return <Errors status={error.status} message={error.msg} />;
    }
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
    api.deleteCommentById(commentToDelete.comment_id);
    this.setState(previousState => ({
      comments: previousState.comments.filter(
        comment => comment.comment_id !== commentToDelete.comment_id
      )
    }));
  };

  addItem = newItem => {
    api
      .postItem(this.props.article_id, newItem)
      .then(newComment => {
        this.setState(previousState => {
          return { comments: [newComment, ...previousState.comments] };
        });
      })
      .catch(({ response }) => {
        this.setState({
          error: { msg: response.data.msg, status: response.status },
          isLoading: false
        });
      });
  };

  getCommentsList = () => {
    api
      .fetchComments(this.props.article_id)
      .then(commentsData => {
        this.setState({ comments: commentsData, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: { msg: response.data.msg, status: response.status },
          isLoading: false
        });
      });
  };

  componentDidMount() {
    this.getCommentsList();
  }
}
export default ArticleComments;
