import './Home.css';
import { HOME } from '../../../Data/Data';

// Home Template
const Home = () => {
  return `
    <div class="homePortfolio">
      <div class="imgHome">
        <img src="/personals/LogoImgsJCBS.png" alt="Logo Home"/>
      </div>
      <div class="presentationHome">
          <div class="greetingsHome">
            <h3>${HOME.greet}</h3>
            <h1>${HOME.pron} <span class="brandJCBS">${HOME.myName}</span></h1>
            <h4>${HOME.goal}</h4>
            <h4>${HOME.welcome}</h4>
          </div>
          <blockquote class="blockquote">
            <h3>${HOME.phrase}</h3>
            <p>${HOME.jjbs}</p>
          </blockquote>
        </div>
    </div>
    `;
};

export default Home;
