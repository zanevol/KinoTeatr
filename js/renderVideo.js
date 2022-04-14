import {getTriends, getVideo} from "./services.js";
import renderCard from "./renderCard.js";

const filmWeek = document.querySelector(".film-week");

const firstRender = ({vote_average,backdrop_path,title, name, original_title, original_name}, {key}) => {
  filmWeek.insertAdjacentHTML("beforeend", `
     <div class="container film-week__container" data-rating="${vote_average === 0 ? "-" : vote_average}">
        <div class="film-week__poster-wrapper">
            <img class="film-week__poster" src="https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}" alt="постер ${title || name}">
            <p class="film-week__title_origin">${original_title || original_name}</p>
        </div>
        <h2 class="film-week__title">${title || name}</h2>
        ${key ? `<a class="film-week__watch-trailer tube" href="https://youtu.be/${key}" aria-label="смотреть трейлер"></a>` : ""} 
    </div>
  `);
};

const renderVideo = async () => {
  const data = await getTriends();
  const [firstCard, ...otherCard] = data.results;
  otherCard.length = 16;
  const video = await getVideo(firstCard.id, firstCard.media_type);
  firstRender(firstCard, video.results[0]);
  renderCard(otherCard);
};

export default renderVideo;
