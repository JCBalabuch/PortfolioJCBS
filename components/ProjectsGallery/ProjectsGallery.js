import './ProjectsGallery.css';
import { PROJECTS, TECHS } from '../../Data/Data';

const projectsCards = (projects) => {
  const projectsGallery = document.createElement('div');
  projectsGallery.id = 'projectsGallery';
  projectsGallery.classList = 'projectsGallery';

  const ulProjectCards = document.createElement('ul');
  ulProjectCards.classList.add('ulProjectCards');

  projects.forEach((project) => {
    // Create card
    const liProjectCard = document.createElement('li');
    liProjectCard.className = 'liProjectCard';

    // Create Front Card
    const divProjectCardFront = document.createElement('div');
    divProjectCardFront.classList = 'divProjectCard front';

    const contentProjectCardFront = document.createElement('div');
    contentProjectCardFront.classList.add('contentProjectCard');

    // Create Front Card content
    const projectCardTitle = document.createElement('h4');
    projectCardTitle.textContent = project.projectName;

    const divProjectImg = document.createElement('div');
    divProjectImg.classList.add('divProjectImg');
    const imgProject = document.createElement('img');
    imgProject.src = project.projectImg;
    imgProject.alt = project.projectImg;

    // Create techs container
    const projectTechs = document.createElement('div');
    projectTechs.classList.add('projectTechs');

    const ulTechs = document.createElement('ul');

    project.projectTechs.forEach((tech) => {
      const liTech = document.createElement('li');

      const techDiv = document.createElement('div');
      techDiv.classList.add('techDiv');

      const techImg = document.createElement('img');

      techImg.src = TECHS[tech];
      techImg.alt = tech;

      techDiv.appendChild(techImg);
      liTech.appendChild(techDiv);
      ulTechs.appendChild(liTech);
      projectTechs.appendChild(ulTechs);
    });

    // Create Back Card
    const divProjectCardBack = document.createElement('div');
    divProjectCardBack.classList = 'divProjectCard back';

    const contentProjectCardBack = document.createElement('div');
    contentProjectCardBack.classList.add('contentProjectCard');

    // Create Back Card content
    const descriptionProject = document.createElement('p');
    descriptionProject.textContent = project.description;

    // Create project links
    const projectLinks = document.createElement('div');
    projectLinks.classList.add('projectLinks');

    const deploymentLink = document.createElement('a');
    deploymentLink.href = project.projectURL;
    deploymentLink.setAttribute('target', '_blank');

    const linkLogo = document.createElement('img');
    linkLogo.src = '/logos/LinkLogo.png';
    linkLogo.alt = 'Deployment Link';
    deploymentLink.appendChild(linkLogo);

    const githubLink = document.createElement('a');
    githubLink.href = project.projectGithub;
    githubLink.setAttribute('target', '_blank');

    const linkGithub = document.createElement('img');
    linkGithub.src = '/logos/GitHubLogo.png';
    linkGithub.alt = 'Github Link';
    githubLink.appendChild(linkGithub);

    projectLinks.append(deploymentLink, githubLink);

    // Insert Elements in card
    divProjectImg.appendChild(imgProject);

    contentProjectCardFront.append(
      projectCardTitle,
      divProjectImg,
      projectTechs
    );
    divProjectCardFront.appendChild(contentProjectCardFront);

    contentProjectCardBack.append(descriptionProject);
    divProjectCardBack.appendChild(contentProjectCardBack);

    liProjectCard.append(divProjectCardFront, divProjectCardBack, projectLinks);
    ulProjectCards.appendChild(liProjectCard);
  });

  projectsGallery.appendChild(ulProjectCards);
  return projectsGallery;
};

export const projectsGallery = () => {
  return `
    <h2>My Projects</h2>
    <div id="projectsGallery" class="projectsGallery">
      ${projectsCards(PROJECTS).outerHTML}
    </div>
      `;
};
