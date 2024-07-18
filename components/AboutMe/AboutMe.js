import './AboutMe.css';

export const aboutMeTemplate = (data) => {
  const aboutMeSection = document.createElement('div');
  aboutMeSection.id = 'aboutMe';
  aboutMeSection.className = 'aboutMe';

  const aboutMeTitle = document.createElement('h2');
  aboutMeTitle.dataset.section = 'about';
  aboutMeTitle.dataset.value = 'aboutMe';
  aboutMeTitle.textContent = data.aboutMe;

  const aboutMeText = document.createElement('p');
  aboutMeText.dataset.section = 'about';
  aboutMeText.dataset.value = 'aboutMeText';
  aboutMeText.innerHTML = data.aboutMeText;

  aboutMeSection.append(aboutMeTitle, aboutMeText);

  return aboutMeSection;
};
