import './Button.css';

export const buttonComponent = ({ id, className, src, alt, funct }) => {
  // Create Button
  const button = document.createElement('div');
  button.id = id;
  button.className = 'header-buttons';

  const image = document.createElement('img');
  image.className = className;
  image.src = src;
  image.alt = alt;

  button.addEventListener('click', funct);

  button.appendChild(image);

  return button;
};
