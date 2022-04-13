const listCard = document.querySelector(".other-films__list");

const renderCard = data => {
  listCard.textContent = "";
  const cards = data.map((item) => {
    const card = document.createElement("li");
    card.classList.add("other-films__item");
    const link = document.createElement("a");
    link.className = "other-films__link";
    link.dataset.rating = item.vote_average === 0 ? '-': item.vote_average;
    const img = document.createElement("img");
    img.className = "other-films__img";
    img.src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${item.poster_path}`;
    img.alt = `постер ${item.title || item.name}`;

    link.insertAdjacentElement("beforeend", img);
    card.insertAdjacentElement("beforeend", link);

    return card;
  });

  listCard.append(...cards);
};

export default renderCard;
