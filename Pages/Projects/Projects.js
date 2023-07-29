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