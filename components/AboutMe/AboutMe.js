import { aboutMeText } from '../../Data/Data';
import './AboutMe.css';

const lang = 'es';

const aboutMe = lang === 'en' ? aboutMeText.en : aboutMeText.es;

export const aboutMeTemplate = () => {
  return `
        <div id="aboutMe" class="aboutMe">
            <h2>About me</h2>
            <p>${aboutMe}</p>
        </div>
        `;
};

// console.log(aboutMe);
