import axios from "axios";

const request = axios.create({
  baseURL: "https://bencnews.herokuapp.com/api/"
});

export const fetchArticles = () => {
  return request.get("articles").then(({ data }) => {
    return data.articles;
  });
};

export const fetchTopics = () => {
  return request.get("topics").then(({ data }) => {
    return data.topics;
  });
};
export const fetchArticleById = article_id => {
  return request.get(`articles/${article_id}`).then(({ data }) => {
    console.log(data.article);
    return data.article;
  });
};
