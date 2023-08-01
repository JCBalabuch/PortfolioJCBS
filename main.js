import './style.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { addListeners, router } from './router';
import { aboutCardsData } from './Data/Data';
import { aboutCards } from './components/AboutMeCards/AboutMeCards';
import { modal } from './components/AboutModal/AboutModal';
// import { addAboutMeCardlisteners, handleCloseModal } from './components/AboutModal/AboutModal';


Header(); 
Footer();

router();
addListeners();

// handleCloseModal();
setTimeout(() => {
    document.querySelector("#aboutMeCards").appendChild(aboutCards(aboutCardsData));
}, 1000);

// setTimeout(() => {

//     const divModal = document.getElementById("aboutModal");
//     const modalContent = modal(aboutCardsData);

//     const range = document.createRange();
//     const fragment = range.createContextualFragment(modalContent);

//     divModal.appendChild(fragment);

// }, 2000);
