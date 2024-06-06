import Home from './Components/Content/Home/Home.js';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import './i18n';
import { useTranslation } from 'react-i18next';
import Projects from './Components/Content/Projects/Projects.js';
import { useEffect, useState } from 'react';
import chalk59_img_url from './images/chalk59_img.png';
import Technologies from './Components/Content/Technologies/Technologies.js';
import About from './Components/Content/About/About.js';
import './styles/styles.css';
import greek_flag from './images/GR_flag.png';
import usa_flag from './images/USA_flag.png';

function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  const technologies = [
    {id: 1, name: 'HTML5', experience_perc: 100, experience_level: 'Advanced'},
    {id: 2, name: 'CSS3 & SCSS', experience_perc: 100, experience_level: 'Advanced'},
    {id: 3, name: 'JavaScript', experience_perc: 100, experience_level: 'Advanced'},
    {id: 4, name: 'NodeJS', experience_perc: 80, experience_level: 'Excellent'},
    {id: 5, name: 'MongoDB', experience_perc: 80, experience_level: 'Excellent'},
    {id: 6, name: 'React', experience_perc: 70, experience_level: 'Good'},
    {id: 7, name: 'Git', experience_perc: 70, experience_level: 'Good'},
    {id: 8, name: 'Python', experience_perc: 70, experience_level: 'Good'},
    {id: 9, name: 'Java', experience_perc: 40, experience_level: 'Intermediate'}, 
    {id: 10, name: 'Django', experience_perc: 10, experience_level: 'Beginner'}, 
    {id: 10, name: 'Wordpress', experience_perc: 10, experience_level: 'Beginner'}, 
  ]

  const [additionalTechnologies, setAdditionalTechnologies] = useState([
    {id: 1, name: t('english_level')},
    {id: 2, name: t('quick_learning')},
    {id: 3, name: t('RWD')},
  ])

  const [projects, setProjects] = useState([
    {
      id: 1,
      img_url: './images/chalk59_img.png',
      title: t('chalk59_project_title'),
      description: t('chalk59_project_description'), 
      technologies: ['HTML5', 'CSS', 'NodeJS', 'ExpressJS', 'EJS', 'Nodemailer'],
      github_url: 'https://github.com/kosmiadis/chalk59_website', 
      live_demo_url: 'https://chalk59website.up.railway.app'
    },
    {
      id: 2,
      img_url: './images/chalk59_img.png',
      title: t('chalk59_project_title'),
      description: t('chalk59_project_description'), 
      technologies: ['HTML5', 'CSS', 'NodeJS', 'ExpressJS', 'EJS', 'Nodemailer'],
      github_url: 'https://github.com/kosmiadis/chalk59_website', 
      live_demo_url: 'https://chalk59website.up.railway.app'
    },
    {
      id: 3,
      img_url: './images/chalk59_img.png',
      title: t('chalk59_project_title'),
      description: t('chalk59_project_description'), 
      technologies: ['HTML5', 'CSS', 'NodeJS', 'ExpressJS', 'EJS', 'Nodemailer'],
      github_url: 'https://github.com/kosmiadis/chalk59_website', 
      live_demo_url: 'https://chalk59website.up.railway.app'
    }
  ])

  const [storyLine, setStoryLine] = useState([
    {id: 1, year: 2020, description: t('2020_story')},
    {id: 2, year: 2021, description: t('2021_story')},
    {id: 3, year: 2023, description: t('2023_story')},
    {id: 4, year: 2024, description: t('2024_story')},
  ])

  useEffect(() => {
    setProjects([
      {
        id: 1,
        img_url: chalk59_img_url, 
        title: t('chalk59_project_title'), 
        description: t('chalk59_project_description'), 
        technologies: ['HTML5', 'CSS', 'NodeJS', 'ExpressJS', 'EJS', 'Nodemailer'], 
        github_url: 'https://github.com/kosmiadis/chalk59_website', 
        live_demo_url: 'https://chalk59website.up.railway.app'
      },
      {
        id: 2,
        img_url: chalk59_img_url,
        title: t('chalk59_project_title'),
        description: t('chalk59_project_description'), 
        technologies: ['HTML5', 'CSS', 'NodeJS', 'ExpressJS', 'EJS', 'Nodemailer'],
        github_url: 'https://github.com/kosmiadis/chalk59_website', 
        live_demo_url: 'https://chalk59website.up.railway.app'
      },
      {
        id: 3,
        img_url: chalk59_img_url,
        title: t('chalk59_project_title'),
        description: t('chalk59_project_description'), 
        technologies: ['HTML5', 'CSS', 'NodeJS', 'ExpressJS', 'EJS', 'Nodemailer'],
        github_url: 'https://github.com/kosmiadis/chalk59_website', 
        live_demo_url: 'https://chalk59website.up.railway.app'
      }
    ])

    setAdditionalTechnologies([
      {id: 1, name: t('english_level')},
      {id: 2, name: t('quick_learning')},
      {id: 3, name: t('teamwork')},
      {id: 4, name: t('RWD')},
    ])

    setStoryLine([
      {id: 1, year: 2020, description: t('2020_story')},
      {id: 2, year: 2021, description: t('2021_story')},
      {id: 3, year: 2023, description: t('2023_story')},
      {id: 4, year: 2024, description: t('2024_story')},
    ])

    }, [t])

    const handleLanguageChange = (e) => {
      if (e.target.id === 'en') {
        e.target.id = 'gr'
        e.target.children[1].src = greek_flag
        e.target.children[1].classList.remove('usa')
      
      }
      else {
        e.target.id = 'en'
        e.target.children[1].src = usa_flag
        e.target.children[1].classList.add('usa')
      }
      changeLanguage(e.target.id)
    }

  return (
      <div className="App">
        <Navbar t={t} />
        <Home t={t} />
        <Projects t={t} projects={projects}/>
        <Technologies t={t} technologies={technologies} additionalTechnologies={additionalTechnologies}/>
        <About t={t} storyLine={storyLine}/>
        <Footer t={t} changeLanguage={changeLanguage}/>
        <div className="lang_select_wrapper">
            <button id='en' onClick={(e) => handleLanguageChange(e)}><span>{t('language')}</span><img className='usa' src={usa_flag} alt=''/></button>
        </div>
      </div>
  );
}

export default App;
