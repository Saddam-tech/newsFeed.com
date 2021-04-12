import View from "./View";

class MainView extends View {
  _parentElement = document.querySelector(".main");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerGetDataset(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const divEl = e.target.closest(".data");
      if (!divEl) return;
      console.log(divEl);
      const { set } = divEl.dataset;
      console.log(set);
      return handler(+set);
    });
  }

  _generateMarkup() {
    console.log(this._data);
    return `
    <section class="sub-main-1">
    <img class="main-image data" src="${
      this._data[1].image
    }" alt="image_1" data-set="${1}" />
    <div class="sub-main data">
        <h1 class="main-h1-2 data" data-set="${1}">
          ${this._data[1].title}
        </h1>
        <div class="sub-main-2">
            <p class="paragraph-news news-0 data" data-set="${0}">
              ${this._data[0].title}
            </p>
            <p class="paragraph-news news-2 data" data-set="${2}">
            ${this._data[2].title}
            </p>
            <p class="paragraph-news news-3 data" data-set="${3}">
            ${this._data[3].title}
            </p> 
        </div>
    </div>
  </section>

  <section class="sub-container">
        <p class="paragraph-news-2 middle data" data-set="${4}">
        ${this._data[4].title}
        </p>
        <p class="paragraph-news-2 middle data" data-set="${5}">
        ${this._data[5].title}
        </p>
        <p class="paragraph-news-2 middle data" data-set="${6}">
        ${this._data[6].title}
        </p>
        <p class="paragraph-news-2 middle data" data-set="${7}">
        ${this._data[7].title}
        </p>
  </section>

  <div class="vertical-alignment">  
    <section class="sub-container-column">
          <img class="sub-image data" src="${
            this._data[8].image
          }" alt="image_1" data-set="${8}" />
          <p class="paragraph-news-2" data-set="${8}">
          ${this._data[8].title}
          </p>
          <img class="sub-image" src="${
            this._data[9].image
          }" alt="image_1" data-set="${9}" />
          <p class="paragraph-news-2 data" data-set="${9}">
          ${this._data[9].title}
          </p>
          <img class="sub-image data" src="${
            this._data[10].image
          }" alt="image_1" data-set="${10}" />
          <p class="paragraph-news-2" data-set="${10}">
          ${this._data[10].title}
          </p>
          <img class="sub-image data" src="${
            this._data[11].image
          }" alt="image_1" data-set="${11}" />
          <p class="paragraph-news-2 data" data-set="${11}">
          ${this._data[11].title}
          </p>
    </section>

    <section class="sub-container-column">
        <img class="sub-image data" src="${
          this._data[12].image
        }" alt="image_1" data-set="${12}" />
        <p class="paragraph-news-2 data" data-set="${12}">
        ${this._data[12].title}
        </p>
        <img class="sub-image data" src="${
          this._data[13].image
        }" alt="image_1" data-set="${13}" />
        <p class="paragraph-news-2" data-set="${13}">
        ${this._data[13].title}
        </p>
        <img class="sub-image data" src="${
          this._data[14].image
        }" alt="image_1" data-set="${14}" />
        <p class="paragraph-news-2 data" data-set="${14}">
        ${this._data[14].title}
        </p>
        <img class="sub-image data" src="${
          this._data[15].image
        }" alt="image_1" data-set="${15}" />
        <p class="paragraph-news-2 data" data-set="${15}">
        ${this._data[15].title}
        </p>
    </section>

    <section class="sub-container-column">
        <img class="sub-image data" src="${
          this._data[16].image
        }" alt="image_1" data-set="${16}" />
        <p class="paragraph-news-2 data" data-set="${16}">
        ${this._data[16].title}
        </p>
        <img class="sub-image data" src="${
          this._data[17].image
        }" alt="image_1" data-set="${17}" />
        <p class="paragraph-news-2 data" data-set="${17}">
        ${this._data[17].title}
        </p>
        <img class="sub-image data" src="${
          this._data[18].image
        }" alt="image_1" data-set="${18}" />
        <p class="paragraph-news-2 data" data-set="${18}">
        ${this._data[18].title}
        </p>
        <img class="sub-image data" src="${
          this._data[19].image
        }" alt="image_1" data-set="${19}" />
        <p class="paragraph-news-2 data" data-set="${19}">
        ${this._data[19].title}
        </p>
    </section>

    <section class="sub-container-column">
        <img class="sub-image data" src="${
          this._data[9].image
        }" alt="image_1" data-set="${9}" />
        <p class="paragraph-news-2 data" data-set="${9}">
        ${this._data[9].title}
        </p>
        <img class="sub-image data" src="${
          this._data[1].image
        }" alt="image_1" data-set="${1}" />
        <p class="paragraph-news-2 data" data-set="${1}">
        ${this._data[1].title}
        </p>
        <img class="sub-image data" src="${
          this._data[2].image
        }" alt="image_1" data-set="${2}" />
        <p class="paragraph-news-2 data" data-set="${2}">
        ${this._data[2].title}
        </p>
        <img class="sub-image data" src="${
          this._data[3].image
        }" alt="image_1" data-set="${3}" />
        <p class="paragraph-news-2 data" data-set="${3}">
        ${this._data[3].title}
        </p>
    </section>
  </div>
          `;
  }
}

export default new MainView();
