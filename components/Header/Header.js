import { HEADERLINKS } from '../../Data/Data';
import { linkTemplate } from '../Link/Link';
import './Header.css';

const Header = () => {
  const header = document.querySelector('header');

  // Create main header's logo
  const divHeader = document.createElement('div');

  const logoHeaderAnchor = document.createElement('a');
  logoHeaderAnchor.href = '/';

  const logoHeaderImg = document.createElement('img');
  logoHeaderImg.src = '/personals/LogoJCBS.png';
  logoHeaderImg.alt = 'Logo Jeniffer Balabuch';

  logoHeaderAnchor.appendChild(logoHeaderImg);
  divHeader.appendChild(logoHeaderAnchor);

  // Create Header's Nav
  const navHeader = document.createElement('nav');
  const ulHeader = document.createElement('ul');

  HEADERLINKS.forEach((link) => {
    const li = linkTemplate(link.hRef, link.nameLink);
    ulHeader.appendChild(li);
  });

  //Create Header's buttons: Lang Changer & Theme
  const headersButtons = document.createElement('div');
  headersButtons.id = 'headers-buttons';

  // Add sections to Header
  navHeader.appendChild(ulHeader);
  header.append(divHeader, navHeader, headersButtons);
};

export default Header;
