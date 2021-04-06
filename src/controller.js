import * as model from "./model";
import mainView from "./Views/mainView";
import { async } from "regenerator-runtime";

const controlNews = async function () {
  try {
    await model.loadNews();
    mainView.render(model.state.articles);
    console.log(model.state.articles);
  } catch (err) {
    console.error(err);
  }
};

const init = async function () {
  mainView.addHandlerRender(controlNews);
};

init();
