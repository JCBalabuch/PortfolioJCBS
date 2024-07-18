import { buttonComponent } from '../Button/Button';
import './ThemeChanger.css';

const toggleTheme = (button) => {
  document.body.classList.toggle('dark');
  rerenderButton(button);
};

const rerenderButton = (button) => {
  const img = button.querySelector('img');
  console.log(img.src);
  if (img.src === './icons/moon.png') {
    img.src = './icons/sun.png';
    img.alt = 'Light Mode';
  } else {
    img.src = './icons/moon.png';
    img.alt = 'Dark Mode';
  }
};

export const ThemeChanger = () => {
  const headersButtons = document.getElementById('headers-buttons');

  const themeButton = buttonComponent({
    parent: 'headers-buttons',
    id: 'theme-button',
    className: 'theme-img',
    src: './icons/moon.png',
    alt: 'Dark Mode',
    funct: toggleTheme(themeButton),
  });

  rerenderButton(themeButton);

  headersButtons.appendChild(themeButton);
};
