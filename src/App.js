import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

import "./style.css";
import UserPage from "./components/UserPage";

class App extends React.Component {
  state = { user: { username: "jessjelly" } };
  render() {
    const { username } = this.state.user;
    return (
      <div>
        <Header />
        <Nav user={username} />
        <Router>
          <HomePage path="/" />
          <Articles path="/articles" />
          <Articles path="articles/topic/:topic" />
          <Article path="articles/:article_id" />
          <UserPage path="users/:username" />
        </Router>
      </div>
    );
  }
}

export default App;
