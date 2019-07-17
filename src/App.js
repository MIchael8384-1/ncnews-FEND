import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import Article from "./components/Article";
import Topic from "./components/Topics";
import Header from "./components/Header";
import "./style.css";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <Articles path="/" />
        <Article path="articles/:article_id" />
        <Topic path="/topics" />
      </Router>
    </div>
  );
}

export default App;
