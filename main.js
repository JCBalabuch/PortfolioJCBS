import './style.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import { addListeners, router } from './router';
// import { addAboutMeCardlisteners, handleCloseModal } from './components/AboutModal/AboutModal';


Header(); 
Footer();

router();
addListeners();

// handleCloseModal();
// setTimeout(() => {
//     addAboutMeCardlisteners();
// }, 1000);