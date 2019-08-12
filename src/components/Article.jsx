import React, { Component } from "react";
// import { Link } from "@reach/router";
import ArticleComments from "./ArticleComments";
import Errors from "./Errors";
import * as api from "./api";
import Voter from "./Voter";
import "./article.css";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    error: null
  };

  componentDidMount() {
    api
      .fetchArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: true, isLoading: false });
      });
  }

  render() {
    const { article, isLoading, error } = this.state;

    if (error) {
      return <Errors />;
    }

    if (isLoading) return <p>Loading...</p>;
    return (
      <ul className="article">
        <li key={article.article_id} className="singleArticleList">
          <h2>{article.title}</h2>
          <h3>Topic: {article.topic}</h3>
          <p>{article.body}</p>
          <h3>By: {article.author}</h3>
          <Voter article_id={article.article_id} votes={article.votes} />
          <p>Comments:{article.comment_count}</p>
          <ArticleComments
            article_id={this.props.article_id}
            user={this.props.user}
          />
        </li>
      </ul>
    );
  }
}

export default Article;
