import React, { Component } from "react";
import * as api from "./api";
import ArticlesCard from "./ArticlesCard";
import UserDetails from "./UserDetails";
import Errors from "./Errors";

class UserPage extends Component {
  state = { articles: [], error: null, isLoading: true };
  render() {
    const { articles, isLoading, error } = this.state;

    if (error) {
      return <Errors status={error.status} message={error.msg} />;
    }

    if (isLoading) return <p>Loading....</p>;
    return (
      <div>
        <UserDetails user={this.props.username} />
        {articles.map(article => {
          return (
            <ArticlesCard
              key={article.article_id}
              author={article.author}
              title={article.title}
              topic={article.topic}
              comment_count={article.comment_count}
              votes={article.votes}
              id={article.article_id}
              user={this.props.username}
            />
          );
        })}
      </div>
    );
  }

  getArticlesList = () => {
    const { username } = this.props;
    api
      .fetchArticles({ author: username })
      .then(articlesDate => {
        this.setState({ articles: articlesDate, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          error: { msg: response.data.msg, status: response.status },
          isLoading: false
        });
      });
  };

  componentDidMount() {
    this.getArticlesList();
  }
}

export default UserPage;
