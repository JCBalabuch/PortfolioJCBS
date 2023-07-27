import { aboutMeText } from "../../Data/Data";
import "./AboutMe.css";

export const aboutMeTemplate = () => {
    return `
        <div id="aboutMe" class="aboutMe">
            <h2>About me</h2>
            <p>${aboutMeText}</p>
        </div>
        `
};
