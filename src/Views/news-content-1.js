import View from "./View";

class NewsContent1 extends View {
  _parentElement = document.querySelector(".news-content");

  _generateMarkup() {
    return `
            <h1>
            ${this._data[0].description}
            </h1>
        `;
  }
}

export default NewsContent1;
