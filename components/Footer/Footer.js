import './Footer.css';

const Footer = () => {
  const footer = document.querySelector('footer');

  const creator = document.createElement('div');
  creator.className = 'creator';

  const rightReserved = document.createElement('div');
  rightReserved.className = 'rightReserved';

  const lnkIn = document.createElement('a');
  lnkIn.href = 'https://www.linkedin.com/in/jenifferbalabuch/';
  lnkIn.target = 'blank';
  const lnkInImg = document.createElement('img');
  lnkInImg.src = '/logos/LinkedInLogo.png';
  lnkInImg.alt = 'LinkedIn Logo';

  const gitHub = document.createElement('a');
  gitHub.href = 'https://github.com/JCBalabuch';
  gitHub.target = 'blank';
  const gitHubImg = document.createElement('img');
  gitHubImg.src = '/logos/GitHubLogo.png';
  gitHubImg.alt = 'Github Logo';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Created by Jeniffer Balabuch';

  const jcbs = document.createElement('a');
  jcbs.href = 'mailto:balabuchj@gmail.com';

  const jcbsLogo = document.createElement('img');
  jcbsLogo.src = '/logos/FooterLogoJCBS.png';
  jcbsLogo.alt = 'Personal Logo';

  const rights = document.createElement('p');
  rights.textContent = 'All rights reserved ®';
  rights.className = 'rights';

  lnkIn.appendChild(lnkInImg);
  gitHub.appendChild(gitHubImg);
  jcbs.appendChild(jcbsLogo);
  creator.append(lnkIn, gitHub, paragraph, jcbs);
  rightReserved.appendChild(rights);

  footer.append(creator, rightReserved);

  document.body.appendChild(footer);
};

export default Footer;
