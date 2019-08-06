import React from "react";
import * as api from "./api";
import { Link } from "@reach/router";

class Nav extends React.Component {
  state = { topics: [] };
  render() {
    const { topics } = this.state;
    console.log(this.state.topic);
    return (
      <nav className="mainNavigation">
        <Link to="/">
          <button className="btn-group">HOME</button>
        </Link>
        <Link to="/articles">
          <button className="btn-group">ARTICLES</button>
        </Link>
        {topics &&
          topics.map(topic => {
            return (
              <Link to={`/articles/topic/${topic.slug}`}>
                <button className="btn-group">{topic.slug}</button>
              </Link>
            );
          })}
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
  componentDidUpdate() {}
}

export default Nav;
