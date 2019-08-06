import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import Article from "./components/Article";
// import Topic from "./components/Topics";
import Header from "./components/Header";
import "./style.css";
import HomePage from "./components/HomePage";
// import TopicChoice from "./components/TopicChoice";

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
        {/* 
        <Topic path="/topics" />
        <TopicChoice path="/topicChoice" /> */}
      </Router>
    </div>
  );
}

export default App;
