import React, { Component } from "react";

import * as api from "./api";

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
          <h4>{article.author}</h4>
          <p>Votes:{article.votes}</p>
          <p>Comments:{article.comment_count}</p>
        </li>
      </ul>
    );
  }
}

export default Article;
