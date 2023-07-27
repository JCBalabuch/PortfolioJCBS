import "./AboutModal.css";

const modalElement = document.querySelector("#aboutModal");

export const aboutModalTemplate = () => {
  return `
    <div id="aboutModal" class="aboutModal">
        <div class="aboutModalHeader>
            <h2 id="ModalTitle"></h2>
            <button id="modalClose">✖</button>
        </div>
        <div class="aboutModalBody></div>
    </div>
    `;
};

// const handleOpenModal = () => {
//   modalElement.style.display = "block";
// };


// export const addAboutMeCardlisteners = () => {
//   const cards = document.querySelectorAll(".card");
//   cards.forEach((card) => card.addEventListener("click", handleOpenModal));
// };


// const handleCloseModal = () => {
//     const closeModal = document.querySelector("#modalClose")
//     closeModal.addEventListener("click", () => {
//         modalElement.style.display = "none";
//     })
// }

// handleCloseModal()