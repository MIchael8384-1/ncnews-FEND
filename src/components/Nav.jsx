import React from "react";
import * as api from "./api";
import { Link } from "@reach/router";

class Nav extends React.Component {
  state = { topics: [], error: null };
  render() {
    const { topics } = this.state;
    const { user } = this.props;

    return (
      <nav className="mainNavigation">
        <Link to="/">
          <button type="button" className="btn-group">
            HOME
          </button>
        </Link>
        <Link to="/articles">
          <button type="button" className="btn-group">
            ARTICLES
          </button>
        </Link>
        {topics &&
          topics.map(topic => {
            return (
              <Link to={`/articles/topic/${topic.slug}`}>
                <button className="btn-group" key={topic.slug}>
                  {topic.slug}
                </button>
              </Link>
            );
          })}
        <Link to={`/users/${user}`}>
          <button className="btn-group" key={this.props.user.slug}>
            Profile
          </button>
        </Link>
      </nav>
    );
  }
  componentDidMount() {
    this.getTopicsList();
  }
  getTopicsList = () => {
    api.fetchTopics().then(topicsData => {
      this.setState({ topics: topicsData });
    });
  };
}

export default Nav;
