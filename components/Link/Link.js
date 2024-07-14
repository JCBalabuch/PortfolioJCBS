export const linkTemplate = (href, text) => {
  const li = document.createElement('li');
  const anchor = document.createElement('a');

  anchor.href = href;
  anchor.textContent = text;

  li.appendChild(anchor);

  return li;
};
