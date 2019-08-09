import React, { Component } from "react";
import * as api from "./api";
import ArticlesCard from "./ArticlesCard";
import SortForm from "./SortForm";

class Articles extends Component {
  state = {
    articles: [],
    sort_by: null,
    order: null,
    loading: true
  };

  render() {
    const { articles, loading } = this.state;
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
    console.log(order);
    api.fetchArticles({ topic, order, sort_by }).then(articlesData => {
      this.setState({ articles: articlesData, loading: false });
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
      // create some additional conditions depending for //sort ||
    }
  }

  sortByOptions = (sort, order_by) => {
    console.log(sort);
    console.log(order_by);
    this.setState({ sort_by: sort, order: order_by });
  };
}
export default Articles;
