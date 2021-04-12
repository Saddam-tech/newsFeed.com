import View from "./View";

class NewsContent1 extends View {
  _parentElement = document.querySelector(".news-content");

  _generateMarkup() {
    console.log(this._data);
    return `
          <div class="individual-news">
              <h1 class="individual-h1">
              ${this._data.title}
              </h1>
              <img class="individual-main-image" src="${this._data.image}" />
            <div class="individual-content-div">
            <div class="container-first">
              <p class="individual-author">${this._data.author}</p>
              <p class="individual-newsfeed-logo">NewsFeed news</p>
            </div>
              <h3 class="individual-h3-description">
              ${this._data.description}
              </h3>
              <p class="individual-p-content">
              ${this._data.content}
              </p>
            </div>

          </div>
          <hr />
        `;
  }
}

export default new NewsContent1();
