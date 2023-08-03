import Home from "/Pages/Home/Home";
import Projects from "/Pages/Projects/Projects";
import About from "/Pages/About/About";
import NotFound from "/Pages/NotFound/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/about",
    component: About,
  },
];

export const router = () => {
	const path = window.location.pathname;

	const {component} = routes.find((route) => route.path === path) || {};
	if (component) {
		document.querySelector("main").innerHTML = component();
	} else {
		document.querySelector("main").innerHTML = NotFound();
	}
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", router);

export const addListeners = () => {
	const navLinks = document.querySelectorAll("nav a");
	navLinks.forEach((link) => {
		link.addEventListener("click", (ev) => {
			ev.preventDefault();
			const href = link.getAttribute("href");
			history.pushState(null, null, href);
			router();
		});
	});
};

