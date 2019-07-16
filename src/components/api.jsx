import axios from "axios";

const request = axios.create({
  baseURL: "https://bencnews.herokuapp.com/api/"
});

export const fetchArticles = () => {
  return request.get("articles").then(({ data }) => {
    console.log(data.articles);
    return data.articles;
  });
};

export const fetchTopics = () => {
  return request.get("topics").then(({ data }) => {
    console.log(data.topics);
    return data.topics;
  });
};
