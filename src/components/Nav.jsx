import React from "react";
import * as api from "./api";
import { Link } from "@reach/router";
import Errors from "./Errors";

class Nav extends React.Component {
  state = { topics: [], error: null };
  render() {
    const { topics, error } = this.state;
    const { user } = this.props;

    if (error) {
      return <Errors status={error.status} message={error.msg} />;
    }

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
              <Link to={`/articles/topic/${topic.slug}`} key={topic.slug}>
                <button type="button" className="btn-group">
                  {topic.slug.toUpperCase()}
                </button>
              </Link>
            );
          })}
        <Link to={`/users/${user}`}>
          <button className="btn-group" key={this.props.user.slug}>
            PROFILE
          </button>
        </Link>
      </nav>
    );
  }
  componentDidMount() {
    this.getTopicsList();
  }
  getTopicsList = () => {
    api
      .fetchTopics()
      .then(topicsData => {
        this.setState({ topics: topicsData });
      })
      .catch(({ response }) => {
        this.setState({
          error: { msg: response.data.msg, status: response.status }
        });
      });
  };
}

export default Nav;
