import { changeLanguage, updateContent } from '../../utils/DataToPrint';
import { fetchData } from '../../utils/Fetch';
import { buttonComponent } from '../Button/Button';
import './LangChanger.css';

export let language = 'en';

// Update Language
const updateLanguage = (newLanguage) => {
  language = newLanguage;
  console.log(language);
};

// Rerender button when changing language
const renderLangButton = (langButton) => {
  const img = langButton.querySelector('img');
  img.src =
    language === 'es' ? './icons/USAFlag.png' : './icons/VenezuelaFlag.png';
  img.alt = language === 'es' ? 'English Language' : 'Spanish Language';
};

// Create language changer button
export const langChangerButton = () => {
  const headerButtonDiv = document.getElementById('headers-buttons');

  const langButton = buttonComponent({
    parent: 'headers-buttons',
    id: 'chang-lang',
    className: 'fag-img',
    src:
      language === 'es' ? './icons/USAFlag.png' : './icons/VenezuelaFlag.png',
    alt: language === 'es' ? 'English Language' : 'Spanish Language',
  });

  langButton.addEventListener('click', () => {
    const newLanguage = language === 'es' ? 'en' : 'es';
    renderLangButton(langButton);
    updateLanguage(newLanguage);
    fetchData(newLanguage);
    updateContent();
    // changeLanguage(newLanguage);
    // await dataToPrint(newLanguage);
    console.log(newLanguage);
  });

  headerButtonDiv.appendChild(langButton);
};
