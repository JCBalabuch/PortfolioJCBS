import './About.css';
import { aboutMeTemplate } from '../../components/AboutMe/AboutMe';
import { aboutMeCards } from '../../components/AboutMeCards/AboutMeCards';
import { aboutModalTemplate } from '../../components/AboutModal/AboutModal';
import { aboutMeText } from '../../Data/Data';

const aboutTemplate = () => {
  const aboutMeSection = aboutMeTemplate(aboutMeText);
  return `
  <section id="about">
    ${aboutMeSection.outerHTML}
    ${aboutMeCards()}
    ${aboutModalTemplate()}
  </section>
  `;
};

const About = () => {
  return `
  ${aboutTemplate()}
  `;
};

export default About;
