import React, { Component } from "react";
import * as api from "./api";

class Articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.getArticleList();
  }

  getArticleList = () => {
    api.fetchArticles().then(articlesData => {
      console.log(articlesData);
      this.setState({ articles: articlesData });
    });
  };

  render() {
    const { articles } = this.state;

    return articles.map(articleList => {
      return (
        <ul key="articles">
          <li key={articleList.article_id} className="articlesList">
            <h2>Author:{articleList.author}</h2> <br />
            <b>Title</b>:{articleList.title}
            <br />
            <b>Topic:</b>
            {articleList.topic}
          </li>
        </ul>
      );
    });
  }
}

export default Articles;
