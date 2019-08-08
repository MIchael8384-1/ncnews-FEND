import React, { Component } from "react";
import * as api from "./api";
import ArticlesCard from "./ArticlesCard";

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  };

  getArticleList = () => {
    const { topic } = this.props;
    api.fetchArticles({ topic }).then(articlesData => {
      this.setState({ articles: articlesData, loading: false });
    });
  };

  render() {
    const { articles, loading } = this.state;

    let content;

    if (loading) {
      content = <div>Loading...</div>;
    } else {
      return articles.map(articlesList => {
        return (
          <ArticlesCard
            key={articlesList.article_id}
            author={articlesList.author}
            title={articlesList.title}
            topic={articlesList.topic}
            id={articlesList.article_id}
          />
        );
      });
    }
    return <div>{content}</div>;
  }
  componentDidMount() {
    this.getArticleList();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.getArticleList();
      // create some additional conditions depending for //sort ||
    }
  }
}

export default Articles;
