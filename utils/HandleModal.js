import { modal } from '../components/AboutModal/AboutModal';

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
