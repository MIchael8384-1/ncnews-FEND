import React, { Component } from "react";
import * as api from "./api";
import ArticlesCard from "./ArticlesCard";
import SortForm from "./SortForm";
import Errors from "./Errors";

class Articles extends Component {
  state = {
    articles: [],
    sort_by: null,
    order: null,
    loading: true,
    error: null
  };

  render() {
    const { articles, loading, error } = this.state;

    if (error) {
      return <Errors />;
    }
    if (loading) return <p>Loading...</p>;

    return (
      <div>
        <SortForm sortByOptions={this.sortByOptions} />
        {articles.map(articlesList => {
          return (
            <ArticlesCard
              key={articlesList.article_id}
              author={articlesList.author}
              title={articlesList.title}
              topic={articlesList.topic}
              created_at={articlesList.created_at}
              comment_count={articlesList.comment_count}
              votes={articlesList.votes}
              id={articlesList.article_id}
            />
          );
        })}
      </div>
    );
  }

  getArticleList = () => {
    const { topic } = this.props;
    const { order, sort_by } = this.state;
    api
      .fetchArticles({ topic, order, sort_by })
      .then(articlesData => {
        this.setState({ articles: articlesData, loading: false });
      })
      .catch(err => {
        this.setState({ error: true });
      });
  };

  componentDidMount() {
    this.getArticleList();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.topic !== this.props.topic ||
      prevState.sort_by !== this.state.sort_by ||
      prevState.order !== this.state.order
    ) {
      this.getArticleList();
    }
  }

  sortByOptions = (sort, order_by) => {
    this.setState({ sort_by: sort, order: order_by });
  };
}
export default Articles;
