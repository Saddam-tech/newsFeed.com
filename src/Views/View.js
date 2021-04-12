import icons from "url:../cssFolder/icons.svg";

export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
    return markup;
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  scrollInto() {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      // Matching strategy
      if (e.target.classList.contains("data")) {
        const id = e.target.getAttribute("href");
        console.log(id);
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}
