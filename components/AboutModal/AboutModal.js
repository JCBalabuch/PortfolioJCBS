import "./AboutModal.css";

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

export const handleOpenModal = () => {

    const modalElement = document.querySelector("#aboutModal");

    modalElement.style.display = "block";
    console.log("hola");

};


// export const addAboutMeCardlisteners = () => {
//   const cards = document.querySelectorAll("#cardModal");
//   cards.forEach((card) => card.addEventListener("click", handleOpenModal));
//   console.log(cards);
// };


export const handleCloseModal = () => {
    const closeModal = document.querySelector("#modalClose")
    closeModal.addEventListener("click", () => {
        document.querySelector("#aboutModal").style.display = "none";
    })
}

