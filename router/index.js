import Home from '../src/Pages/Home/Home';
import Projects from '../src/Pages/Projects/Projects';
import About from '../src/Pages/About/About';
import NotFound from '../src/Pages/NotFound/NotFound';
import { aboutCards } from '../src/components/AboutMeCards/AboutMeCards';
import { aboutCardsData } from '../Data/Data';

// Routes
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/projects',
    component: Projects,
  },
  {
    path: '/about',
    component: About,
  },
];

// Router function
export const router = () => {
  const path = window.location.pathname;

  const { component } = routes.find((route) => route.path === path) || {};
  if (component) {
    document.querySelector('main').innerHTML = component();
    if (path === '/about') {
      document
        .querySelector('#aboutMeCards')
        .appendChild(aboutCards(aboutCardsData));
    }
  } else {
    document.querySelector('main').innerHTML = NotFound();
  }
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', router);

// Add addEventListeners
export const addListeners = () => {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (ev) => {
      ev.preventDefault();
      const href = link.getAttribute('href');
      history.pushState(null, null, href);
      router();
    });
  });
};
