import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { addListeners, router } from "./router";

Header();
Footer();

router();
addListeners();
