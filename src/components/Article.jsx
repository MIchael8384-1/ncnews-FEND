import React, { Component } from "react";
// import { Link } from "@reach/router";
import ArticleComments from "./ArticleComments";
import * as api from "./api";
import Voter from "./Voter";

class Article extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    api.fetchArticleById(this.props.article_id).then(article => {
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    return (
      <ul className="article">
        <li key={article.article_id} className="singleArticleList">
          <h2>{article.title}</h2>
          <h3>Topic:{article.topic}</h3>
          <p>{article.body}</p>
          <h4>By: {article.author}</h4>
          <Voter article_id={article.article_id} votes={article.votes} />
          {/* <Link to={`comments`}> */}
          <p>Comments:{article.comment_count}</p>
          {/* </Link> */}

          <ArticleComments article_id={this.props.article_id} />
        </li>
      </ul>
    );
  }
}

export default Article;
