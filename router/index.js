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

// export const router = () => {
//   const path = window.location.pathname;
//   const { component } = routes.find((route) => route.path === path) || {};

//   if (component) {
//     document.querySelector("main").innerHTML = component();
//   } else {
//     document.querySelector("main").innerHTML = NotFound();
//   }
// };

// window.addEventListener("popstate", router);

// document.addEventListener("DOMContentLoaded", router);

// export const addListeners = () => {
//     const navLinks = document.querySelectorAll("nav a");
    
//     navLinks.forEach((link) => {
//         link.addEventListener("click", (ev) => {
//             ev.preventDefault();
//             const href = link.getAttribute("href");
//             history.pushState(null, null, href)
//             router();
//         })
//     })
// }
//Creamos la función que se encarga de actualizar el contenido del main según la ruta del navegador, teniendo como referencia nuestro array de rutas
export const router = () => {
	//Recuperamos el path del navegador
	const path = window.location.pathname;

	//Sacar cada uno de los componentes de mi array si existe la coincidencia entre el path y lo que tenemos en el array de objetos
	const {component} = routes.find((route) => route.path === path) || {};
	//Vamos a renderizar el componente si existe en la etiqueta main y si no pintamos la ruta NotFound
	if (component) {
		document.querySelector("main").innerHTML = component();
	} else {
		document.querySelector("main").innerHTML = NotFound();
	}
};

//Vamos a añadirle un evento popstate a window para que lance la función router cada vez que vayamos hacia adelante o hacia atrás en el navegador
window.addEventListener("popstate", router);

//Vamos a añadirle un evento DomContentLoaded al documento para cargar la página cada vez que se actualice el contenido del main
document.addEventListener("DOMContentLoaded", router);

//Vamos a encapsular los listeners en una función para que se lancen después del router y le de tiempo a encontrar los anchors
export const addListeners = () => {
	//Vamos a añadirle un evento click a todos los links del nav
	const navLinks = document.querySelectorAll("nav a");
	navLinks.forEach((link) => {
		//Le añadimos un evento click a cada uno
		link.addEventListener("click", (ev) => {
			//Le quitamos el comportamiento por defecto que hace que se recargue la página
			ev.preventDefault();
			//Vamos a recuperar el href de cada uno de los links
			const href = link.getAttribute("href");
			//Vamos a controlar el historial de navegación empujando un nuevo estado al cambiar la URL pero sin recargar la página
			history.pushState(null, null, href);
			//Disparamos de nuevo el router para que en cada uno de los clicks vuelva a detectar la ruta, detecte cual es y renderice el componente correspondiente
			router();
		});
	});
};
