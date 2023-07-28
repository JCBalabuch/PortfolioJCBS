import "./ProjectsGallery.css"
import { PROJECTS } from "../../Data/Data";


const projectsCards = (projects) => {

    const projectsGallery = document.createElement("div");
    projectsGallery.id = "projectsGallery";
    projectsGallery.classList = "projectsGallery";
  
    const ulProjectCards = document.createElement("ul");
  
    projects.forEach((project) => {
      const liProjectCard = document.createElement("li");
  
      const divProjectCard = document.createElement("div");
      divProjectCard.classList.add("divProjectCard");
  
      const divProjectImg = document.createElement("div");
      divProjectImg.classList.add("divProjectImg");
      const imgProject = document.createElement("img");
      imgProject.src = project.projectImg;
      imgProject.alt = project.projectImg;
  
      const projectCardTitle = document.createElement("h4");
      projectCardTitle.textContent = project.projectName;

      const projectTechs = document.createElement("div");
      projectTechs.classList.add("projectTechs");

      const ulTechs = document.createElement("ul");

      
  
      divProjectImg.appendChild(imgProject);
      divProjectCard.appendChild(divProjectImg);
      divProjectCard.appendChild(projectCardTitle);
  
      liProjectCard.appendChild(divProjectCard);
      ulProjectCards.appendChild(liProjectCard);
    });
  
    galleryCards.appendChild(ulProjectCards);
    return galleryCards;
  
  };
  
  export const projectsGallery = () => {
    return `
      <div id="projectsGallery" class="projectsGallery">
          ${projectsCards(PROJECTS).outerHTML}
      </div>
      `;
  };