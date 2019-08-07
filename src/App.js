import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ArticleComments from "./components/ArticleComments";

import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <HomePage path="/" />
        <Articles path="/articles" />
        <Articles path="articles/topic/:slug" />
        <Article path="articles/:article_id" />
        <ArticleComments path="articles/:article_id/comments" />
      </Router>
    </div>
  );
}

export default App;
