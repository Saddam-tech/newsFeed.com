import { async } from "regenerator-runtime";
import { API_URL, API_KEY } from "./config";
import { AJAX } from "./helpers";

export const state = {
  articles: [],
  specificArticles: {},
};

export const createArticlesObject = function (data) {
  state.articles = data.data.map(art => {
    return {
      author: art.source,
      // content: art.content,
      description: art.description,
      title: art.title,
      image: art.image,
    };
  });
};

export const createSpecificArticlesObject = function (data) {
  console.log(data);
  return {
    author: data.source,
    // content: data.source,
    description: data.description,
    title: data.title,
    image: data.image,
  };
};

export const getSpecificArticles = async function (datasetNum) {
  try {
    const data = await AJAX(
      `${API_URL}?access_key=${API_KEY}&languages=en&country=-us,-uk&sources=cnn,bbc`
    );
    console.log(datasetNum);
    state.specificArticles = createSpecificArticlesObject(
      data.data[datasetNum]
    );
  } catch (err) {
    console.error(err);
  }
};

export const loadNews = async function () {
  try {
    const data = await AJAX(
      `${API_URL}?access_key=${API_KEY}&languages=en&country=-us,-uk&sources=cnn,bbc`
    );
    createArticlesObject(data);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
