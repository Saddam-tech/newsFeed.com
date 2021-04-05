import { async } from "regenerator-runtime";
import { API_URL, API_KEY } from "./config";
import { AJAX } from "./helpers";

export const state = {
  articles: [],
};

export const createArticlesObject = function (data) {
  state.articles = data.articles.map(art => {
    return {
      author: art.author,
      content: art.content,
      description: art.description,
      title: art.title,
      image: art.urlToImage,
    };
  });
};

export const loadNews = async function () {
  try {
    const data = await AJAX(`${API_URL}${API_KEY}`);
    createArticlesObject(data);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
