import axios from "axios";

const request = axios.create({
  baseURL: "https://bencnews.herokuapp.com/api/"
});

export const fetchArticles = slug => {
  const URL = slug ? `/topics/${slug}/articles` : "/articles";
  return request.get(URL).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleById = article_id => {
  return request.get(`articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchTopics = () => {
  return request.get("topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchComments = article_id => {
  return request.get(`articles/${article_id}/comments`).then(({ data }) => {
    console.log(data.comments);
    return data.comments;
  });
};
