import axios from "axios";

const request = axios.create({
  baseURL: "https://bencnews.herokuapp.com/api/"
});

export const fetchTopics = () => {
  return request.get("topics").then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticles = ({ topic, author, order, sort_by }) => {
  return request
    .get("/articles", { params: { topic, author, order, sort_by } })
    .then(({ data }) => {
      return data.articles;
    });
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
  return request
    .patch(`articles/${article_id}`, { inc_votes })

    .then(({ data }) => {
      return data.article;
    });
};

export const patchCommentVotes = (comment_id, inc_votes) => {
  return request
    .patch(`comments/${comment_id}`, { inc_votes })
    .then(({ data }) => {
      console.log(data);
      return data.comment;
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
  return request.get(`users/${username}`).then(({ data }) => {
    return data.user;
  });
};
export const deleteCommentById = comment_id => {
  return request.delete(`comments/${comment_id}`).then(({ data }) => {
    console.log(data, "deleted");
    return data;
  });
};
