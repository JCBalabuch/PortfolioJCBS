import "./Footer.css";

const Footer = () => {
  const footer = document.querySelector("footer");

  const creator = document.createElement("div");
  creator.className = "creator";

  const rightReserved = document.createElement("div");
  rightReserved.className = "rightReserved";

  const lnkIn = document.createElement("a");
  lnkIn.href = "https://www.linkedin.com/in/jenifferbalabuch/";
  lnkIn.target = "blank";
  const lnkInImg = document.createElement("img");
  lnkInImg.src = "/LinkedInLogo.png";
  lnkInImg.alt = "LinkedIn Logo";
  lnkIn.appendChild(lnkInImg);

  const gitHub = document.createElement("a");
  gitHub.href = "https://github.com/JCBalabuch";
  gitHub.target = "blank";
  const gitHubImg = document.createElement("img");
  gitHubImg.src = "/GitHubLogo.png";
  gitHubImg.alt = "Github Logo";
  gitHub.appendChild(gitHubImg);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Created by Jeniffer Balabuch";

  const jcbs = document.createElement("img");
  jcbs.src = "/LogoJCBS.png";
  jcbs.alt = "Personal Logo";

  const rights = document.createElement("p");
  rights.textContent = "All rights reserved ®";
  rights.className = "rights";

  creator.appendChild(lnkIn);
  creator.appendChild(gitHub);
  creator.appendChild(paragraph);
  creator.appendChild(jcbs);
  rightReserved.appendChild(rights);

  footer.appendChild(creator);
  footer.appendChild(rightReserved);

  document.body.appendChild(footer);
};

export default Footer;
