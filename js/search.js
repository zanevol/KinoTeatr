import {search as searchGet} from "./services.js";
import renderCard from "./renderCard.js";

const title = document.querySelector(".other-films__title");
const filmWeek = document.querySelector(".film-week");
const form = document.querySelector(".header__search-form");
const input = document.querySelector(".header__search-input");

const search = () => {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!input.value) return;
    searchGet(input.value)
      .then(data => {
        if (data.results.length) {
          renderCard(data.results);
        } else {
          throw "К сожалению по вашему запросу ничего не найдено!";
        }
      })
      .then(() => {
        filmWeek.remove();
        title.textContent = "Результат поиска";
      })
      .catch(err => {
        title.textContent = err;
      })
  });
};

export default search;
