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
    this.getArticleById();
  }

  getArticleById = () => {
    api
      .fetchArticleById(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: { msg: response.data.msg, status: response.status },
          isLoading: false
        });
      });
  };

  render() {
    const { article, isLoading, error } = this.state;

    if (error) {
      return <Errors status={error.status} message={error.msg} />;
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
