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
    isLoading: true,
    error: null
  };

  render() {
    const { articles, isLoading, error } = this.state;

    if (error) {
      return <Errors status={error.status} message={error.msg} />;
    }
    if (isLoading) return <p>Loading...</p>;

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
        this.setState({ articles: articlesData, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: { msg: response.data.msg, status: response.status },
          isLoading: false
        });
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
