import "./Header.css";

const templateHeader = () => {
    return `
    <div>
        <img src="/LogoJCBS.png"/>
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
    `
}

const Header = () => {
    document.querySelector("header").innerHTML = templateHeader();
};

export default Header;
