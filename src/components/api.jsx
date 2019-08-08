import axios from "axios";

const request = axios.create({
  baseURL: "https://bencnews.herokuapp.com/api/"
});

export const fetchTopics = () => {
  return request.get("topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticles = ({ topic, author }) => {
  return request
    .get("/articles", { params: { topic, author } })
    .then(({ data }) => {
      console.log(data.articles);
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
    return data.comments;
  });
};
export const patchArticleVotes = (article_id, inc_votes) => {
  console.log(article_id);
  console.log(inc_votes);
  return request
    .patch(`articles/${article_id}`, { inc_votes })

    .then(({ data }) => {
      return data.article;
    });
};

export const postItem = (article_id, newComment) => {
  return request
    .post(`articles/${article_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    })
    .catch(console.log);
};
export const fetchUser = username => {
  console.log(username, "no username");
  return request.get(`users/${username}`).then(({ data }) => {
    console.log(data.user);
    return data.user;
  });
};
