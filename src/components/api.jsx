import axios from "axios";

const request = axios.create({
  baseURL: "https://bencnews.herokuapp.com/api/"
});

export const fetchTopics = () => {
  return request.get("topics").then(({ data }) => {
    console.log(data.topics);
    return data.topics;
  });
};

export const fetchArticles = slug => {
  // const URL = slug ? `/articles?topic=${slug}` : "/articles";
  return request
    .get("/articles", { params: { topic: slug } })
    .then(({ data }) => {
      return data.articles;
    });
  //https://bencnews.herokuapp.com/api/articles?topic=coding
};

export const fetchArticleById = article_id => {
  return request.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchComments = article_id => {
  return request.get(`articles/${article_id}/comments`).then(({ data }) => {
    console.log(data.comments);
    return data.comments;
  });
};
