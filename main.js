import './style.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { addListeners, router } from './router';
import { aboutCardsData } from './Data/Data';
import { aboutCards } from './components/AboutMeCards/AboutMeCards';


Header(); 
Footer();

router();
addListeners();

setTimeout(() => {
    document.querySelector("#aboutMeCards").appendChild(aboutCards(aboutCardsData));
}, 1000);