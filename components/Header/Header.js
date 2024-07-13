import './Header.css';

const templateHeader = () => {
  return `
    <div>
        <a href="/">
            <img src="/personals/LogoJCBS.png"/ alt="Logo Jeniffer Balabuch">
        </a>
    </div>
    <nav>
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/projects">Projects</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
    `;
};

const Header = () => {
  document.querySelector('header').innerHTML = templateHeader();
};

export default Header;
