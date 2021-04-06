import View from "./View";

class MainView extends View {
  _parentElement = document.querySelector(".main");

  _generateMarkup() {
    console.log(this._data);
    return `
    <section class="sub-main-1">
    <img class="main-image" src="${this._data[1].image}" alt="image_1" />
    <div class="sub-main">
        <h1 class="main-h1-2">
          ${this._data[1].title}
        </h1>
        <div class="sub-main-2">
            <p class="paragraph-news news-0">
              ${this._data[0].title}
            </p>
            <p class="paragraph-news news-2">
            ${this._data[2].title}
            </p>
            <p class="paragraph-news news-3">
            ${this._data[3].title}
            </p> 
        </div>
    </div>
  </section>

  <section class="sub-container">
        <p class="paragraph-news-2 middle">
        ${this._data[4].title}
        </p>
        <p class="paragraph-news-2 middle">
        ${this._data[5].title}
        </p>
        <p class="paragraph-news-2 middle">
        ${this._data[6].title}
        </p>
        <p class="paragraph-news-2 middle">
        ${this._data[7].title}
        </p>
  </section>

  <div class="vertical-alignment">  
    <section class="sub-container-column">
          <img src="${this._data[8].image}" alt="image_1" />
          <p class="paragraph-news-2">
          ${this._data[8].title}
          </p>
          <img src="${this._data[9].image}" alt="image_1" />
          <p class="paragraph-news-2">
          ${this._data[9].title}
          </p>
          <img src="${this._data[10].image}" alt="image_1" />
          <p class="paragraph-news-2">
          ${this._data[10].title}
          </p>
          <img src="${this._data[11].image}" alt="image_1" />
          <p class="paragraph-news-2">
          ${this._data[11].title}
          </p>
    </section>

    <section class="sub-container-column">
        <img src="${this._data[12].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[12].title}
        </p>
        <img src="${this._data[13].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[13].title}
        </p>
        <img src="${this._data[14].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[14].title}
        </p>
        <img src="${this._data[15].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[15].title}
        </p>
    </section>

    <section class="sub-container-column">
        <img src="${this._data[16].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[16].title}
        </p>
        <img src="${this._data[17].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[17].title}
        </p>
        <img src="${this._data[18].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[18].title}
        </p>
        <img src="${this._data[19].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[19].title}
        </p>
    </section>

    <section class="sub-container-column">
        <img src="${this._data[9].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[9].title}
        </p>
        <img src="${this._data[1].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[1].title}
        </p>
        <img src="${this._data[2].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[2].title}
        </p>
        <img src="${this._data[3].image}" alt="image_1" />
        <p class="paragraph-news-2">
        ${this._data[3].title}
        </p>
    </section>
  </div>
          `;
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new MainView();
