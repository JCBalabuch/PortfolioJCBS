import { language } from '../components/LangChanger/LangChanger';
import { fetchData } from './Fetch';

// Main language load
export const translations = {};

fetchData('en');

// Update DOM content
export const updateContent = () => {
  const elements = document.querySelectorAll('[data-lang]');
  console.log(elements);

  for (const element of elements) {
    const key = element.dataset.lang;
    const translation = translations[language][key];
    if (translation) {
      element.textContent = translation;
    }
    console.log(translation);
  }
};

// Change Translation
export const changeLanguage = (lang) => {
  currentLang = language;
  fetchData(language);
  updateContent();
};
