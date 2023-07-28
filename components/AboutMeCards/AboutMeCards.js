import { aboutCardsData } from "../../Data/Data";
// import { addAboutMeCardlisteners } from "../AboutModal/AboutModal";
// import { addAboutMeCardlisteners } from "../AboutModal/AboutModal";
import "./AboutMeCards.css";

const aboutCards = (cards) => {

  const galleryCards = document.createElement("div");
  galleryCards.id = "cards";
  galleryCards.classList = "cards";

  const ulCards = document.createElement("ul");

  cards.forEach((card) => {
    const liCard = document.createElement("li");

    const divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.id = card.aboutCardId;
    divCard.setAttribute("role", "button");

    const cardImg = document.createElement("div");
    cardImg.classList.add("cardImg");
    const imgCard = document.createElement("img");
    imgCard.src = card.aboutCardImg;
    imgCard.alt = card.aboutCardName;

    const cardTitle = document.createElement("h4");
    cardTitle.textContent = card.aboutCardName;

    cardImg.appendChild(imgCard);
    divCard.appendChild(cardImg);
    divCard.appendChild(cardTitle);

    liCard.appendChild(divCard);
    ulCards.appendChild(liCard);
  });

  galleryCards.appendChild(ulCards);
  return galleryCards;

};

export const aboutMeCards = () => {
  return `
    <div id="aboutMeCards" class="aboutMeCards">
        ${aboutCards(aboutCardsData).outerHTML}
    </div>
    `;
};