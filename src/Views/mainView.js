class MainView {
  _data;
  _parentElement = document.querySelector(".sub-main-2");

  render(data) {
    this._data = data.map(news => news);
    const markup = this._generateMarkup();
    // this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    return markup;
  }

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(news => {
        return `
          <p class="paragraph-news">
              <span>${news.title}</span>
          </p>
          `;
      })
      .slice(2, 4);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new MainView();
