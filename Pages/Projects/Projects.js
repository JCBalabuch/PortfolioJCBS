import "./Projects.css";
import { projectsGallery } from "../../components/ProjectsGallery/ProjectsGallery";

const projectsTemplate = () => {
  return `
    <section id="projectsTemplate">
      ${projectsGallery()}
    </section>
    `;
};

export default projectsTemplate;
