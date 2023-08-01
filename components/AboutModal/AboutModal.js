import { aboutCardsData } from "../../Data/Data";
import "./AboutModal.css";

export const modal = (modaldata) => {
  const divModal = document.querySelector("#aboutModal");

//   return `
//     <div>
//         <div class="aboutModalImg">
//             <img src="" alt=""/>
//         </div>
//         <div class="aboutModalContent">
//             <div class="aboutModalHeader">
//                 <h2 class="modalTitle"></h2>
//                 <button id="modalClose">✖</button>
//             </div>
//             <div class="aboutModalBody">
//                 <p></p>
//             </div>
//         </div>
//     <div>
//   `

console.log(modaldata)

//   modaldata.forEach((data) => {
//     const aboutModalImg = document.createElement("div");
//     aboutModalImg.classList = "aboutModalImg";

//     const modalImg = document.createElement("img");
//     modalImg.src = data.aboutCardImg;
//     modalImg.alt = data.aboutCardName;

//     const aboutModalContent = document.createElement("div");

//     const aboutModalHeader = document.createElement("div");
//     aboutModalHeader.classList = "aboutModalHeader";

//     const modalTitle = document.createElement("h2");
//     modalTitle.textContent = data.aboutCardName;

//     const modalClose = document.createElement("button");
//     modalClose.textContent = "✖";
//     modalClose.id = "modalClose";
//     modalClose.addEventListener("click", handleCloseModal);

//     const aboutModalBody = document.createElement("div");
//     aboutModalBody.classList = "aboutModalBody";

//     const aboutModalText = document.createElement("p");
//     aboutModalText.textContent = data.aboutCardText;

//     aboutModalImg.appendChild(modalImg);

//     aboutModalHeader.appendChild(modalTitle);
//     aboutModalHeader.appendChild(modalClose);
//     aboutModalContent.appendChild(aboutModalHeader);

//     aboutModalBody.appendChild(aboutModalText);
//     aboutModalContent.appendChild(aboutModalBody);

//     divModal.appendChild(aboutModalImg);
//     divModal.appendChild(aboutModalContent);
//   });

const aboutModalImg = document.createElement("div");
aboutModalImg.classList = "aboutModalImg";

const modalImg = document.createElement("img");
modalImg.src = modaldata.aboutCardImg;
modalImg.alt = modaldata.aboutCardName;

const aboutModalContent = document.createElement("div");

const aboutModalHeader = document.createElement("div");
aboutModalHeader.classList = "aboutModalHeader";

const modalTitle = document.createElement("h2");
modalTitle.textContent = modaldata.aboutCardName;

const modalClose = document.createElement("button");
modalClose.textContent = "✖";
modalClose.id = "modalClose";
modalClose.addEventListener("click", handleCloseModal);

const aboutModalBody = document.createElement("div");
aboutModalBody.classList = "aboutModalBody";

const aboutModalText = document.createElement("p");
aboutModalText.textContent = modaldata.aboutCardText;

aboutModalImg.appendChild(modalImg);

aboutModalHeader.appendChild(modalTitle);
aboutModalHeader.appendChild(modalClose);
aboutModalContent.appendChild(aboutModalHeader);

aboutModalBody.appendChild(aboutModalText);
aboutModalContent.appendChild(aboutModalBody);

divModal.appendChild(aboutModalImg);
divModal.appendChild(aboutModalContent);
};


export const handleOpenModal = (event) => {
  const modalElement = document.querySelector("#aboutModal");

//   if (event.target.id === modaldata.id) {
//     modal()
//   }
  console.log(event.target.id)
//   const cardId = document.querySelector(".card")
//   cardId = event.target.id;

  modalElement.style.display = "block";
};


export const handleCloseModal = () => {
  const closeModal = document.querySelector("#modalClose");
  closeModal.addEventListener("click", () => {
    document.querySelector("#aboutModal").style.display = "none";
  });
};


export const aboutModalTemplate = () => {
  return `
      <div id="aboutModal" class="aboutModal"></div>
      `;
};
