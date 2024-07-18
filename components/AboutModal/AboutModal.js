import './AboutModal.css';

export const modal = (modaldata) => {
  const divModal = document.querySelector('#aboutModal');

  const aboutModalImg = document.createElement('div');
  aboutModalImg.classList = 'aboutModalImg';

  const modalImg = document.createElement('img');
  modalImg.src = modaldata.aboutCardImg;
  modalImg.alt = modaldata.aboutCardName;

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

export const handleOpenModal = (card) => {
  const modalElement = document.querySelector('#aboutModal');
  modalElement.textContent = '';
  modalElement.style.display = 'flex';
  modal(card);
};

export const handleCloseModal = () => {
  const closeModal = document.querySelector('#aboutModal');
  closeModal.innerHTML = '';
  closeModal.style.display = 'none';
};

export const aboutModalTemplate = () => {
  return `
      <div id="aboutModal" class="aboutModal"></div>
      `;
};
