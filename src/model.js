import { async } from "regenerator-runtime";
import { API_URL, API_KEY } from "./config";
import { AJAX } from "./helpers";

export const state = {
  articles: [],
  specificArticles: {},
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

export const createSpecificArticlesObject = function (data) {
  console.log(data);
  return {
    author: data.author,
    content: data.content,
    description: data.description,
    title: data.title,
    image: data.urlToImage,
  };
};

export const getSpecificArticles = async function (datasetNum) {
  try {
    const data = await AJAX(`${API_URL}${API_KEY}`);
    console.log(datasetNum);
    state.specificArticles = createSpecificArticlesObject(
      data.articles[datasetNum]
    );
  } catch (err) {
    console.error(err);
  }
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
