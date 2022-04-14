import {getVideo} from "./services.js";

const listCard = document.querySelector(".other-films__list");

const renderCard = (data, media_type) => {
  listCard.textContent = "";
  Promise.all(data.map(async (item) => {
    const video = await getVideo(item.id, item.media_type || media_type);
    const key = video?.results[0]?.key;
    const card = document.createElement("li");
    item.poster_path ? card.className = "other-films__item" : card.className = "no-poster";

    const link = document.createElement("a");
    if (key) link.href = `https://youtu.be/${key}`;
    link.className = "other-films__link";
    link.dataset.rating = item.vote_average === 0 ? "-" : item.vote_average;

    const img = document.createElement("img");
    img.className = "other-films__img";
    img.src = item.poster_path ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}` : "img/no_poster.jpg";
    img.alt = `постер ${item.title || item.name}`;

    link.insertAdjacentElement("beforeend", img);
    card.insertAdjacentElement("beforeend", link);

    return card;
  })).then(cards => listCard.append(...cards));
};

export default renderCard;
