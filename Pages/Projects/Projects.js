import { projectsGallery } from "../../components/ProjectsGallery/ProjectsGallery";
import "./Projects.css";

const projectsTemplate = () => {
  return `
    <section id="projectsTemplate">
      ${projectsGallery()}
    </section>
    `;
};

export default projectsTemplate;

// const aboutTemplate = () => {
//   return `
//   <section id="about">
//     ${aboutMeTemplate()}
//     ${aboutMeCards()}
//     ${aboutModalTemplate()}
//   </section>
//   `;
// };