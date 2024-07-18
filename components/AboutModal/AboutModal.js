import { handleCloseModal } from '../../utils/HandleModal';
import './AboutModal.css';

export const modal = (modaldata) => {
  // Modal container
  const divModal = document.querySelector('#aboutModal');

  // Modal content img
  const aboutModalImg = document.createElement('div');
  aboutModalImg.classList = 'aboutModalImg';

  const modalImg = document.createElement('img');
  modalImg.src = modaldata.aboutCardImg;
  modalImg.alt = modaldata.aboutCardName;

  // Modal content
  const aboutModalContent = document.createElement('div');
  aboutModalContent.classList = 'aboutModalContent';

  const modalTitle = document.createElement('h2');
  modalTitle.textContent = modaldata.aboutCardName;

  const modalClose = document.createElement('button');
  modalClose.textContent = 'X';
  modalClose.id = 'modalClose';
  modalClose.addEventListener('click', handleCloseModal);

  const aboutModalText = document.createElement('p');
  aboutModalText.textContent = modaldata.aboutCardText;

  aboutModalImg.appendChild(modalImg);

  aboutModalContent.append(modalTitle, aboutModalText);

  divModal.append(modalClose, aboutModalImg, aboutModalContent);
};

export const aboutModalTemplate = () => {
  return `
      <div id="aboutModal" class="aboutModal"></div>
      `;
};
