import React, { Component } from "react";
import * as api from "./api";
import ArticlesCard from "./ArticlesCard";
import UserDetails from "./UserDetails";

class UserPage extends Component {
  state = { articles: [], isLoading: true };
  render() {
    const { articles, isLoading } = this.state;
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
    api.fetchArticles({ author: username }).then(articlesDate => {
      this.setState({ articles: articlesDate, isLoading: false });
    });
  };

  componentDidMount() {
    this.getArticlesList();
  }
}

export default UserPage;
