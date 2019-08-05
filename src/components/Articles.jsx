import React, { Component } from "react";
import * as api from "./api";
import ArticleCard from "./ArticleCard";

class Articles extends Component {
  state = {
    articles: [],
    loading: true
  };

  componentDidMount() {
    this.getArticleList();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      this.getArticleList();
    }
  }
  getArticleList = () => {
    const { slug } = this.props;
    api.fetchArticles(slug).then(articlesData => {
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
          <ArticleCard
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
}

export default Articles;
