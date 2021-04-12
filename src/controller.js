import * as model from "./model";
import mainView from "./Views/mainView";
import newsContent1 from "./Views/news-content-1";
import { async } from "regenerator-runtime";

const controlNews = async function () {
  try {
    mainView.renderSpinner();
    await model.loadNews();
    mainView.render(model.state.articles);
  } catch (err) {
    console.error(err);
  }
};

const controlSpecificNews = async function (dataset) {
  // 1) passing the clicked dataset to the model
  await model.getSpecificArticles(dataset);
  // 2) rendering the specific data to news-content
  newsContent1.renderSpinner();
  newsContent1.render(model.state.specificArticles);
};

const init = async function () {
  mainView.addHandlerRender(controlNews);
  mainView.addHandlerGetDataset(controlSpecificNews);
};

init();
