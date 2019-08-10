import React, { Component } from "react";
import CommentCards from "./CommentCards";
import * as api from "./api";
import CommentAdder from "./CommentAdder";
// import { navigate } from "@reach/router/lib/history";

class ArticleComments extends Component {
  state = { comments: [], isLoading: true };
  render() {
    const { comments, isLoading } = this.state;
    if (isLoading) return <p>Loading..</p>;

    return (
      <div>
        <CommentAdder addItem={this.addItem} />
        {comments.map(commentData => {
          return (
            <CommentCards
              key={commentData.comment_id}
              comment_id={commentData.comment_id}
              author={commentData.author}
              body={commentData.body}
              created={commentData.created_at}
              votes={commentData.votes}
              deleteComment={() => this.deleteComment(commentData)}
            />
          );
        })}
      </div>
    );
  }

  deleteComment = commentToDelete => {
    console.log(commentToDelete.comment_id);
    api.deleteCommentById(commentToDelete.comment_id);
    this.setState(previousState => ({
      comments: [
        ...previousState.comments.slice(0, commentToDelete),
        ...previousState.comments.slice(commentToDelete + 1)
      ]
    }));
  };

  addItem = newItem => {
    api.postItem(this.props.article_id, newItem).then(newComment => {
      this.setState(previousState => {
        // console.log(newComment);
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
