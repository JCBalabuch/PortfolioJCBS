// import { aboutMeTemplate } from "../../components/AboutMe/AboutMe";
import { aboutMeTemplate } from "../../components/AboutMe/AboutMe";
import { aboutMeCards } from "../../components/AboutMeCards/AboutMeCards";
import { aboutModalTemplate } from "../../components/AboutModal/AboutModal";
import "./About.css";

const aboutTemplate = () => {
  return `
  <section id="about">
    ${aboutMeTemplate()}
    ${aboutMeCards()}
    ${aboutModalTemplate()}
  </section>
  `;
};

const About = () => {

  return `
  ${aboutTemplate()}
  `
};

export default About;
