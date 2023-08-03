import "./AboutModal.css";

export const modal = (modaldata) => {
    const divModal = document.querySelector("#aboutModal");
  
    const aboutModalImg = document.createElement("div");
    aboutModalImg.classList = "aboutModalImg";
  
    const modalImg = document.createElement("img");
    modalImg.src = modaldata.aboutCardImg;
    modalImg.alt = modaldata.aboutCardName;
  
    const aboutModalContent = document.createElement("div");
    aboutModalContent.classList = "aboutModalContent"
  
    const modalTitle = document.createElement("h2");
    modalTitle.textContent = modaldata.aboutCardName;
  
    const modalClose = document.createElement("button");
    modalClose.textContent = "Close Modal";
    modalClose.id = "modalClose";
    modalClose.addEventListener("click", handleCloseModal);
  
    const aboutModalText = document.createElement("p");
    aboutModalText.textContent = modaldata.aboutCardText;
  
    aboutModalImg.appendChild(modalImg);

    aboutModalContent.appendChild(modalTitle);
    aboutModalContent.appendChild(aboutModalText);
    aboutModalContent.appendChild(modalClose);
  
    divModal.appendChild(aboutModalImg);
    divModal.appendChild(aboutModalContent);
  };


export const handleOpenModal = (card) => {
  const modalElement = document.querySelector("#aboutModal");
  modalElement.style.display = "flex";
  modal(card);
};


export const handleCloseModal = () => {
  const closeModal = document.querySelector("#modalClose");
  closeModal.addEventListener("click", () => {
    const aboutModal = document.querySelector("#aboutModal");
    aboutModal.innerHTML = "";
    aboutModal.style.display = "none"
  });
};


export const aboutModalTemplate = () => {
  return `
      <div id="aboutModal" class="aboutModal"></div>
      `;
};
