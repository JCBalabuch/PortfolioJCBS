import './Projects.css';
import { projectsGallery } from '../../components/ProjectsGallery/ProjectsGallery';

// Projects Template
const projectsTemplate = () => {
  return `
    <section id="projectsTemplate">
      ${projectsGallery()}
    </section>
    `;
};

export default projectsTemplate;
