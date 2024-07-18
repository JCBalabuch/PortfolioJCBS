import { handleOpenModal } from '../../utils/HandleModal';
import './AboutMeCards.css';

export const aboutCards = (cards) => {
  // Gallery Cards container
  const galleryCards = document.createElement('div');
  galleryCards.id = 'cards';
  galleryCards.classList = 'cards';

  // List of About cards
  const ulCards = document.createElement('ul');

  cards.forEach((card) => {
    const liCard = document.createElement('li');

    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.id = card.aboutCardId;
    divCard.addEventListener('click', () => {
      handleOpenModal(card);
    });

    const cardImg = document.createElement('div');
    cardImg.classList.add('cardImg');
    const imgCard = document.createElement('img');
    imgCard.src = card.aboutCardImg;
    imgCard.alt = card.aboutCardName;

    const cardTitle = document.createElement('h4');
    cardTitle.textContent = card.aboutCardName;
    cardTitle.dataset.section = 'about';
    cardTitle.dataset.value = 'aboutCardName';

    cardImg.appendChild(imgCard);
    divCard.append(cardImg, cardTitle);

    liCard.appendChild(divCard);
    ulCards.appendChild(liCard);
  });

  galleryCards.appendChild(ulCards);

  return galleryCards;
};

export const aboutMeCards = () => {
  return `
    <div id="aboutMeCards" class="aboutMeCards"></div>
    `;
};
