import './style.css';
import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';
import { addListeners, router } from './router/index';

Header();
Footer();

router();
addListeners();
