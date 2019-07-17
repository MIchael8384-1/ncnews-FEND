import React, { Component } from "react";
import * as api from "./api";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  };

  componentDidMount() {
    this.getArticleList();
  }

  getArticleList = () => {
    api.fetchArticles().then(articlesData => {
      this.setState({ articles: articlesData, loading: false });
    });
  };

  render() {
    const { articles, loading } = this.state;

    let content;

    if (loading) {
      content = <div>Loading...</div>;
    } else {
      return articles.map(articleList => {
        return (
          <ul className="articles">
            <li key={articleList.article_id} className="articlesList">
              <h2 className="author">Author:{articleList.author}</h2> <br />
              <Link to={`/articles/${articleList.article_id}`}>
                <h3 className="title">Title:{articleList.title}</h3>
              </Link>
              <br />
              <h3 className="topic">Topic:{articleList.topic}</h3>
              <button>Comments</button>
            </li>
          </ul>
        );
      });
    }
    return <div>{content}</div>;
  }
}

export default Articles;
